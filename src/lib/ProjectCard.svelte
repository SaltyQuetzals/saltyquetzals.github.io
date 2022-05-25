<script lang="ts">
	export let link: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let name: string;
	export let description: string;
</script>

<a href={link}>
	<div
		class="transition border-4 bg-white w-full overflow-hidden hover:-translate-x-2 hover:-translate-y-2 hover:shadow-solid duration-150 min-h-full"
	>
		<img src={imgSrc} alt={imgAlt} class="border-b-4 aspect-video w-full object-cover" />

		<div class="p-4 flex flex-col gap-3">
			<h2 class="font-bold text-2xl">{name}</h2>
			<p>{description}</p>
		</div>
	</div>
</a>
