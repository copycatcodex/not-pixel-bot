(function(_0x10e325,_0x443bb1){const _0x2340c1=a0_0xffd4,_0x45b63f=_0x10e325();while(!![]){try{const _0x33a731=-parseInt(_0x2340c1(0x162))/0x1+parseInt(_0x2340c1(0x17b))/0x2+parseInt(_0x2340c1(0x164))/0x3*(parseInt(_0x2340c1(0x179))/0x4)+-parseInt(_0x2340c1(0x186))/0x5*(-parseInt(_0x2340c1(0x18c))/0x6)+-parseInt(_0x2340c1(0x151))/0x7+-parseInt(_0x2340c1(0x14f))/0x8*(-parseInt(_0x2340c1(0x15d))/0x9)+parseInt(_0x2340c1(0x167))/0xa*(-parseInt(_0x2340c1(0x165))/0xb);if(_0x33a731===_0x443bb1)break;else _0x45b63f['push'](_0x45b63f['shift']());}catch(_0x3b9ff6){_0x45b63f['push'](_0x45b63f['shift']());}}}(a0_0x120d,0x7b3eb));import{Config}from'./config/config.js';import{proxyList}from'./config/proxy_list.js';import{Core}from'./src/core/core.js';import{Telegram}from'./src/core/telegram.js';import{Helper}from'./src/utils/helper.js';function a0_0x120d(){const _0x3e8817=['360385vApfxo','By\x20:\x20Widiskel','\x20Processing\x20Complete,\x20Continue\x20Using\x20next\x20account\x20in\x2010\x20Seconds','all','\x20Proxy','push','54qGRBQB','resolvePeer','\x20Processing\x20Complete,\x20Restarting\x20in\x20','accounts','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','2226504xFLHtK','/query.txt','2484461RZTlsp','completeMissionsX','queryToJSON','delay','user','getUserInfo','Follow\x20On\x20:\x20https://github.com/Widiskel','getMe','indexOf','You\x20have\x20','accounts/','Error\x20During\x20executing\x20bot','9oTGMXy','All\x20Account\x20Processing\x20Complete','log','\x20Session\x20but\x20you\x20provide\x20','claimMining','419217ZrOhcK','query','1251fmgVnX','1483438NkAfvV','showSkelLogo','60kDsiSW','MODE','Account\x20','Application\x20Started','firstName','launchParamToQuery','mining','Error\x20:\x20','charges','lastName','useSession','clear','length','->\x20New\x20Iteration','first_name','then','catch','readQueryFile','7612MbRgjd','disconnect','735084wQJOiW','info','Join\x20Channel\x20:\x20https://t.me/skeldrophunt','includes','message','msToTime','client','random','last_name','Not\x20Pixel\x20BOT','getSession'];a0_0x120d=function(){return _0x3e8817;};return a0_0x120d();}function a0_0xffd4(_0x56a506,_0x56182f){const _0x120d21=a0_0x120d();return a0_0xffd4=function(_0xffd4fa,_0x5c70e4){_0xffd4fa=_0xffd4fa-0x14e;let _0x149b78=_0x120d21[_0xffd4fa];return _0x149b78;},a0_0xffd4(_0x56a506,_0x56182f);}import a0_0x29acda from'./src/utils/logger.js';import a0_0x41218d from'./src/utils/twist.js';async function operation(_0x2712c1,_0x3b1402,_0x11488a,_0x5cf308){const _0xbd9287=a0_0xffd4;try{const _0x137915=new Core(_0x2712c1,_0x3b1402,_0x11488a,_0x5cf308);await _0x137915[_0xbd9287(0x156)](!![]),await _0x137915['getMiningStatus'](!![]),await _0x137915[_0xbd9287(0x152)]('notcoin'),await _0x137915['completeMissionsX']('notpixel');while(_0x137915[_0xbd9287(0x16d)][_0xbd9287(0x16f)]){await _0x137915['startPainting']();}await _0x137915[_0xbd9287(0x161)]();const _0x5f524a=Config[_0xbd9287(0x168)]??0x2,_0x2713f5=Helper[_0xbd9287(0x182)](0x927c0,0x124f80);_0x5f524a==0x2?(await Helper[_0xbd9287(0x154)](_0x2713f5,_0x2712c1,_0xbd9287(0x169)+_0x2712c1['id']+_0xbd9287(0x18e)+Helper[_0xbd9287(0x180)](_0x2713f5),_0x137915),await operation(_0x2712c1,_0x3b1402,_0x11488a,_0x5cf308)):(await Helper[_0xbd9287(0x154)](0x2710,_0x2712c1,'Account\x20'+_0x2712c1['id']+_0xbd9287(0x188),_0x137915),await a0_0x41218d[_0xbd9287(0x172)](_0x2712c1));}catch(_0x53d539){await Helper[_0xbd9287(0x154)](0x1388,_0x2712c1,_0xbd9287(0x16e)+_0x53d539[_0xbd9287(0x17f)]+',\x20Retrying\x20after\x205\x20Seconds'),await operation(_0x2712c1,_0x3b1402,_0x11488a,_0x5cf308);}}let init=![];async function startBot(){return new Promise(async(_0x9f09c8,_0x42f60a)=>{const _0x337794=a0_0xffd4;try{a0_0x29acda[_0x337794(0x17c)]('BOT\x20STARTED');const _0x2460d8=await new Telegram();init==![]&&(await _0x2460d8['init'](),init=!![]);const _0x545896=Helper[_0x337794(0x185)](_0x337794(0x18f)),_0x11b5c6=[];proxyList['length']>0x0&&(_0x545896['length']!=proxyList['length']&&_0x42f60a(_0x337794(0x15a)+_0x545896[_0x337794(0x173)]+_0x337794(0x160)+proxyList[_0x337794(0x173)]+_0x337794(0x18a)));for(const _0x5e672b of _0x545896){const _0xc28059=_0x545896[_0x337794(0x159)](_0x5e672b),_0x80769=proxyList['length']>0x0?proxyList[_0xc28059]:undefined;if(!_0x5e672b[_0x337794(0x17e)](_0x337794(0x163))){await _0x2460d8[_0x337794(0x171)](_0x337794(0x15b)+_0x5e672b,_0x80769),_0x2460d8['session']=_0x5e672b;const _0x37950e=await _0x2460d8[_0x337794(0x181)][_0x337794(0x158)](),_0x2d184e=await _0x2460d8[_0x337794(0x18d)]()[_0x337794(0x176)](async()=>{return await _0x2460d8['initWebView']();})[_0x337794(0x177)](_0x596869=>{throw _0x596869;}),_0x914a11=Helper[_0x337794(0x153)](_0x2d184e);await _0x2460d8[_0x337794(0x17a)](),_0x11b5c6[_0x337794(0x18b)]([_0x37950e,_0x2d184e,_0x914a11,_0x80769]);}else{let _0x3e9413=Helper[_0x337794(0x178)](_0x337794(0x15b)+_0x5e672b+_0x337794(0x150)),_0x3b87da=Helper[_0x337794(0x153)](_0x3e9413);!_0x3b87da[_0x337794(0x155)]&&(_0x3b87da=await Helper[_0x337794(0x153)](await Helper['launchParamToQuery'](_0x3e9413)),_0x3e9413=await Helper[_0x337794(0x16c)](_0x3e9413));const _0x623503=_0x3b87da['user'];_0x623503[_0x337794(0x16b)]=_0x623503[_0x337794(0x175)],_0x623503[_0x337794(0x170)]=_0x623503[_0x337794(0x183)],_0x11b5c6[_0x337794(0x18b)]([_0x623503,_0x3e9413,_0x3b87da,_0x80769]);}}const _0x39e852=Config[_0x337794(0x168)]??0x2;if(_0x39e852==0x2){const _0x370d42=_0x11b5c6['map'](async _0x36cc0c=>{await operation(_0x36cc0c[0x0],_0x36cc0c[0x1],_0x36cc0c[0x2],_0x36cc0c[0x3]);});await Promise[_0x337794(0x189)](_0x370d42);}else while(!![]){for(const _0x5d852a of _0x11b5c6){await operation(_0x5d852a[0x0],_0x5d852a[0x1],_0x5d852a[0x2],_0x5d852a[0x3]);}await Helper[_0x337794(0x154)](0xea60*0x3c*0x4,undefined,_0x337794(0x15e)),await a0_0x41218d['clearInfo'](),conosole[_0x337794(0x15f)](),conosole[_0x337794(0x15f)](),conosole[_0x337794(0x15f)](_0x337794(0x174));}_0x9f09c8();}catch(_0x1bf91a){a0_0x29acda[_0x337794(0x17c)]('BOT\x20STOPPED'),a0_0x29acda['error'](JSON['stringify'](_0x1bf91a)),_0x42f60a(_0x1bf91a);}});}((async()=>{const _0x2d559e=a0_0xffd4;try{a0_0x29acda[_0x2d559e(0x172)](),a0_0x29acda[_0x2d559e(0x17c)](''),a0_0x29acda[_0x2d559e(0x17c)](_0x2d559e(0x16a)),console[_0x2d559e(0x15f)](_0x2d559e(0x184)),console[_0x2d559e(0x15f)](),console[_0x2d559e(0x15f)](_0x2d559e(0x187)),console[_0x2d559e(0x15f)](_0x2d559e(0x157)),console['log'](_0x2d559e(0x17d)),console[_0x2d559e(0x15f)](_0x2d559e(0x14e)),console[_0x2d559e(0x15f)](),console[_0x2d559e(0x15f)](),Helper[_0x2d559e(0x166)](),await startBot();}catch(_0x45f379){await a0_0x41218d[_0x2d559e(0x172)](),await a0_0x41218d['clearInfo'](),console[_0x2d559e(0x15f)](_0x2d559e(0x15c),_0x45f379),await startBot();}})());