# Using Copilot in VS Code: Quick Tips


<h2>Using AI to Support Your Work</h2>
<p>You are encouraged to use AI tools to support (but not replace) your thinking:</p>
<ul>
    <li><strong>For Questions:</strong> If you need help understanding something, you can ask Copilot. If, for example, there are parts of base.css from the base page template you don't understand, you can ask copilot to explain it.</li>
    <li><strong>For content:</strong> Describe the sections you want on a page and ask AI to generate draft text. You can also write some content in markdown and then have it convert it for you (like we did in projects 2 and 3).
        Edit what it gives you into your own voice.</li>
    <li><strong>For HTML:</strong> Write your content in plain text or Markdown and ask AI to convert it into
        semantic HTML structure.</li>
    <li><strong>For CSS:</strong>If you ask it for help with updating or applying styles, remind it to use the css variables you will</li>
    <li><strong>For debugging:</strong> Paste snippets of your HTML/CSS and ask AI to help you find and fix errors.
    </li>
</ul>
<p>Remember: AI is there to handle busywork and help you experiment. You are still responsible for deciding what
    belongs on your site and how it should look and behave.</p>


## **Copilot Modes**

*   **Ask**  
    Use this when you want quick answers or code snippets. Great for clarifying syntax or asking “How do I…?” questions.  
    *(Reminder: Switching modes deletes your current conversation and its context.)*

*   **Agent**  
    Use this for more complex tasks where Copilot acts like a coding assistant. It can reason through steps, help debug, or guide you through building features.  
    *(Reminder: Switching modes deletes your current conversation and its context.)*

*   **Edit**  
    Use this when you want Copilot to modify existing code. Highlight the section, then tell Copilot what to change or improve.  
    *(Reminder: Switching modes deletes your current conversation and its context.)*

***

## Prompt Ingredients

* **Task**: What you want Copilot to do (add, style, refactor, explain, debug, etc.)
    * Example: "Add a hero section to the homepage" or "Refactor this CSS to use utility classes"
* **Context**: Where the work happens (which page, section, or file) and any relevant background
    * Example: "On the About page, in the main content area" or "This is for a travel site's gallery page"
* **Targets**: Specific elements, classes, or areas to focus on (helps Copilot know exactly what to modify)
    * Example: "Only update the `.card` components" or "Focus on the navigation links in the header"
* **Specifics**: Details about what you want included or how things should work (content, attributes, functionality)
    * Example: "Each card needs an image, h3 heading, short paragraph, and a 'Learn More' button" or "The image should have alt text and load lazily"
* **Constraints**: Rules or limitations (use existing styles, keep it accessible, maintain responsive behavior)
    * Example: "Use existing CSS variables for all colors and spacing" or "Must work on mobile screens 320px wide"

### Complete Example Using All Ingredients

**Prompt:**  
*"**Task:** Style the project cards. **Context:** On the portfolio page, inside the `.projects-grid` section. **Targets:** Each `.card` element should have **Specifics** an image, h3 title, description, and view more button. **Constraints:** Use existing CSS variables for colors, spacing, and fonts. The layout should be responsive—3 columns on desktop, 2 on tablet, 1 on mobile. Keep semantic HTML."*


***
## Follow-ups and Add-ons

These are requests you can either use to follow up after it's responded to your prompt, or add on to a prompt to help make sure you get what you were going for

* **Persona for tone/style**: Act as a web design tutor. Explain how to 
    * Act as a web design tutor. Explain how to refactor this CSS to use variables already defined.
* **Iterative loop:** Propose a small improvement, show a diff, then wait for approval.
    * Propose an update to the card layout, show me, then wait for my approval before moving forward.
* **Tell it to ask you if it needs more context**: 
    * If you need more context, ask me which files to include.
* **Ask for an explanation:**
    * Explain what changees you are proposing and why.
* **Ask for comments:** 
    * Add comments to the code to explain what it is doing.
* **Ask for simpler alternative**
    * Is there a simpler way to have this element show on scroll?
* **Reminders:**
    * Remember to use existing CSS variables and utility classes over hard-coded values.
    * Remember to keep spacing, colors, and typography consistent with the stylesheet.

***

## **Be Specific for Best Results**

*   The more detail you provide, the better Copilot can help.
*   Instead of saying:  
    *“Give me three cards.”*  
    Say:  
    *“On the homepage, add three cards. Each card should have an image, an `<h3>` heading, a description paragraph, and a button that links to the related page.”*
*   **Include context**: Mention the page or section you’re working on. 
*Note: copilot will automatically put the page that is currently showing in the editor in context. You can click the paperclip icon to add otehr pages or mention them by name in the prompt.*
*   **Direct the design and content**: You decide the look and feel; Copilot helps you implement it faster.
*   **Work in small chunks**: Ask for parts of a page (like a card component), not the entire page at once.

***

## **Examples of Good Prompts for Copilot in VS Code**

### **1. Adding Cards to a Homepage**

❌ **Bad Prompt:**  
*"Add three cards."*

✅ **Better Prompt:**  
\*"On the homepage, create three cards inside the main content area. Each card should include:

*   An image at the top
*   An `<h3>` heading for the title
*   A short description paragraph
*   A button labeled ‘View Details’ that links to the related page."\*

***

### **2. Styling a Navigation Bar**

❌ **Bad Prompt:**  
*"Style the nav bar."*

✅ **Better Prompt:**  
*"Style the top navigation bar using the CSS variables and utility classes that are already defined in our stylesheet:

* Use a horizontal layout with evenly spaced links (prefer existing flex and gap utilities; if not available, use flex with a gap that references an existing spacing variable).
* Use existing variables for background and text colors (do not hard-code color values).
* Add a hover effect that uses the existing color variables for hover states.
* Use the site’s font variable for typography, and make the active link bold via the existing active state class.
* Keep paddings and margins consistent by using the spacing variables already defined."*

***

### **3. Adding a Hero Section**

❌ **Bad Prompt:**  
*"Add a hero section."*

✅ **Better Prompt:**  
\*"On the homepage, add a hero section at the top with:

*   A full-width background image from `images/hero.jpg`
*   A centered headline in `<h1>` that says ‘Explore Your Next Adventure’
*   A subheading in `<p>` below the headline
*   A button labeled ‘Start Now’ that links to the destinations page."\*

***

### **4. Creating a Responsive Grid**

❌ **Bad Prompt:**  
*"Make a grid."*

✅ **Better Prompt:**  
*"Create a responsive 3-column grid for the gallery page using CSS Grid. Each column should contain an image with a caption below it. On mobile, the grid should collapse to one column."*

***

### **5. Adding a Footer**

❌ **Bad Prompt:**  
*"Add a footer."*

✅ **Better Prompt:**  
*"Add a footer at the bottom of every page and use the CSS variables already defined in our stylesheet:

* Site name in bold text
* Navigation links (Home, About, Contact)
* Social media icons aligned to the right using existing flex utilities and a gap that references spacing variables
* Background and text colors should come from the existing color variables
* Use the site’s font variable; apply padding using existing spacing variables; use the existing border color variable for the top border."*

***
## **Key Takeaways** 

### **Key Pattern in All Examples**

*   **Context:** Where the change applies (homepage, gallery page, footer).
*   **Specific elements:** Tags, content, colors, layout details.
*   **Limited scope:** One section or component at a time.
*   **Consistent styling:** Prefer the CSS variables and utility classes already defined in your stylesheet over hard-coded values.

### **Guiding Principle** 

You’re the designer. Copilot is your coding helper. The clearer and more focused your instructions, the better the results.





