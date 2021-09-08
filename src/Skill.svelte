<script>
	let data = {
		title: "Web Dev",
		skill: [
			"GraphQL",
			"JavaScript",
			"Node"
		]
	}
</script>

<div class="m-auto">
	<div class="text-4xl font-bold mb-2">💻 Web Dev</div>
	{#each data.skill as skill}
		<div class="text-4xl ml-2">└ <span class="text-2xl">{skill}</span></div>
	{/each}
</div>