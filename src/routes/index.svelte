<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<main>
	<div class="m-auto max-w-xl text-center">
		<h1 class="text-black mb-12">Hi, I'm <span class="text-blue">Gabriel</span>.</h1>
		<p class="text-2xl pb-32">
			I'm a software engineer passionate about <abbr title="Augmented Reality">AR</abbr>. I
			currently work at Microsoft, and recently earned my master's degree in
			<abbr title="Human-Computer Interaction">HCI</abbr>
			at
			<a href="https://gatech.edu" target="_blank">Georgia Tech</a>. Formerly at
			<a href="https://google.com" target="_blank">Google</a>.
		</p>
	</div>
	<div>
		<h2>Cool Work I've Done</h2>
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
	</div>
</main>