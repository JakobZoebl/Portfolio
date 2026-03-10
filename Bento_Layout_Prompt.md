# Bento Grid Layout Specification & Prompt

## 1. Objective

Transform the existing `Projects.jsx` grid into a responsive, premium "Bento Grid" layout featuring 7 project items.

**Critical Directive:** Maintain the existing visual aesthetic exactly. The dark mode colors, card borders, typography, standard hover effects, clickable card behaviors, and download links must be completely preserved. Only the structural layout, cell dimensions, and scroll animations should be altered.

---

## 2. Desktop Bento Grid Structure

To perfectly recreate the proportions from the reference image, the layout should utilize a **4-column by 6-row CSS Grid** (`grid-cols-4` and `grid-rows-6`).

### Left Column (3 items)

Takes up the first column. Divided into 3 equally sized, smaller blocks.

- **Home Price Predictor**: `col-start-1 col-span-1 row-start-1 row-span-2`
- **Demining Dashboard**: `col-start-1 col-span-1 row-start-3 row-span-2`
- **Hedge Trading Bot**: `col-start-1 col-span-1 row-start-5 row-span-2`

### Middle Section (2 items)

Takes up columns 2 and 3. Divided into a wide top header and a massive bottom block.

- **Steam Data Visualization**: `col-start-2 col-span-2 row-start-1 row-span-2` (Spans 2 columns, taking the wide top-center spot).
- **LLM GP Consultation Summaries**: `col-start-2 col-span-2 row-start-3 row-span-4` (The massive center-bottom section).
  - _Special Requirement:_ Introduce an optional layout mode or a `children`/`previewNode` prop to the `ProjectCard` component. This massive card needs spaces above the text data to display a prominent visual preview (image or styled div) of the PDF paper, exactly as shown in the reference image.

### Right Column (2 items)

Takes up the 4th column. Divided into 2 taller blocks matching the total height of the 6 rows.

- **Surveying Company Homepage**: `col-start-4 col-span-1 row-start-1 row-span-3` (Takes up the top half of the right column).
- **N.E.A.T. Application**: `col-start-4 col-span-1 row-start-4 row-span-3` (Takes up the bottom half of the right column).

---

## 3. Responsive Behavior

- **Mobile (< 768px)**: Fall back to a standard vertical stack (single column flex-direction or `grid-cols-1`). Cards should have appropriate minimum heights, ignoring the row-spans.
- **Tablet (768px - 1024px)**: Convert to a 2-column bento grid to maintain readability and aesthetic balance before expanding to the complex 4-column layout on Desktop.
- **Desktop (> 1024px)**: Apply the complex 4x6 grid described above.

---

## 4. Premium Multi-Directional Scroll Animations

The grid should not just fade in, but "assemble" itself from the edges of the screen with a layered, staggered feel. Elements should appear to "fly over" each other into their final positions.

### Entrance Vectors (Initial States)

To create a dynamic "gathering" effect, assign different entry directions based on the grid position:

- **Left Column (Home, Demining, Hedge)**: Fly in from the **Left** (`translateX: -100px`, `rotate: -5deg`).
- **Top/Center (Steam Data)**: Fly in from the **Left** (`translateX: -100px`, `rotate: -5deg`).
- **Bottom/Center (NLP Paper)**: Fly in from the **Bottom** (`translateY: 150px`, `scale: 0.9`).
- **Right Column (Surveying, NEAT)**: Fly in from the **Right** (`translateX: 100px`, `rotate: 5deg`).

### The "Fly-Over" & 3D Effect

- **Z-Index Layering**: Assign temporary higher `z-index` values to the "moving" elements so they visually pass over the background and each other during the transition.
- **Depth Perception**: Use a slight `perspective` on the parent container. As elements move, apply a subtle 3D rotation that flattens out to `0deg` upon arrival.
- **Exit Logic**: When scrolling out, elements should reverse their entrance vector (e.g., the NLP paper flies further down, the Steam Viz flies back up).

### Animation Specs (Framer Motion / GSAP)

- **Initial**: `opacity: 0`, plus the specific vector (`x/y/rotate/scale`) mentioned above.
- **Animate/Visible**: `opacity: 1`, `x: 0`, `y: 0`, `rotate: 0`, `scale: 1`.
- **Transition**:
  - **Type**: `spring`
  - **Stiffness**: 50 (Low for smooth, heavy feel)
  - **Damping**: 20 (To avoid excessive bouncing)
  - **Mass**: 1.5 (To give the elements a "premium weight")
  - **Stagger**: `0.1s` delay between adjacent blocks to create a "wave" effect.

---

## 5. Development Tasks for Claude

1.  **Modify `ProjectCard` Component**:
    - Update the component to dynamically accept tailwind positioning classes (`className` prop) so grid spans (`col-span-X`, `row-span-X`) can be injected from the parent.
    - Support a "preview" slot/prop to render the large PDF image preview specifically for the NLP paper card.
2.  **Refactor `Projects.jsx` Grid**:
    - Re-architect the `.grid` container to the 4x6 layout using Tailwind CSS Grid standard classes matching the specifications above.
3.  **Implement Animation Wrapper**:
    - Encapsulate the cards in an animation logic wrapper (or modify the existing `.reveal` logic) to perfectly execute the "premium fly-in/fly-out" parameters described in section 4. Ensure hardware acceleration (`will-change: transform, opacity`) is utilized for 60fps smoothness.
