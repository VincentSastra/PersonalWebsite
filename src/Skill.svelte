<script>
	export let data
</script>

<div class="my-6">
	<div class="text-4xl font-bold mb-2">{data.title}</div>
	{#each data.list as item}
		<div class="text-4xl ml-2">└ <span class="text-2xl">{item}</span></div>
	{/each}
</div>