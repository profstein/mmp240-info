# Week 11: 11/3-11/9: Wireframes to HTML and Media Queries

## Intro

This week we are going to take our wire frame designs, and bring them to life. We will do it in three phases.

1. Convert wire frames to html. 
1. Use CSS variables to add responsive spacing.
1. Add media queries to enable a responsive layout.

Each of those phases as a sub module below with its own video.

Remember to complete week 9 first if you haven't done that yet. Week 9: 10/21-10/26

## Wireframes to HTML

The video tutorial below walks through how to think about and then write HTML to start the move from Wireframes to HTML/CSS. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/s7PVzMwilhc?si=nppfQ9cIZ_4mrjuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Step 1: Identify Page Sections

The base page has three main sections that are already defined with HTML elements:

1. header (site title and navigation)
1. main (page title and page content)
1. footer (copyright, credits, secondary nav)

Now we will determine the sections for the content inside of main. There are generally two types:

1. **content-based sections**: These are groups of content that go together. Most of the time the section should have a heading (h1..h6) and there are semantic elements you can use:
    * section
    * article
    * aside    
1. **visual design sections**: these are where content is grouped for the purposes of visual design. They typically don't have a header. For example if you want to place an image and text next to each other. Most of the time we use:
    * div with a class or id

Looking at your wireframes, you will determine how the content is grouped. Often, the frames you used to group items will turn into the sections.

### Step 2: Add HTML to represent the sections

1. Start by copying the index.html page you made
1. Then delete the content inside of <main> and change the <title> element in the head.
1. Then add in the sections as outlined below.

For each of the sections identified above, add an html section. 
Remember:

* most of the time you will use one of the three content sections shown above or a div
* give each section a class or id (id's should be unique, you can put both on an element).

### Step 3: add in the HTML content inside of each section

With the sections established you can add in the content. Alternatively, you can also add in content and then wrap it in the sections.

1. Go to this pen Wonder Wheel Page Content CodePen
1. Copy the content from the page and paste it into the sections you defined
1. [Optional] Download [wonder-wheel-images.zip](/files/wonder-wheel-images.zip), unzip it and add the images to your images folder
    * There is a square folder with square versions you can put in the same place as your other square images too.

> NOTE: I gave the option of three additional images the full-size and square versions are in the zip. These are optional. Only one image is required and you already have a wonder wheel image you can use for the hero.

You now have the page content ready to style. For the other landmark pages (next week) you will reuse sections and classes across pages to keep things consistent.

## Create CSS Variables for Responsive Spacing

I've added in a sub module in CSS resources for CSS variables for responsive spacing. You can find that here: Resources &gt; CSS Resources &gt; CSS Variables &gt; Responsive Spacing with CSS Variables

The video below I walk through what they are and how to set them up.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SAc_2CcO-8s?si=_NEGLV3mTqwrBtlR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Adding Media Queries for Layout

I've also added the CSS resource for media queries.

In Brightspace it's here [Resources &gt; CSS Resources &gt; Media Queries](https://brightspace.cuny.edu/d2l/common/dialogs/quickLink/quickLink.d2l?ou={orgUnitId}&type=content&rcode=553F80D6-3EB2-4A0C-B321-7D8FDFC0E4FA-8211226)

In the video we look at that resource.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5T7EEoleZdw?si=gNPKnmXWG056ZyNh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Applying CSS Variables and Media Queries to the Landmark Page

Now that we've learned more about Media Queries and CSS Variables, we can apply them to a landmark page.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xhwohbPglRo?si=KHzQcfH0v4CmKBPS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>





