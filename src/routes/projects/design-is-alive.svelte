<script>
	import Project from '$lib/Project.svelte';
</script>

<Project
	name="Design is (A)live"
	description="How can software support iterative design education?"
>
	<svelte:fragment slot="hero-img">
		<img
			class="object-cover h-72 border-b-4"
			src="/livemache.webp"
			alt="A snapshot of a student's work (taken with permission). The student has divided their work into sections for each milestone they needed to submit. Older sections are smaller, while more recent sections are more prominent. The student has drawn arrows to link older section ideas to newer section ideas."
		/>
	</svelte:fragment>
	<svelte:fragment slot="background">
		<p>
			Design education frequently consists of open-ended, creative coursework that requires students
			to take risks, sometimes fail, and reflect on how to improve. As design students progressively
			develop and evaluate their solutions, their understanding of the problem improves, which
			improves their future solutions.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<section class="flex flex-col gap-4">
			<h2>Problem</h2>
			<p>
				Oftentimes, design instructors lean on traditional digital submission and assessment systems
				to evaluate their students' work. While great for more close-ended work, these systems
				struggle to capture design students' iterative refinement process, instead presenting only
				static snapshots of a student's work before a submission deadline, making it difficult for
				instructors to evaluate their students' process, which they value more than the end
				solution.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Approach</h2>
			<p>
				I used an <a href="https://livemache.ecologylab.net"
					>existing collaborative design software named LiveMâché</a
				>
				to study the iterative design habits of students, and determine how instructors interacted with
				their students' work. I developed functionality that allowed students to submit their work, instructors
				to see how a student's work changed over time, and annotate a student's work in real-time. I
				incorporated an email system to notify students and instructors of successful submissions. My
				features were deployed to two design courses (each around 15 students), one in South Korea at
				<a href="https://www.kaist.ac.kr/en/html/kaist/01.html">KAIST</a>, and another at
				<a href="https://tamu.edu/">Texas A&M University</a>
				in College Station, Texas.
			</p>
			<figure class="p-2">
				<div class="flex flex-col items-start gap-2">
					<img
						src="/design-is-alive/submission_new_submission.webp"
						alt="The submission dialog for submitting a new version of the student's work. The student has selected an assignment to submit to, and what they want their instructor to see. They have not filled out their name yet."
						class="flex-1"
					/>
					<img
						src="/design-is-alive/submission_previous_versions.webp"
						alt="The submission dialog for viewing a previous version of the student's work. The student has selected an assignment that they've previously submitted to."
						class="flex-1"
					/>
				</div>
				<figcaption class="italic font-serif text-center pt-2">
					The dialog through which students could submit their work, and review previous
					submissions.
				</figcaption>
			</figure>
		</section>
		<section class="flex flex-col gap-4">
			<h2>Results</h2>
			<p>
				Instructors reported that the functionality I developed helped them feel as though they were
				a part of the students' design process, and helped them feel more engaged in each students'
				work. Students reported that my features helped them reframe how they thought about their
				work, transforming it into a living work that transforms over time.
			</p>
			<p>
				That being said, both students and instructors felt that certain features (like reviewing
				prevous submissions) could be improved to be on par with existing digital submission and
				assesment systems.
			</p>
			<p>
				In general, what we found is that integrating assessment into the ideation process enhances
				students' and instructors' understandings of design processes and progress. Future design
				systems should enable instructors to leave feedback on designs and notify students, and let
				students notify instructors when feedback has been resolved.
			</p>
			<p>
				If you'd like to read the actual paper, check it out on <a
					href="https://dl.acm.org/doi/abs/10.1145/3334480.3382947">ACM's Digital Library</a
				>!
			</p>
		</section>
	</svelte:fragment>
</Project>
