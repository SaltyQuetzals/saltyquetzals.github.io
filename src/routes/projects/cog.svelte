<script>
	import Contributions from '$lib/Contributions.svelte';
	import Project from '$lib/Project/index.svelte';
	import Section from '$lib/Project/Section.svelte';
</script>

<Project
	projectTitle={'Captioning on Glass: Group Conversations'}
	projectDescription={'How can head-worn displays caption group conversations?'}
>
	<svelte:fragment slot="hero-image">
		<img
			src="/muc.webp"
			alt="The preliminary prototype for this project, displaying 4 people around a table, with live, automatic captions displayed at the bottom of the screen."
		/>
	</svelte:fragment>
	<svelte:fragment slot="contributions">
		<Contributions
			whatIDid={['Prototype Implementation', 'Related Works Gathering', 'Academic Paper Writing']}
			toolsIUsed={['A-Frame (WebVR)', 'TypeScript', 'Webpack', 'HTML/CSS/JS']}
			teammates={['Ruchita Parmar', 'Thong Nguyen', 'Shrenil Sharma']}
		/>
	</svelte:fragment>

	<svelte:fragment slot="discussion">
		<Section name="background">
			<svelte:fragment slot="content">
				<p>
					As part of Dr. Thad Starner's Mobile &amp; Ubiquitous Computing class, I was part of a
					four-person team that were given a research problem and asked to come up with a solution
					over the course of the semester.
				</p>
			</svelte:fragment>
		</Section>
		<Section name="problem">
			<svelte:fragment slot="content">
				<p>
					Group conversations with hearing people can be a difficult social situation for people who
					are <abbr title="Deaf/hard-of-hearing">DHH</abbr>:
				</p>
				<ul>
					<li>
						It's hard to understand what's being said when more than one person speaks
						simultaneously
					</li>
					<li>It's difficult to interpret what people are saying when they're out of view</li>
				</ul>
				<p>
					Existing solutions like real-time captioning software are useful for one-on-one
					conversations, but are not as helpful in groups. Constantly looking at your phone to read
					transcriptions can also cause others to think you're being rude or inattentive. Recently,
					researchers have started using subtler technologies like
					<em>head-worn displays</em> (or smartglasses) to present captions discreetly, while allowing
					people with auditory impairments to keep their visual attention on the group conversation.
				</p>
				<p>
					However, because of how prior research was conducted, it's hard to say whether one method
					of real-time captioning is better than another. My team was tasked with building a
					low-cost way of standardizing the evaluation process of these different solutions.
				</p>
				<p>
					Any solution that we built would need to be easy to access (minimal/no download required),
					and be ecologically valid (meaning it actually reflected real-world group conversations).
				</p>
			</svelte:fragment>
		</Section>
		<Section name="solution">
			<svelte:fragment slot="content">
				<p>
					Our solution is a 3D virtual environment where the participant is sitting at a round table
					with four other avatars who are performing Blair MacIntyre's
					<a href="https://www.cc.gatech.edu/projects/ael/projects/4am.html" target="_blank"
						>Four Angry Men</a
					>, a short script where jurors are discussing a court case. The participant is presented
					with a muted video recording of each juror saying their line, as well as a simultaneous
					caption of their words.
				</p>
				<p>
					Rather than force the user to download a piece of software or expect them to have
					expensive equipment, we chose to build our software on the web, enabling easy access on
					mobile and desktop devices, as well as compatibility with VR headsets.
				</p>
			</svelte:fragment>
		</Section>
		<Section name="implementation">
			<svelte:fragment slot="content">
				<p>
					When we decided to build our project using web technologies, we felt like it was
					unnecessary to re-invent the wheel and write a full VR engine from scratch, and looked for
					existing technologies that would be helpful in accomplishing our goal. Due to the limited
					amount of time we had to complete the project, we needed something that had a low learning
					curve, but also had enough flexibility to go beyond a simple toy project. We then stumbled
					upon
					<a href="https://aframe.io">A-Frame</a>, which allowed us to get setup quickly and let us
					make fast modifications by changing HTML elements. As a bonus, our app worked on desktop,
					mobile, and VR headsets!
				</p>
				<p>
					From there, it was simply a matter of building the scene we wanted to show the user, and
					then synchronizing video feeds with their captions, to simulate the effect of being in a
					group conversation.
				</p>
			</svelte:fragment>
		</Section>
	</svelte:fragment>
</Project>
