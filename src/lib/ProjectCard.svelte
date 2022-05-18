<script lang="ts">
	export let imgSrc: string;
	export let imgAlt: string;
	export let name: string;
	export let description: string;
</script>

<div class="border-2 rounded-xl bg-white w-full overflow-hidden hover:shadow-solid">
	<img src={imgSrc} alt={imgAlt} class="border-b-2 aspect-video w-full object-cover" />

	<div class="p-4 flex flex-col gap-3">
		<h2 class="font-bold text-2xl">{name}</h2>
		<p>{description}</p>

		<i>Read More →</i>
	</div>
</div>
