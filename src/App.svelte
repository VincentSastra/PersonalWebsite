<script>
	import "tailwindcss/tailwind.css";
	import "styles/main.scss";
	let name = "world";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
	rel="stylesheet"
/>

<div class="text-white flex flex-row justify-end fixed w-screen top-0 pr-4">
	<div class="navigation-button">Skills</div>
	<div class="navigation-button">Portfolio</div>
	<div class="navigation-button">Contact</div>
	<div class="navigation-button">Resume</div>
</div>

<div class="flex content-center m-12 md:m-24 2xl:my-0 2xl:h-screen">
	<div class="flex-col 2xl:flex-row flex-nowrap flex m-auto">
		<div class="flex-grow content-center flex">
			<div class="text-white m-auto flex flex-grow flex-col max-w-4xl 2xl:mr-20">
				<div class="text-5xl md:text-8xl pb-6 md:pb-12 2xl:pl-16">Hi, I'm</div>
				<div class="text-6xl md:text-9xl pb-6 md:pb-12 2xl:pl-36 font-extrabold text-center 2xl:text-left max-w-4xl futura-bold">
					Vincent!
				</div>
				<div class="text-xl pb-12 md:pb-24 md:text-4xl font-sans max-w-4xl">
					<span class="font-bold text-2xl md:text-5xl">Software Engineer</span><br /> 
					<span class="font-bold">University of British Columbia</span>
				</div>
			</div>
		</div>
		<div class="flex-grow content-center flex">
			<div class="m-auto">
				<img class="photo-size object-cover absolute z-20" src="ProfilePhoto.JPG" alt="profile" />
				<div class="p-6 sm:p-12 h-0">
					<div class="border-8 border-white photo-size absolute z-10" />
				</div>
				<div class="pl-12 sm:pl-24">
					<div class="photo-size bg-primary"></div>
				</div>
			</div>
		</div>
	</div>
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
		.futura-bold {
			font-family: "FuturaBold", sans-serif;
		}
		.navigation-button {
			@apply px-2 lg:px-8 py-4 lg:py-8 text-sm lg:text-xl 2xl:text-3xl
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
	}
</style>
