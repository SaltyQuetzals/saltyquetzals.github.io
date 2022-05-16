<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<div class="grid grid-cols-2 gap-6">
	<ProjectCard
		name="Microsoft Mesh"
		linkToDetails="https://microsoft.com/en-us/mesh"
		tagline="Supporting real-time AR collaboration with Microsoft HoloLens."
		imgSrc="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWxwIX"
		imgAlt="Two people wearing Hololenses interacting with a visualization of a car and two avatars representing other users."
	/>
	<ProjectCard
		name="Captioning on Glass: Group Conversations"
		linkToDetails="/projects/cog"
		tagline="Using head-worn displays to caption group conversations."
		imgSrc="/muc.webp"
		imgAlt="The preliminary prototype for this project, displaying 4 people around a table, with live, automatic captions displayed at the bottom of the screen."
	/>
	<ProjectCard
		name="Passt"
		linkToDetails="/projects/passt"
		tagline="Compete with your friends in a real-time puzzle game!"
		imgSrc="/isaset.webp"
		imgAlt="A screen capture of the game in production."
	/>
	<ProjectCard
		name="SSBM Character Tracker"
		linkToDetails="/projects/ssbmml"
		tagline="Tracking Super Smash Bros. Melee characters using computer vision!"
		imgSrc="/ssbmml.webp"
		imgAlt="An automatically-labeled frame from a Super Smash Bros. Melee tournament."
	/>
	<ProjectCard
		name="ACM Publication: Design is (A)live"
		linkToDetails="/projects/design-is-alive"
		tagline="Researching how software can support iterative design education."
		imgSrc="/livemache.webp"
		imgAlt="A snapshot of a student's work (taken with permission). The student has divided their work into sections for each milestone they needed to submit. Older sections are smaller, while more recent sections are more prominent. The student has drawn arrows to link older section ideas to newer section ideas."
	/>
	<ProjectCard
		name="Ouroboros"
		linkToDetails="/projects/ouroboros"
		tagline="Hackathon registration. Simplified."
		imgSrc="/ouroboros.webp"
		imgAlt="A screenshot of the login page for Ouroboros."
	/>
</div>
