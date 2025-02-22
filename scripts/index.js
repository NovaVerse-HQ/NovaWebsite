async function aaa() {
    const DiscordFetch = await fetch('https://discord.com/api/v10/guilds/1133911738379677717');
        const DiscordData = await DiscordFetch.json();
        console.log(DiscordData);
}

await aaa()