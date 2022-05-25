<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<main>
	<section class="bg-blue border-b-4">
		<div class="m-auto w-fit p-8 flex flex-col gap-6">
			<h1>Hi, I'm <span class="font-bold">Gabriel</span></h1>

			<p class="text-xl">
				Software engineer @ <a class="underline font-bold" href="https://microsoft.com/en-us/mesh"
					>Microsoft XR</a
				>
			</p>
			<p class="text-xl">
				MS-HCI @ <a class="underline font-bold" href="https://mshci.gatech.edu">Georgia Tech</a>
			</p>
			<p class="text-xl">
				<a class="underline font-bold" href="https://tamu.edu">Texas A&amp;M</a> former student
			</p>
		</div>
	</section>
	<section class="bg-green border-b-2">
		<div class="m-auto w-fit p-8 flex flex-col gap-6">
			<h1 class="font-bold">Cool Work</h1>
			<div class="grid sm:grid-cols-2 md:grid-cols-3 p-0 gap-4">
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
		</div>
	</section>
</main>
