<script>
	import Project from '$lib/Project.svelte';
</script>

<Project name="Ouroboros" description="Hackathon registration built by organizers, for organizers.">
	<svelte:fragment slot="hero-img">
		<img
			class="object-cover h-72 border-b-4"
			src="/ouroboros.webp"
			alt="The login page of our application."
		/>
	</svelte:fragment>
	<svelte:fragment slot="background">
		<p>
			<a href="https://tamuhack.org">TAMUhack</a> is a student organization that hosts Texas' largest
			intercollegiate hackathon at Texas A&M University every year. For 24 hours, students from across
			the country gather at Texas A&M to build prototype applications, get free food, company merchandise,
			and potentially win big prizes.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<section class="flex flex-col gap-4">
			<h2>Problem</h2>
			<p>
				Until I joined the team in 2019, the TAMUhack team handled this large event's registration
				process manually. While this had worked for previous iterations of the event, the projected
				headcount for the 2020 event was approximately 700 students, not including sponsors and team
				members. In addition, the organizing team was hoping to get statistics on how much food was
				consumed at each meal during the event, and company workshop popularity metrics.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Solution</h2>
			<p>
				I led the effort to design and develop <a href="https://github.com/tamuhack-org/Ouroboros"
					>Ouroboros</a
				>, an easy-to-deploy registration system designed with organizers in mind. Since its
				creation, Ouroboros has been used multiple times by different hackathon groups and has
				processed over 4,000 applications.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Implementation</h2>
			<p>
				When I implemented the registration system, I had 3 priorities: <i>extensibility</i>,
				<i>maintainability</i>, and <i>reliability</i>.
			</p>
			<section class="flex flex-col gap-2">
				<h3>Extensibility</h3>
				<p>
					TAMUhack is not unique in building a dedicated system to handle the registration process.
					The same task has been attempted again and again by various hackathon organizations across
					the country. However, the primary difference between Ouroboros and other hackathon
					registration systems is its initial and continued emphasis on configurability. Anything
					that could be considered specific to our event was abstracted into a variable or database
					table for others to modify.
				</p>
				<p>
					Ouroboros is intended to be a general, minimal solution. The needs of TAMUhack 2020 aren't
					the same as the needs of other teams in the future. These events are constantly evolving,
					and it was immediately evident that every aspect of the system needed to be designed so
					that it could be built upon if someone else needed something specific or didn't want to
					include something.
				</p>
				<figure class="p-2">
					<div class="flex flex-row items-start gap-2 overflow-x-scroll">
						<img
							src="/ouroboros.webp"
							alt="TAMUhack 2020 login page of Ouroboros"
							class="flex-none aspect-square object-cover"
						/>

						<img
							src="/ouroboros/version-howdyhack.webp"
							alt="HowdyHack 2020 login page of Ouroboros"
							class="flex-none aspect-square object-cover"
						/>

						<img
							src="/ouroboros/version-hacklahoma.webp"
							alt="Hacklahoma 2021 login page of Ouroboros"
							class="flex-none aspect-square object-cover"
						/>

						<img
							src="/ouroboros/version-kleinhacks.webp"
							alt="Kleinhacks 2021 login page of Ouroboros"
							class="flex-none aspect-square object-cover"
						/>
					</div>
					<figcaption class="italic font-serif text-center pt-2">
						The different events that have used Ouroboros since its creation.
					</figcaption>
				</figure>
				<p>
					To enforce modularity and extensibility, I chose to use Python as its implementation
					language and Django for the web server. Python is renowned for its approachable syntax and
					shallow learning curve, making it an excellent choice for teams trying to get things done.
					The Django web framework takes an opinionated approach towards building software, forcing
					developers to comply with its constraints in exchange for out-of-the-box functionality
					that could easily be extended by other teams or future developers.
				</p>
			</section>
			<section class="flex flex-col gap-1">
				<h3>Maintainability</h3>
				<p>
					Ouroboros was started in February 2019, roughly one year before I graduated. I wanted
					development and improvement of the project to continue after my departure from the
					university, so ensuring that it could easily be handed off to others was critical. This
					meant including documentation, using familiar technologies (another determining factor for
					using Python), and teaching future tech team members how the application worked when it
					was my time to leave.
				</p>
				<p>
					Since my last commit on April 17, 2020, the TAMUhack team has added 1,430 lines of code
					and removed 49 (at time of writing). The team has also configured the system to work for 4
					events since my departure without my involvement.
				</p>
			</section>
			<section class="flex flex-col gap-1">
				<h3>Reliability</h3>
				<p>
					The registration process for a hackathon is arguably the most important process in the
					entire event. It gathers resumes to share with sponsors (which has a direct implication on
					fundraising for future years), facilitates day-of logistics, and represents the
					professionalism of the organizing team to both applicants and corporate partners. Any
					software that claims to handle such an important process effortlessly needs to be
					rock-solid in terms of reliability.
				</p>
				<p>
					To that end, every feature developed for Ouroboros was built using a test-driven
					development mindset. Every feature that needed testing was tested on every change. Code
					that failed tests was not allowed to be deployed.
				</p>
				<p>
					To make sure that our system was always available, I built an automated continuous
					integration pipeline that deployed the system to Google Cloud Platform every time a
					developer made a change. By automating the process, I made sure that whatever changes we
					thought were ready for launch were launched instantly.
				</p>
			</section>
		</section>
	</svelte:fragment>
</Project>
