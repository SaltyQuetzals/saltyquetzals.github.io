<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<main class="bg-yellow">
	<h1 class="pt-6 pl-6 font-bold">Projects</h1>
	<div class="grid gap-4 p-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
		<ProjectCard
			link="/projects/mesh"
			name="Microsoft Mesh"
			description="Supporting real-time AR collaboration with Microsoft HoloLens."
			imgSrc="/mesh.png"
			imgAlt="Two people wearing Hololenses interacting with a visualization of a car and two avatars representing other users."
		/>
		<ProjectCard
			link="/projects/cog"
			name="Captioning on Glass"
			description="Using head-worn displays to caption group conversations."
			imgSrc="/cog.webp"
			imgAlt="The preliminary prototype for this project, displaying 4 people around a table, with live, automatic captions displayed at the bottom of the screen."
		/>
		<ProjectCard
			link="/projects/passt"
			name="Passt"
			description="Compete with your friends in a real-time puzzle game!"
			imgSrc="/isaset.webp"
			imgAlt="A screen capture of our game in production."
		/>
		<ProjectCard
			link="/projects/ssbmml"
			name="SSBM Character Tracker"
			description="Tracking Super Smash Bros. Melee characters using computer vision!"
			imgSrc="/ssbmml.webp"
			imgAlt="An automatically-labeled frame from a Super Smash Bros. Melee tournament."
		/>
		<ProjectCard
			link="/projects/design-is-alive"
			name="Design is (A)live"
			description="Researching how software can support iterative design education."
			imgSrc="/livemache.webp"
			imgAlt="A snapshot of a student's work (taken with permission). The student has divided their work into sections for each milestone they needed to submit. Older sections are smaller, while more recent sections are more prominent. The student has drawn arrows to link older section ideas to newer section ideas."
		/>
		<ProjectCard
			link="/projects/ouroboros"
			name="Ouroboros"
			description="Hackathon registration. Simplified."
			imgSrc="/ouroboros.webp"
			imgAlt="A screenshot of the login page for Ouroboros."
		/>
	</div>
</main>
