<script lang="ts">
	import { slide } from 'svelte/transition';
	let opened: boolean = false;
	const toggle = () => {
		opened = !opened;
	};
</script>

<header>
	<nav class="bg-white" class:invert={opened}>
		<div class="flex justify-between items-center border-b-2 border-b-black p-4">
			<a href="/" class="text-5xl font-bold flex items-center">gb</a>
			<span class="material-symbols-outlined text-5xl cursor-pointer" on:click={toggle}
				>{#if opened}close{:else}drag_handle{/if}</span
			>
		</div>
		{#if opened}
			<ul transition:slide={{ duration: 300 }} class="p-4">
				<li><a href="/projects">projects</a></li>
				<li><a href="/about">about</a></li>
				<li><a href="">resume</a></li>
			</ul>
		{/if}
	</nav>
</header>
