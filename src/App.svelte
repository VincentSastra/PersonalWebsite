<script>
	import { slide } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { onMount } from "svelte";

	import "tailwindcss/tailwind.css";
	import "styles/main.scss";
	import SkillTable from "./SkillTable.svelte";

	function preload() {
		return new Promise(async (resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = "ProfilePhoto.JPG";
		});
	}

	let y;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<script
		src="https://kit.fontawesome.com/b43798ce01.js"
		crossorigin="anonymous"></script>
</svelte:head>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
	rel="stylesheet"
/>

<div
	class="text-white z-50 flex flex-row justify-end fixed w-screen top-0 pr-4"
>
	<div class="navigation-button">Skills</div>
	<div class="navigation-button">Portfolio</div>
	<div class="navigation-button">Contact</div>
	<div class="navigation-button">Resume</div>
</div>

<div class="flex content-center p-12 md:p-24 2xl:my-0 min-h-screen">
	{#await preload() then _}
		<div
			transition:slide={{ delay: 0, duration: 2000, easing: quintOut }}
			class="flex-col 2xl:flex-row flex-nowrap flex m-auto"
		>
			<div class="flex-grow content-center flex">
				<div
					class="text-white m-auto flex flex-grow flex-col max-w-4xl 2xl:mr-20"
				>
					<div class="text-5xl md:text-8xl pb-6 md:pb-12 2xl:pl-16">
						Hi, I'm
					</div>
					<div
						class="text-6xl md:text-9xl pb-6 md:pb-12 2xl:pl-36 font-extrabold text-center 2xl:text-left max-w-4xl futura-bold"
					>
						Vincent!
					</div>
					<div
						class="text-xl pb-6 md:pb-12 md:text-4xl font-sans max-w-4xl"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
					<div
						class="pb-12 md:pb-24 flex-row flex justify-evenly 2xl:justify-start w-full"
					>
						<div class="icon-size">
							<i class="fab fa-github fa-3x 2xl:pr-8" />
						</div>
						<div class="icon-size">
							<i class="fab fa-linkedin fa-3x 2xl:pr-8" />
						</div>
						<div class="icon-size">
							<i class="fas fa-inbox fa-3x 2xl:pr-8" />
						</div>
					</div>
				</div>
			</div>
			<div class="flex-grow content-center flex photo-size mb-16 mr-16">
				<div class="m-auto pl-12 pt-16 photo-size relative">
					<div class="photo-size bg-primary">
						<div
							class="border-8 border-white photo-size relative -top-6 right-6 z-10"
						>
							<img
								class=" photo-size object-cover -top-8 right-6 relative z-20"
								src="ProfilePhoto.JPG"
								alt="profile"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/await}
</div>

<div
	style="opacity: {(100 - y) / 100}"
	class="fixed top-full w-full flex flex-row justify-center z-40"
>
	<div
		class="bg-primary flex justify-center content-center border-2 rounded-full
				w-20 h-20 -mt-32
				lg:w-32 lg:h-32 lg:-mt-48"
	>
		<i
			class="fas fa-arrow-down text-5xl flex h-12 my-4
					lg:h-24 lg:text-8xl lg:my-4
		"
		/>
	</div>
</div>

<div
	class="flex content-center p-12 md:p-24 2xl:my-0 2xl:h-screen bg-primary justify-center"
>
	<SkillTable />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer components {
		.photo-size {
			width: min(45vh, 60vw);
			height: min(63vh, 84vw);
		}
		.table-size {
			width: min(60vh, 90vw);
			height: min(63vh, 84vw);
		}
		.futura-bold {
			font-family: "FuturaBold", sans-serif;
		}
		.navigation-button {
			@apply px-2 lg:px-8 py-4 lg:py-8 text-sm lg:text-xl 2xl:text-3xl;
		}
		.icon-size {
			width: 4em;
			height: 3em;
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
	@font-face {
		font-family: "FuturaBold";
		font-style: bold;
		font-weight: 700;
		src: local("Futura-Bold");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
			U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}

	:global(body) {
		background-color: #2b4570;
		font-family: "Poppins", sans-serif;
		padding: 0px;
		@apply md:text-3xl text-xl;
	}
</style>
