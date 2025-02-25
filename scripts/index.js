async function retrievePFP(uid) {
    const RobloxData = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${uid}&size=720x720&format=Png&isCircular=false`)
    const RobloxDataJSON = await RobloxData.json()
    return RobloxDataJSON[0].data.imageUrl
}

(async () => { // Async IIFE
    try {
        const BreadPFP = await retrievePFP(4831046746);
        document.getElementById('TiiPFP').src = BreadPFP;

        const PoofPFP = await retrievePFP(125130203);
        document.getElementById('PoofPFP').src = PoofPFP;

        const DaniPFP = await retrievePFP(125130203);
        document.getElementById('DaniPFP').src = DaniPFP;
    } catch (error) {
        console.error("Error retrieving or setting image:", error);
        // Optionally, set a placeholder image or display an error message
        document.getElementById('TiiPFP').src = "placeholder.png";
    }
})();