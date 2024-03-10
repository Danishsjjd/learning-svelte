import type { PageServerLoad, Actions } from "./$types"

const key = "name"

export const load = (async ({ cookies }) => {
  const name = cookies.get(key)

  return {
    name,
  }
}) satisfies PageServerLoad

export const actions: Actions = {
  // we can also use default action here
  rename: async ({ cookies, request }) => {
    const form = await request.formData()
    const name = (form.get(key) || "") as string

    cookies.set(key, name, { path: "/" })
  },
  "upper-case": async ({ cookies }) => {
    cookies.set(key, (cookies.get(key) as string)?.toUpperCase(), { path: "/" })
  },
}
