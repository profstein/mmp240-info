<p></p>
<h2>Introduction to Responsive Web Design</h2>
<p>The idea of Responsive Web Design (RWD) was first introduced by Ethan Marcotte in his landmark 2010 article, <a rel="noopener" href="https://alistapart.com/article/responsive-web-design/" target="_blank">“Responsive Web Design” on A List Apart</a>. Marcotte proposed a new way of thinking about layouts—one that would allow websites to adapt gracefully to the device or screen size being used.</p>
<p>Before RWD, most websites were fixed-width—built to look good on a desktop monitor, typically around 960 pixels wide. When the iPhone and other smartphones appeared in 2007, web design got more complicated to accomodate them. At first users had to zoom and scroll sideways just to read a line of text. Designers often created separate “mobile” versions of sites, which doubled maintenance work and fractured the user experience.</p>
<p>Marcotte’s insight was simple but changed how we approach web design: rather than designing for a single screen size, designers should create flexible systems that respond to the screen (the viewport) itself. There is only one web site and it adapts itself to each screen.</p>
<h3>The Three Core Principles of RWD</h3>
<p>These are the three key principles of RWD. We have already learned the first two:</p>
<ol style="list-style-type: decimal;">
<li>Fluid Layouts (we learned some of this already)</li>
<li>Flexible Media (we learned some of this already)</li>
<li>Media Queries (we will learn in Project 3)</li>
</ol>
<p></p>
<h4>1. Fluid Layouts</h4>
<p>Layout containers should use flexible units rather than fixed pixels.</p>
<ol style="list-style-type: decimal;">
<li style="list-style-type: none;">
<ul style="list-style-type: disc;">
<li>Use fractional () units in CSS Grid or percentages () in other contexts.</li>
<li>This keeps layout elements proportional as the viewport changes width.</li>
</ul>
</li>
</ol>
<p>Example using fr units with grid:</p>
<pre class="line-numbers d2l-code"><code class="language-css">.container { 
  display: grid; 
  grid-template-columns: 1fr 2fr; 
}</code></pre>
<p>Example using percentage units with a layout element (margin settings center it on the page):</p>
<pre class="line-numbers d2l-code"><code class="language-css">.container{
  width: 85%;
  margin: 0 auto;
}</code></pre>
<p></p>
<h4>2. Flexible Media</h4>
<p>Images and videos must resize within their containers.</p>
<ol style="list-style-type: decimal;">
<li style="list-style-type: none;">
<ul style="list-style-type: disc;">
<li>Use the base responsive image rule for img and video elements</li>
</ul>
</li>
</ol>
<pre class="line-numbers d2l-code"><code class="language-css">img, video { max-width: 100%; height: auto; }</code></pre>
<p><strong>Responsive Image Example (CodePen).</strong> <a rel="noopener" href="https://codepen.io/profstein/pen/mqMBoV">codepen.io/profstein/pen/mqMBoV</a></p>
<ul style="list-style-type: circle;">
<li>For more control, use the &lt;picture&gt; element or srcset for art direction, serving different crops or resolutions to different devices.&nbsp;
<p><strong>Responsive Picture Element -Art Direction Example (CodePen).</strong> <a rel="noopener" href="https://codepen.io/profstein/pen/JoGLoKX??editors=1010" target="_blank">codepen.io/profstein/pen/JoGLoKX</a></p>
</li>
<li>For embedded video (like YouTube), wrap it in a container that preserves aspect ratio.
<p><strong>Responsive Video Embed Example (CodePen).</strong> <a rel="noopener" href="https://codepen.io/profstein/pen/mrMLRj" target="_blank">https://codepen.io/profstein/pen/mrMLRj</a></p>
</li>
</ul>
<p></p>
<h4>3. Media Queries</h4>
<p>We will learn these for Project 3.</p>
<ol style="list-style-type: decimal;">
<li style="list-style-type: none;">
<ul style="list-style-type: disc;">
<li>Media queries let you apply different CSS rules depending on device or viewport size.</li>
<li>In this class we follow a mobile-first approach—start with the small-screen styles, then add queries using min-width.</li>
</ul>
</li>
</ol>
<p>Example:</p>
<pre class="line-numbers d2l-code"><code class="language-css">main { display: grid; grid-template-columns: 1fr; }

@media (min-width: 600px) {

main { grid-template-columns: 2fr 1fr; }

}</code></pre>
<p>Media Queries in action on CodePen: <a rel="noopener" href="https://codepen.io/profstein/pen/wBKVvNE" target="_blank">https://codepen.io/profstein/pen/wBKVvNE</a></p>
<h3>Summary:</h3>
<p>Responsive Web Design changed how we build for the web—moving from fixed layouts and device-specific sites to flexible, unified designs that adapt to any screen. By using RWD techniques, we can create pages that are both functional and look good across the full range of devices used to visit websites today.</p>