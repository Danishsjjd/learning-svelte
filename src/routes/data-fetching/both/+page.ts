import type { PageLoad } from "./$types"

export const load = (async () => {
  const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (data) => data.json() as Promise<{ name: string }>
  )
  console.log("BOTH: fetching...")
  return user
}) satisfies PageLoad
