<script>
	export let data
</script>

<div class="my-6 p-6">
	<div class="flex justify-start">
		<i class={data.icon} />
		<div class="text-4xl font-bold mb-2">{data.title}</div>
	</div>
	{#each data.list as item}
		<div class="text-4xl ml-2">└ <span class="text-2xl">{item}</span></div>
	{/each}
</div>

<style>
	i {
		margin: auto 15px;
		font-size: xx-large;
	}
</style>