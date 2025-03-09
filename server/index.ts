import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use dynamic port finding, starting with preferred port
  const preferredPort = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  
  // Try to start the server on the preferred port
  try {
    server.listen({
      port: preferredPort,
      host: 'localhost', // Changed from 0.0.0.0 to localhost
    }, () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : preferredPort;
      log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server on preferred port, trying alternative port');
    
    // If the preferred port fails, let the OS assign a port
    server.listen({
      port: 0, // Let the OS assign a port
      host: 'localhost',
    }, () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : 0;
      log(`Server running at http://localhost:${port}`);
    });
  }
})();
