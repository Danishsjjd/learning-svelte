<ul>
	{#each [{ link: 'client-side', text: 'Client side' }, { link: 'server', text: 'Server side' }, { link: 'both', text: 'hybrid approach' }] as link (link.text)}
		<li><a href={`/data-fetching/${link.link}`}>{link.text}</a></li>
	{/each}
</ul>
