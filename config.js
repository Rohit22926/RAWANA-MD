const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "Fn1H3YJa#jVoWnJHnyyN907SUVws2Djv6gbAeuf2Hyjq9m9h9Pwg":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:jOiTeazErTjWFXTUbLXJMhBmcFhlGBVp@shinkansen.proxy.rlwy.net:35280"mongodb://mongo:BGjaemqhsshcUtsSYuiKGMJSGLpEDzcH@trolley.proxy.rlwy.net:23060,
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
I am agree
