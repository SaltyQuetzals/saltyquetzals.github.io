<script lang="ts">
	export let projectTitle: string;
	export let projectDescription: string;
</script>

<div class="mb-10">
	<h1>{projectTitle}</h1>
	<p class="text-3xl">{projectDescription}</p>
</div>
<div>
	<slot name="hero-image" />
	<slot name="contributions" />
</div>

<slot name="discussion" />
