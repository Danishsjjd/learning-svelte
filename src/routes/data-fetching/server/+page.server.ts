import type { PageServerLoad } from './$types';

// export const prerender = true;
// export const ssr = false;
// export const csr = false;

export const load = (async ({ setHeaders }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const data = (await res.json()) as { name: string };

	// throw new Error('Something went wrong');
	setHeaders({ 'cache-control': 'max-age=60' }); // 60 seconds
	// setHeaders({
	// 	age: res.headers.get('age') || '',
	// 	'cache-control': res.headers.get('cache-control') || 'max-age=60'
	// });

	console.log('PRERENDER SERVER: fetching...');
	return data;
}) satisfies PageServerLoad;
