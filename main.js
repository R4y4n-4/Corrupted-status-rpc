const Discord = require('discord.js')
const client = new Discord.Client()
const chalk = require('chalk')
const rpcGenerator = require("discordrpcgenerator");
const request = require('request')
const versionself = '0.0.3';
////////var//
const configfile = require('./config.json');
var token = configfile.token;
var prefix = configfile.prefix;
var color = configfile.color
var image = "https://cdn.discordapp.com/attachments/766258846733172747/784814905332989952/Sans_titre_3.gif";
////////error//////
if (!configfile.token) {
    console.clear()
    setTimeout(function() {
        console.clear();
        console.log("-  Le token n'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.json".red);
    }, 1000);
}

let url = "https://discordapp.com/api/v7/users/@me";
request(
    url, {
        method: "GET",
        headers: {
            authorization: token
        }
    },
    
    function(error, response, body) {
        if (response.statusCode === 200) {} else {
            console.clear();
            console.log(chalk.red(`-  Échec de l'authentification avec Discord. Suivez les instructions et entrez votre token dans config.json.`))
            process.exit();
        }
    })
    

    

    client.on('ready', function() {
        console.clear()
            setTimeout(function() {
                console.log(chalk.blue.inverse(`Bienvenue sur la version ${versionself} de Corrupted .`));
    
                function sleep(delay) {
                    var start = new Date().getTime();
                    while (new Date().getTime() < start + delay);
                
            }
            commandIntervals = [];
          
    /////////console///////
    var logoconsole = [`
    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄                       
   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌                      
   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌       ▐░▌                     
   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░▌               ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌                     
   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌               ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌                      
    ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀                 ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀                       
                                                                                                                                             
    `,`
    ╔═╗┌─┐┬─┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐      
    ║  │ │├┬┘├┬┘│ │├─┘ │ ├┤  ││      
    ╚═╝└─┘┴└─┴└─└─┘┴   ┴ └─┘─┴┘      
     `,`
    ▄████▄  ▒█████   ██▀███   ██▀███   █    ██  ██▓███  ▄▄▄█████▓▓█████ ▓█████▄            
   ▒██▀ ▀█ ▒██▒  ██▒▓██ ▒ ██▒▓██ ▒ ██▒ ██  ▓██▒▓██░  ██▒▓  ██▒ ▓▒▓█   ▀ ▒██▀ ██▌           
   ▒▓█    ▄▒██░  ██▒▓██ ░▄█ ▒▓██ ░▄█ ▒▓██  ▒██░▓██░ ██▓▒▒ ▓██░ ▒░▒███   ░██   █▌           
   ▒▓▓▄ ▄██▒██   ██░▒██▀▀█▄  ▒██▀▀█▄  ▓▓█  ░██░▒██▄█▓▒ ▒░ ▓██▓ ░ ▒▓█  ▄ ░▓█▄   ▌           
   ▒ ▓███▀ ░ ████▓▒░░██▓ ▒██▒░██▓ ▒██▒▒▒█████▓ ▒██▒ ░  ░  ▒██▒ ░ ░▒████▒░▒████▓            
   ░ ░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░  ▒ ░░   ░░ ▒░ ░ ▒▒▓  ▒            
     ░  ▒    ░ ▒ ▒░   ░▒ ░ ▒░  ░▒ ░ ▒░░░▒░ ░ ░ ░▒ ░         ░     ░ ░  ░ ░ ▒  ▒            
   ░       ░ ░ ░ ▒    ░░   ░   ░░   ░  ░░░ ░ ░ ░░         ░         ░    ░ ░  ░            
   ░ ░         ░ ░     ░        ░        ░                          ░  ░   ░               
   ░                                                                     ░                 
   `,`
    ██████╗ ██████╗ ██████╗ ██████╗ ██╗   ██╗██████╗ ████████╗███████╗██████╗                 
   ██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║   ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗                
   ██║     ██║   ██║██████╔╝██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║  ██║                
   ██║     ██║   ██║██╔══██╗██╔══██╗██║   ██║██╔═══╝    ██║   ██╔══╝  ██║  ██║                
   ╚██████╗╚██████╔╝██║  ██║██║  ██║╚██████╔╝██║        ██║   ███████╗██████╔╝                
    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝        ╚═╝   ╚══════╝╚═════╝                 
                                                                                              
    `,`
    
 ▄████████  ▄██████▄     ▄████████    ▄████████ ███    █▄     ▄███████▄     ███        ▄████████ ████████▄                      
 ███    ███ ███    ███   ███    ███   ███    ███ ███    ███   ███    ███ ▀█████████▄   ███    ███ ███   ▀███                     
 ███    █▀  ███    ███   ███    ███   ███    ███ ███    ███   ███    ███    ▀███▀▀██   ███    █▀  ███    ███                     
 ███        ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀ ███    ███   ███    ███     ███   ▀  ▄███▄▄▄     ███    ███                     
 ███        ███    ███ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ███    ███ ▀█████████▀      ███     ▀▀███▀▀▀     ███    ███                     
 ███    █▄  ███    ███ ▀███████████ ▀███████████ ███    ███   ███            ███       ███    █▄  ███    ███                     
 ███    ███ ███    ███   ███    ███   ███    ███ ███    ███   ███            ███       ███    ███ ███   ▄███                     
 ████████▀   ▀██████▀    ███    ███   ███    ███ ████████▀   ▄████▀         ▄████▀     ██████████ ████████▀                      
                         ███    ███   ███    ███                                                                                 
 `]
    var consolerandoml = logoconsole[Math.floor(Math.random() * logoconsole.length)]
    console.log(chalk.cyan(consolerandoml));

    if (client.user.bot) {
        var botyn = (`Tu es robot je ne peux pas charger le tools desolé :(`);
        process.exit(1)
    } else {
        var botyn = (`Non`)
    }


/////////console profile//////
console.log(chalk.magenta.dim(`╔══════════════════════════════════════════════════════════════════════════════╗`))
console.log(chalk.magenta.dim(`  [-Corrupted-] :: Tools status lancé avec succès, Aucunes erreurs est survenue.      `))
console.log(chalk.magenta.dim(`  [Pseudo / Tag] :: ${client.user.username} | ${client.user.id}              `))
console.log(chalk.magenta.dim(`  [Amis] :: ${client.user.friends.size}                                                                `))
console.log(chalk.magenta.dim(`  [Votre Prefix] ::  > ${configfile.prefix} <                                                     `))
console.log(chalk.magenta.dim(`  [Le Menu aide ] ::  > ${configfile.prefix} + help  <                                                     `))
console.log(chalk.magenta.dim(`  [Nombre de serveur] :: ${client.guilds.size}                                                    `))
console.log(chalk.magenta.dim(`  [Corrupted / Version] :: ${versionself}       `))
console.log(chalk.magenta.dim(`  [Vous etes un bot ?]:: ${botyn}       `))
console.log(chalk.magenta.dim(`╚══════════════════════════════════════════════════════════════════════════════╝`))
})
}) 

    ///commandes//////
    /////////////////status-menu//////
    client.on('message', message => {
if (message.content.startsWith(prefix + "help")){
    if (message.author.id !== client.user.id)return;
    message.delete();
let embed = new Discord.RichEmbed()
.setTitle('**🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟**')
.addField(` _** 𝑆𝑝𝑜𝑟𝑛ℎ𝑢𝑏 {𝑇𝑒𝑥𝑡}**_`, "__**Avoir une RPC pornhub dans votre profile . **__")
.addField(` _** 𝑉𝑠𝑐𝑜𝑑𝑒 **_`, "__**Avoir une RPC visual studio code dans votre profile . **__")
.addField(` _** 𝑆𝑦𝑜𝑢𝑡𝑢𝑏𝑒 {𝑇𝑒𝑥𝑡}**_`, "__**Avoir une RPC youtube dans votre profile . **__")
.addField(` _** 𝐺𝑖𝑡ℎ𝑢𝑏 {𝑇𝑒𝑥𝑡}**_`, "__**Avoir une RPC github dans votre profile . **__")
.addField(` _** 𝐷𝑒𝑒𝑧𝑒𝑟 {𝑇𝑒𝑥𝑡}**_`, "__**Avoir une RPC deezer dans votre profile . **__")
.addField(` _** 𝑃𝑦𝑡ℎ𝑜𝑛 {𝑇𝑒𝑥𝑡} **_`, "__**Avoir une RPC Python dans votre profile . **__")
.addField(` _** 𝑅𝑝𝑐𝑛𝑢𝑙𝑙**_`, "__**Pour ne plus avoir un rpc en status . **__")
.addField(` _** 𝑃𝑙𝑎𝑦 {𝑇𝑒𝑥𝑡} **_`, "__**Active ton  status en `Playing` .**__")
.addField(` _** 𝐿𝑖𝑠𝑡𝑒𝑛 {𝑇𝑒𝑥𝑡} **_`, "__**Active ton status en `Listen` .**__")
.addField(` _** 𝑆𝑡𝑟𝑒𝑎𝑚 {𝑇𝑒𝑥𝑡} **_`, "__**Active ton  status en `Streaming`  . **__")
.addField(` _** 𝑊𝑎𝑡𝑐ℎ {𝑇𝑒𝑥𝑡} **_`, "__**Active ton  status en `Watching` . **__")
.addField(` _** 𝑁𝑝𝑑 **_`, "__**Metre votre status en ne pas déranger. **__")
.addField(` _** 𝐴𝑤𝑎𝑦 **_`, "__**Metre votre status en inactif .**__")
.addField(` _** 𝐼𝑛𝑣𝑖𝑠𝑖𝑏𝑙𝑒 **_`, "__**Metre votre status en invisible .**__")
.addField(` _** 𝐷𝑒𝑙𝑎𝑐𝑡  **_`, "__**Réinitialiser Votre status .**__")
.addField(` _** 𝑂𝑛𝑙𝑖𝑛𝑒 **_`, "__**Metre votre status en online .**__")
.setImage(image)
.setColor(color)
 .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
message.channel.send(embed);
}
/////////////status-commandes/////////
if (message.content.includes(prefix + "delact")) {
    if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity("", {
            type: ""
        });
        var embed = new Discord.RichEmbed()
            .setTitle("__**Ton status est réinitialiser .**__")
            .setDescription('')
            .setImage(image)
            .setColor(color)
            .setFooter(`🔱・Λrcadiʌ Self bot ・🔱`, message.author.avatarURL)
            message.channel.sendEmbed(embed);
    }
} 
if (message.content.startsWith(prefix + 'spornhub')) {
    if (message.author.id !== client.user.id)return;
    message.delete();
    const _0x2afa40 = message.content.split(' ')
        .slice(1)
        .join(' ');
    if (!message.content.split(' ')
        .slice(1)
        .join(' '))
        return message.edit('Mettez un message !');
    var _0x4f3bc4 = () =>
        ([10000000] + -1000 + -4000 + -8000 + -100000000000)
        .replace(/[018]/g, _0x44548a =>
            (_0x44548a ^ Math.random() * 16 >> _0x44548a / 4)
            .toString(16));
    rpcGenerator.getRpcImage('698916141896171630', 'pornhub')
        .then(_0x59b1c7 => {
            let bite = new rpcGenerator.Rpc()
                .setName('Pornhub')
                .setUrl('https://www.twitch.tv/rayancorrupted404')
                .setType('PLAYING')
                .setApplicationId('698916141896171630')
                .setAssetsLargeImage(_0x59b1c7.id)
                .setAssetsLargeText('Pornhub')
                .setState('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙・🌟  ' + versionself )
                .setDetails(_0x2afa40)
                .setStartTimestamp(Date.now())
                .setParty({
                    'id': _0x4f3bc4()
                });
                client.user.setPresence(bite.toDiscord());
                let embed = new Discord.RichEmbed()
                .setDescription(`__**Une RPC a était a jouté a ton profile Discord :**__`+ ' ' + message.content.split(' ')
                .slice(1)
                .join(' '))
                .setColor(color)
                 .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                message.channel.send(embed)
            })
    }
    if (message.content.startsWith(prefix + 'vscode')) {
        if (message.author.id !== client.user.id)return;
        message.delete();
        client.user.setPresence( {
            'game': {
                'name': 'Visual Studio Code',
                'type': 0x0,
                'details': 'Edinting : index.js',
                'state': '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 ',
                'timestamps': {
                    'start': Date.now()
                },
                'assets': {
                    'large_image': '565944799576719366',
                    'large_text': '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 ・🌟',
                    'small_image': '565945770067623946',
                    'small_text': '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 ・🌟 '
                },
                'application_id': '383226320970055681'
            }})
        
            let embed = new Discord.RichEmbed()
            .setDescription(`__**Une RPC a était a jouté a ton profile Discord !**__`)
             .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
            message.channel.send(embed)
        }
        if (message.content.startsWith(prefix + 'github')) {
            if (message.author.id !== client.user.id)return;
            message.delete();
            const _0x2c3957 = message.content.split(' ')
                .slice(1)
                .join(' ');
            if (!message.content.split(' ')
                .slice(1)
                .join(' '))
                return message.edit('Mettez un message !');
            var _0xae56de = () =>
                ([10000000] + -1000 + -4000 + -8000 + -100000000000)
                .replace(/[018]/g, _0x3aa47f =>
                    (_0x3aa47f ^ Math.random() * 16 >> _0x3aa47f / 4)
                    .toString(16));
            rpcGenerator.getRpcImage('719905369723502602', 'github')
                .then(_0x5a11bc => {
                    let nasgul = new rpcGenerator.Rpc()
                        .setName('Github')
                        .setUrl('https://www.twitch.tv/rayancorrupted404')
                        .setType('PLAYING')
                        .setApplicationId('719905369723502602')
                        .setAssetsLargeImage(_0x5a11bc.id)
                        .setAssetsLargeText('Github')
                        .setState('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 ・🌟  ' + versionself )
                        .setDetails(_0x2c3957)
                        .setStartTimestamp(Date.now())
                        .setParty({
                            'id': _0xae56de()
                        });
                        client.user.setPresence(nasgul.toDiscord());
                        let embed = new Discord.RichEmbed()
                        .setDescription(`__**Une RPC a était a jouté a ton profile Discord :**__`+ ' ' + message.content.split(' ')
                        .slice(1)
                        .join(' '))
                        .setColor(color)
                         .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                        message.channel.send(embed)
                    })
            }

            if (message.content.startsWith(prefix + 'python')) {
                if (message.author.id !== client.user.id)return;
                message.delete();
                const _0x2a37bd = message.content.split(' ')
                    .slice(1)
                    .join(' ');
                if (!message.content.split(' ')
                    .slice(1)
                    .join(' '))
                    return message.edit('Mettez un message !');
                var _0x5bfee5 = () =>
                    ([10000000] + -1000 + -4000 + -8000 + -100000000000)
                    .replace(/[018]/g, _0x4a6751 =>
                        (_0x4a6751 ^ Math.random() * 16 >> _0x4a6751 / 4)
                        .toString(16));
                rpcGenerator.getRpcImage('698916141896171630', 'python2')
                    .then(_0x59aeb1 => {
                        let heho = new rpcGenerator.Rpc()
                            .setName('Python')
                            .setUrl("https://www.twitch.tv/rayancorrupted404")
                            .setType('PLAYING')
                            .setApplicationId('698916141896171630')
                            .setAssetsLargeImage(_0x59aeb1.id)
                            .setAssetsLargeText('Python')
                            .setAssetsSmallImage(_0x59aeb1.id)
                            .setState('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 ・🌟  ' + versionself )
                            .setDetails(_0x2a37bd)
                            .setStartTimestamp(Date.now())
                            .setParty({
               
                                'id': _0x5bfee5()
                            });
                            client.user.setPresence(heho.toDiscord());
                            let embed = new Discord.RichEmbed()
                            .setDescription(`__**Une RPC a était a jouté a ton profile Discord :**__`+ ' ' + message.content.split(' ')
                            .slice(1)
                            .join(' '))
                            .setColor(color)
                             .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                            message.channel.send(embed)
                        })
                }
              if (message.content.startsWith( prefix + 'deezer')) {
                if (message.author.id !== client.user.id)return;
                message.delete();
                const _0x301756 = message.content.split(' ')
                    .slice(1)
                    .join(' ');
                if (!message.content.split(' ')
                    .slice(1)
                    .join(' '))
                    return message.edit('Mettez un message !');
                var _0x382926 = () =>
                    ([10000000] + -1000 + -4000 + -8000 + -100000000000)
                    .replace(/[018]/g, _0x2c0e72 =>
                        (_0x2c0e72 ^ Math.random() * 16 >> _0x2c0e72 / 4)
                        .toString(16));
                rpcGenerator.getRpcImage('698916141896171630', 'dezzer')
                    .then(_0x112667 => {
                        let kebab = new rpcGenerator.Rpc()
                            .setName('Deezer')
                            .setUrl("https://www.twitch.tv/rayancorrupted404")
                            .setType('LISTENING')
                            .setApplicationId('698916141896171630')
                            .setAssetsLargeImage(_0x112667.id)
                            .setAssetsSmallImage(_0x112667.id)
                            .setAssetsLargeText('Dezzer')
                            .setState('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙・🌟' + versionself )
                            .setDetails(_0x301756)
                            .setStartTimestamp(Date.now())
                            .setParty({
              
                                'id': _0x382926()
                            });
                            client.user.setPresence(kebab.toDiscord());
                            let embed = new Discord.RichEmbed()
                            .setDescription(`__**Une RPC a était a jouté a ton profile Discord :**__`+ ' ' + message.content.split(' ')
                            .slice(1)
                            .join(' '))
                            .setColor(color)
                             .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                            message.channel.send(embed)
                        })
                }
        
                if (message.content.startsWith(prefix + 'rpcnull')) {
                    if (message.author.id !== client.user.id)return;
                message.delete();
                    client.user.setActivity(null, {});
                    let embed = new Discord.RichEmbed()
                    .setDescription(`__**Vous Avez aucune RPC sur votre profile .**__`)
                    .setColor(color)
                     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                    message.channel.send(embed)
                                }
              
                                if (message.content.startsWith(prefix + 'syoutube')) {
                                    if (message.author.id !== client.user.id)return;
                                    message.delete();
                                    const _0x4a6bbf = message.content.split(' ')
                                        .slice(1)
                                        .join(' ');
                                    if (!message.content.split(' ')
                                        .slice(1)
                                        .join(' '))
                                        return message.edit('Mettez un message !');
                                    var _0x56695d = () =>
                                        ([10000000] + -1000 + -4000 + -8000 + -100000000000)
                                        .replace(/[018]/g, _0x14e89a =>
                                            (_0x14e89a ^ Math.random() * 16 >> _0x14e89a / 4)
                                            .toString(16));
                                    rpcGenerator.getRpcImage('698916141896171630', 'ytb')
                                        .then(_0x3865af => {
                                            let arka = new rpcGenerator.Rpc()
                                                .setName('YouTube')
                                                .setUrl('https://www.twitch.tv/rayancorrupted404')
                                                .setType('WATCHING')
                                                .setApplicationId('698916141896171630')
                                                .setAssetsLargeImage(_0x3865af.id)
                                                .setAssetsLargeText('Youtube')
                                                .setState('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙・🌟 ' + versionself )
                                                .setDetails(_0x4a6bbf)
                                                .setStartTimestamp(Date.now())
                                                .setParty({
                                                    'id': _0x56695d()
                                                });
                                                client.user.setPresence(arka.toDiscord());
                                                let embed = new Discord.RichEmbed()
                                                .setDescription(`__**Une RPC a était a jouté a ton profile Discord :**__`+ ' ' +message.content.split(' ')
                                                .slice(1)
                                                .join(' '))
                                                .setColor(color)
                                                 .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                                                message.channel.send(embed)
                                            })
                                }
                                if (message.content.startsWith(prefix + 'stream')){
                                    if (message.author.id !== client.user.id)return;
                                    message.delete()
                                    let args = message.content.split(" ").slice(1);
                                    client.user.setPresence({
                                    game: {
                                    name: `${args.join(" ")}`,
                                    type: "STREAMING",
                                    url: "https://www.twitch.tv/Arcadia"
                                    }
                                    });
                                    
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`__**Vous etes entrain de stream :**__`+ ' ' +args.join(" ") + ".")
                                    .setColor(color)
                                     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                                    message.channel.send(embed)
                                
                                }
                                if (message.content.startsWith(prefix + 'listen')){
                                    if (message.author.id !== client.user.id)return;
                                    message.delete()
                                    let args = message.content.split(" ").slice(1);
                                    client.user.setPresence({
                                    game: {
                                    name: `${args.join(" ")}`,
                                    type: "LISTENING",
                                    //url: "https://www.twitch.tv/Arcadia"
                                    }
                                    });
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`__**Vous etes entrain d'écouter :**__`+ ' ' +args.join(" ") + ".")
                                    .setColor(color)
                                     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                                    message.channel.send(embed)
                               
                                   }
                       
                       if (message.content.startsWith(prefix + 'watch')){
                        if (message.author.id !== client.user.id)return;
                                    message.delete()
                                    let args = message.content.split(" ").slice(1);
                                    client.user.setPresence({
                                    game: {
                                    name: `${args.join(" ")}`,
                                    type: "WATCHING",
                                   // url: "https://www.twitch.tv/Arcadia"
                                    }
                                    });
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`__**Vous etes entrain de regarder :**__`+ ' ' +args.join(" ") + ".")
                                    .setColor(color)
                                     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                                    message.channel.send(embed)
                               
                                   }
                                   
                                   
                                   
                                   
                                   if (message.content.startsWith(prefix + 'play')){
                                    if (message.author.id !== client.user.id)return;
                                   message.delete()
                                   let args = message.content.split(" ").slice(1);
                                   client.user.setPresence({
                                   game: {
                                   name: `${args.join(" ")}`,
                                   type: "PLAYING",
                                   // url: "https://www.twitch.tv/Arcadia"
                                   }
                                   });
                                   let embed = new Discord.RichEmbed()
                                   .setDescription(`__**Vous etes entrain de jouer  :**__`+ ' ' +args.join(" ") + ".")
                                   .setColor(color)
                                    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                                   message.channel.send(embed)
                              
                                  }
                                   
                       
                       
                       if (message.content.startsWith(prefix + 'npd' )){
                        if (message.author.id !== client.user.id)return;
                       message.delete()
                       client.user.setStatus('dnd', '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 ') 
                       let embed = new Discord.RichEmbed()
                       .setDescription("Votre statut est maintenant: `ne pas déranger` :white_check_mark:")
                       .setColor(color)
                        .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                       message.channel.send(embed)
                       
                    
                       }
                       
                       
                       if (message.content.startsWith(prefix + 'away')){
                        if (message.author.id !== client.user.id)return;
                       message.delete()
                       client.user.setStatus('idle', '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 ') 
                       let embed = new Discord.RichEmbed()
                       .setDescription("Votre statut est maintenant: `inactif` :white_check_mark:")
                       .setColor(color)
                        .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                       message.channel.send(embed)
                       
                       }
                       
                       
                       
                       if (message.content.startsWith(prefix + 'invisible')){
                        if (message.author.id !== client.user.id)return;
                       message.delete()
                       client.user.setStatus('invisible', '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 ') 
                       let embed = new Discord.RichEmbed()
                       .setDescription("Votre statut est maintenant: `invisible` :white_check_mark:")
                       .setColor(color)
                        .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                       message.channel.send(embed)
                       }
                       
                       if (message.content.startsWith(prefix + 'online')){
                        if (message.author.id !== client.user.id)return;
                       message.delete()
                       client.user.setStatus('online', '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 ') 
                       let embed = new Discord.RichEmbed()
                       .setDescription("Votre statut est maintenant: `connecté` :white_check_mark:")
                       .setColor(color)
                        .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
                       message.channel.send(embed)
                       }
})
client.login(token)
