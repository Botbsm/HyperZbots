const fs = require('fs')

global.creator = 'HyperZ'// yourname
global . MONGO_DB_URI  =  "mongodb+srv://gedearga06:D5KJsnxAlDWdmpFY@argha.4lmspdp.mongodb.net/?retryWrites=true&w=majority"  //database mongodb
global . ACTIVATION_TOKEN_SECRET  =  "-@Pqnap+@(/1jAPPnew/@10"  //isi apa aja bebas
global . email_anda  =  "gedearga06@gmail.com"  //email
global . email_password   =   "fbhlbclmvmvhjzpa"   //kata sandi aplikasi email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
