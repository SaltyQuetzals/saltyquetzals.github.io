<script lang="ts">
	export let name: string;
	export let linkToDetails: string;
	export let tagline: string;
	export let imgSrc: string;
	export let imgAlt: string | undefined;
</script>

<a class="link-to-details" href={linkToDetails}>
	<div class="w-full h-full">
		<div class="project-content">
			<div class="aspect-video">
				<img class="w-full h-full object-cover" src={imgSrc} alt={imgAlt} />
			</div>
			<div class="project-description my-4 p-2">
				<h3 class="project-name text-3xl font-bold">{name}</h3>
				<p class="project-tagline text-2xl text-[#828282]">
					{tagline}
				</p>
			</div>
		</div>
	</div>
</a>