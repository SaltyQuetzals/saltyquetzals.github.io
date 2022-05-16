<script lang="ts">
	export let name: string;
</script>

<section>
	<h2 class="uppercase tracking-widest">{name}</h2>
	<slot name="content" />
</section>
