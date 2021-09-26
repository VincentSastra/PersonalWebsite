<script>
	function sendEmail(e) {
		//TODO
	}
</script>

<div class="min-h-screen flex bg-ltorange bg-opacity-30 pt-20 pb-20 pl-st">
	<div class="flex-grow flex-basis-0 flex flex-col justify-center">
		<div class="text-6xl">contact me</div>
		<div class="text-4xl pt-10">send me an email by filling out this form!</div>
	</div>
	<form class="flex-grow flex-basis-0 flex flex-col" on:submit|preventDefault={sendEmail}>
		<div class="flex flex-col justify-center py-20 pr-10 max-w-2xl h-full">
			<input class="mb-10 input" placeholder="your name">
			<input class="mb-10 input" placeholder="your email address">
			<textarea class="mb-10 h-60 input" placeholder="your message" />
			<button class="bg-orange text-white text-2xl mr-auto px-6 py-2" type="submit">send your message</button>
		</div>
	</form>
</div>

<style>
	.input {
		background-color: transparent;
		font-size: 24px;
		border: none;
		padding: 4px;
		border-bottom: 2px solid #BBBBBB;
		transition: 0.5s;
	}
	.input:focus-visible {
		outline: none;
		border-bottom: 2px solid black;
		background-color: #00000005;
	}

	:focus-visible::placeholder {
		color: transparent
	}
</style>