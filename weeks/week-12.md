# Week 12: 11/10-11/16

This week we are going to finish Project 3.

> NOTE: If you did not create the landmark page as part of the Wireframes to HTML exercise, then do that first. You'll need it for this week.

** Here is what we have left to do: **

- Create the remaining landmark pages
- Add in Navigation in the header
- Add Finishing Touches


## 0. What is Markdown?

Markdown is a simplified language for writing HTML. It doesn't have all of the overhead of tags and instead uses some simple marks for basic html. It doesn't cover all of html just some of the most important ones. It is great for content not so much for structuring pages. Below you will see a video that explains what marked down is and a cheat sheet that shows you basic markdown that you can use. Watch this before moving on.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-sOR7ap9h9A?si=wTYN78Z7mfXGuVat" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### WRITING MARKDOWN IN VS CODE

You technically won't have to do this for our project, but it's good to know how to write it in VS Code.

1. Make a file and add .md at the end of the name
1. Open the Markdown Preview window (comes with VS CODE)
    1. Open the Command Palette (Shift+CMD+P on macos; Shift+CTRL+P on Windows)
    1. Type Markdown Open
    1. Select Markdown: Open Preview to the Side

![screenshot VS Code command pallet with "markdown open" typed in and Markdown: Open Preview to the Side highlighted.screenshot VS Code command pallet with "markdown open" typed in and Markdown: Open Preview to the Side highlighted.](/images/markdown-open-side.png)

### MARKDOWN VIDEO

This video by [Kristan Smout](https://www.youtube.com/channel/UCQ5RT521VUmQw061WNKrYtA) explains markdown in about 5 minutes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-sOR7ap9h9A?si=wTYN78Z7mfXGuVat" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### MARKDOWN Quick Reference

[Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/) web page

**60 second Youtube Video** by [Visual Studio Code](https://www.youtube.com/@code) team

<iframe width="560" height="315" src="https://www.youtube.com/embed/4z0l5Kl2Q6E?si=m0q6zYWAYhUMMbLm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



## 1. Create the Remaining Landmark Pages

To do this I have provided you with the content in Markdown files. See landmarks-markdown-content.zip file

In the video below, I walk through using Copilot in VS Code to do the following in a prompt:

- put the existing landmark-wonder.html page in context
- put the 5 markdown files in chat context
- generate the HTML for all five files
- Add in the hero image for each page
- Add in the correct next and previous links on each page

### VIDEO WALKTHROUGH

<iframe width="560" height="315" src="https://www.youtube.com/embed/s7PVzMwilhc?si=nppfQ9cIZ_4mrjuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### STEPS

1. Download [landmarks-markdown-content.zip](/files/landmarks-markdown-content.zip)
1. Unzip it and add the five markdown files to your project folder
1. Open Copilot
1. Make sure the landmark-wonder.html file you created is in content and the five markdown files.
1. Make sure Copilot is in agent mode
1. Tell it to make the files using your existing landmark-wonder.html page as a template. You can also ask it to update the next and previous links so all pages are linked together and update the hero image to use the existing images for each landmark.
1. Let it go to work
1. Check that it did what you asked. If so, click Keep, If not undo and try again.&nbsp;

### Alternate Methods

This video shows some other ways you can do this. They take some more time to complete. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/3iM9dQQI9mk?si=MkJzauf9n-fmUdj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Landmark Pages Converting Markdown to HTML: Alternatives to Copilot**


## 2. Navigation
Navigation can range from simple to very complex. We jump into it this week starting with some basics of how to create a navigation and then moving on to show responsive navigation that you can use in your projects.

Most of the time when you&lsquo;re just starting in web design, you will copy someone else&lsquo;s navigation and then adjust it to suit your project. For this reason there are a number of videos and code pens so you can both see how things work and have some HTML/CSS/JS to copy.

Note that we use JavaScript for the first time this week. We do not get into all of the basics of writing code, but instead see how the JS for the navigation does its work and how you could make simple modifications to it.

### Nav 1: Basic Navigation Styling

These videos show the basic styles needed to create a header with navigation from an unordered list. They do not cover responsive navigation that changes between small and larger screens. 

#### HTML & CSS for Absolute Beginners: A simple navigation

In this video [Kevin Powell](https://www.youtube.com/@KevinPowell) goes over the HTML and CSS of creating a simple navigation. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/bRp5_YSFXGc?si=A6GJaSP-mnDP8pJJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Prof Stein&lsquo;s Basic Nav Styling Video

In this video I also explain nav basics. This is very similar to the Kevin Powell video above. It's longer and a little less polished, but there is a Codepen that you can follow along. Feel free to only watch the above video if you're short on time.

**Start from this CodePen**: <a href="https://codepen.io/profstein/pen/GgZJxJZ/c596e0082b9d600c2256f0b6a6967ecb" target="_blank" rel="noopener noreferrer">Unstyled Nav</a>



### Nav 2: Hamburger Menu Navigation for Small Screens

In this video I explain how to create and style a hamburger menu that has a "hamburger" style button that expands when you click it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qkBajFe2VdE?si=bEjEIML98wYbRLYy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

CodePen Used in the Video

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YPqXeoK" data-pen-title="Hamburger Menu" data-user="profstein" data-token="5022d1d74a09be5f0a1a1c13935b61d3" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/profstein/pen/YPqXeoK/5022d1d74a09be5f0a1a1c13935b61d3">
  Hamburger Menu</a> by Christopher Stein (<a href="https://codepen.io/profstein">@profstein</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>


### Nav 3: Responsive Navigation with Hamburger Menu

In this video media queries are added to change the navigation style on larger screens. Because we styled the navigation for small screens first and then use media queries for the larger screens, this is an example of **mobile-first** resonsive design.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qkBajFe2VdE?si=_bZheo9D9eMP3sX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

CodePen Used in the Video

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="gbrpvNP" data-pen-title="Hamburger Menu" data-user="profstein" data-token="17dc545d273ac5e1dd9a5986f0f18f46" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/profstein/pen/gbrpvNP/17dc545d273ac5e1dd9a5986f0f18f46">
  Hamburger Menu</a> by Christopher Stein (<a href="https://codepen.io/profstein">@profstein</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

### Nav 4: Responsive Navigation with Text instead of Hamburger Menu

This navigation is mostly the same as the previous responsive navigation but instead of a hamburger menu the word **Menu** is used. When the nav is open the word changes to **Close**. This all happens through CSS (the JavaScript is the same) and uses a technique you might not have seen before where text can be added to the screen using ::before or ::after pseudo selectors.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TUT8o24Xx-E?si=jfpPNyFzYn_ilkrW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

CodePen in the Video
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ByKNYXL" data-pen-title="Hamburger Menu Responsive" data-user="profstein" data-token="4d6e264654f5d4e4f387795b6fd49cf0" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/profstein/pen/ByKNYXL/4d6e264654f5d4e4f387795b6fd49cf0">
  Hamburger Menu Responsive</a> by Christopher Stein (<a href="https://codepen.io/profstein">@profstein</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>


### Add Responsive Navigation to Your Project

You can use my examples above or one from another author who is making code available on CodePen or their site. Unless you have a very strong grasp of the concepts, I do not recommend making it up on your own from scratch. 

#### Responsive Nav Checklist

Your navigation should:

- work on both mobile and desktop size screens
- be visually the same on every page
- link to home and all of your landmark pages.
- set the current to the current page. Copilot in VS Code can help make sure this happens. Try asking it. Here is what that looks like in a nav link (if you're on the wondere page):
    - `<li><a href="landmark-wonder.html" aria-current="page">Wonder Wheel</a></li>`

## 3. Finishing Touches

Before submiting your project, look over the following and ensure it is finished and polished.

- Typography: Use the lessons we have learned so far to
    - use CSS variables to help control typography
    - Style headings differently from page text
    - create a typographic hierarchy
- Color: 
    - Colors work together in a harmonious way
    - colors support the "mood" or "vibe" you intend the site to have
- Accessibility: 
    - all images have descriptive alt tag
    - text and background colors have sufficient contrast
- Layout:
    - The page is set up so people can see the different groups of content with enough spacing
    - Gestalt principles are used to help identify page sections, UI elements (like cards)
- Responsive
    - **Fluid Grid**: use fr units for CSS Grid and flexible units (like %) anywhere else you need to set width for layout.
    - **Flexible Media**: make sure the base responsive img styling is there. Also include the CSS to allow responsive video embeds
    - **Media Queries**: You have used media queries to make the layout adjust appropriately for small to large screens.


    ## Assignment for the Week

    This week the assignment is to finish your Project 3. Make sure to commit your work as you go along and push your changes to your GitHub repository.

    Your GitHub repository should be published in GitHub Pages.

    It's OK to use the same repository from Project 2.

    ### Bonus

    You can get bonus points for
    
    * Forking your Project 2 to create a separate Project 3
    * Publishing your site with [Netlify](https://www.netlify.com). Remember to sign up with your GitHub account because Netlify will be able to link to your GitHub and publish directly from your main branch of the GitHub repo.
