<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<h1>NAME: {data.name}</h1>

<!-- with enhance, we can: -->
<!-- Access form data client side -->
<!-- Access status client side -->
<!-- Validation -->
<!-- Error handling -->
<form method="post" action="?/rename" use:enhance>
	<input type="text" name="name" />
	<button>submit</button>

	<button formaction="?/upper-case">upper case</button>
</form>
