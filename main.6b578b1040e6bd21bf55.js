!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([124,1]),n()}({124:function(e,t,n){n(125),e.exports=n(316)},315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(123),c=n.n(a),i=(n(315),function(e){var t=e.click,n=e.title,r=void 0===n?"":n,a=e.disabled,c=void 0!==a&&a,i=e.children;return o.a.createElement("button",{onClick:t,title:r,className:"command-bar__btn",disabled:c},i)}),s=function(e){var t=e.click,n=e.title,r=void 0===n?"":n,a=e.disabled,c=void 0!==a&&a,i=e.children;return o.a.createElement("button",{onClick:t,title:r,className:"command-bar__btn",disabled:c},i)},l=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 0 48 48",width:"48",className:"command-bar__btn__icon"},o.a.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}),o.a.createElement("path",{d:"M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4h-8.37c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-14 0c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36h-28v-32h4v6h20v-6h4v32z"}))},u=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 0 48 48",width:"48",className:"command-bar__btn__icon"},o.a.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}),o.a.createElement("path",{d:"M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"}))},d=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",className:"command-bar__btn__icon"},o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.a.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}))},f=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 0 48 48",width:"48",className:"command-bar__btn__icon"},o.a.createElement("path",{d:"M0 0h48v48H0z",fill:"none"}),o.a.createElement("path",{d:"M12 12h24v24H12z"}))},h=function(e){var t=e.click,n=e.title,r=void 0===n?"":n,a=e.active,c=void 0!==a&&a,i=e.children,s="command-bar__btn";return c&&(s+=" command-bar__btn--active"),o.a.createElement("button",{onClick:t,title:r,className:s},o.a.createElement("div",{className:"command-bar__circle"},o.a.createElement("div",{className:"command-bar__circle-inner"},o.a.createElement("span",{className:"hidden"},i))))},m={KeyB:{code:101,disabled:!1},KeyI:{code:102,disabled:!1},KeyS:{code:103,disabled:!1},KeyU:{code:104,disabled:!1},KeyR:{code:105,disabled:!1},ArrowUp:{code:201,disabled:!1},ArrowDown:{code:202,disabled:!1},KeyJ:{code:301,disabled:!1},KeyN:{code:401,disabled:!1},KeyZ:{code:901,disabled:!1},KeyX:{code:902,disabled:!1},KeyL:{code:903,disabled:navigator.userAgent.indexOf("Chrome")<0},KeyK:{code:904,disabled:!1},KeyT:{code:501,disabled:!1}},y={key101:{title:{en:"Bold"},shortcut:"[Alt+B]",code:101},key102:{title:{en:"Italic"},shortcut:"[Alt+I]",code:102},key103:{title:{en:"Strikethrough"},shortcut:"[Alt+S]",code:103},key104:{title:{en:"Underline"},shortcut:"[Alt+U]",code:104},key105:{title:{en:"Spoiler"},shortcut:"[Alt+R]",code:105},key201:{title:{en:"Uppercase"},shortcut:"[Alt+↑]",code:201},key202:{title:{en:"Lowercase"},shortcut:"[Alt+↓]",code:202},key301:{title:{en:"Convert lines to @-list"},shortcut:"[Alt+J]",code:301},key401:{title:{en:"Format as filename"},shortcut:"[Alt+N]",code:401},key901:{title:{en:"Undo"},shortcut:"[Alt+Z]",code:901},key902:{title:{en:"Discard all changes and clear the form"},shortcut:"[Alt+X]",code:902},key903:{title:{en:"Add to clipboard"},shortcut:navigator.userAgent.indexOf("Chrome")>=0?"[Alt+L]":"",code:903},key904:{title:{en:"Mode switch.\n\nApplying formatting: all text or selected text.\n\n"},shortcut:"[Alt+K]",code:904},key501:{title:{en:"Remove spaces at the beginning\nand at the end of lines.\n"},shortcut:"[Alt+T]",code:501}},p=function(e){return o.a.createElement("div",{className:"command-bar"},o.a.createElement("div",{className:"command-bar__panel"},o.a.createElement(i,{click:function(t){return e.action(y.key101.code,t)},title:"".concat(y.key101.title.en," ").concat(y.key101.shortcut)},"B"),o.a.createElement(i,{click:function(t){return e.action(y.key102.code,t)},title:"".concat(y.key102.title.en," ").concat(y.key102.shortcut)},"I"),o.a.createElement(i,{click:function(t){return e.action(y.key103.code,t)},title:"".concat(y.key103.title.en," ").concat(y.key103.shortcut)},"S"),o.a.createElement(i,{click:function(t){return e.action(y.key104.code,t)},title:"".concat(y.key104.title.en," ").concat(y.key104.shortcut)},"U"),o.a.createElement(i,{click:function(t){return e.action(y.key105.code,t)},title:"".concat(y.key105.title.en," ").concat(y.key105.shortcut)},o.a.createElement(f,null)),o.a.createElement(i,{click:function(t){return e.action(y.key201.code,t)},title:"".concat(y.key201.title.en," ").concat(y.key201.shortcut)},"AA"),o.a.createElement(i,{click:function(t){return e.action(y.key202.code,t)},title:"".concat(y.key202.title.en," ").concat(y.key202.shortcut)},"aa"),o.a.createElement(i,{click:function(t){return e.action(y.key501.code,t)},title:"".concat(y.key501.title.en," ").concat(y.key501.shortcut)},"T_"),o.a.createElement(i,{click:function(t){return e.action(y.key401.code,t)},title:"".concat(y.key401.title.en," ").concat(y.key401.shortcut)},"&f"),o.a.createElement(i,{click:function(t){return e.action(y.key301.code,t)},title:"".concat(y.key301.title.en," ").concat(y.key301.shortcut),disabled:e.text.indexOf("\n")<0},"@")),o.a.createElement("div",{className:"command-bar__panel"},o.a.createElement(s,{click:function(t){return e.action(y.key903.code,t)},title:"".concat(y.key903.title.en," ").concat(y.key903.shortcut),disabled:!e.text.length},o.a.createElement(l,null)),o.a.createElement(s,{click:function(t){return e.action(y.key902.code,t)},title:"".concat(y.key902.title.en," ").concat(y.key902.shortcut),disabled:e.historyLength<=0},o.a.createElement(u,null)),o.a.createElement(s,{click:function(t){return e.action(y.key901.code,t)},title:"".concat(y.key901.title.en," ").concat(y.key901.shortcut),disabled:e.historyLength<=0},o.a.createElement(d,null)),o.a.createElement(h,{click:function(t){return e.action(y.key904.code,t)},title:"".concat(y.key904.title.en," ").concat(y.key904.shortcut),active:e.allText},"mode")))},v=function(e){var t=e.message;return t?o.a.createElement("span",{className:"editor__message",title:t},t):null};function _(e){for(var t={"[B]":'<span class="bbcode-bold">',"[/B]":"</span>","[I]":'<span class="bbcode-italic">',"[/I]":"</span>","[S]":'<span class="bbcode-strike">',"[/S]":"</span>","[SPOILER]":'<span class="bbcode-spoiler">',"[/SPOILER]":"</span>","[U]":'<span class="bbcode-underline">',"[/U]":"</span>"},n=!1,r="",o="",a="",c=0;c<e.length;c++){if("["===(a=e[c])&&(n=!0),n)r+=a.toUpperCase();else switch(a){case"\n":o+="<br />";break;case" ":o+="&nbsp";break;default:o+=a}"]"===a&&(n=!1,t[r]&&(o+=t[r]),r="")}return o}function b(e,t){if(t.indexOf("\n")>=0){var n,r=t.split("\n");return r.forEach((function(t,o){(n=w(t)).empty?r[o]=n.value:r[o]="".concat(n.space.start,"[").concat(e,"]").concat(n.value,"[/").concat(e,"]").concat(n.space.end)})),r.join("\n")}return t=w(t),"".concat(t.space.start,"[").concat(e,"]").concat(t.value,"[/").concat(e,"]").concat(t.space.end)}function g(e){return e.replaceAll(/[^-_().,a-zA-Z0-9 ]/g,"").replaceAll(/ {2,}/g," ")}function k(e,t){return e?t.toUpperCase():t.toLowerCase()}function E(e,t){return t.replaceAll(/\n/g,"\n".concat(e,"\n"))}function x(e){if(e.indexOf("\n")>=0){var t=e.split("\n");return t.forEach((function(e,n){t[n]=e.trim()})),t.join("\n")}return e.trim()}function w(e){var t={value:"",space:{start:"",end:""},empty:!1};if(!e)return t.empty=!0,t;for(var n=0;" "===e[n];)t.space.start+=" ",n++;n>=e.length&&(t.space.start="",t.empty=!0);for(var r=e.length-1;" "===e[r];)t.space.end+=" ",r--;return r<0&&(t.space.end="",t.empty=!0),t.value=e.substring(n,r+1),t}var S=function(e){var t="Total number of characters",n="Number of characters without any spaces",r="Number of selected characters";return o.a.createElement("div",{className:"editor__status-bar"},o.a.createElement("span",{className:"editor__counter",title:t},e.text.length),o.a.createElement("span",{className:"editor__counter",title:n},function(e){if(e){var t=e.match(/\s/g);return t?e.length-t.length:e.length}return 0}(e.text)),o.a.createElement("span",{className:"editor__counter",title:r,ref:e.editorCSCRef},"0"),o.a.createElement(v,{message:e.message}))},T=function(e){return o.a.createElement("textarea",{ref:e.editorRef,value:e.text,className:"editor__textarea",onChange:e.onEditorChange,onSelect:e.onEditorTextSelect,onPaste:e.onEditorPaste,onCut:e.onEditorCut,onKeyUp:e.onEditorKeyUp,onKeyDown:e.onEditorKeyDown})},C=function(e){var t=e.text;return o.a.createElement("div",{className:"preview",dangerouslySetInnerHTML:{__html:_(t)}})};function A(){if(this.ref.current){var e=this.ref.current.selectionStart,t=this.ref.current.selectionEnd;return e===t?"":this.ref.current.value.substring(e,t)}console.log("[APP] [textarea] no ref")}function P(e,t){if(this.ref.current){var n=this.ref.current.selectionStart,r=this.ref.current.selectionEnd;return this.ref.current.setRangeText(e,n,r,"end"),t&&n===r&&(this.ref.current.selectionStart=n+t,this.ref.current.selectionEnd=n+t),this.ref.current.value}console.log("[APP] [textarea] no ref")}function O(e){if(this.ref.current)return this.ref.current.selectionStart=e,void(this.ref.current.selectionEnd=e);console.log("[APP] [textarea] no ref")}function N(){this.ref.current?this.ref.current.focus():console.log("[APP] [textarea] no ref")}var K=function(e){return{ref:e,getText:A,setText:P,setCursor:O,focus:N}};function R(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}var D=function(e,t){if(navigator.clipboard)(function(){var n,r=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,navigator.clipboard.writeText(e);case 3:t(!0),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),t(!1);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function c(e){R(a,r,o,c,i,"next",e)}function i(e){R(a,r,o,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}})()();else if(document.execCommand){var n=function(t){t.preventDefault(),t.clipboardData.setData("text/plain",e)};document.addEventListener("copy",n);var r=document.execCommand("copy");document.removeEventListener("copy",n),t(!!r)}else t(!1)};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(c,e);var t,n,r,a=L(c);function c(){var e;U(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return F(I(e=a.call.apply(a,[this].concat(n))),"state",{text:"",allText:!1,message:"",clean:!0}),F(I(e),"source",K(o.a.createRef())),F(I(e),"editorHistory",[]),F(I(e),"editorCSCRef",o.a.createRef()),F(I(e),"action",(function(t,n){switch(n&&n.currentTarget&&n.currentTarget.blur(),e.source.focus(),t){case 901:return e.__undo();case 902:return e.__discard();case 903:return e.__clipboard();case 904:return e.__switchMode()}var r=e.__getText();switch(t){case 101:return e.__setText(b("B",r),r,3);case 102:return e.__setText(b("I",r),r,3);case 103:return e.__setText(b("S",r),r,3);case 104:return e.__setText(b("U",r),r,3);case 105:return e.__setText(b("SPOILER",r),r,9);case 201:return e.__setText(k(1,r),r);case 202:return e.__setText(k(0,r),r);case 301:return e.__setText(E("@",r),r);case 401:return e.__setText(g(r),r);case 501:return e.__setText(x(r),r);default:console.log("[APP] command not found")}})),F(I(e),"onEditorChange",(function(t){return e.setState({text:t.target.value})})),F(I(e),"onEditorTextSelect",(function(t){return e.__setCounterOfSelectedCharacters(t)})),F(I(e),"onEditorPaste",(function(t){return e.__saveTextFromClipboard(t)})),F(I(e),"onEditorCut",(function(){return e.editorHistory.push(e.state.text)})),F(I(e),"onEditorKeyDown",(function(t){return e.__toHistoryOnEnter(t)})),F(I(e),"onEditorKeyUp",(function(t){return e.__autogrowing(t)})),F(I(e),"onDocumentKeyDown",(function(t){return e.__hotkey(t)})),e}return t=c,(n=[{key:"__getText",value:function(){return this.state.allText?this.state.text:this.source.getText()}},{key:"__setText",value:function(e,t,n){e!==t&&(this.editorHistory.push(this.state.text),this.state.allText||(e=this.source.setText(e,n)),this.setState({text:e}))}},{key:"__discard",value:function(){var e=this.editorHistory[0];void 0!==e&&(this.editorHistory=[],this.setState({text:e}))}},{key:"__undo",value:function(){var e=this.editorHistory.pop();void 0!==e&&this.setState({text:e})}},{key:"__clipboard",value:function(){var e=this;this.state.text.length&&(this.source.setCursor(this.state.text.length),D(this.state.text,(function(t){e.setState({message:t?"✓ Copied to clipboard":"[Browser buffer error]"}),setTimeout((function(){return e.setState({message:""})}),2e3)})))}},{key:"__switchMode",value:function(e){"boolean"==typeof e?e!==this.state.allText&&this.setState({allText:e}):this.setState({allText:!this.state.allText})}},{key:"__setEditorAsUsed",value:function(){this.state.text.length>0&&!this.editorHistory.length&&(this.editorHistory.push(""),this.setState({clean:!1}))}},{key:"__hotkey",value:function(e){var t=e.altKey,n="AltLeft"!==e.code&&"AltRight"!==e.code;if(t&&n){var r=m[e.code];r?r.disabled||this.action(r.code):console.log("[APP] hotkey not found")}}},{key:"__autogrowing",value:function(e){e.target.scrollHeight>e.target.clientHeight&&(e.target.style.height=e.target.scrollHeight+5+"px")}},{key:"__toHistoryOnEnter",value:function(e){"Enter"===e.code&&this.editorHistory.push(this.state.text)}},{key:"__saveTextFromClipboard",value:function(e){e.preventDefault(),this.editorHistory.push(this.state.text);var t=(e.clipboardData||window.clipboardData).getData("text");this.setState({text:this.source.setText(t)})}},{key:"__setCounterOfSelectedCharacters",value:function(e){var t=e.target.selectionStart,n=e.target.selectionEnd,r=t!==n?n-t:0;this.editorCSCRef.current.textContent=r}},{key:"componentDidUpdate",value:function(){this.__setEditorAsUsed()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onDocumentKeyDown)}},{key:"render",value:function(){return o.a.createElement("main",{className:"main"},o.a.createElement(p,{action:this.action,text:this.state.text,allText:this.state.allText,historyLength:this.editorHistory.length}),o.a.createElement("div",{className:"editor"},o.a.createElement(S,{text:this.state.text,message:this.state.message,editorCSCRef:this.editorCSCRef}),o.a.createElement(T,{text:this.state.text,editorRef:this.source.ref,onEditorCut:this.onEditorCut,onEditorPaste:this.onEditorPaste,onEditorKeyUp:this.onEditorKeyUp,onEditorChange:this.onEditorChange,onEditorTextSelect:this.onEditorTextSelect,onEditorKeyDown:this.onEditorKeyDown})),o.a.createElement(C,{text:this.state.text}))}}])&&j(t.prototype,n),r&&j(t,r),c}(r.Component),Z=function(){var e=2020,t=(new Date).getFullYear();return e!==t&&(e="".concat(e," - ").concat(t)),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"footer__sign"},"©")," ",o.a.createElement("span",{className:"footer__year"},e)," ",o.a.createElement("a",{href:"https://github.com/ermondel",target:"_blank",rel:"noreferrer",title:"All rights reserved | created by Serhii (ermondel)",className:"footer__link"},"Serhii"))};c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(J,null),o.a.createElement(Z,null)),document.getElementById("root"))}});