<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<main>
	<section class="bg-blue border-b-2">
		<div class="m-auto w-fit p-8 flex flex-col gap-6">
			<h1 class="font-bold">Hi, I'm <span class="text-white">Gabriel</span>.</h1>

			<p class="text-xl">
				Software engineer @ <a
					class="text-white underline font-bold"
					href="https://microsoft.com/en-us/mesh">Microsoft XR</a
				>
			</p>
			<p class="text-xl">
				MS-HCI @ <a class="text-white underline font-bold" href="https://mshci.gatech.edu"
					>Georgia Tech</a
				>
			</p>
			<p class="text-xl">
				<a class="text-white underline font-bold" href="https://tamu.edu">Texas A&amp;M</a> former student
			</p>
		</div>
	</section>
	<section class="bg-yellow border-b-2">
		<div class="m-auto w-fit p-8 flex flex-col gap-6">
			<h1 class="font-bold">Cool Work</h1>
			<div class="flex flex-col p-0 gap-4">
				<ProjectCard
					imgSrc="/mesh.png"
					imgAlt="Two people wearing Hololenses interacting with a visualization of a car and two avatars representing other users."
					name="Microsoft Mesh"
					description="Supporting real-time AR collaboration with Microsoft HoloLens."
				/>
				<ProjectCard
					imgSrc="/cog.webp"
					imgAlt="The preliminary prototype for this project, displaying 4 people around a table, with live, automatic captions displayed at the bottom of the screen."
					name="Captioning on Glass"
					description="Using head-worn displays to caption group conversations."
				/>
				<ProjectCard
					imgSrc="/livemache.webp"
					imgAlt="A snapshot of a student's work (taken with permission). The student has divided their work into sections for each milestone they needed to submit. Older sections are smaller, while more recent sections are more prominent. The student has drawn arrows to link older section ideas to newer section ideas."
					name="Design is (A)live"
					description="Researching how software can support iterative design education."
				/>
				<ProjectCard
					imgSrc="/ouroboros.webp"
					imgAlt="A screenshot of the login page for Ouroboros."
					name="Ouroboros"
					description="Hackathon registration. Simplified."
				/>
			</div>
		</div>
	</section>
</main>
