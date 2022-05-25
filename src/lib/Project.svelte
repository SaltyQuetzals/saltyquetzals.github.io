<script lang="ts">
	export let name: string;
	export let description: string;
</script>

<main>
	<slot name="hero-img">
	</slot>
	<div class="flex flex-col p-8">
		<div class="flex flex-col items-start pb-8 gap-2 border-b-2">
			<h1 class="font-bold">{name}</h1>
			<span class="font-serif text-3xl">{description}</span>
		</div>
		<div class="flex flex-col gap-8 pt-8">
            <slot name="background"/>
			<slot name="content" />
		</div>
	</div>
</main>
