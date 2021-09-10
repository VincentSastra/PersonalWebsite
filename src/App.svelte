<script>
import Project from "./Project.svelte";
import Skill from "./Skill.svelte";
import * as data from './data.json'
</script>

<div class="fixed w-full bg-white flex">
	<div class="flex w-full py-5 bg-orange bg-opacity-80">
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
</div>

<div class="min-h-full min-w-full flex bg-black text-white justify-center pt-20">
	<div class="flex flex-col justify-center pl-16">
		<div class="text-6xl mb-8">Hi, it's me</div>
		<div class="text-9xl mb-8 flex">Vincent<div class="w-8 h-8 bg-orange rounded-full ml-2 mb-4 my-auto"></div></div>
		<div class="text-6xl mb-4 title-color">A software developer</div>
		<div class="text-2xl">{data.landingText[0]}</div>
		<div class="text-2xl">{data.landingText[1]}</div>
	</div>
	<div class="flex flex-col min-w-0 justify-center">
		<div class="profile-picture" alt="me" />
	</div>
</div>

<div class="min-w-full flex flex-col bg-white text-black pb-32">
	<div class="p-6 pl-st mt-12 text-6xl">My Portfolio</div>
	<div class="grid portfolio-grid">
		{#each data.projects as project}
			<Project data={project}/>
		{/each}
	</div>
</div>

<div class="min-w-full min-h-full flex bg-white text-black">
	<div class="flex flex-col flex-grow flex-basis-0 skill-bg">
		<div class="text-6xl mb-10 pl-st pr-52 pt-36">me, myself, and i</div>
		<div class="text-2xl pl-st pr-52">{data.blurb}</div>
	</div>
	<div class="flex-grow flex-basis-0 flex justify-center">
		<div class="grid grid-cols-2 grid-rows-2 my-auto">
			{#each data.skills as skill }
				<Skill data={skill} />
			{/each}
		</div>
	</div>
</div>
<!-- 
<div class="min-w-full min-h-full">
	<div>My Timeline</div>
	<div class="w-full block">
		{#each data.timeline as event, i}
			<div class="flex w-full">
				{#if i % 2 === 0}
					<div class="flex-basis-0 flex-grow border-r-2" >{event.date}</div>
					<div class="flex-basis-0 flex-grow">{event.company}</div>
				{:else}
					<div class="flex-basis-0 flex-grow border-r-2">{event.company}</div>
					<div class="flex-basis-0 flex-grow">{event.date}</div>
				{/if}
			</div>
		{/each}
	</div>
</div> -->

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.flex-basis-0 {
			flex-basis: 0;
		}
		.profile-picture {
			width: 500px;
			height: 500px;
			background-size: cover;
			background-image: url(profile.png);
			box-shadow: 0 -70px 96px 0px black inset;
		}
		.portfolio-size {
			height: 580px;
			width: 340px;
		}
		.portfolio-grid {
			grid-auto-rows: 1fr;
			grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		}
		.skill-bg {
			background-image: linear-gradient(132.24deg, rgba(242, 92, 84, 0.8) -9.32%, rgba(244, 132, 95, 0.854167) 35.28%, rgba(247, 157, 101, 0.530744) 77.17%, rgba(247, 178, 103, 0) 120.41%);;
		}
		.title-color {
			background-image: linear-gradient(350deg, #E5E5E5, #F27059);			
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		src: url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
			U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}
	:global(body) {
		font-family: "Poppins", sans-serif;
		@apply m-0 p-0 bg-white;
	}
</style>
