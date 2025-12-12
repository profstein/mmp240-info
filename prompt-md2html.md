# Prompting Process for the AI
The key to a successful conversion is to be explicit about the syntax you used and the desired HTML output.

# Step 1: Define the Syntax and Rule Set

Start your prompt by instructing the AI on the specific syntax it needs to recognize.

## Prompt Section 1 (Instructions): 

You are an expert Markdown-to-HTML converter. I am providing you with content written in Pandoc-style Markdown, which uses Attribute Lists enclosed in curly braces {} to specify IDs and classes.

Conversion Rules:

Convert all standard Markdown elements (headings, lists, bold, etc.) to valid HTML5.

When you encounter `{...}` attributes immediately following a header (#, ##, etc.), apply them directly to the resulting `<h1>`, `<h2>`, etc., tags.

When you encounter Fenced Divs using `::::: {...}` syntax, convert the entire contained block into a `<div>` element, applying the specified attributes to the `<div>` tag.

When you encounter bracketed inline content followed by attributes `[text]{...}`, convert it into a `<span>` element with the specified attributes.

Do NOT include the attribute lists themselves in the final HTML output; only apply the resulting attributes.

Output ONLY the resulting HTML code, without any conversational text or surrounding Markdown fence.

# Step 2: Provide the Markdown Content

After the rules, clearly demarcate the content to be converted, often using a code block or XML-style tags.

## Prompt Section 2 (Content): "Here is the content to convert:

Markdown

````
# Project Status Update {#status-report .main-heading}
::::: {.status-indicator .complete} Project A is on track. The deadline is next week. :::::
````

We need to focus on the [final QA checks]{.urgent}.

This combination of explicit syntax (Pandoc's Attribute Lists) and a clear, structured prompt will give you the most consistent and accurate HTML conversion from your AI.