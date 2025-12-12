# Using AI to Check Your Project 4 Site

Learning always involves some friction. Figuring out why something feels hard, and working through that difficulty (productive struggle), is a key part of learning. If you let AI remove all of the friction for you, you will also remove many of the moments when your brain actually changes.  

The prompts on this page are designed to make AI a partner in this process, not a replacement for you. Don’t write prompts that tell AI to build your whole project. When you do ask AI to write or change code, ask it to include comments and to explain what it did, and then edit and adapt that code yourself.

In this project you will use AI as a helper to review your own work.  
The AI will not write your code. It will help you spot problems and compare your site to the rubric.

On this page you will find three prompts:

1. **Readiness Prompt** – a prompt to make sure you have the basics in place before you go further. Finish Week 15 before doing this.
1. **Quick Check Prompt** – a short prompt to catch syntax, RWD, JS, and accessibility issues. You can use this at any point in the process.
1. **Detailed Self-Assessment Prompt (full rubric check)** – for use when your site is mostly built.  

You are still responsible for your decisions and your code. The AI is there to point you at issues, not to replace your work.

---

## When to Use Each Prompt

### Readiness Prompt (Basics Check)

Use this first, once you have:

- Your main pages created and linked.
- A basic layout in place.
- Some real content on at least one page.



## Readiness Prompt (Basics Check)

This prompt is for an early check on your Project 4 site. Use it once you have your basic structure in place.
Running this will help you see if you are missing any basic pieces (pages, links, structure) before you build more. It doesn't know your site map so it won't be able to know if you are missing pages that aren't part of the main navigation.

It focuses on:

- Having your HTML pages created.
- Base semantic structure on each page (`header`, `main`, `footer`).
- Working navigation between pages.
- Project folders set up (`css`, `js/vendor`, optional `images`).
- Base CSS file (`css/base.css`) and jQuery included.

Run this before you spend a lot of time on layout and design details.

---

### How to Use the Readiness Prompt in VS Code

1. Open your **Project 4 folder** in VS Code.  
2. Confirm these are in your workspace:
   - Your HTML pages (for example, `index.html`, `about.html`, etc.).
   - Your `css` folder and CSS files.
   - Your `js` folder with a `vendor` subfolder and a jQuery file.
   - (Optional but recommended) an `images` folder if you plan to use images.
3. Open the **Copilot Chat** panel.
4. Choose a general “chat + code” model (the default Copilot Chat model is fine).
5. Copy and paste the prompt below into Copilot Chat and run it.

---

## Readiness Prompt – Copy/Paste into Copilot Chat

```text
You are an AI assistant helping a college student do a **quick readiness check** on their Project 4: Showcase Site.

This is an early structural check, not a full rubric review.

Important rules:
- DO NOT write or change any code for me.
- DO NOT give me new HTML, CSS, or JS to paste in.
- You MAY name specific files, folders, elements, or selectors so I know where to look.
- Use only the files in this workspace to answer.

Your job is to check whether my project is set up with the basic structure we need before I continue building. Focus on the items below.

---

### Checks to Perform

1. HTML Pages in Place
   - Find all `.html` files in the project.
   - List their names (for example: `index.html`, `about.html`, `gallery.html`, etc.).
   - Tell me:
     - Whether I have at least a home page (`index.html`).
     - Whether I have additional pages beyond `index.html`.
   - If you only see `index.html`, mark this as **Needs Attention** and say I still need to create stub pages for the other pages in my sitemap.

2. Base Semantic Structure on Each Page
   - For each HTML page you find, check whether it has **one** `header`, one `main`, and one `footer` element at the top level of the page (not nested inside each other).
   - For each page, tell me if the `header | main | footer` pattern is:
     - **Present and in a reasonable order**, or
     - **Missing or incomplete**.
   - Point to any specific page where this basic structure is not in place.

3. Working Navigation Between Pages
   - Look at the navigation in the `header` (for example, a `nav` element with links).
   - Check that:
     - There are links (`<a>` elements) that point to each of the main HTML pages (for example, `href="about.html"`).
     - Each link’s `href` points to an actual `.html` file that exists in the project.
   - Report:
     - Which pages are linked from the navigation.
     - Whether any existing HTML page is missing from the nav.
     - Whether any link points to a file that does not exist.
   - If you notice obvious typos in the file names in `href` vs actual file names, mark navigation as **Needs Attention**.

4. CSS Folder and Base CSS
   - Check that there is a `css` folder.
   - Inside `css`, check whether there is a file named `base.css`.
   - Tell me:
     - Whether `css/base.css` exists.
     - Whether my HTML pages are linking to `css/base.css` with a `<link>` tag in the `<head>`.
   - If `css/base.css` is missing, or the HTML is not linking to it, mark this as **Needs Attention** and explain which page(s) need the link.

5. JS Folder and jQuery Vendor File
   - Check that there is a `js` folder.
   - Inside `js`, check for a `vendor` folder.
   - Inside `js/vendor`, check whether there is a jQuery file (for example: `jquery.min.js`, `jquery-3.x.x.min.js`, etc.).
   - Then, look in my HTML pages to see whether jQuery is being included with a `<script>` tag that points to that `js/vendor/...` path.
   - Report:
     - Whether the `js` folder exists.
     - Whether `js/vendor` exists.
     - Whether a jQuery file exists inside `js/vendor`.
     - Whether at least one HTML page includes that jQuery file with a `<script>` tag.
   - If any of these are missing, mark this check as **Needs Attention** and tell me exactly what is missing.

6. Optional Images Folder
   - Check whether there is an `images` or `img` folder in the project.
   - This is **optional**, not required at this stage.
   - If it exists, just note that it is in place.
   - If it does not exist yet, say that this is okay for now but I will likely need a folder for images later.

---

### Output Format

For each check above, respond in this structure:

- **Check:** (for example, "HTML Pages in Place")
- **Status:** Ready / Needs Attention / Missing
- **Evidence:** List the relevant files, folders, or elements you found (or did not find).
- **Suggestions:** In simple words, tell me what I still need to create or fix. Do NOT give exact code; instead, say things like "create additional HTML pages for the rest of your sitemap" or "add a link tag to base.css in the head of each page."

At the end, give me a short summary that answers:

1. Is my project **structurally ready** to move forward (Yes / Almost / Not Yet)?  
2. What are the top 3 things I should fix next before I continue building?





### Quick Check Prompt

Use this any time during the build, especially:

- After a big layout change.
- After updating media or alt text.
- After adding or changing JavaScript.

It is a short “lint-style” check focused on syntax, responsive layout, JavaScript behavior, and accessibility.

### Detailed Self-Assessment Prompt (Full Rubric)

Use this when your site is close to done:

- Most content is in place.
- Layout and media are mostly working.
- Your non-navigation interactive element is built.

Run this at least once before you submit the final project. It will walk through the main parts of the rubric and suggest where you still need work.




----------------------------------------------------------------
## Quick Check Prompt

Use this any time during the build, especially:

- After a big layout change.
- After updating media or alt text.
- After adding or changing JavaScript.

It is a short “lint-style” check focused on syntax, responsive layout, JavaScript behavior, and accessibility.

### How to Use the Quick Check Prompt in VS Code

1. Open your **Project 4 folder** in VS Code.  
2. Make sure your HTML, CSS, and JS files are in the workspace.  
3. Open the **Copilot Chat** panel.  
4. Choose a model:
   - A fast, code-focused model like **Raptor mini** is a good fit for this quick check if it is available.
5. Copy and paste the prompt below into Copilot Chat and run it.

---

## Quick Check Prompt – Copy/Paste into Copilot Chat

```text
You are an AI assistant doing a **quick lint-style check** on my Project 4 website.

This is NOT a full rubric review. Focus on catching obvious problems and high-impact issues.

Important rules:
- DO NOT write or change any code for me.
- DO NOT give me full HTML/CSS/JS snippets to paste in.
- You MAY reference specific files, selectors, or elements so I know where to look.
- Use only the files in this workspace to answer.

Check the following areas. Be concise and focus on the biggest problems:

1. HTML Validity
   - Scan my HTML files for clear syntax errors or invalid structure (unclosed tags, incorrect nesting, duplicated IDs, etc.).
   - For each major issue, name the file and element (for example: `about.html`, `<section>` near the testimonials area).
   - Do not list every tiny issue. Focus on things that could break layout, accessibility, or behavior.

2. HTML Semantics
   - Check whether I’m using appropriate semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`, and headings (`h1`–`h6`) in a logical order.
   - Point out where I am:
     - Overusing `div` where a semantic element would be better, or
     - Misusing headings (for example, skipping from `h1` to `h4` with no clear reason).
   - Give a few targeted examples instead of trying to cover everything.

3. CSS Validity and Efficiency
   - Look for obvious CSS syntax errors (missing braces, typos in property names, etc.).
   - Note any very repetitive rules that could be simplified (for example, the same declarations repeated for many selectors).
   - Call out overly broad selectors that might cause unintended styling (for example, styling all `p` tags in a way that hurts readability).

4. CSS Variables (Custom Properties)
   - Check how I use CSS variables (custom properties), especially for colors and typography.
   - Tell me:
     - Whether variables appear to be defined in a central place (like `:root` or a base stylesheet such as `base.css`).
     - Whether I am actually using those variables in my rules, or if I am hard-coding lots of duplicate color values instead.
   - Suggest, in words, where variables could be used more consistently to reduce repetition.

5. Navigation: Links and Responsiveness
   - Check that navigation links in the header actually point to real HTML files in the project.
   - Note any links that go to non-existent files or have obvious typos in the `href`.
   - Based on the HTML and CSS, check whether there is a mobile-friendly version of the navigation (for example, stacked links or a menu pattern at small widths).
   - Tell me if the nav appears usable at both mobile and desktop sizes, or if there are clear problems (like links overlapping, or nav going off-screen).

6. Consistency: Header and Footer
   - Compare the header and footer across all HTML pages.
   - Tell me whether they are:
     - Mostly consistent, or
     - Different in ways that will confuse users (missing links, different logos, different layout, etc.).
   - Point out any pages where the header or footer is clearly out of sync with the others.

7. JavaScript Interactivity
   - Identify the main interactive feature(s) on the site (excluding basic navigation). Examples: filters, galleries, accordions, tabs, show/hide panels, sliders, etc.
   - From the JS code, check for obvious problems:
     - Event listeners attached to selectors that do not exist.
     - Code that assumes elements exist on every page when they do not.
     - Clear syntax errors or unreachable code.
   - If you cannot fully “run” the code here, reason based on what you see and say where issues are likely.
   - Tell me whether the main interactive feature **appears** wired up correctly, or if there are likely failures.

8. Accessibility: Color Contrast
   - Identify the main color combinations used for:
     - Base body text and its background.
     - Other text (headings, navigation links, buttons) and their backgrounds.
   - For each major combination, list:
     - The foreground color value,
     - The background color value,
     - An approximate contrast ratio.
   - Then tell me:
     - Which combinations meet **at least 7.0:1** for normal body text.
     - Which combinations meet **at least 4.5:1** (or fail) for other text.
   - Highlight any low-contrast text that is hard to read.

9. Accessibility: Alt Text on Images
   - Check `<img>` elements across the site.
   - Tell me:
     - Which images have missing `alt` attributes.
     - Which images have unhelpful `alt` text (for example, file names like `IMG_1234`).
   - Suggest, in words, what kinds of descriptions I should add (for example: “describe what the photo shows and why it is on the page”).

10. Responsive Web Design Basics
   - Check if images are set up to be responsive (for example, using `max-width: 100%; height: auto;` or similar patterns) so that they do not overflow their containers.
   - Check whether layout uses fluid units where appropriate (%, `vw`, `flex`, `grid`, etc.) rather than fixed pixels everywhere that might cause horizontal scrolling.
   - Look for media queries:
     - Note the breakpoints used.
     - Tell me if they clearly change layout or typography at different widths.
   - Point out any obvious RWD problems (overflow, overlapping content, layout that breaks at common tablet or phone sizes).

---

### Output Format

For each of the 10 checks above, respond in this structure:

- **Check:** (for example, "HTML Validity")
- **Status:** Looks Good / Minor Issues / Major Issues / Not Sure
- **Evidence:** A few specific examples (file names, selectors, or short descriptions of the problem).
- **Suggestions:** Describe what I should review or adjust, in words only (no full code).

At the end, give me a short list (3–5 items) of the **most important fixes** I should make next. Focus on things that will improve correctness, accessibility, and responsive behavior.
















---------------------------------------------------------------------

## Important Project 4 Notes

- The **interactive element** must be something other than navigation.  
  - A menu toggle or hamburger menu **does not** count as your interactive element.  
  - Examples that do count: filters, galleries with controls, accordions, tabs, show/hide panels, sliders tied to content, etc.

- You must publish your site to Netlify using GitHub.  
  - The AI can check your code even without seeing the live site.  
  - If you later use a web-based AI tool, you can also paste your GitHub and Netlify URLs so it can look at the live version (if that tool supports browsing).

---

## How to Use These Prompts with AI in VS Code

### In VS Code with GitHub Copilot / Chat

1. Open your **Project 4 folder** in VS Code.  
2. Make sure these files are in the workspace:
   - All HTML pages for the site.
   - Your main CSS file(s).
   - Any JavaScript files.
   - The file `Projct 4 Grading Rubric.md` (add it to the project if it is not there yet).
3. Open the **Copilot Chat** panel.
4. Choose a model:
   - For the **Detailed Self-Assessment Prompt**, use a general “chat + code” model (for example, the default Copilot Chat model, or a GPT-style model if available).
   - For the **Quick Check Prompt**, you can try a faster code-focused model like **Raptor mini** if it is available.
5. Paste the prompt (Readiness, Quick Check, or Detailed Self-Assessment) into the chat.  
6. In the same message, tell the AI anything extra it needs:
   - Which file is your main CSS file.
   - Which JS file contains your interactive element.
   - (Optional) Your GitHub/Netlify URLs, even if Copilot cannot open them. It still helps you keep track.

The AI should use the files in your workspace as context. If it says it cannot see a file, make sure that file is part of the open folder in VS Code.

---

## Rules for Using AI on This Project

- **Do not ask the AI to write large chunks of code for you.**  
  - It is fine to ask it to point out where the problem is and to explain what is wrong.  
  - You should write and edit the actual code yourself.

- **Do not paste AI-generated code directly into your project without understanding it.**  
  - If you do ask for an example, treat it like a reference, not a solution to copy.

- **You are responsible for the final result.**  
  - If the AI says something that conflicts with our class materials or the rubric, follow the rubric and what we covered in class.

---

## How to Read and Use the AI Feedback

When you run one of the prompts, look for these parts in the response:

- **Status or summary sentence** for each criterion (for example, “Clearly Meets”, “Partially Meets”, “Does Not Yet Meet”).  
- **Specific evidence**:
  - File names (e.g., `about.html`, `css/style.css`).
  - Selectors or elements (e.g., `.gallery`, `header nav a`).
  - Screen widths where problems appear (e.g., “around 768px”).
- **Suggestions in words**:
  - What to look at.
  - What to think about changing (example: “use a more fluid unit here” or “increase contrast between this text and background”).

Use this as a to-do list:

1. Make a short list of the most important issues (3–5 items).  
2. Fix those in your code.  
3. Run the **Quick Check Prompt** again if needed.  
4. Before final submission, run the **Detailed Self-Assessment Prompt** one last time.

---

## Detailed Self-Assessment Prompt

> Below is the full prompt you can use to get a rubric-style review of your site.  
> Paste it into Copilot Chat after your project files and rubric are available.

[Place the long Project 4 self-assessment prompt here.]

You are an AI assistant helping a college student self-assess their Project 4: Showcase Site.

Important rules:
- DO NOT change, rewrite, or generate new code for me.
- DO NOT give me exact code to paste in (no full HTML/CSS/JS snippets).
- You MAY name specific elements, selectors, properties, or files so I know where to look.
- Your job is to:
  1) Evaluate my work against the rubric in the file "Projct 4 Grading Rubric.md".
  2) Point out specific problems or missing pieces.
  3) Suggest high-level improvements in words so I can fix the code myself.

Use ALL of the HTML, CSS, and JS files and any text files you see in this workspace. 
If I include a GitHub repo URL and/or a Netlify URL in this chat, and you are able to open them in your environment, you may use them to understand how the live site behaves. If you cannot open external URLs, say “Not enough information to judge” for any deployment-related criteria.

Please evaluate my project against these criteria:

1. HTML Syntax & Semantics
   - Is the HTML valid and well-structured (headings in order, no obvious nesting errors)?
   - Are semantic elements (header, nav, main, section, article, footer, etc.) used meaningfully?
   - Point to specific pages/sections where structure or semantics are weak or missing.

2. CSS Syntax & Organization
   - Is the CSS readable and logically organized (grouping, comments, consistent naming)?
   - Are there obvious redundancies or overly broad selectors that could cause conflicts?
   - Note any major issues with cascade/specificity that might lead to unexpected styles.

3. Responsive Layout: Media Queries
   - Identify the breakpoints and where the layout clearly changes.
   - Are at least two meaningful layouts implemented (e.g., mobile + desktop, or mobile + tablet + desktop)?
   - Point out any pages or sections where the layout breaks, overlaps, or causes horizontal scrolling.

4. Responsive Layout: Fluid Layout
   - Check whether layout uses fluid units (%, vw, flex, grid, etc.) instead of fixed widths everywhere.
   - Note any major fixed widths or rigid layouts that might cause horizontal scrolling or cramped content.
   - Mention specific containers or components that are NOT fluid enough.

5. Responsive Media
   - Do images and other media scale proportionally and stay inside their containers at different widths?
   - Point out any images/videos that overflow, appear stretched, or become too tiny/huge on certain screens.

6. Navigation & UX (but NOT counted as the required interactive element)
   - Is navigation consistent across pages (same links, order, logo behavior, header/footer placement)?
   - Is the menu usable on both mobile and desktop (e.g., visible links or a menu pattern)?
   - Note any confusing labels, missing “current page” indication, or broken links.
   - IMPORTANT: A navigation toggle or hamburger menu DOES NOT count as the required interactive element for this project. Ignore it for that requirement.

7. Required Interactive Element (NON-navigation)
   - Identify the main interactive element that is NOT navigation. Examples: filter, gallery with controls, accordion, tabs, show/hide details, slider, etc.
   - Is it clearly connected to the site’s content and purpose (not just decorative)?
   - Does it work at different screen sizes?
   - Note any issues with usability, accessibility, or broken behavior.
   - If you only see navigation-related interactions (e.g., menu open/close) and no other meaningful interactive feature, say that the interactive element requirement is NOT met.

8. Scanability & Visual Hierarchy
   - Can users quickly see what is most important (clear headings, grouping, spacing)?
   - Point out pages where everything looks similar and the hierarchy is weak or confusing.
   - Identify any headings or text blocks that should be visually distinguished but aren’t.

9. Layout & Gestalt Principles (basic checks)
   - Comment on alignment, proximity, and grouping of elements where it’s obvious from the code and structure.
   - Note any areas where spacing feels inconsistent, cluttered, or visually unbalanced.
   - Mention specific sections where consistency or grouping could be improved.

10. Content – Pages & Media Requirements
   - Check whether I include the required number of pages and media items according to the rubric.
   - Are the media (images, audio, video, etc.) at least somewhat relevant to the site’s topic and audience?
   - Point out if any page feels thin or incomplete compared to the rubric expectations.

11. Typography Implementation
   - Do font choices appear consistent and intentional across the site?
   - Comment on font sizes, line-height, and line length at different screen sizes.
   - Point out any places where text is hard to read, headings don’t stand out, or body text is too cramped/spread out.
   - Note if I missed basics like setting line-height for body text or if I used overly broad rules (e.g., text-align on body) that cause awkward text alignment.

12. Color Palette Implementation
   - Are colors cohesive and used consistently for similar elements (buttons, links, backgrounds, etc.)?
   - Note any places where extra “random” colors appear and break the palette.
   - Mention components where color could be used more consistently or clearly (e.g., all primary buttons match, link colors are consistent).

13. Accessibility – Alt Text
   - Check that all meaningful images have descriptive alt attributes.
   - Identify any images that are missing alt text or have unhelpful alt text (like “image1” or repeated file names).
   - Note where decorative images should probably have empty alt attributes.

14. Accessibility – Color Contrast & Legibility
   - For main body text, headings, navigation links, and buttons:
     - List the foreground and background color values and approximate contrast ratio.
     - Tell me which combinations meet WCAG contrast for normal text (aim for 4.5:1 minimum, and note if any are strong, e.g. 7:1+).
   - Point out any text that is low-contrast or hard to read.

15. Published on Netlify via GitHub (if applicable)
   - If I have provided a Netlify URL and you can access it, confirm that:
     - The site loads and basic navigation works.
     - There are no obvious 404s or missing assets caused by file path issues.
   - If you cannot access live URLs from this environment, say “Not enough information to judge” for this criterion.

16. Optional Comments on Overall Design Polish
   - OPTIONAL: Briefly comment on overall consistency and professionalism (spacing, rhythm, alignment).
   - These are comments only, not a strict score. If you are unsure, say that this is a subjective area and you are only giving light suggestions.

For each criterion above, respond in this structure:

- **Criterion:** (use the rubric name)
- **Status:** Clearly Meets / Partially Meets / Does Not Yet Meet / Not enough information
- **Evidence:** Point to specific pages, sections, elements, or selectors (file names, approximate locations).
- **Suggestions (no exact code):** Explain, in words, what I should look at and what kind of change to make.

At the end, give me a short summary of my biggest 3–5 improvement priorities for Project 4, ordered from most urgent to least urgent, again WITHOUT giving me exact code.


-------------------------------------------------------------


        <h2>Important Project 4 Notes</h2>

        <ul>
            <li>The <strong>interactive element</strong> must be something other than navigation.
                <ul>
                    <li>A menu toggle or hamburger menu <strong>does not</strong> count as your interactive element.
                    </li>
                    <li>Examples that do count: filters, galleries with controls, accordions, tabs, show/hide panels,
                        sliders tied to content, etc.</li>
                </ul>
            </li>
            <li>You must publish your site to Netlify using GitHub.
                <ul>
                    <li>The AI can check your code even without seeing the live site.</li>
                    <li>If you later use a web-based AI tool, you can also paste your GitHub and Netlify URLs so it can
                        look at the live version (if that tool supports browsing).</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>How to Use These Prompts with AI in VS Code</h2>

        <h3>In VS Code with GitHub Copilot / Chat</h3>

        <ol>
            <li>Open your <strong>Project 4 folder</strong> in VS Code.</li>
            <li>Make sure these files are in the workspace:
                <ul>
                    <li>All HTML pages for the site.</li>
                    <li>Your main CSS file(s).</li>
                    <li>Any JavaScript files.</li>
                    <li>The file <code>Projct 4 Grading Rubric.md</code> (add it to the project if it is not there yet).
                    </li>
                </ul>
            </li>
            <li>Open the <strong>Copilot Chat</strong> panel.</li>
            <li>Choose a model:
                <ul>
                    <li>For the <strong>Detailed Self-Assessment Prompt</strong>, use a general “chat + code” model (for
                        example, the default Copilot Chat model, or a GPT-style model if available).</li>
                    <li>For the <strong>Quick Check Prompt</strong>, you can try a faster code-focused model like
                        <strong>Raptor mini</strong> if it is available.</li>
                </ul>
            </li>
            <li>Paste the prompt (Readiness, Quick Check, or Detailed Self-Assessment) into the chat.</li>
            <li>In the same message, tell the AI anything extra it needs:
                <ul>
                    <li>Which file is your main CSS file.</li>
                    <li>Which JS file contains your interactive element.</li>
                    <li>(Optional) Your GitHub/Netlify URLs, even if Copilot cannot open them. It still helps you keep
                        track.</li>
                </ul>
            </li>
        </ol>

        <p>The AI should use the files in your workspace as context. If it says it cannot see a file, make sure that
            file is part of the open folder in VS Code.</p>

        <hr>

        <h2>Rules for Using AI on This Project</h2>

        <ul>
            <li><strong>Do not ask the AI to write large chunks of code for you.</strong>
                <ul>
                    <li>It is fine to ask it to point out where the problem is and to explain what is wrong.</li>
                    <li>You should write and edit the actual code yourself.</li>
                </ul>
            </li>
            <li><strong>Do not paste AI-generated code directly into your project without understanding it.</strong>
                <ul>
                    <li>If you do ask for an example, treat it like a reference, not a solution to copy.</li>
                </ul>
            </li>
            <li><strong>You are responsible for the final result.</strong>
                <ul>
                    <li>If the AI says something that conflicts with our class materials or the rubric, follow the
                        rubric and what we covered in class.</li>
                </ul>
            </li>
        </ul>

        <hr>