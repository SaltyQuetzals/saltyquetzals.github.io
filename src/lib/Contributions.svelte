<script lang="ts">
	export let roles: string[] | undefined;
	export let tools: string[] | undefined;
	export let team: string[] | undefined;
</script>

<div class="flex">
	{#if roles}
		<div>
			<h3>Roles</h3>
			<ul>
				{#each roles as role}
					<li>{role}</li>
				{/each}
			</ul>
		</div>
	{/if}
	{#if tools}
		<div>
			<h3>Tools</h3>
			<ul>
				{#each tools as tool}
					<li>{tool}</li>
				{/each}
			</ul>
		</div>
	{/if}
	{#if team}
		<div>
			<h3>Team</h3>
			<ul>
				{#each team as teammate}
					<li>{teammate}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
