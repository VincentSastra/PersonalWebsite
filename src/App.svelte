<script>
	let name = "world";
</script>

<div class="fixed w-full bg-orange flex py-2 ">
	<div class="flex-grow flex justify-center content-center text-4xl my-auto">
		<div class="bg-black rounded-full h-8 w-8 my-auto mr-2" /> Vincent Sastra
	</div>
	<div class="flex-grow flex justify-evenly content-center text-xl m-auto">
		<div>Skills</div>
		<div>Portfolio</div>
		<div>Contact</div>
		<div>Resume</div>
	</div>
</div>

<div class="h-full">
	<h1>Hello {name}!</h1>
</div>
<div class="h-full">
	<h1>Hello {name}!</h1>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	:global(body) {
		background-color: #2B4570;
		@apply m-0 p-0;
	}
</style>
