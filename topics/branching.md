# Branching in Git and GitHub

## Intro
<p>For this project we are going to learn to use Branching in Git.&nbsp;</p>


## Branching Intro and Overview

<p><iframe src="/d2l/wcs/mp/mediaplayer.d2l?ou=6606&amp;entryId=8b51a939-5746-4b89-be5c-c953e628c734&amp;captionsEdit=False" title="Intro to Git Branching." width="100%" height="450px" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen" style="max-width: 800px;"></iframe></p>
<h2>Git Branching Instructions</h2>
<h3>Video Walkthrough</h3>
<p>keep this page open as you view the video as you will want to copy and paste Git Commands from the page.</p>
<p><iframe src="/d2l/wcs/mp/mediaplayer.d2l?ou=6606&amp;entryId=363fbea9-7746-4212-9d26-4508b6078ac9&amp;captionsEdit=False" title="Git Branching Workflow" width="100%" height="450px" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen" style="max-width: 800px;"></iframe></p>
<h3>Pushing Changes from your computer to GitHub and Merging Changes back to the main Branch</h3>
<p>After you have made all of your changes for your branch and committed them, then you can push that to GitHub and also merge the branch into the main branch.</p>
<p><iframe src="/d2l/wcs/mp/mediaplayer.d2l?ou=6606&amp;entryId=c48a25ba-efc2-4fb2-ae1e-8371eeb8b7db&amp;captionsEdit=False" title="Git Push Branch to GitHub and Merge New branch into the Main Branch." width="100%" height="450px" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen" style="max-width: 800px;"></iframe></p>
<h3>Opening the Terminal in VS Code</h3>
<p>all of the code below are Terminal Commands. You have access to the terminal in VS Code. here's how to get to it:</p>
<ol>
<li>With a project open, look at the bottom of the VS Code Window. If you see a panel with tabs: Problems | Output | Debug Console | Terminal, then <strong>click Terminal</strong>
<ol>
<li>If you don't see this then click Toggle Panel at the top right or (Command/CTRL+J)<img src="/content/enforced/915532-BMC01_MMP_240_1259_1_31551/Activities/SCR-20251022-exhd-2.png" alt="" title="" style="max-width: 100%;">, then <strong>click terminal</strong>:</li>
</ol>
</li>
<li>If the Terminal already has something showing (like Five Server running) then open a new bash. Click the carat next tothe + sign then Bash
<ol>
<li><img src="/content/enforced/915532-BMC01_MMP_240_1259_1_31551/Activities/SCR-20251022-exol-2.png" alt="" title="" style="max-width: 100%;"></li>
</ol>
</li>
</ol>
<h4><strong>Now you should be ready to enter commands in the terminal.</strong></h4>
<h4><strong>1.&nbsp;</strong><strong>Check Your Current Branch</strong></h4>
<pre class="line-numbers d2l-code"><code class="language-bash">git status
git branch</code></pre>
<ul>
<li>
<p>git status shows what’s going on in your working directory.</p>
</li>
<li>
<p>git branch lists all local branches.</p>
</li>
<li>
<p>The branch with an asterisk * is the one you’re currently on — usually main.</p>
</li>
</ul>
<p></p>
<h4><strong>2. </strong><strong>Create a New Branch</strong></h4>
<p>This creates a new branch called feature-images based on your current branch (often main).</p>
<pre class="line-numbers d2l-code"><code class="language-bash">git branch feature-images</code></pre>
<p>💡 <em>Naming convention: </em>Use descriptive names like fix-navbar, add-gallery, update-css-layout.</p>
<p></p>
<h4><strong>3. </strong><strong>Switch to That Branch</strong></h4>
<pre class="line-numbers d2l-code"><code class="language-bash">git switch feature-images</code></pre>
<p>or the older command (you may see this in tutorials or videos):</p>
<pre class="line-numbers d2l-code"><code class="language-javascript">git checkout feature-images</code></pre>
<p>Now you’re working in your new branch — anything you commit stays isolated from main.</p>
<p>You can do steps 2 and 3 at the same time (create and switch to the branch) by adding the -c flag to the switch command</p>
<pre class="line-numbers d2l-code"><code class="language-bash">git switch -c feature-images</code></pre>
<h4><strong>4. </strong><strong>Make Changes and Commit</strong></h4>
<p>Edit files, then:</p>
<pre class="line-numbers d2l-code"><code class="language-bash">git add .</code></pre>
<p>Adds all edits to the Staging Area.</p>
<pre class="line-numbers d2l-code"><code class="language-javascript">git commit -m "Added responsive image section"</code></pre>
<p></p>
<h4><strong>5. </strong><strong>Push the Branch to GitHub</strong></h4>
<pre class="line-numbers d2l-code"><code class="language-bash">git push -u origin feature-images</code></pre>
<p>The -u flag connects your local branch to the same one on GitHub.</p>
<p></p>
<h3>Merging a Branch into Main</h3>
<p>These are the steps to merge the changes you made in your new branch back into the main branch.</p>
<p></p>
<h4><strong>1. Switch Back to Main</strong></h4>
<pre class="line-numbers d2l-code"><code class="language-bash">git switch main</code></pre>
<p>This will always be this same code to go back to main.</p>
<p></p>
<h4><strong>2. Merge the Branch into Main</strong></h4>
<pre class="line-numbers d2l-code"><code class="language-bash">git merge feature-images</code></pre>
<p></p>
<p></p>
<h2><strong>Concept Summary</strong></h2>
<table>
<thead>
<tr>
<th>
<p><strong>Command</strong></p>
</th>
<th>
<p><strong>Purpose</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>git branch</p>
</td>
<td>
<p>List or create branches</p>
</td>
</tr>
<tr>
<td>
<p>git switch</p>
</td>
<td>
<p>Move between branches</p>
</td>
</tr>
<tr>
<td>
<p>git merge</p>
</td>
<td>
<p>Combine branch changes</p>
</td>
</tr>
<tr>
<td>
<p>git add&nbsp;</p>
</td>
<td>
<p>adds changes to staging</p>
</td>
</tr>
<tr>
<td>
<p>git commit</p>
</td>
<td>
<p>commits your changes</p>
</td>
</tr>
<tr>
<td>
<p>git push/pull</p>
</td>
<td>
<p>Sync local &amp; remote branches</p>
</td>
</tr>
<tr>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
</tbody>
</table>
<p></p>


## 