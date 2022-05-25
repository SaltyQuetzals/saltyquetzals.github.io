<script>
	import Project from '$lib/Project.svelte';
</script>

<Project name="Passt" description="A real-time puzzle game built with friends.">
	<svelte:fragment slot="hero-img">
		<img
			class="object-cover h-72 border-b-4"
			src="/isaset.webp"
			alt="The login page of our application."
		/>
	</svelte:fragment>
	<svelte:fragment slot="background">
		<p>
			This was just a for-fun personal project that a friend and I built in our free time in Spring
			2020. My friend had recently found the game Set, which is a real-time card game where people
			use pattern matching to identify groups of related cards. My friend and I wanted to experiment
			with some new web technologies, so we decided to build this game as a real-time multiplayer
			game.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<section class="flex flex-col gap-4">
			<h2>Implementation</h2>
			<p>
				While Florian was experimenting with Svelte on the frontend, I wanted to experiment with
				building a WebSocket server with solid type safety and high test coverage. Since this was
				going to be a small-scale project and didn't require an extreme amount of structure, I chose
				to go with TypeScript for the backend, powered by Node.js. I chose to use Socket.IO to
				simplify the process of handling WebSockets.
			</p>
			<p>
				To streamline the process of making changes to the game, I built an automated deployment
				system that compiled, tested, and deployed our code every time we pushed a change to GitHub.
				This significantly improved our overall developer experience, as each code change we made
				was live in a matter of minutes. Best of all? It didn't cost us a cent.
			</p>
			<figure class="p-2">
				<img
					src="/passt/architecture.webp"
					alt="A flowchart of our free-tier architecture"
					class="flex-none aspect-square object-cover"
				/>
			</figure>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Challenges</h2>
			<section class="flex flex-col gap-2">
				<h3>Socket Disconnections</h3>
				<p>
					One thing that became immediately important was handling random socket disconnections that
					could emerge when a person switched networks, or minimized the browser window on their
					mobile device. If a person got disconnected and reconnected, they lost all of their points
					and progress and there was no way of getting them back. To persist data during socket
					disconnections, we set up a PostgreSQL database, and used browser cookies to re-identify
					users.
				</p>
			</section>
			<section class="flex flex-col gap-2">
				<h3>Keeping it Free</h3>
				<p>
					Since neither Florian nor I wanted to spend money on this project beyond a domain name, we
					had to figure out a way of hosting the frontend and WebSocket server for free. Ultimately,
					we decided to host the frontend on GitHub Pages, and run the backend on Heroku, which let
					us operate comfortably within their free tiers.
				</p>
			</section>
			<p>
				I led the effort to design and develop <a href="https://github.com/tamuhack-org/Ouroboros"
					>Ouroboros</a
				>, an easy-to-deploy registration system designed with organizers in mind. Since its
				creation, Ouroboros has been used multiple times by different hackathon groups and has
				processed over 4,000 applications.
			</p>
		</section>
	</svelte:fragment>
</Project>
