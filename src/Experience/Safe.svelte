<script>
	let data = {
		title: "Safe Software",
		logo: "logo/safesoftware.svg",
		startDate: "May 2021",
		endDate: "Present",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	};
</script>

<div class="flex flex-col">
	<div class="flex flex-row flex-wrap">
			<img class="logo-size" src={data.logo} alt="Safe software logo">
		<div class="flex flex-col justify-evenly py-6 ">
			<div class="text-title-size text-white">{data.title}</div>
			<div class=" text-white text-tertiary-size flex flex-row pt-6">
				<div>{data.startDate} - {data.endDate}</div>
			</div>
		</div>
	</div>
	<div class="text-normal-size content-text text-white pt-6 md:pt-12">
		{data.content}
	</div>
</div>
