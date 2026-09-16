client.on('voiceStateUpdate', async (oldState, newState) => {
    const channel = newState.guild.channels.cache.get(
        NOTIFICATION_CHANNEL_ID
    );

    if (!channel) return;

    // JOIN
    if (!oldState.channelId && newState.channelId) {
        channel.send(
            `🟢 **${newState.member.user.username}** đã vào **${newState.channel.name}**`
        );
    }

    // LEAVE
    if (oldState.channelId && !newState.channelId) {
        channel.send(
            `🔴 **${oldState.member.user.username}** đã rời **${oldState.channel.name}**`
        );
    }

    // MOVE
    if (
        oldState.channelId &&
        newState.channelId &&
        oldState.channelId !== newState.channelId
    ) {
        channel.send(
            `🔄 **${newState.member.user.username}** chuyển từ **${oldState.channel.name}** → **${newState.channel.name}**`
        );
    }
});
