<script lang="ts">
	import { onMount } from 'svelte';

	let count = 0;
	let user: { name: string };

	onMount(async () => {
		user = await fetch('https://jsonplaceholder.typicode.com/users/1').then((data) => data.json());
		console.log('will only run on client', user);
	});
</script>

<button on:click={() => (count += 1)}>
	Count {count}
</button>

<h1>{user?.name}</h1>
