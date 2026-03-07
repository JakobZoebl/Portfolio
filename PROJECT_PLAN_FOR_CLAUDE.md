# Project Description: Premium Portfolio Integration & Animation

## 🎯 Objective

Create a **state-of-the-art single-page portfolio** by surgically combining components from three separate HTML files. The final result must feel premium, cohesive, and feature a "wow factor" through an enhanced hero animation. It should be vibrant, stunning, impressive and unique.

---

## 🏗️ Technical Architecture

You are tasked with merging the following source materials:

1.  **The Structure (`layout.html`)**: This is the foundation. Use its overall document structure, navigation menu, footer, and basic styling. It defines the "bones" of the site.
2.  **The Projects (`projects.html`)**: Extract **only** the projects section from this file. Discard all other elements like hero sections or footers present here and use it to replace the projects section in the structure.
3.  **The Masterpiece (`hero.html`)**: This is the most critical component. Replace the default hero in `layout.html` with the hero section and animation logic from this file. **This is the primary focus for refinement.**
4.  **The static hero (`hero_background_after_animation.html`)**: This is a static version of the hero section. use this version for the background of the hero section once the animation is done to move the nodes accoding to the mouse and span edges properly.

## **The entire Hero section is the primary focus for refinement.**

## ✨ Design & Animation Requirements

### 1. Unified Design System

- **Colors**: Establish a cohesive, dark-themed (or glassmorphic) palette based on the primary colors found in of the technical university of munich. (blue #0065bd)
- **Typography**: Use high-end modern font 'Inter'. Ensure consistent scale and weight.
- **Polish**: Add subtle micro-interactions to all buttons, links, and project cards that give a premium feel and not generic.

### 2. The Hero Refinement (CRITICAL)

The existing animation in `hero.html` needs to be elevated from "good" to "impressive":

- **Interactivity**: The background animation should react to mouse movement (parallax or repulsion/attraction). The individual nodes should react to the mouse and draw lines between the cursor and close nodes.
- **Smoothness**: Use `requestAnimationFrame` for logic and ensure GPU-accelerated CSS properties (`transform`, `opacity`).
- **Visuals**: Incorporate smooth gradients, noise textures, or mesh-gradient effects to give the animation a premium, non-generic look.
- **Entry Animation**: Implement a "reveal" sequence for the hero text and the animation itself upon page load. Use a queue for the text elements to animate them in one by one with a delay between each element as they fly into the screen from below.

### 3. Transitions & Flow

- **Smooth Scroll**: Implement smooth scrolling (consider using a lightweight library like `Lenis` or pure CSS `scroll-behavior: smooth` if performance holds).
- **Reveal on Scroll**: Projects, academic work, and contact information should animate in as they enter the viewport using Intersection Observer.
- **Preview**: some projects are website that are live hosted. make sure the images are actual previews of the websites based on links i will later manually enter

---

## 🛠️ Implementation Steps for Claude

1.  **Analyze & Parse**: Read `layout.html`, `projects.html`, and `hero.html`. Identify the core IDs and Classes.
2.  **Foundation**: Initialize a new `index.html` (or overwrite the target) using the `layout.html` structure.
3.  **Hero Injection**:
    - Strip the existing hero from the main layout.
    - Insert the `hero.html` content and its associated styles/scripts.
    - Integrate the scripts so they don't conflict with the layout.
4.  **Project Injection**:
    - Locate the `projects` container in `projects.html`.
    - Insert it into the main layout after the hero section.
5.  **Refine & Polish**:
    - Standardize CSS variables for colors, fonts, and spacing.
    - Upgrade the `hero.html` animation with interaction and high-end visuals.
    - Optimize for mobile (the hero animation must be responsive or elegantly degraded).
6.  **Quality Check**: Ensure no broken links, consistent hover states, and minimum 60fps performance on the animation.

---

## 🚀 Final Goal

The user should feel they are looking at a **bespoke, high-performance digital experience**, not a template. The transition from the hero animation into the project section should be seamless.
