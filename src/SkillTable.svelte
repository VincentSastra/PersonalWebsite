<script>
	import { fly, fade } from "svelte/transition";

	let activeTab = 0;

	let data = [
		{
			key: "General Skills",
			value: ["JavaScript", "SQL", "AWS", "Linux", "Git"],
			active: true,
		},
		{
			key: "Programming Language",
			value: ["JavaScript", "Java", "Python", "C#", "Golang", "HTML", "CSS"],
			active: false,
		},
		{
			key: "Web Development",
			value: ["React", "Node", "JavaScript", "HTML", "CSS", "GraphQL", "Svelte", "SCSS", "Tailwind"],
			active: false,
		},
		{
			key: "Automation and Deployment",
			value: ["Jenkins", "Docker", "Kubernetes", "Helm Chart", "AWS", "Linux"],
			active: false,
		},
		{
			key: "Game Development",
			value: ["Unity", "C#"],
			active: false,
		},
		{
			key: "Mobile Development",
			value: ["Android", "iOS", "Flutter"],
			active: false,
		},
	];

	let outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

{#if outerWidth > 1100}
	<div class="flex flex-row text-white z-10">
		<div class="flex flex-col z-10 mt-1 ">
			{#each data as row, i}
				<div
					on:click={() => (activeTab = i)}
					class="p-4 z-10  border-l-4 border-opacity-30 transition-all
					{activeTab === i ? 'bg-secondary' : 'border-secondary '}
				"
				>
					{row.key}
				</div>
			{/each}
		</div>
		<div>
			<div class="absolute p-8 sm:p-14">
				<div class="bg-none table-size absolute border-8 z-0" />
			</div>
		</div>
		<div class="bg-tertiary m-1 p-8 table-size z-10">
			{#each data as row, i}
				<div class="absolute table-size h-auto grid grid-cols-2 place-content-evenly">
					{#if i === activeTab}
						{#each row.value as item}
							<div in:fly={{ y: 200, duration: 1000 }} out:fade>
								• {item}
							</div>
						{/each}
					{/if}
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div class="flex flex-col text-white z-10 w-full max-w-lg">
		{#each data as row}
			<div
				on:click={() => (row.active = !row.active)}
				class="p-2 bg-secondary z-10 w-full border-t-2 border-primary transition-all"
			>
				{row.key}
			</div>
			<div
				class="border-l-8 border-secondary border-opacity-40 bg-tertiary p-2 transition-all overflow-hidden
					{row.active ? '' : 'h-0 p-0'}
				"
			>
				{#each row.value as item}
					<div class="z-10">{item}</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}
