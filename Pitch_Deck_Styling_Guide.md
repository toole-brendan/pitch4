# Slide Deck Styling Guide

## Typography

### Page Titles
- **Main Page Titles** (used in `<Slide title="...">` component):
  - Style: Regular case (not all caps)
  - Font: System font (font-sans)
  - Size: `text-2xl md:text-3xl`
  - Weight: `font-bold`
  - Margin: `mb-8`
  - Format: Title Case for Primary Words
  - Examples:
    - "Shell Token (SHL) Economics"
    - "Defense Application"
    - "Commercial Solution"
  - **Do Not Use**: 
    - ALL CAPS
    - Trailing underscores (_)
    - Extra punctuation

### Font Families
- **Monospace** (`font-mono`): Used sparingly for:
  - Section headers/labels
  - Technical indicators
  - Navigation items
  - Status markers
- **Sans-serif** (`font-sans`): Used for:
  - Body text
  - Descriptions
  - Feature lists
  - Card content

### Text Sizes
- Section Headers: `text-sm font-mono uppercase tracking-[0.2em]`
- Card Titles: `text-base font-semibold tracking-wide`
- Body Text: `text-sm` or `text-xs` for dense information
- Technical Labels: `text-xs font-mono`

## Color Palette

### Base Colors
- Background: `bg-white`
- Text: 
  - Primary: `text-gray-900`
  - Secondary: `text-gray-600`
  - Tertiary: `text-gray-400`

### Accent Colors
- Defense Theme:
  - Primary: `text-blue-600`
  - Background: `bg-blue-50`
  - Border: `border-blue-200`
  - Hover: `border-blue-400`
  - Icons: `text-blue-700`

- Commercial Theme:
  - Primary: `text-orange-600`
  - Background: `bg-orange-50`
  - Border: `border-orange-200`
  - Hover: `border-orange-400`
  - Icons: `text-orange-700`

- Shared/Neutral Theme:
  - Background: `bg-gray-50`
  - Border: `border-gray-200`
  - Text: `text-gray-600`

## Layout

### Spacing
- Component Gaps: `gap-6` (24px) or `gap-8` (32px)
- Section Margins: `mb-8` (mobile) to `mb-16` (desktop)
- Internal Padding: `p-6` (cards and containers)
- List Item Spacing: `space-y-3` or `space-y-4`

### Containers
- Maximum Widths:
  - Mobile: `max-w-sm` (24rem)
  - Desktop: `max-w-lg` (32rem)
- Layout Grid: `grid grid-cols-1 md:grid-cols-2`
- Flex Layouts: `flex flex-col md:flex-row`

## Components

### Cards
```html
<div class="bg-white border border-[color]-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-[color]-400">
  <!-- Card content -->
</div>
```

### Section Headers
```html
<div class="flex items-center mb-6">
  <span class="bg-[color]-50 text-[color]-800 text-xs tracking-widest font-mono uppercase py-1.5 px-3 border border-[color]-200">
    SECTION TITLE
  </span>
</div>
```

### Feature Items
```html
<div class="flex items-center gap-2">
  <div class="w-2 h-2 bg-[color]-400 rounded-full"></div>
  <p class="text-sm font-sans text-gray-600">Feature text</p>
</div>
```

## Animations

### Motion Variants
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};
```

### Usage
- Stagger children elements: Use `containerVariants`
- Fade-in-up effect: Use `itemVariants`
- Hover transitions: Use `transition-all duration-300`
- Pulse effects: Use Framer Motion's `animate` prop with scale

## Responsive Design

### Breakpoints
- Mobile First: Default styles for mobile
- Tablet/Desktop: Use `md:` prefix (768px and up)

### Mobile Adaptations
- Stack elements vertically: `flex-col md:flex-row`
- Adjust spacing: `gap-6 md:gap-12`
- Modify text sizes: `text-sm md:text-base`
- Adjust widths: `w-full md:w-64`

### Connection Lines
- Mobile: Vertical lines with `h-6 w-px bg-gray-200`
- Desktop: Horizontal lines or SVG paths

## Best Practices

1. Always use semantic HTML elements
2. Maintain consistent spacing patterns
3. Use Tailwind's color palette for consistency
4. Implement responsive design patterns
5. Keep animations subtle and purposeful
6. Use monospace font sparingly for emphasis
7. Maintain clear visual hierarchy
8. Ensure text remains readable at all sizes

## Implementation Example

```tsx
<motion.div
  variants={cardVariants}
  className="bg-white border border-blue-200 p-6"
>
  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 mb-4">
    SECTION TITLE_
  </h3>
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      <p className="text-sm font-sans text-gray-600">
        Feature description
      </p>
    </div>
  </div>
</motion.div>