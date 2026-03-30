# Design System Specification: High-End Editorial 3D Generative Interface

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Sculptor"**

This design system moves beyond the standard SaaS "dashboard" look to create a high-end, editorial environment for 3D creation. The goal is to make the user feel like they are working within a physical high-end studio. By utilizing **Space Grotesk’s** technical, geometric quirks alongside **Inter’s** neutral precision, we establish a "Pro-Tool" aesthetic that is both authoritative and approachable.

To break the "template" feel, this system leans into **intentional asymmetry** and **tonal depth**. We eschew rigid grids in favor of layered compositions where elements overlap slightly, mimicking the depth of the 3D icons being generated. The interface should feel like a series of pristine, matte-finished surfaces floating in a well-lit gallery.

---

### 2. Colors & Surface Philosophy
The palette is rooted in our **Signature Blue (#4949FF)**, but its power is derived from the expansive use of neutral whites and soft periwinkles.

*   **Primary (Signature Blue):** Used for "Action Moments"—the final step in a flow or a primary CTA. 
*   **Secondary (Periwinkle):** Used for "Support Moments"—active states of chips or subtle highlights that don't need the intensity of the primary blue.
*   **Neutral (The Surface Tiers):** We utilize the `surface-container` scale to create a hierarchy of focus.

#### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section the UI. Boundaries are defined exclusively through background shifts.
*   **Level 0 (Base):** Use `surface` (#F9F9F9) for the main canvas.
*   **Level 1 (Sections):** Use `surface-container-low` (#F3F3F3) to define sidebars or secondary panels.
*   **Level 2 (Active Focus):** Use `surface-container-lowest` (#FFFFFF) for the most important interactive cards or the main generation viewport.

#### The "Glass & Gradient" Rule
To add "soul" to the professional tool, use **Glassmorphism** for floating inspectors or tooltips. 
*   **Specs:** `surface-container-lowest` at 80% opacity with a `24px` backdrop-blur.
*   **Gradients:** Use a subtle linear gradient from `primary` (#2C25E8) to `primary-container` (#4949FF) at a 135-degree angle for hero buttons to give them a 3D, tactile weight.

---

### 3. Typography
The typographic system is a dialogue between the technical (Space Grotesk) and the functional (Inter).

*   **Display & Headlines (Space Grotesk):** These are our "Editorial Voice." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for landing moments. The geometric nature of Space Grotesk echoes the isometric 3D output of the tool.
*   **Titles & Body (Inter):** These are our "Functional Voice." Inter provides the high-legibility required for complex AI prompt engineering and setting adjustments.
*   **Hierarchy Note:** Always pair a `headline-sm` in Space Grotesk with a `label-md` in Inter (All Caps, 0.05em tracking) to create a sophisticated, "pro-spec" look.

---

### 4. Elevation & Depth
Depth is the core of this system, reflecting the 3D nature of the product.

*   **The Layering Principle:** Instead of shadows, stack surfaces. Place a `#ffffff` card (lowest) on a `#f3f3f3` (low) background. This creates "Soft Lift."
*   **Ambient Shadows:** Use only for elements that truly "float" (e.g., Modals, Tooltips).
    *   **Shadow Token:** `0 12px 40px rgba(26, 28, 28, 0.06)`. Note the tinting: we use a 6% opacity of our `on-surface` color to mimic natural light.
*   **The Ghost Border Fallback:** If a divider is mandatory for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines.

---

### 5. Components

#### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `xl` (0.75rem) roundedness. No border.
*   **Secondary:** `surface-container-highest` background with `on-surface` text.
*   **Tertiary:** Transparent background, `primary` text, ghost border (15% opacity) on hover only.

#### Input Fields (The Prompt Bar)
*   **Style:** `surface-container-lowest` background, `xl` roundedness. 
*   **Focus State:** Do not use a high-contrast border. Instead, use a 2px outer glow of `secondary-container` (#CACAFD) to signify the "active workspace."

#### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Execution:** Use `spacing-8` (2rem) of vertical whitespace to separate list items. For cards, use a subtle background shift on hover (`surface-container-high`) rather than a shadow "pop."

#### AI Progress Component (Unique to Audora)
*   A "Scanning" glass element that moves over the `surface-container-lowest` generation area. Use a linear gradient of `primary` at 10% opacity with a heavy blur to simulate a 3D light pass.

---

### 6. Do’s and Don’ts

#### Do:
*   **Do** use asymmetrical margins (e.g., 6rem on the left, 4rem on the right) for hero layouts to feel like a high-end magazine.
*   **Do** use `secondary_fixed` (#E1E0FF) for background accents behind 3D icons to make the blue tones "pop."
*   **Do** lean into `surface_bright` for primary workspace areas to reduce eye strain.

#### Don’t:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#1A1C1C) to maintain the soft-minimalist aesthetic.
*   **Don't** use `DEFAULT` roundedness (0.25rem) for large containers. Reserve it for small UI primitives like checkboxes. Large containers must use `xl` (0.75rem).
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light in a photo studio, it's too heavy.