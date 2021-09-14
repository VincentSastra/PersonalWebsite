<script>
	export let data
</script>

<div class="bg-ltorange p-8 mx-work card-size">
	<div class="text-2xl">{data.company}</div>
	<div class="text-2xl font-bold mb-12">{data.job}</div>
	<div class="text-lg">{data.description}</div>
</div>

<style>
	.card-size {
		width: 32vw;
		height: 20vw;
	}
</style>