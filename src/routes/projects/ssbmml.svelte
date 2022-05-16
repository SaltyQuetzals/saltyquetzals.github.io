<script lang="ts">
	import Contributions from '$lib/Contributions.svelte';
	import Project from '$lib/Project/index.svelte';
	import Section from '$lib/Project/Section.svelte';
</script>

<Project
	projectTitle="SSBM + Machine Learning"
	projectDescription="Automatic identification of Super Smash Bros. Melee characters."
>
	<svelte:fragment slot="hero-image"
		><img
			src="/ssbmml.webp"
			alt="An automatically-labeled frame from a Super Smash Bros. Melee tournament."
		/></svelte:fragment
	>
	<svelte:fragment slot="contributions">
		<Contributions
			whatIDid={['Dataset Construction', 'Model Training', 'Data Labeling', 'Data Augmentation']}
			toolsIUsed={['Python', 'PyTorch', 'CVAT', 'FFmpeg']}
			teammates={null}
		/>
	</svelte:fragment>
	<svelte:fragment slot="discussion">
		<Section name="background">
			<svelte:fragment slot="content">
				<p>
					With COVID forcing me to spend more time at home, I had a whole lot more time on my hands
					and I wanted to keep my mind occupied during quarantine. One project that I had seen on
					GitHub was
					<a href="https://adamspannbauer.github.io/2017/12/28/super-smash-cv/" target="_blank"
						>Adam Spannbauer's ssbm_fox_detector</a
					>, which uses machine learning to track a specific video game character on a tournament
					recording. I felt like the project's focus was narrow, and wanted to expand it to include
					all of the characters in the video game, not just one!
				</p>
			</svelte:fragment>
		</Section>
		<Section name="problem">
			<svelte:fragment slot="content">
				<p>To accomplish my goal, I needed to think BIG. I needed to accomplish three things:</p>
				<ol>
					<li>Get my hands on as many decent-quality tournament videos as I could find.</li>
					<li>
						Draw rectangles around each character visible on the screen on each video, and label
						each rectangle with the character's name
					</li>
					<li>
						Feed all of my data into a program, and teach the program what each character looked
						like.
					</li>
				</ol>
			</svelte:fragment>
		</Section>
		<Section name="solution">
			<svelte:fragment slot="content">
				<h3>PART I: GETTING THE DATA</h3>
				<p>
					I went through a lot of trial and error figuring out how to get my hands on as many videos
					of Super Smash Bros Melee tournament matches as I could find. Ultimately, the approach I
					settled on was downloading those videos from YouTube, Twitch, and Vimeo.
				</p>
				<p>
					Luckily for me, passionate fans of the Super Smash Bros. franchise had already built <a
						href="https://vods.co"
						target="_blank">vods.co</a
					>, a “comprehensive video archive of competitive gaming matches”.
				</p>
				<figure class="m-auto">
					<img src="/ssbmml/vodsco.webp" alt="A screenshot of the vods.co website." />
					<figcaption>
						<a href="https://vods.co" target="_blank">vods.co</a>, the data source for the
						tournament videos I collected.
					</figcaption>
				</figure>
				<p>This site kept track of:</p>
				<ul>
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
				<ul>
					<li>Click on each page of matches</li>
					<li>Click on each individual match on the page</li>
					<li>Extract the necessary data from the page</li>
					<li>Download the tournament video, keeping track of everything in a big spreadsheet.</li>
				</ul>
				<p>
					After I had the videos downloaded, I split each video into as many pictures as I could fit
					on my computer. Now all I had to do was draw rectangles around the Smash Bros. character
					in each picture!
				</p>
				<h3>PART II: PLEASE, NO MORE RECTANGLES</h3>
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
				<ol>
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
						class="m-auto"
						src="/ssbmml/process_diagram.webp"
						alt="A visual representation of the bootstrapping process for the frame dataset."
					/>
					<figcaption>
						The bootstrapping process I used to create a significant number of labels with minimal
						effort.
					</figcaption>
				</figure>
				<p>Now I just rinse and repeat, over and over, until I have enough rectangles!</p>
				<h3>PART III: THE EASY PART</h3>
				<p>
					I'm not a machine learning master, by any means. Rather than spend a ton of time learning
					about machine learning and get really in-depth about the subject, I tried to keep my
					knowledge shallow enough to move fast. So I went online,
					<a
						href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html"
						target="_blank">found a tutorial</a
					>, and ripped out the parts I needed to get the job done. All that remained was to see how
					the results shook out!
				</p>
				<div class="video-container">
					<video src="/ssbmml/video_output.mp4" controls muted />
				</div>
			</svelte:fragment>
		</Section>
	</svelte:fragment>
</Project>
