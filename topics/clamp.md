# Fluid Font Scaling with clamp()

Traditionally, web designers used media queries to change font sizes at different screen widths. For example, you might set smaller text on phones and larger text on desktops. This works, but it creates sudden “jumps” in size and requires writing media queries for each change.

Modern CSS provides the clamp() function, which lets font sizes grow fluidly with the viewport while still respecting minimum and maximum limits. Clamp function takes three values, separated by commas:

1. **Minimum**: ensures text never gets too small to read.
1. **Preferred** (fluid): ties the size to the viewport width, so it grows smoothly as the screen gets wider.
1. **Maximum**: prevents text from becoming too large on very wide screens.

Example:

```css
html {
  font-size: clamp(1rem, .4vw + .88rem, 1.25rem);
}
```
This means:

- The font size will never go below 1rem (16px).
- It will grow gradually with the viewport (.4vw + .88em).
- It will stop growing once it reaches 1.25rem (20px).

This approach gives consistent readability across devices without multiple breakpoints.

![chart with font-size on y and viewport on x axis. At 400px viewport the font size is 16 then steadily increases until font-size hits 20px just before 1400px viewport and then stays at 20](/images/clamp.png))

## Using it with CSS Variables

We us CSS variables to set our font sizes. This means we can quickly and easily create fluid scaling by using clamp for our base font size:

```css
 --base-font-size: clamp(1rem, 0.4vw + .88rem, 1.25rem);
```

You can adjust the min (1rem) and max (1.25rem) values to fit your design.

### Why do we only need to use `clamp()` for the base font size?

Because all other font sizes are defined in `rem`, they are calculated relative to the base (root) font size. When the base font size changes, everything that uses `rem` scales automatically.

By applying `clamp()` only to the base font size, we create a single fluid “dial” that controls the entire type system. Headings, paragraphs, and UI text all scale together without needing separate `clamp()` formulas.

**In short:**  
> One fluid base size + `rem` everywhere else = consistent, scalable typography with less code.

## Other Info

### Why use `rem` instead of `px` for fluid font sizes?

Some users increase their browser’s **default base font size** to make text easier to read.  
This is a common and important **accessibility setting**.

- **`rem` respects the user’s default font size**
- **`px` ignores it**

When minimum and maximum font sizes are set in `px`, the text is locked into a fixed range—even if the user has explicitly asked for larger text. Using `rem` allows the entire typography system to scale along with the user’s preference.

### Best practice for this course
Use `rem` for minimum and maximum values in fluid typography so your design adapts to both screen size **and** user accessibility settings.

**Takeaway:**  
> Using `rem` supports user choice and accessibility; using `px` limits it.

```css
::root {
   --base-font-size: clamp(1rem, 0.4vw + .875rem, 1.5rem);
}

html{
    font-size: var(--base-font-size);
}
```
Note that there will be more than just base font size set in your CSS Variables

### Pixel to `rem` Font Size Reference (Base = 16px)

You don't have to use 16px and 20px as your min and max.The table below shows pixel values in rems. use these rems to adjust the min and max as you see fit. This table assumes the browser default base font size is **16px**. I don't recommend going much below 16px for your min font size value.

| Pixels (px) | rem |
|------------:|-----|
| 16px | 1rem |
| 17px | 1.0625rem |
| 18px | 1.125rem |
| 19px | 1.1875rem |
| 20px | 1.25rem |
| 21px | 1.3125rem |
| 22px | 1.375rem |
| 23px | 1.4375rem |
| 24px | 1.5rem |
| 25px | 1.5625rem |
| 26px | 1.625rem |

**Note:**  
If a user increases their browser’s default font size, `rem` values scale automatically—this is why `rem` is preferred for accessible typography.

