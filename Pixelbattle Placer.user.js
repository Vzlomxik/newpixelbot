// ==UserScript==
// @name         bot.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unity is the way to victory
// @author       GRX, ReD, 3rdC
// @match        https://pixel.w84.vkforms.ru/*
// @grant        GM_xmlhttpRequest
// @connect      github.com
// @connect      raw.githubusercontent.com
// ==/UserScript==

var _0x3721=['ZjTCjFgw','wrgxUMOXwoE5wqPDu8OtwonDhsKyFDp9','wr0jw77DksKS','wqcmS8OOw6s=','cljDmgLCsA==','wpnCuzRLMcKheUhuw6jDgcO7','a8OxR8OiHCw6FADCiMObBMKM','w6ZUMcK3w6k=','EsKLUk9IDyhkwpXDlcKf','w6QfwqRXwqbDncOsw5Z+ccKywofDmcKD','w6HCrhNpwro=','NsK9Tlx/','w5QKJC5B','w74UWHZb','w4bDlBXCsw==','GTkPBw==','w4cyLil9FcKIw71nYWnDiAs1TA==','H8KUw4HDgEs=','GmkGwrPCl2Q=','w7PDsEDDgHE=','Cy3CnMKvUQ==','WXRHXsKjw5c=','LiLCl8K5UA==','wp3CuCdtw6c1','wq09wp/Dgks=','w7HDs3g=','Az4GDsOa','XBLCrH0nSwjCsUjDkTPDtcKFccKoJ8Okw6LDlsK8T8OWwrEhwqXCtMKgI8Onw7A8w5oxKmlKHTNEwobCusOcd8Obwooiwqhnw4rCnsKHwq1eXmUgwoI1w61Xw5bDp3x4w4t+wrRr'];(function(_0x361400,_0x234bc2){var _0x2ae91e=function(_0x25d686){while(--_0x25d686){_0x361400['push'](_0x361400['shift']());}};_0x2ae91e(++_0x234bc2);}(_0x3721,0x81));var _0x4b49=function(_0x170405,_0x21cca3){_0x170405=_0x170405-0x0;var _0x9d0049=_0x3721[_0x170405];if(_0x4b49['anlkuD']===undefined){(function(){var _0x270cce=function(){var _0x4a1910;try{_0x4a1910=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x141acd){_0x4a1910=window;}return _0x4a1910;};var _0x572d42=_0x270cce();var _0x2dc5a3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x572d42['atob']||(_0x572d42['atob']=function(_0x4e9b6e){var _0x4dab1e=String(_0x4e9b6e)['replace'](/=+$/,'');for(var _0x21eeb7=0x0,_0x2f0b82,_0x3727fa,_0xa8a474=0x0,_0x172d03='';_0x3727fa=_0x4dab1e['charAt'](_0xa8a474++);~_0x3727fa&&(_0x2f0b82=_0x21eeb7%0x4?_0x2f0b82*0x40+_0x3727fa:_0x3727fa,_0x21eeb7++%0x4)?_0x172d03+=String['fromCharCode'](0xff&_0x2f0b82>>(-0x2*_0x21eeb7&0x6)):0x0){_0x3727fa=_0x2dc5a3['indexOf'](_0x3727fa);}return _0x172d03;});}());var _0xba51bf=function(_0x2fba90,_0x21cca3){var _0x3fbb45=[],_0x437074=0x0,_0x2d6958,_0x57a4de='',_0x5ed8a1='';_0x2fba90=atob(_0x2fba90);for(var _0x648f24=0x0,_0x5b5ad5=_0x2fba90['length'];_0x648f24<_0x5b5ad5;_0x648f24++){_0x5ed8a1+='%'+('00'+_0x2fba90['charCodeAt'](_0x648f24)['toString'](0x10))['slice'](-0x2);}_0x2fba90=decodeURIComponent(_0x5ed8a1);for(var _0x41cc02=0x0;_0x41cc02<0x100;_0x41cc02++){_0x3fbb45[_0x41cc02]=_0x41cc02;}for(_0x41cc02=0x0;_0x41cc02<0x100;_0x41cc02++){_0x437074=(_0x437074+_0x3fbb45[_0x41cc02]+_0x21cca3['charCodeAt'](_0x41cc02%_0x21cca3['length']))%0x100;_0x2d6958=_0x3fbb45[_0x41cc02];_0x3fbb45[_0x41cc02]=_0x3fbb45[_0x437074];_0x3fbb45[_0x437074]=_0x2d6958;}_0x41cc02=0x0;_0x437074=0x0;for(var _0x7c75ec=0x0;_0x7c75ec<_0x2fba90['length'];_0x7c75ec++){_0x41cc02=(_0x41cc02+0x1)%0x100;_0x437074=(_0x437074+_0x3fbb45[_0x41cc02])%0x100;_0x2d6958=_0x3fbb45[_0x41cc02];_0x3fbb45[_0x41cc02]=_0x3fbb45[_0x437074];_0x3fbb45[_0x437074]=_0x2d6958;_0x57a4de+=String['fromCharCode'](_0x2fba90['charCodeAt'](_0x7c75ec)^_0x3fbb45[(_0x3fbb45[_0x41cc02]+_0x3fbb45[_0x437074])%0x100]);}return _0x57a4de;};_0x4b49['GFiDoo']=_0xba51bf;_0x4b49['lvoClD']={};_0x4b49['anlkuD']=!![];}var _0x318e40=_0x4b49['lvoClD'][_0x170405];if(_0x318e40===undefined){if(_0x4b49['qDqAHo']===undefined){_0x4b49['qDqAHo']=!![];}_0x9d0049=_0x4b49['GFiDoo'](_0x9d0049,_0x21cca3);_0x4b49['lvoClD'][_0x170405]=_0x9d0049;}else{_0x9d0049=_0x318e40;}return _0x9d0049;};(function(){var _0x1d8506={};_0x1d8506[_0x4b49('0x0','eclR')]=_0x4b49('0x1','AEo2');_0x1d8506[_0x4b49('0x2','D$qv')]=function(_0x240613,_0x4a7b2b){return _0x240613+_0x4a7b2b;};_0x1d8506[_0x4b49('0x3','s^Wf')]=_0x4b49('0x4','t$9)');_0x1d8506[_0x4b49('0x5','s^Wf')]=_0x4b49('0x6','K4LE');_0x1d8506[_0x4b49('0x7','k5x5')]=_0x4b49('0x8','D$qv');_0x1d8506[_0x4b49('0x9','t$9)')]=_0x4b49('0xa','Sm8d');_0x1d8506[_0x4b49('0xb','Sm8d')]=_0x4b49('0xc','E6Qk');new GM_xmlhttpRequest({'method':_0x1d8506[_0x4b49('0xd','9QH(')],'url':_0x1d8506[_0x4b49('0xe','E6Qk')],'headers':{'Cache-Control':_0x1d8506[_0x4b49('0xf','bFu[')]},'onload':function(_0x503cfc){_0x503cfc=_0x503cfc[_0x4b49('0x10','rV0i')];var _0xd29547=document[_0x4b49('0x11','FKJ5')](_0x1d8506[_0x4b49('0x12','(tWV')]);_0xd29547[_0x4b49('0x13','6^4i')](document[_0x4b49('0x14','pfVP')](_0x1d8506[_0x4b49('0x15','YyW)')](_0x1d8506[_0x4b49('0x16','6^4i')](_0x1d8506[_0x4b49('0x17','m%bC')],_0x503cfc),_0x1d8506[_0x4b49('0x18','!Iqa')])));(document[_0x4b49('0x19','fcig')]||document[_0x4b49('0x1a','t$9)')]||document[_0x4b49('0x1b','m%bC')])[_0x4b49('0x13','6^4i')](_0xd29547);}});}());
