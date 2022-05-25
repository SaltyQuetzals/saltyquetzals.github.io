<script>
	import Project from '$lib/Project.svelte';
</script>

<Project
	name="SSBM + Machine Learning"
	description="Automatic identification of Super Smash Bros. Melee characters."
>
	<svelte:fragment slot="hero-img">
		<img
			class="object-cover h-72 border-b-4"
			src="/ssbmml.webp"
			alt="An automatically-labeled frame of a Super Smash Bros Melee game."
		/>
	</svelte:fragment>
	<svelte:fragment slot="background">
		<p>
			With COVID forcing me to spend more time at home, I had a whole lot more time on my hands and
			I wanted to keep my mind occupied during quarantine. One project that I had seen on GitHub was
			Adam Spannbauer's <a href="https://adamspannbauer.github.io/2017/12/28/super-smash-cv/"
				>ssbm_fox_detector</a
			>, which uses machine learning to track a specific video game character on a tournament
			recording. I felt like the project's focus was narrow, and wanted to expand it to include all
			of the characters in the video game, not just one!
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<section class="flex flex-col gap-4">
			<h2>Problem</h2>
			<p>I needed to accomplish three things:</p>
			<ol class="list-decimal pl-8 font-serif">
				<li>Get my hands on as many decent-quality tournament videos as I could find.</li>
				<li>
					Draw rectangles around each character visible on the screen on each video, and label each
					rectangle with the character's name
				</li>
				<li>
					Feed all of my data into a program, and teach the program what each character looked like.
				</li>
			</ol>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Solution</h2>
			<section class="flex flex-col gap-2">
				<h3>Part I: Data Acquisition</h3>
				<p>
					Luckily for me, passionate fans of the Super Smash Bros. franchise had already built
					vods.co, a “comprehensive video archive of competitive gaming matches”.
				</p>
				<figure>
					<img
						src="/ssbmml/vodsco.webp"
						alt="The home page for Super Smash Bros. Melee on vods.co"
					/>
					<figcaption>
						<a href="https://vods.co">vods.co</a>, the data source for the tournament videos I
						collected.
					</figcaption>
				</figure>
				<p>This site kept track of:</p>
				<ul class="list-disc pl-8 font-serif">
					<li>The names of the people competing in a match</li>
					<li>The characters being played in the match</li>
					<li>The link to a video of the match</li>
				</ul>
				<p>
					I needed to go through every match on the site, find the corresponding video, and download
					it onto my desktop computer. It'd take too long to do that by hand (there's tournament
					matches dating back to 2004), so I wrote a simple script that did that for me! All the
					program did was pretend to be a regular person using their computer:
				</p>
				<ol class="list-decimal pl-8 font-serif">
					<li>Click on each page of matches</li>
					<li>Click on each individual match on the page</li>
					<li>Extract the necessary data from the page</li>
					<li>Download the tournament video, keeping track of everything in a big spreadsheet</li>
				</ol>
				<p>
					After I had the videos downloaded, I split each video into as many pictures as I could fit
					on my computer. Now all I had to do was draw rectangles around the Smash Bros. character
					in each picture!
				</p>
			</section>
			<section class="flex flex-col gap-2">
				<h3>Part II: Data Labeling</h3>
				<p>
					I downloaded hours and hours of videos, which transformed into hundreds of thousands of
					pictures. For each picture, rectangles needed to be drawn around all of the characters
					present on-screen. This was a lot of rectangles, too many for me to draw on my own by
					hand. I needed some help.
				</p>
				<p>
					Luckily, I had some awesome friends who told me about a process that would help me speed
					up my rectangle-drawing. The process is called bootstrapping, and to simplify it as much
					as possible, here's how it works:
				</p>
				<ol class="list-decimal pl-8 font-serif">
					<li>I needed to draw roughly 1,000 rectangles around characters by hand.</li>
					<li>
						I then needed to feed the rectangles into the program that I wanted to draw perfect
						rectangles.
					</li>
					<li>
						I pretend like the program knows what it's talking about, and give it some pictures it
						hasn't seen before, and ask it to draw rectangles for me. Since the program doesn't know
						what the characters look like, it makes some pretty bad guesses. But it can draw bad
						rectangles really fast, which is better than nothing!
					</li>
					<li>
						I go through the program's bad rectangles, and refine them to an acceptable level.
					</li>
					<li>I combine the new rectangles with the rectangles created thus far, and repeat.</li>
				</ol>
				<p>
					As time goes on, my program gets better at drawing rectangles, which means I have to draw
					fewer rectangles by hand. The process looks a lot like this:
				</p>
				<figure>
					<img
						src="/ssbmml/process_diagram.webp"
						alt="A flowchart describing the bootstrapping process."
					/>
					<figcaption>
						The bootstrapping process I used to create a significant number of labels with minimal
						effort.
					</figcaption>
				</figure>
			</section>
			<section class="flex flex-col gap-2">
				<h3>Part III: Machine Learning</h3>
				<p>
					I'm not a machine learning expert, by any means. Rather than spend a ton of time learning
					about machine learning and get really in-depth about the subject, I tried to keep my
					knowledge shallow enough to move fast. So I went online, found a tutorial, and ripped out
					the parts I needed to get the job done. All that remained was to see how the results shook
					out!
				</p>
			</section>
		</section>
	</svelte:fragment>
</Project>
