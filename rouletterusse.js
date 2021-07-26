module.exports = {
    name: 'rouletterusse',
    aliases: ['rr'],
    category: 'Troll',
    utilisation: '{prefix}rouletterusse',

    execute(client, message) {
        
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        // get the number of members in the voice channel

        let members = message.member.voice.channel.members.size;
        const getRandomMember = () => {
            return Math.floor(Math.random()*members);
        }


        // Return all name of a member in a voice channel
        const getMember = () => {
            const number = getRandomMember();
            var i = 0;

                for (const member of message.member.voice.channel.members) {
                    
                    if (i == number) {
                        return( member[1].user);
                    }
                    i++;
                    
                }
                
            
        }
        
        const user = getMember();

        const membre = message.guild.member(user);

        // Edit data of channel;
        membre.edit(
            {
                channel: null,
            }
        );
        
        
        if (message.member.voice.channel) return message.channel.send({
        
        embed: {
            color: 'RED',
            author: { name: ' Jeu de la Roulette Russe '},
            footer: { text: 'Ce Bot est conçu pour le serveur Magnésium par ByJfMarie' },
            fields: [
                { name: 'Joueur Déconnecté', value: client.emotes.roulette + " " +user.username + " " + client.emotes.roulette, inline: true },
            ],
            timestamp: new Date(),
            description: `Ce jeu déconnecte une personne du channel aléatoirement lorsque la commande !!rouletterusse ou !!rr est tapé`,
        },

        })

    },
};