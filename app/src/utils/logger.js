const a5_0x29726e=a5_0x186c;(function(_0x11ad91,_0x2dace2){const _0x493cd9=a5_0x186c,_0x182448=_0x11ad91();while(!![]){try{const _0x53ffa0=-parseInt(_0x493cd9(0x1d5))/0x1*(-parseInt(_0x493cd9(0x1d2))/0x2)+parseInt(_0x493cd9(0x1d3))/0x3*(-parseInt(_0x493cd9(0x1df))/0x4)+parseInt(_0x493cd9(0x1dc))/0x5+-parseInt(_0x493cd9(0x1da))/0x6+-parseInt(_0x493cd9(0x1ca))/0x7+-parseInt(_0x493cd9(0x1cf))/0x8*(-parseInt(_0x493cd9(0x1d7))/0x9)+parseInt(_0x493cd9(0x1d8))/0xa;if(_0x53ffa0===_0x2dace2)break;else _0x182448['push'](_0x182448['shift']());}catch(_0xd1f56b){_0x182448['push'](_0x182448['shift']());}}}(a5_0x32ea,0xedc7b));function a5_0x186c(_0x1e9f0f,_0x30650f){const _0x32eae2=a5_0x32ea();return a5_0x186c=function(_0x186c02,_0x389069){_0x186c02=_0x186c02-0x1c9;let _0x4c054a=_0x32eae2[_0x186c02];return _0x4c054a;},a5_0x186c(_0x1e9f0f,_0x30650f);}import{createLogger,format,transports}from'winston';import a5_0x19fe12 from'fs';function a5_0x32ea(){const _0x5bbb4e=['3YOlWix','YYYY-MM-DD\x20HH:mm:ss','481538stHfmH','log/app.log','7807599yDyaXd','2568560rYXwOt','File','5527314YBkLVW','warn','1853045ZmQqdJ','Log\x20file\x20cleared','error','2869884fCJCkY','clear','8361248mPfoRC','truncate','info','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','logger','16xtqYUb','level','debug','6solODG'];a5_0x32ea=function(){return _0x5bbb4e;};return a5_0x32ea();}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x210ea1,message:_0x49be2a,timestamp:_0x29ec98})=>{return _0x29ec98+'\x20['+_0x210ea1+']:\x20'+_0x49be2a;});class Logger{constructor(){const _0x2ad261=a5_0x186c;this[_0x2ad261(0x1ce)]=createLogger({'level':_0x2ad261(0x1d1),'format':combine(timestamp({'format':_0x2ad261(0x1d4)}),colorize(),customFormat),'transports':[new transports['File']({'filename':'log/app.log'})],'exceptionHandlers':[new transports['File']({'filename':'log/app.log'})],'rejectionHandlers':[new transports[(_0x2ad261(0x1d9))]({'filename':_0x2ad261(0x1d6)})]});}[a5_0x29726e(0x1cc)](_0x26547b){const _0x256e53=a5_0x29726e;this[_0x256e53(0x1ce)]['info'](_0x26547b);}['warn'](_0xcc2fe1){const _0x51fae8=a5_0x29726e;this[_0x51fae8(0x1ce)][_0x51fae8(0x1db)](_0xcc2fe1);}[a5_0x29726e(0x1de)](_0xaca427){const _0x56d8b7=a5_0x29726e;this[_0x56d8b7(0x1ce)][_0x56d8b7(0x1de)](_0xaca427);}['debug'](_0x160c88){const _0x559f1e=a5_0x29726e;this[_0x559f1e(0x1ce)][_0x559f1e(0x1d1)](_0x160c88);}['setLevel'](_0x569ab0){const _0x11e68c=a5_0x29726e;this[_0x11e68c(0x1ce)][_0x11e68c(0x1d0)]=_0x569ab0;}[a5_0x29726e(0x1c9)](){const _0x364b82=a5_0x29726e;a5_0x19fe12[_0x364b82(0x1cb)]('log/app.log',0x0,_0x3a5b47=>{const _0x3d3f85=_0x364b82;_0x3a5b47?this[_0x3d3f85(0x1ce)][_0x3d3f85(0x1de)](_0x3d3f85(0x1cd)+_0x3a5b47['message']):this[_0x3d3f85(0x1ce)][_0x3d3f85(0x1cc)](_0x3d3f85(0x1dd));});}}export default new Logger();