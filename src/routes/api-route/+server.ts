import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async (e: RequestEvent) => {
	e.fetch('https://jsonplaceholder.typicode.com/users/1'); // it will inherit cookie and authorization headers

	const user = { admin: false };

	if (!user.admin) throw error(401, 'Unauthorized');

	return json({ name: 'Danish' });
	// return new Response();
};
