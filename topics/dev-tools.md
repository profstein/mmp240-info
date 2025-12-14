# CSS in DevTools: A Cross-Browser Guide

This guide explains what you see when inspecting CSS in the browser’s Developer Tools. While the layout of the tools differs slightly, Chrome, Edge, Safari, and Firefox all provide similar features.

---

## 1. Elements / Inspector View
- When you open **DevTools → Elements (Chrome/Edge/Safari)** or **Inspector (Firefox)**, you see:
  - The **HTML structure** (DOM tree).
  - The **CSS Styles pane** on the right for the currently selected element.
- Only CSS rules that **apply to the selected element** (including inherited rules and overridden rules) are shown.

---

## 2. Styles Pane
- Shows all CSS rules that affect the selected element, grouped by source.
- Each rule lists:
  - **Selectors and properties**.
  - The **origin of the rule**: the file name, style block, or inline source.
    - Example: `style.css:25` means it comes from `style.css`, line 25.
- Rules are ordered by the cascade:
  - Inline styles → author stylesheets → inherited styles → user agent styles.
- Overridden rules appear with ~~strikethrough~~ text.

---

## 3. User Agent Style Sheet
- Browsers apply their own default styles if you don’t define them.
- These appear as **“User Agent Style Sheet”** in DevTools.
  - Example: `<h1>` has a default `font-size` even if you didn’t set one.
- Teaching point: resets/normalize CSS exist to override these differences.

---

## 4. Computed Tab
- Shows the **final calculated styles** applied to the element.
- Helpful for:
  - Finding inherited values.
  - Checking which CSS property “won” in the cascade.
- Can expand properties to see which rule provided the value.

---

## 5. Layout / Box Model Tab
- Visual box model showing:
  - **Margin, Border, Padding, Content size**.
- Lets you see:
  - The actual pixel values (even if you used `%`, `em`, `rem`).
  - Which box dimensions are influencing layout.
- In Chrome/Edge/Firefox:
  - The **Layout tab** also previews **Grid and Flexbox outlines** when applied.
- Safari:
  - Shows box model and layout info in the Styles sidebar.

---

## 6. Grid / Flexbox Previews
- When an element uses `display: grid` or `display: flex`:
  - DevTools can **draw outlines on the page** showing rows, columns, and gaps.
  - Chrome/Edge/Firefox: toggle in the **Layout tab**.
  - Safari: shows grid/flex indicators in the Styles sidebar.
- Useful for debugging alignment and spacing issues.

---

## 7. Editing CSS in the Inspector
- You can **click and edit any CSS property or add new ones** directly in DevTools.
- Changes update **live** in the page preview.
- **Important:** Edits do **not** change the actual CSS file on disk.
  - If you reload the page, your changes disappear.
  - To keep edits, copy them back into your source file (e.g., `style.css`).

---

## 8. Viewing Your Changes (Edit History)
- Some browsers let you review **all edits made in the current DevTools session**:
  - **Chrome/Edge:** In the **Sources → Overrides** tab (if enabled), you can save and track changes.  
    Also, under **Changes** (in the 3-dot menu → More tools → Changes) you can see a diff of CSS edits you’ve made.  
  - **Firefox:** Has a **Changes tab** in DevTools that shows a running log of CSS edits (added/removed/modified lines).  
  - **Safari:** Does not have a Changes panel, but edited rules remain highlighted until reload.  
- Teaching tip: Show how students can use this to copy their edits back into their real CSS file instead of losing work.

---

## 9. Cross-Browser Notes
- **Chrome & Edge (Chromium):** Nearly identical DevTools; strong grid/flex debugging tools.  
- **Firefox:** Excellent Grid inspector (with line numbers and area labels). Includes a **Changes tab** for edit tracking.  
- **Safari:** More minimal, but has strong layout and performance tools; no dedicated Changes view.  

---

## Quick Student Tips
- **Hover icons** (⚠️, strikethroughs, dimmed rules) to see warnings and overrides.  
- **Use Computed tab** to confirm what CSS is *actually applied*.  
- **Try toggling properties** (checkboxes next to each CSS rule) to see effects quickly.  
- **Check the Changes tab (Firefox/Chrome/Edge)** to review edits you’ve made in DevTools.  
- **Remember:** DevTools edits are temporary. Always save changes back into your project.  

---