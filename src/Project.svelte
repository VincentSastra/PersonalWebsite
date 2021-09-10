
<script>
	export let data
</script>

<div class="flex flex-col content-center mt-16">
	<img class="portfolio-size object-cover mx-auto" alt="project" src="https://via.placeholder.com/350" />
	<div class="text-center text-4xl mt-8">{data.title}</div>
	<div class="text-center text-lg italic font-extralight mt-2">{data.type}</div>
</div>