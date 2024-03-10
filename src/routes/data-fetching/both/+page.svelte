<script lang="ts">
  import type { PageData } from "./$types"
  import { page } from "$app/stores"

  export let data: PageData
</script>

<h2>{data.name}</h2>
<a href="/data-fetching">goto: Data fetching</a>

<h1>Page data through store:</h1>
<h2>{$page.data.name}</h2>
