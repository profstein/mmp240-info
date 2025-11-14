# Netlify

## Intro

Netlify is a platform that helps to host and deploy applications. We will use it in our class to host our websites. When you use a GitHub repository like we do, the connection is pretty simple. Also, for our uses it's free.

## Working with Netlify

### Creating a Netlify Project

This is the name for a web site. We will create one that is tied to your GitHub repository. You will use your GitHub account to sign in to Netlify. The video below walks you through the process

<iframe src="https://www.youtube.com/embed/FTD-NWQr6gI?si=PIlKM3JgyAutgLTe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deployment After GitHub Update

Every time you push changes (also part of Sync from in VS Code) to GitHub main branch, your Netlify project will deploy (update it's files too). Here is a video walkthrough.

<iframe src="https://www.youtube.com/embed/8lZ2aHVoBcI?si=1l6tYs0tQ_PQIkMQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Concepts

The following are some concepts and terminology that will help you understand Netlify.

### Deployment

This refers to when Netlify creates a new version if your site

> One thing to keep in mind is that a new deployment only happens when you push your changes to the main branch of GitHub. So there are a few things you can do to limit how many times you push changes to the main branch:

- Don't sync often to GitHub
- Use a branching workflow and make your changes on a different branch, even push those other branches to GitHub. Then only when you know everything is ready, merge the changes to the main branch and push that to GitHub.

### Credits

This is how Netlify keeps track of how much you use it and sees if you've gone over the free limit.

- Production deploys (changes to main branch trigger it): 15 credits
- Web requests (when anyone views one of your pages): 3 credits for 10,000 requests.
- Bandwidth (amount of data used, includes file size of images, media and html pages): 10 credits for 1 GB

For all of this info see the [Netlify Pricing Page](https://www.netlify.com/pricing/).