var 
{
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
} = 
    require('@adiwajshing/baileys')
    var fs = require('fs')
    var moment = require('moment-timezone')
    var { exec, spawn } = require('child_process')
    var crypto = require('crypto')
    var qrcode = require('qrcode')
    var ffmpeg = require('fluent-ffmpeg')
    var fetch = require('node-fetch')
    var fs = require('fs-extra')
    var ms = require('parse-ms')
    var axios = require('axios')
    var hx = require('hxz-api')
    var request = require('request')
    var fromBuffer = require('file-type')
    var FormData = require('form-data')
    var speed = require('performance-now')
    var yts = require('yt-search')
    var PhoneNumber = require('awesome-phonenumber')
    var JSDOM = require('jsdom')
    var fetch = require('node-fetch')
    var qs = require('qs')
    var cheerio = require('cheerio')
  
var { yta } = require('./KIR1/ytdl')
var { fetchJson } = require('./KIR1/krbtz')
var { color, bgcolor, biocolor, KirLog } = require('./KIR1/color')
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./KIR1/functions')
var { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./KIR1/levell')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./KIR1/limit')
var { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./KIR1/rpg')

var _scommand = JSON.parse(fs.readFileSync('./KIR2/scommand.json'))
var antilink = JSON.parse(fs.readFileSync('./KIR2/antilink.json'))
var welkom = JSON.parse(fs.readFileSync('./KIR2/welcome.json'))
var _petualang = JSON.parse(fs.readFileSync('./KIR2/inventori.json'))
var prem = JSON.parse(fs.readFileSync('./KIR2/premium.json'))
var pendaftar = JSON.parse(fs.readFileSync('./KIR2/user.json'))
var balance = JSON.parse(fs.readFileSync('./KIR2/balance.json'))
var _level = JSON.parse(fs.readFileSync('./KIR2/leveluser.json'))

var kirrfake = fs.readFileSync('./KIR4/kirbotz1.jpg')
var kirrfoto = fs.readFileSync('./KIR4/kirbotz2.jpg')
var kirrtod = fs.readFileSync('./KIR4/kirbotz3.jpg')
var kirtodrpg = fs.readFileSync('./KIR4/kirbotzrpg.jpg')

var devil = fs.readFileSync('./KIR4/zdevil.jpg')
var slime = fs.readFileSync('./KIR4/zslime.jpg')
var demon = fs.readFileSync('./KIR4/zdemon.jpg')
var goblin = fs.readFileSync('./KIR4/zgoblin.jpg')
var demonking = fs.readFileSync('./KIR4/zdemonking.jpg')
var behemoth = fs.readFileSync('./KIR4/zbehemoth.jpg')

var ownerfake = fs.readFileSync('./KIR5/foto/ownermenu.jpg')
var otherfake = fs.readFileSync('./KIR5/foto/othermenu.jpg')
var groupfake = fs.readFileSync('./KIR5/foto/groupmenu.jpg')
var islamifake = fs.readFileSync('./KIR5/foto/islamimenu.jpg')
var downloadfake = fs.readFileSync('./KIR5/foto/downloadmenu.jpg')
var nulisfake = fs.readFileSync('./KIR5/foto/nulismenu.jpg')
var stickerfake = fs.readFileSync('./KIR5/foto/stickermenu.jpg')
var photoxyfake = fs.readFileSync('./KIR5/foto/photoxymenu.jpg')
var ephotofake = fs.readFileSync('./KIR5/foto/ephotomenu.jpg')
var cecanfake = fs.readFileSync('./KIR5/foto/cecanmenu.jpg')
var fotofake = fs.readFileSync('./KIR5/foto/fotomenu.jpg')
var videofake = fs.readFileSync('./KIR5/foto/videomenu.jpg')
var rpgfake = fs.readFileSync('./KIR5/foto/rpgmenu.jpg')

var editkirtod = JSON.parse(fs.readFileSync('./editdisini.json'))

ownerName = editkirtod.NamaOwner
ownerNumber = editkirtod.NomorOwner
owner = editkirtod.NomorOwner2
lolkey = editkirtod.LolKeyy
api2 = editkirtod.apiweb2
api4 = editkirtod.apiweb4
api5 = editkirtod.apiweb5
api6 = editkirtod.apiweb6
api7 = editkirtod.apiweb7
api8 = 'https://api.dapuhy.xyz'

KirSelfPublic = false

baterai = 'unknown'
charging = 'unknown'

var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

module.exports = KirBotz = async (KirBotz, todd) => {
	   try {
	   var 
	   { 
	   ownermenu 
	   ,
	   othermenu 
	   ,
	   groupmenu 
	   ,
	   islamimenu
	   ,
	   downloadmenu 
	   ,
	   nulismenu 
	   ,
	   stickermenu 
	   ,
	   photoxymenu 
	   ,
	   ephotomenu 
	   ,
	   cecanmenu
	   ,
	   fotomenu
	   ,
	   videomenu
       ,
       rpgmenu
	   } 
	   = require('./KIR5/listmenu')
       if (!todd.hasNewMessage) return
       todd = todd.messages.all()[0]
	   if (!todd.message) return
	   if (todd.key && todd.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   todd.message = (Object.keys(todd.message)[0] === 'ephemeralMessage') ? todd.message.ephemeralMessage.message : todd.message
	   var { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
       var content = JSON.stringify(todd.message)
	   var from = todd.key.remoteJid
	   var type = Object.keys(todd.message)[0]
	   var cmd = (type === 'conversation' && todd.message.conversation) ? todd.message.conversation : (type == 'imageMessage') && todd.message.imageMessage.caption ? todd.message.imageMessage.caption : (type == 'videoMessage') && todd.message.videoMessage.caption ? todd.message.videoMessage.caption : (type == 'extendedTextMessage') && todd.message.extendedTextMessage.text ? todd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && todd.message.conversation.startsWith(prefix)) ? todd.message.conversation : (type == 'imageMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'videoMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'extendedTextMessage') && todd.message[type].text.startsWith(prefix) ? todd.message[type].text : (type == 'listResponseMessage') && todd.message[type].singleSelectReply.selectedRowId ? todd.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && todd.message[type].selectedButtonId ? todd.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(todd.message[type].fileSha256.toString('base64')) !== null && getCmd(todd.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? todd.message.conversation : (type === 'extendedTextMessage') ? todd.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = todd.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? todd.participant : todd.key.remoteJid
       var senderr = todd.key.fromMe ? KirBotz.user.jid : todd.key.remoteJid.endsWith('@g.us') ? todd.participant : todd.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = todd.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = todd.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
       var isPetualang = checkPetualangUser(sender)
       var isPremium = prem.includes(sender) || isOwner
       var readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏"

var isAntiLink = isGroup ? antilink.includes(from) : false
var isWelkom = isGroup ? welkom.includes(from) : false
       
selectedButton = (type == 'buttonsResponseMessage') ? todd.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? todd.message.listResponseMessage.title : ''

var sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: todd
})
}
var sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await KirBotz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: krtd1})}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: todd, contextInfo: {"mentionedJid": men ? men : []}})
}

botz = {
		  wait: 'Waittt.....',
		  success: 'Nih Kak',
		  error: {
		  stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !!!',
		  Iv: 'Linknya Error Tod !!!'
		  },
		  only: {
		  admin: 'Kusus Admin Tod !!!',
		  group: 'Khusus Group Tod !!!'
		  }
		  }
		  
var elit = 'Petualang Biasa'
if (isPremium)
{
elit = 'Petualang Pro'
}
if (isOwner)
{
elit = 'GM IN GAME'
}

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) 
{
case 0: hari = "𝐌𝐢𝐧𝐠𝐠𝐮"; break;
case 1: hari = "𝐒𝐞𝐧𝐢𝐧"; break;
case 2: hari = "𝐒𝐞𝐥𝐚𝐬𝐚"; break;
case 3: hari = "𝐑𝐚𝐛𝐮"; break;
case 4: hari = "𝐊𝐚𝐦𝐢𝐬"; break;
case 5: hari = "𝐉𝐮𝐦′𝐚𝐭"; break;
case 6: hari = "𝐒𝐚𝐛𝐭𝐮"; break;
}
switch(bulan) 
{
case 0: bulan = "𝐉𝐚𝐧𝐮𝐚𝐫𝐢"; break;
case 1: bulan = "𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐢"; break;
case 2: bulan = "𝐌𝐚𝐫𝐞𝐭"; break;
case 3: bulan = "𝐀𝐩𝐫𝐢𝐥"; break;
case 4: bulan = "𝐌𝐞𝐢"; break;
case 5: bulan = "𝐉𝐮𝐧𝐢"; break;
case 6: bulan = "𝐉𝐮𝐥𝐢"; break;
case 7: bulan = "𝐀𝐠𝐮𝐬𝐭𝐮𝐬"; break;
case 8: bulan = "𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫"; break;
case 9: bulan = "𝐎𝐤𝐭𝐨𝐛𝐞𝐫"; break;
case 10: bulan = "𝐍𝐨𝐯𝐞𝐦𝐛𝐞𝐫"; break;
case 11: bulan = "𝐃𝐞𝐬𝐞𝐦𝐛𝐞𝐫"; break;
}

var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

var sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './KIR3' + names + '.png', async function () {
console.log('selesai');
let filess = './KIR3' + names + '.png'
let asw = './KIR3' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./KIR3/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
KirBotz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:krtd1})
fs.unlinkSync(asw)
});
});
});
}

var uploadImages = (buffData, type) => {      
return new Promise(async (resolve, reject) => {        
var { ext } = await fromBuffer(buffData)       
var cmd = text.toLowerCase()      
var filePath = 'utils/tmp.' + ext 
var _buffData = type ? await resizeImage(buffData, false) : buffData  
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
if (err) return reject(err)
console.log('Proses Subrek YT : KirBotz×')			
var fileData = fs.readFileSync(filePath)			
var form = new FormData()			
form.append('file', fileData, 'tmp.' + ext)    
fetch('https://telegra.ph/upload', {			   
method: 'POST',     	
body: form			
})     	
.then(res => res.json())     	
.then(res => {			
if (res.error) return reject(res.error)			
resolve('https://telegra.ph' + res[0].src)     	
})     	
.then(() => fs.unlinkSync(filePath))			   
.catch(err => reject(err))			   
})			 
})		
}

var fakee = (teks) => {
var mena = ['1','2','3'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
KirBotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://e.top4top.io/p_2231oxc0u0.png",
"mediaUrl": "https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link",
"thumbnail": fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : krtd1})
};

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, { thumbnail: kirrfoto, sendEphemeral: true, quoted: krtd1, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `GROUP KIRBOTZ`,body:"SELECT",previewType:"PHOTO",thumbnail:kirrfoto,sourceUrl:`https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`}}})
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: todd, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " 𝙷𝙰𝚁𝙸, " : " 𝙷𝙰𝚁𝙸, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " 𝙹𝙰𝙼, " : " 𝙹𝙰𝙼, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " 𝙼𝙴𝙽𝙸𝚃, " : " 𝙼𝙴𝙽𝙸𝚃, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " 𝙳𝙴𝚃𝙸𝙺" : " 𝙳𝙴𝚃𝙸𝙺") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

if (isGroup && !todd.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'white'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}

if (isGroup && isPetualang) {
var currentLevel = getLevelingLevel(sender)
var checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
var amountXp = Math.floor(Math.random() * 10) + 100
var requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
var getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1) 
var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Level By KirBotz 」`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, lvlup, 'Level Up', but)
}
} catch (err) {
console.error(err)
}
}

KirBotz.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log('Baterai : ' + batterylevel + '%')
})
global.batrei = global.batrei ? global.batrei : []
KirBotz.on('CB:action,,battery', json => {
var batteryLevelStr = json[2][0][1].value
var batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

var menua = ['vnd.openxmlformats-officedocument.wordprocessingml.document','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','zip','pdf']
var appl = menua[Math.floor(Math.random() * menua.length)]

emote = ['😁','😆','😉','😋','😎','😍','😘','🥴','🤩','🤪','🤫','😗','😚','☺','🙂','🤗','🤥','🤔','😐','😣','😮','😝','🙃','😲','😤','☹️','😦','😬','😳','😡']
var emoji = emote[Math.floor(Math.random() * (emote.length))]	
krtd1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `𝙺𝙸𝚁𝙱𝙾𝚃𝚉 𝚃𝙴𝙻𝙰𝙷 𝚃𝙴𝚁𝚅𝙴𝚁𝙸𝙵𝙸𝙺𝙰𝚂𝙸\n𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}\n〘 𝙴𝙼𝙾𝚃𝙴 : ${emoji} 〙`,contextInfo: {participant: `0@s.whatsapp.net`}}}}

thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

var Yy = 0
var bio = `*────" 𝖀𝖘𝖊𝖗 𝕴𝖓𝖋𝖔 "────*
    *Name :* ${pushname}
    *Bio :* ${thu.status}
*────────────────*`
var allmenu = `${readmore}
*────" LIST MENU "────*
${emoji} ${prefix}ownermenu
${emoji} ${prefix}othermenu
${emoji} ${prefix}groupmenu
${emoji} ${prefix}islamimenu
${emoji} ${prefix}downloadmenu
${emoji} ${prefix}nulismenu
${emoji} ${prefix}stickermenu
${emoji} ${prefix}photoxymenu
${emoji} ${prefix}ephotomenu
${emoji} ${prefix}cecanmenu
${emoji} ${prefix}fotomenu
${emoji} ${prefix}videomenu
${emoji} ${prefix}rpgmenu
〇───────⌦`

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!todd.key.fromMe && KirSelfPublic === true) return

KirBotz.updatePresence(from, Presence.composing)
KirBotz.chatRead(from, "read")
//━━━━━━━━━━━━━━━[ UNTUK FITUR ]━━━━━━━━━━━━━━━\\
switch (command) {

case 'patrick':
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'gura':
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'stickeranime':       
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendWebp(from, pjrr)
}
)
break
case 'cekserver':
if (args.length == 0) return reply(`Example: ${prefix + command} deku-network.my.id`)
statuss = args.join(" ")
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/${statuss}`)
ini_txt =`╭─ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐒𝐞𝐫𝐯𝐞𝐫\n`
ini_txt +=`│➳ IP : ${anu.ip}\n`
ini_txt +=`│➳ PORT : ${anu.port}\n`
ini_txt +=`│➳ PING : ${anu.debug.ping}\n`
ini_txt +=`│➳ QUERY : ${anu.debug.query}\n`
ini_txt +=`│➳ SRV : ${anu.debug.srv}\n`
ini_txt +=`│➳ QUERYMISMATCH : ${anu.debug.querymismatch}\n`
ini_txt +=`│➳ IPINSRV : ${anu.debug.ipinsrv}\n`
ini_txt +=`│➳ CNAMESRV : ${anu.debug.cnameinsrv}\n`
ini_txt +=`│➳ ANIMATEDMOTD : ${anu.debug.animatedmotd}\n`
ini_txt +=`│➳ CACHETIME : ${anu.debug.cachetime}\n`
ini_txt +=`│➳ APIVERSION : ${anu.debug.apiversion}\n`
ini_txt +=`│➳ HOST NAME : ${anu.hostname}\n`
ini_txt +=`│➳ ONLINE : ${anu.online}\n`
ini_txt +=`└─────────────`
reply(ini_txt)
break
case 'script':
case 'sc':
reply(`Gak Ada Sc Sc Kak Ini Baru Base Doank`)
break
case 'menua':
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
KirBotz.sendMessage(from, 
{"contentText": `${bio}`,
footerText: `${allmenu}`,
"buttons": [
{buttonId: `.owner`, buttonText: {displayText: 'owner'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": `application/${appl}`,
            "title": "KirBotz",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`)
}}, 
MessageType.buttonsMessage,
{ quoted: krtd1,thumbnail: fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`), 
contextInfo: {mentionedJid: [sender]}})
listMsg = {
buttonText: '♞ ♚ ❁',
footerText: `Created By KirBotz`,
description: `${ucapanWaktu} Kak @${sender.split('@')[0]}`,
sections: [
{
"title": `OWNER`,
 rows: [
{
"title": "OWNER MENU",
"rowId": `${prefix}ownermenu`
}
]
}
,
{
"title": `OTHER`,
 rows: [
{
"title": "OTHER MENU",
"rowId": `${prefix}othermenu`
}
]
}
,
{
"title": `GROUP`,
 rows: [
{
"title": "GROUP MENU",
"rowId": `${prefix}groupmenu`
}
]
}
,
{
"title": `ISLAMI`,
 rows: [
{
"title": "ISLAMI MENU",
"rowId": `${prefix}islamimenu`
}
]
}
,
{
"title": `DOWNLOAD`,
 rows: [
{
"title": "DOWNLOAD MENU",
"rowId": `${prefix}downloadmenu`
}
]
}
,
{
"title": `NULIS`,
 rows: [
{
"title": "NULIS MENU",
"rowId": `${prefix}nulismenu`
}
]
}
,
{
"title": `STICKER`,
 rows: [
{
"title": "STICKER MENU",
"rowId": `${prefix}stickermenu`
}
]
}
,
{
"title": `PHOTOXY`,
 rows: [
{
"title": "PHOTOXY MENU",
"rowId": `${prefix}photoxymenu`
}
]
}
,
{
"title": `EPHOTO`,
 rows: [
{
"title": "EPHOTO MENU",
"rowId": `${prefix}ephotomenu`
}
]
}
,
{
"title": `CECAN`,
 rows: [
{
"title": "CECAN MENU",
"rowId": `${prefix}cecanmenu`
}
]
}
,
{
"title": `FOTO`,
 rows: [
{
"title": "FOTO MENU",
"rowId": `${prefix}fotomenu`
}
]
}
,
{
"title": `VIDEO`,
 rows: [
{
"title": "VIDEO MENU",
"rowId": `${prefix}videomenu`
}
]
}
,
{
"title": `RPG`,
 rows: [
{
"title": "RPG MENU",
"rowId": `${prefix}rpgmenu`
}
]
}
],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
///////////////////
case 'ownermenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${ownermenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: ownerfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'othermenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${othermenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: otherfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'groupmenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${groupmenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: groupfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'islamimenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${islamimenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: islamifake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'downloadmenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${downloadmenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: downloadfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'nulismenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${nulismenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: nulisfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'stickermenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${stickermenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: stickerfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'photoxymenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${photoxymenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: photoxyfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'ephotomenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${ephotomenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: ephotofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'cecanmenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${cecanmenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: cecanfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'fotomenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${fotomenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fotofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'videomenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${videomenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: videofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'rpgmenu':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${rpgmenu(prefix)}`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: rpgfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
/////////////////////////\\//\\/\\/\\/\\/\\/\\/\\/\\//\/\\//
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pintar': 
case 'jago': 
case 'nolep': 
case 'monyet':     	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (!isGroup) return reply(`Khusus Group`)
jds = []
var AS1 = groupMembers
var CS1 = AS1[Math.floor(Math.random() * AS1.length)]      
var vcardd = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:${command}\n` 
+ `ORG: Anak ${command};\n`
+ `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
+ 'END:VCARD' 
KirBotz.sendMessage(from, {displayname: "Mikey", vcard: vcardd}, MessageType.contact, { quoted: krtd1})
reply(`Hahah Dia Yang *Ter${command}* Disini`)
break 
//////////////////////////////
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':	
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
//////////////////////////////////////////////\\//\//\//\/\\\/\/\\//\\\
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks`)
reply(botz.wait)
txt1 = args[0]
getBuffer(`${api4}/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : krtd1})
})
break
case 'tiktokmaker':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(botz.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : krtd1})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(botz.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : krtd1})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
getBuffer(`${api4}/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : krtd1}) 
})
break
case 'neondevil':
case '3dshiny':
case 'zombie3d':
case 'wordgreen':
case 'cloud':
case 'metal':
case 'neon':
case 'graffiticolor':
case 'lightgalaxy':
case 'hotmetalic':
case 'snake':
case 'graffiti5':
case 'graffiti3':
case 'graffiti':
case 'neon2':
case 'thunder':
case 'startsnight':
case 'cake':
case 'writingchalk':
case 'birthdaycake':
case '3dhologram':
case 'galaxystyle':
case 'lighteffects':
case 'greenbrush':
case 'cakes':
case 'startsnight2':
case 'glowing':
case 'blackpinkneon':
case '3dcrack':
case '3dunderwater':
case 'bearlogo':
case 'graffiti2':
case 'watercolor':
case 'clouds':
case 'pubgmascot':
case 'summerbeach':
case 'neonlight':
case 'summerbeach2':
case 'glow':
case 'wooden3d':
case 'galaxy':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Subrek KirBotz×`
sendButImage(from, pll, `Created By KirBotz`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'brokenglass':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Subrek KirBotz×`
sendButImage(from, pll, `Created By KirBotz`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'artpapercut':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Subrek KirBotz×`
sendButImage(from, pll, `Created By KirBotz`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'bokep':
reply(botz.wait)
get_result = await getBuffer(`${api2}/api/bokep?apikey=RakuKeyTod`)
pll = `Nih Kak Jangan Lupa Sambil Coli Yah︎`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storywa':
case 'storygalau':
case 'storyanime':
case 'storytruk':
case 'storybus':
case 'storysholawatan':
reply(botz.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'naruto':
case 'boruto':
case 'nekonime':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestie':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
reply(botz.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
case 'motor':
case 'mobil':
case 'memeindo':
case 'renungan':
case 'quotesimage':
case 'katakataimage':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
reply(botz.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
///////////////////
case 'vietnam':
case 'indonesia':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
reply(botz.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
case 'cecan':
case 'cogan':
reply(botz.wait)
get_result = await getBuffer(`${api4}/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
//\\\//\\//\//\\/\\//\/\\//\//\\/\\/\\/\/\\/\\/\\/\//\/\\/\
case 'nulis':
if(!q) return reply('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST NULIS`,
sections: [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'nuliskiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'nuliskanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
///\\//\//\\//\\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\////\\//\//\\//\
case 'play':
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(botz.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `🜲 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬 🜲

𖥸 Judul : ${yut.all[0].title}
𖥸 ID Video : ${yut.all[0].videoId}
𖥸️ Diupload Pada : ${yut.all[0].ago}
𖥸️️ Views : ${yut.all[0].views}
𖥸️ Durasi : ${yut.all[0].timestamp}
𖥸 Channel : ${yut.all[0].author.name}
𖥸 Link Channel : ${yut.all[0].author.url}
𖥸 Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await KirBotz.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`Base By *KirBotz×*`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link?')     
reply(botz.wait)
KirTid = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${q}&apikey=NisaaCantik`)
kirmp4 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp4, video, { mimetype: 'video/mp4', quoted: krtd1 })
break
case 'ytmp3':
if (args.length < 1) return reply('Link?')         
reply(botz.wait)      
KirTid = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${q}&apikey=NisaaCantik`)
kirmp3 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: krtd1})
break
case 'tiktok':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
result = `⌦ *Nickname*: ${data.result.author.nickname}
⌦ *Like*: ${data.result.statistic.diggCount}
⌦ *Komentar*: ${data.result.statistic.commentCount}
⌦ *Share*: ${data.result.statistic.shareCount}
️⌦ *Views*: ${data.result.statistic.playCount}
⌦ *Desc*: ${data.result.title}`
buttons = 
[
{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `NO WM` },type:1}
,
{buttonId:`${prefix}tiktokwm ${q}`,buttonText:{displayText: `WM` },type:1}
]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
imageMsg = ( await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
contentText:`${result}`,buttons,headerType:4}
prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: krtd1})
KirBotz.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'tiktoknowm': 
if (!q) return reply('Linknya?')
reply(botz.wait)
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
ini_video = await getBuffer(data.result.link)
KirBotz.sendMessage(from, ini_video, video, { quoted: krtd1 })
break
case 'tiktokwm':
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
if (!q) return reply('Link?')
reply(botz.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
var { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
.then(async (a) => {
me = `Nih Bree✔︎`
KirBotz.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:krtd1,caption:me})
})
})
break
////////////////////\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\/
case 'setname':
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: todd })
break
case 'tagall':
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
var arr = [];
var txti = `*[ TAG ALL ]*\n\n*Teks :* ${q ? q : ''}\n\n`
for (var i of groupMembers)
{
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'add':
if (todd.message.extendedTextMessage === null || todd.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
KirBotz.groupAdd(from, [entah])
} else {
entah = todd.message.extendedTextMessage.contextInfo.participant
KirBotz.groupAdd(from, [entah])
}
break
case 'kick':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'hidetag':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin`)
var value = body.slice(9)
var group = await KirBotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: todd
}
KirBotz.sendMessage(from, options, text)
break
case 'open':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'menu':
case 'help':
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`*╭──「 INFO USER 」*
*│Kontak User* : @${sender.split('@')[0]} 
*│Bio User* : ${thu.status}
*╰──────────────*
*╭──「 INFO BOT 」*
*│Nama Bot* : KirBotz
*│Nama Owner* : Akira
*│Runtime Bot* : ${runtime(process.uptime())}
*│Speed Bot* : ${latensie.toFixed(4)} Detik ⚡
*│Mode Bot* : ${KirSelfPublic ? 'MODE SELF' : 'MODE PUBLIC'}
*│Total Group Chat* : ${groups.length}
*│Total Private Chat* : ${privat.length}
*│Total Semua Chat* : ${totalChat.length}
*│Tanggal* : ${Tanggal}
*│Waktu WIB* : ${wib}
*│Waktu WIT* : ${wit}
*│Waktu WITA* : ${wita}
*╰──────────────*`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By KirBotz`, 
buttons: [
{ buttonId: `.menua`, buttonText: { displayText: '📄 FITUR' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
/////////////////\\\\/\\//\\//\\/\\//\\//\///
case 'joinrpg':
if (!isGroup) return reply(`Khusus Group Kak`)  
if (isPetualang) return reply('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
_petualang.push(sender)
fs.writeFileSync('./KIR2/inventori.json', JSON.stringify(_petualang))        
addInventori(sender)
addLevelingId(sender) 
var name = args[0]
try {
ppimg = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/bc83fab9ed0fe327fe5ad.jpg'	
}
var serialUser = createSerial(14)
var anuu = monospace(`〘 SUKSES JOIN RPG 〙\n\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
haitod = await getBuffer(ppimg)
KirBotz.sendMessage(from, { contentText: `${anuu}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.rpgmenu`, buttonText: { displayText: 'RPG MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: haitod,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'profile': 
case 'rpgmenu':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemond
 × ${prefix}killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: kirtodrpg,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'sellikan':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellikan', but)
break
case 'sellbesi':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellbesi', but)
break
case 'sellemas':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellemas', but)
break 
case 'selldiamond':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Selldiamond', but)
break 
case 'quest':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: 'S E L E C T',
footerText: `@Quest Game`,
description: `Hallo Kak @${sender.split('@')[0]}, Aku KirBotz
Aku Adalah Admin Quest Di Group Ini!!!
Silahkan Pilih Quest Yang Cocok Dengan Kakak!!!
Gabung Ke Petualang Pro Untuk Membuka Quest Mode Demon
*Jadi Petualangan Pro Untuk Mendapatkan Hadiah Special>_<*`,
sections: [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'slime':
case 'killslime':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: slime,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'goblin':
case 'killgoblin':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: goblin,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'devil': 
case 'killdevil':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: devil,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'behemoth':
case 'killbehemoth':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: behemoth,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'demon':
case 'killdemond': 
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demon,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break  
case 'demonking':
case 'killdemondking':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
KirBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demonking,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'mancing':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
KirBotz.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `${prefix}mancing`, buttonText: { displayText: `Lanjut Mancing` }, type: 1 },
{ buttonId: `${prefix}inventori`, buttonText: { displayText: `Cek Inventori` }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: cing,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 6000)
setTimeout( () => {
KirBotz.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '🎣Meanarik kail. . .', text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '🎣Mulai memancing. . .', text) 
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'inventori':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `${prefix}adventure`, buttonText: { displayText: 'ADVENTURE' }, type: 1 }]
sendButton(from, done, 'Inventori User', but)
break
case 'adventure':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./KIR1/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)				
setTimeout( () => {		
caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
KirBotz.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `.inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: hasm,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 7000)
setTimeout( () => {
KirBotz.sendMessage(from, `Awass`, text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, `${pushname} sedang bertualang`, text) 
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'mining':   
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt sedang menguli . . .')
setTimeout( () => {
but = [{ buttonId: `${prefix}`, buttonText: { displayText: 'LANJUT MINING' }, type: 1 }]
sendButton(from, done, 'Mining', but)
}, 9000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
}, 7000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
}, 4000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
}, 1500) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, mining, text, {quoted: krtd1}) 
}, 0) // 1000 = 1s,
break
case 'luckyday':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckyday`, buttonText: { displayText: 'LuckyDay' }, type: 1 }]
sendButton(from, za, '@LuckyDay', but, krtd1)   
}
break
case 'luckytime':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 300)
addLevelingXp(sender, ez)
a = randomNomor(49)
b = randomNomor(300)
c = randomNomor(70)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckytime`, buttonText: { displayText: 'LuckyTime' }, type: 1 }]
sendButton(from, za, '@LuckyTime', but, krtd1)
}
break
////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\//
case 'tts':
if (!q) return reply(`Contoh ${prefix + command} KirTod`)
titidakira = await getBuffer(`${api7}/api/maker/tts?text=${q}&lang=id&apikey=TtiLOZsxnW`)
KirBotz.sendMessage(from, titidakira, MessageType.audio, {quoted: todd, mimetype: 'audip/mp4', ptt:true})
break
case 'public':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === false) return
uptime = process.uptime()
KirSelfPublic = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === true) return
uptime = process.uptime()
KirSelfPublic = true
reply(`「 *SELF-MODE* 」`)
break
case 'tes':
reply(` Bot On Kak Silahkan Ketik .menu `)
break
case 'runtime':
fakee(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownerName}\n` +
`item1.TEL;waid=${owner}:${owner}\n` +
`item1.X-ABLabel:👑 Creator\n` +
`item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
`item2.X-ABLabel:📧 Email\n` +
`item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
`item3.X-ABLabel:⚙️ Channel Owner\n` +
`item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:🌍 Region\n` +
`item5.X-ABLabel:⚔️ Kir - Botz Developer\n` +
'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: todd, 
})
reply('TUHH NOMER OWNER KU')
break
case 'sticker':
case 'stiker':
case 's':
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else if ((isMedia && todd.message.videoMessage.fileLength < 10000000 || isQuotedVideo && todd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
reply(botz.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './KIR3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : KirBotz×`)
fs.unlinkSync(ran)
})
break
case 'tourl':
if ((isMedia && !todd.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(botz.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
owgi = await KirBotz.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'ssweb':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`${api5}/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
KirBotz.sendMessage(from, buff, image, {quoted: todd, caption : teks})
break
case 'darkjokes':
case 'darkjoke':
reply(botz.wait)
data = fs.readFileSync('./KIR1/darkjokes.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
KirBotz.sendMessage(from, hasil, image, {quoted: todd, caption: '*GELAP BOS :V*'})
break
case 'attp':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(botz.wait)
buffer = await getBuffer(`${api6}/attp?file&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: todd })
break
case 'ttp':  
if (!q) return fakeyt(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp KirBotz`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
KirBotz.sendMessage(from, anu1, image, {quoted: krtd1, caption : `${prefix}s`})
break
case 'antilink':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
var anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'welcome':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (args.length < 1) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
case 'bc':
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (args.length < 1) return reply('teks?')
anu = await KirBotz.chats.all()
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await KirBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `Base By *KirBotzꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `Base By *KirBotzꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
///////////////////\//\\/\//\//\//\\\\\\\[ SERTI MENU ]\\\//////////////////////\\\///\\
case 'tololserti':
case 'fuckboy':
case 'fuckgirl':
case 'bucinserti':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=Deffbotz&name=${ini_txt}`)
pll = `Nih Kak Jangan Lupa Subrek KirBotz×`
sendButImage(from, pll, `Created By KirBotz`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'pacar':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Nama1 Nama2`)
reply(botz.wait)
txt1 = args[0]
txt2 = args[1]
get_result = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=Deffbotz&name1=${txt1}&name2=${txt2}`)
pll = `Nih Kak Jangan Lupa Subrek KirBotz×`
sendButImage(from, pll, `Created By KirBotz`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return fakeyt('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(`Wet wet...`)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
KirBotz.sendMessage(from, buff, image, { quoted: krtd1, caption: 'Nih Bro Hasil nya' })
break

default:
if (isCmd) {      
menu = monospace(`Maaf Kak ${pushname}
Command ${prefix + command} Tidak Rersedia Di List Menu!!!
Mohon Cek Kembali List Menu Nya Kak`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
sendButton(from, menu, 'Base By KirBotz×', but, krtd1)
break
}
if (budy.startsWith('to')){
if (!todd.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
}
catch 
(e)
{
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'magenta'))
}
}
}