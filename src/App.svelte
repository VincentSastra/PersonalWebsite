<script>
import Project from "./Project.svelte";

</script>

<div class="fixed w-full bg-orange flex py-2 ">
	<div class="flex-grow flex justify-center content-center text-4xl my-auto">
		<div class="bg-black rounded-full h-8 w-8 my-auto mr-2" /> Vincent Sastra
	</div>
	<div class="flex-grow flex justify-evenly content-center text-2xl m-auto">
		<div>Skills</div>
		<div>Portfolio</div>
		<div>Contact</div>
		<div>Resume</div>
	</div>
</div>

<div class="min-h-full min-w-full flex bg-black text-white">
	<div class="flex flex-col flex-grow flex-basis-0 justify-center pl-16">
		<div class="text-6xl mb-8">Hi, it's me</div>
		<div class="text-9xl mb-8 flex">Vincent<div class="w-8 h-8 bg-orange rounded-full ml-2 mb-2 my-auto"></div></div>
		<div class="text-6xl mb-4">A software developer</div>
		<div class="text-2xl">In proident minim ut reprehenderit consequat culpa labore.</div>
		<div class="text-2xl">Ad tempor veniam eu est ut eu minim elit.</div>
	</div>
	<div class="flex flex-col flex-grow min-w-0 flex-basis-0 justify-center">
		<img class="max-h-96 object-cover px-24" src="https://via.placeholder.com/150" alt="me" />
	</div>
</div>

<div class="min-w-full flex flex-col bg-white text-black pb-32">
	<div class="p-6 mt-12 text-6xl">My Portfolio</div>
	<div class="grid portfolio-grid">
		<Project />
		<Project />

		<Project />
		<Project />

		<Project />
		<Project />
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.flex-basis-0 {
			flex-basis: 0;
		}

		.portfolio-size {
			height: 580px;
			width: 340px;
		}
		.portfolio-grid {
			grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		}
	}
	:global(body) {
		background-color: #2B4570;
		@apply m-0 p-0;
	}
</style>
