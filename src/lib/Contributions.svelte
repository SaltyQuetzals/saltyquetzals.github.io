<script lang="ts">
	export let whatIDid: string[] | null;
	export let toolsIUsed: string[] | null;
	export let teammates: string[] | null;
</script>

<div class="flex justify-around">
	{#if whatIDid}
		<div class="mt-8">
			<span class="text-2xl font-bold">WHAT I DID</span>
			<ul class="m-0 list-none p-0">
				{#each whatIDid as thingIDid}
					<li class="list-none pt-2">{thingIDid}</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if toolsIUsed}
		<div class="mt-8">
			<span class="text-2xl font-bold">TOOLS I USED</span>
			<ul class="m-0 list-none p-0">
				{#each toolsIUsed as toolIUsed}
					<li class="list-none pt-2">{toolIUsed}</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if teammates}
		<div class="mt-8">
			<span class="text-2xl font-bold">MY TEAMMATES</span>
			<ul class="m-0 list-none p-0">
				{#each teammates as teammate}
					<li class="list-none pt-2">{teammate}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>