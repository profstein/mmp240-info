# Position

::::: {#intro}
## Mastering Positioning: Sticky, Fixed, & Absolute

This tutorial covers how to control an element's position using CSS `position` properties. There are three commonly used position values:

1. position: sticky;
1. position: fixed;
1. position: absolute;

FYI, `position: relative;` is the default position value. If you want to remove one of the above, set it to this.
::::: 

### Sticky Positioning: Stay in Place

`position: sticky` allows an element to scroll normally until it reaches a position and they stay "stick" in that position (like `position: fixed`).  Importantly, the element *must* be able to scroll out of its initial position for `sticky` to work.

**Example:**

![animated gif showing a screen scrolling and the headings staying in place once they get to the top of the screen](/images/position-sticy-fixed.gif)

#### Code Example:

When using `position: sticky` the two main things you have to do are 1)tell it to be sticky, 2) tell it where to stick. NOTE that if the item you want to be sticky, can't reach the  place you want it to stick through normal scrolling, then this won't work. Often you have to set a background color as well.

```css
.sticky-header {
  position: sticky; /* This tells it to be sticky */
  top: 0; /* This tells it where to stick (top of the viewport) */
  background-color: white; /* Important: prevents transparency */
}
```

```html
<section>
    <h2 class="sticky-header">This is a sticky header</h2>
    <div style="height: 1000px;">Content longer than screen height</div>
</section>
```

#### **Use Cases:** 
This is good for headings, navigation bars, or callouts that should remain visible while scrolling.


### Fixed Positioning: Locked in Place

`position: fixed` removes an element from the normal document flow and fixes its position relative to the viewport.

**Example:**

![screenshot of mobile view of the same page as above. 3 nav links are at the bottom of the page with annotations showing that position:fixed moved it.](/images/position-fixed.png)

#### Code Example

```css
.nav ul{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: lightblue;
}
@media (min-width:700px){
  .nav ul{
    position: relative;
    bottom: auto;
    left: auto;
    width: auto;
  }
}
```

```html
<header>
  <nav>
    <div class="site-title">Site Title</div>
    <ul>
      <li><a href="#">Nav 1</a></li>
      <li><a href="#">Nav 2</a></li>
      <li><a href="#">Nav 3</a></li>
    </ul>
  </nav>
</header>
```

#### Use Case:  

Useful for persistent navigation bars, footers, or other UI elements that should always be in one fixed location where scrolling will not affect their position.

If you want your nav bar to be on the bottom for mobile but on the top for desktop you could use media queries to do this. In the example below, just the UL for the nav items is moved, leaving the site title at the top.


### Staggered Positioning: Multiple Elements

You can combine `sticky` and `fixed` with different offsets to create layered effects.

```css
.sticky-top {
  position: sticky;
  top: 0;
  background-color: white;
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  background-color: white;
}
```

```html
<div class="sticky-top">Sticky Top</div>
<div style="height: 500px;">Content</div>
<div class="sticky-bottom">Sticky Bottom</div>
<div style="height: 500px;">Content</div>
```

### Absolute Positioning: Context is Key

`position: absolute` positions an element relative to its *nearest positioned ancestor* (an ancestor with `position: relative`, `position: absolute`, or `position: fixed`). If no such ancestor exists, it's positioned relative to the `<html>` element.  Often used within layout containers.

**Example:**
### Example: Absolutely Positioned Figcaption Inside a Card

```css
.card {
  position: relative;           /* Creates positioning context for elements inside the card */
  width: 220px;
  border: 1px solid #333;
  padding: 1rem;
  font-family: sans-serif;
}

.card figure {
  position: relative;           /* Establishes a new positioning context for the figcaption */
  margin: 0;                    /* Removes default figure margin */
}

/* ===== Figcaption Styling (Annotated Line-by-Line) ===== */

.card figcaption {
  position: absolute;           /* Allows caption to overlay the image */
  bottom: 0;                    /* Places caption at the bottom edge of the figure */
  left: 0;                      /* Aligns caption to the left edge of the figure */
  width: 100%;                  /* Caption spans full width of the figure */

  padding: 0.25rem 0.5rem;      /* Adds inner spacing for readability */

  background-color: rgba(0,0,0,0.6); /* Semi-transparent dark background for contrast */
  color: white;                 /* Ensures text is readable over the image */
  font-size: 0.8rem;            /* Slightly smaller text typical for captions */
}
```

```html
<div class="card">
  <figure class="card-image">
    <img src="https://picsum.photos/id/1025/400/300" alt="placeholder image">
    <figcaption>Photo by Lorem Ipsum Photographer</figcaption>
  </figure>
  <div class="card-description">
    <h2 class="card-title">Card Title</h2>
    <p>
      This example demonstrates how <code>position: absolute;</code> 
      enables placing a caption directly on top of an image.
    </p>
  </div>
</div>
```

### Fixed vs Absolute Positioning

`position: fixed` and `position: absolute` are similar because they both remove an element from the normal document flow. The big difference is what they are pinned to and how they behave when the page scrolls.

- `position: fixed` is pinned to the viewport (the browser window). The element stays in the same place on the screen even when you scroll.
- `position: absolute` is pinned to the nearest positioned ancestor (a parent with `position: relative`, `absolute`, or `fixed`). If there isn’t one, it is positioned relative to the whole page and will scroll away with the content.

When to use each

- Use `fixed` when you want something to always stay on screen:
    - A navigation bar that stays at the top or bottom as you scroll.
    - A “Back to Top” button that floats in the corner.
    - A persistent help/chat button.
- Use `absolute` when you want something inside a section or card:
    - A label or badge in the corner of a card (like “New” or “Sale”).
    - Text or a caption over the bottom of an image.
    - An icon inside a form input (like a search icon inside a search field).

#### Common gotchas

- If you use `absolute` and don’t give a parent `position: relative`, the element may jump to a strange place (often the top-left of the page) because it’s using the whole page as its reference.
- `fixed` elements can cover up content underneath. Often you need extra margin on elements so the content doesn’t hide under a fixed header or footer.
- Both `fixed` and `absolute` elements don’t take up space in the normal layout, so nearby content won’t “move out of the way” automatically. Also they will not be part of the Grid or Flex layouts so you may have to adjust page layout accordingly.


A quick way to understand the difference is to experiment: take one element in a simple page and toggle between `position: fixed` and `position: absolute` to see how it behaves when you scroll and how it relates to its parent elements.


### Overall Important Considerations:

*   **Background Color:**  Always set a `background-color` for elements with `sticky` or `fixed` positioning to prevent them from appearing transparent.
*   **Scrollable Content:**  `sticky` positioning requires sufficient scrollable content to trigger the "sticking" effect.
*   **Experiment:**  The best way to understand these properties is to experiment with different values and scenarios.

*   **Layout adjustments:** Because `fixed` (and sometimes `absolute`) remove elements from the normal flow, you may need to add extra padding, margins, or a wrapper element so the rest of your content isn’t covered or shifted unexpectedly and plan for this when creating overall page layout.