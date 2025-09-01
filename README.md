# DataVinci Assignment

## **Project Overview**
This project is a **frontend assignment** for DataVinci, focusing on:

- Implementing a **responsive layout** for Desktop and Mobile based on a Figma design.
- Fixing a **nested checkbox component** with proper “Select All”, parent, and child checkbox logic.
- Demonstrating the solution through a **Loom video walkthrough**.

---

## **Tasks Implemented**

### **Task 1: Responsive Layout Implementation**
- Implemented the Figma design for **desktop (>1024px)** and **mobile (<768px)** views.
- Features:
  - Mobile-first responsive approach.
  - Navigation bar that collapses into a hamburger menu on mobile.
  - Content sections that adjust from multi-column (desktop) to single-column (mobile).
  - Buttons, inputs, and text designed for accessibility (font size, contrast, keyboard navigation).
- **Figma Reference:** [Click here](https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0)

### **Task 2: Nested Checkbox Component**
- Fixed the logic for nested checkboxes:
  - **Select All** checkbox selects/deselects all categories and items.
  - **Parent categories** (Fruits, Vegetables) select/deselect all their children.
  - **Child items** update the parent’s state: checked, unchecked, or indeterminate.
- Implementation:
  - Used a **tree-like data structure**.
  - State propagates **downward** (parent → children) and **upward** (children → parent).
- **Testing Scenarios:**
  - Select “Select All” → all checkboxes checked.
  - Deselect “Select All” → all checkboxes unchecked.
  - Select “Fruits” → all fruits selected; “Vegetables” unchanged.
  - Partial selection → parent shows **indeterminate** state.

---

## **Tech Stack**
- **Frontend:** ReactJS  
- **Styling:** CSS, Flexbox, CSS Grid  
- **Tools:** VS Code, Chrome DevTools  
- **Design Reference:** Figma

