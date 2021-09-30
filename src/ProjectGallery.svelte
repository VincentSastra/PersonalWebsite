
<script>
    import Project from "./Project.svelte";
    import * as data from './data.json';

    let closePopup = () => {}
</script>

<div class="min-w-full flex flex-col bg-white text-black pt-20 pb-20">
	<div class="pl-st mt-12 text-6xl">My Portfolio</div>
	<div class="grid portfolio-grid">
		{#each data.projects as project}
			<Project bind:closePopup data={project}/>
		{/each}
	</div>
</div>