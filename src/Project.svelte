
<script>
	export let data
	export let closePopup

	let showBlock = false;
</script>

<div class="flex flex-col content-center mt-16" on:click={() => {
		if (showBlock) {
			showBlock = false;
			closePopup = () => {};
		} else {
			closePopup()
			showBlock = true;
			closePopup = () => { showBlock = false }
		}
	}}>
	<img class="portfolio-size object-cover mx-auto" alt="project" src="https://via.placeholder.com/350" />
	<div class="text-center text-4xl mt-8">{data.title}</div>
	<div class="text-center text-lg italic font-extralight mt-2">{data.type}</div>
</div>

<div class={showBlock ? "projectInfo show" : "projectInfo hide"}>

	{data.title}
</div>

<style>
	@tailwind utilities;
	@layer utilities {
		.projectInfo {
			grid-column: 1 / -1;
			transition: height 1s;
			@apply bg-ltorange;
		}
		.projectInfo.show {
			height: 50vh;

		}
		.projectInfo.hide {
			height: 0px;
			overflow: hidden;
		}
	}
</style>