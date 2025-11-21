# Design Guidelines: 國中生個人部落格

## Design Approach
**Reference-Based Approach** inspired by Instagram's visual storytelling + Notion's content organization + Behance's portfolio layouts, adapted for a gentle, student-friendly aesthetic.

**Core Design Principle**: Create a warm, approachable space that feels personal and inviting—like a digital journal shared with friends.

---

## Layout & Structure

### Homepage Sections (in order):
1. **Hero Section**: Large personal photo with name overlay, brief tagline (60-70vh height)
2. **Self-Introduction Card**: Featured section with longer bio and personality highlights
3. **Recent Diary Entries**: 3-column grid preview of latest posts
4. **Video Showcase**: 2-column grid of embedded videos with thumbnails
5. **Portfolio Gallery**: Masonry-style grid showcasing creative work
6. **Footer**: Simple navigation and contact info

### Spacing System
Use Tailwind units: **4, 6, 8, 12, 16** for consistent rhythm
- Section padding: `py-16` desktop, `py-12` mobile
- Card spacing: `gap-6` or `gap-8`
- Container: `max-w-6xl mx-auto px-4`

---

## Typography Hierarchy

**Primary Font**: DM Sans (Google Fonts) - friendly, readable
**Accent Font**: Poppins - for headings

- Hero Name: `text-5xl lg:text-7xl font-bold tracking-tight`
- Section Headings: `text-3xl lg:text-4xl font-semibold`
- Card Titles: `text-xl font-medium`
- Body Text: `text-base leading-relaxed`
- Captions: `text-sm text-gray-600`

---

## Component Library

### Cards (Soft & Rounded)
- Border radius: `rounded-2xl` for all cards
- Shadow: `shadow-lg hover:shadow-xl` transition
- Padding: `p-6` or `p-8`
- Background: White cards on subtle background

### Diary Entry Cards
- Thumbnail image at top (16:9 ratio, `rounded-xl`)
- Date badge in top-right corner
- Title + excerpt preview
- "Read More" link at bottom
- 3-column grid on desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)

### Video Cards
- YouTube/video embed with `rounded-xl` wrapper
- Title below video
- 2-column grid (`grid-cols-1 lg:grid-cols-2`)
- Consistent aspect ratio: 16:9

### Portfolio/Work Cards
- Masonry grid layout (varying heights)
- Image with overlay on hover showing title
- Tags/categories displayed
- Click to expand/view details

### Navigation
- Sticky top navigation with soft shadow
- Logo/name on left, menu links on right
- Smooth scroll behavior between sections
- Mobile: Hamburger menu with slide-in drawer

### Buttons
- Primary: Rounded full (`rounded-full`), medium padding (`px-6 py-3`)
- Soft shadows and gentle hover lift effect
- On images: Backdrop blur (`backdrop-blur-md bg-white/80`)

---

## Images

### Hero Image
- **Large hero image**: Full-width personal photo (portrait or candid style)
- Gradient overlay from bottom for text readability
- Name and tagline centered over image with backdrop blur button if CTA needed

### Section Images
- **Self-Introduction**: Circular profile photo (200-300px diameter)
- **Diary Thumbnails**: Featured images for each post, 16:9 ratio
- **Portfolio Gallery**: Work samples, screenshots, creative projects (mixed aspect ratios)
- All images: Soft rounded corners (`rounded-xl` or `rounded-2xl`)

---

## Layout Patterns

### Multi-Column Usage
- Diary grid: 3 columns desktop, 2 tablet, 1 mobile
- Video section: 2 columns desktop, 1 mobile
- Portfolio: Masonry 3 columns desktop, 2 tablet, 1 mobile
- Never use multi-column for intro text or hero content

### Vertical Rhythm
- Consistent section spacing: `space-y-16` between major sections
- Card grids: `gap-6` or `gap-8`
- Text blocks: `space-y-4`

---

## Special Features

**Diary Section Detail View**:
- Full-width featured image
- Reading width content (`max-w-3xl mx-auto`)
- Date and category tags
- Formatted text with generous line height

**Video Embed**:
- Responsive iframe wrapper maintaining 16:9 ratio
- Placeholder thumbnails with play icon overlay before load

**Portfolio Lightbox**:
- Click to expand work samples in modal/overlay
- Navigation between items
- Close button with backdrop

---

## Accessibility
- Semantic HTML throughout
- Alt text for all images
- Sufficient color contrast
- Focus states on all interactive elements
- Keyboard navigation support

---

## Icon Library
**Font Awesome** (via CDN) for:
- Social media icons
- Navigation icons
- Category/tag icons
- Calendar icons for dates