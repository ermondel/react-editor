!function(t){function e(e){for(var r,a,c=e[0],l=e[1],s=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([124,1]),n()}({124:function(t,e,n){n(125),t.exports=n(316)},315:function(t,e,n){},316:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(123),a=n.n(i),c=(n(315),function(t){var e=t.click,n=t.title,r=void 0===n?"":n,i=t.val,a=t.mod,c=void 0===a?"":a,l=t.disabled,s=void 0!==l&&l,u="panel__btn";return c&&(u+=" ".concat(u,"--").concat(c)),o.a.createElement("button",{onClick:e,title:r,className:u,disabled:s},i)}),l=function(t){var e=t.addTag,n=t.changeCase,r=t.splitText,i=t.undo,a=t.historyLength;return o.a.createElement("div",{className:"panel"},o.a.createElement("div",{className:"panel__main"},o.a.createElement(c,{click:function(){return e("B")},title:"bold",val:"B"}),o.a.createElement(c,{click:function(){return e("I")},title:"italic",val:"I"}),o.a.createElement(c,{click:function(){return e("S")},title:"strikethrough",val:"S"}),o.a.createElement(c,{click:function(){return e("SPOILER")},title:"spoiler",val:"■"}),o.a.createElement(c,{click:function(){return n(!0)},title:"uppercase",val:"AA"}),o.a.createElement(c,{click:function(){return n(!1)},title:"lowercase",val:"aa"}),o.a.createElement(c,{click:function(){return r("@")},title:"@ list",val:"@"})),o.a.createElement("div",{className:"panel__aside"},o.a.createElement(c,{click:i,val:"undo",mod:"undo",disabled:!a})))},s=function(t){var e=t.text,n=t.onChange,r=t.onSelect,i=t.editorRef;return o.a.createElement("div",null,o.a.createElement("textarea",{id:"editor",className:"editor",value:e,onChange:n,onSelect:r,ref:i}))},u=function(t){var e=t.switchMode,n=t.allText;return o.a.createElement("div",null,o.a.createElement("label",{className:"panel__chkbox"},o.a.createElement("input",{type:"checkbox",name:"mode",onChange:e,checked:n})," ","Apply to all text"))};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(a,t);var e,n,r,i=p(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),T(x(e=i.call(this,t)),"state",{text:"",selectionStart:0,selectionEnd:0,allText:!1}),T(x(e),"editorRef",o.a.createRef()),T(x(e),"editorHistory",[]),e.addTag=e.addTag.bind(x(e)),e.changeCase=e.changeCase.bind(x(e)),e.splitText=e.splitText.bind(x(e)),e.undo=e.undo.bind(x(e)),e.onEditorChange=e.onEditorChange.bind(x(e)),e.onTextSelect=e.onTextSelect.bind(x(e)),e.switchMode=e.switchMode.bind(x(e)),e}return e=a,(n=[{key:"getSelectedTextFromEditor",value:function(){return this.state.selectionStart===this.state.selectionEnd?"":this.editorRef.current.value.substring(this.state.selectionStart,this.state.selectionEnd)}},{key:"setTextToEditor",value:function(t){var e=this.editorRef.current;return this.editorHistory.push(e.value),e.setRangeText(t,this.state.selectionStart,this.state.selectionEnd,"end"),e.focus(),e.value}},{key:"wrapTextInTag",value:function(t,e){return e.indexOf("\n")>=0&&(e=e.replaceAll(/ *\n */g,"[/".concat(t,"]\n[").concat(t,"]"))),"[".concat(t,"]").concat(e,"[/").concat(t,"]")}},{key:"addTag",value:function(t){this.state.allText?this.addTagToAllText(t):this.state.selectionStart!==this.state.selectionEnd?this.addTagToSelectedText(t):this.addTagToCurrentPosition(t),this.editorRef.current.focus()}},{key:"addTagToAllText",value:function(t){var e=this.state.text;this.editorHistory.push(e),this.setState({text:this.wrapTextInTag(t,e)})}},{key:"addTagToSelectedText",value:function(t){var e=this.getSelectedTextFromEditor();if(e){var n=this.setTextToEditor(this.wrapTextInTag(t,e));this.setState({text:n,selectionStart:0,selectionEnd:0})}}},{key:"addTagToCurrentPosition",value:function(t){var e=this.setTextToEditor("[".concat(t,"][/").concat(t,"]"));this.setState({text:e,selectionStart:0,selectionEnd:0})}},{key:"changeCase",value:function(t){this.state.allText?t?this.uppercaseAllText():this.lowercaseAllText():t?this.uppercaseSelectedText():this.lowercaseSelectedText(),this.editorRef.current.focus()}},{key:"uppercaseAllText",value:function(){var t=this.state.text,e=t.toUpperCase();e!==t&&(this.editorHistory.push(t),this.setState({text:e}))}},{key:"lowercaseAllText",value:function(){var t=this.state.text,e=t.toLowerCase();e!==t&&(this.editorHistory.push(t),this.setState({text:e}))}},{key:"uppercaseSelectedText",value:function(){var t=this.getSelectedTextFromEditor(),e=t.toUpperCase();if(e!==t){var n=this.setTextToEditor(e);this.setState({text:n,selectionStart:0,selectionEnd:0})}}},{key:"lowercaseSelectedText",value:function(){var t=this.getSelectedTextFromEditor(),e=t.toLowerCase();if(e!==t){var n=this.setTextToEditor(e);this.setState({text:n,selectionStart:0,selectionEnd:0})}}},{key:"splitText",value:function(t){this.state.allText?this.splitAllText(t):this.splitSelectedText(t)}},{key:"splitAllText",value:function(t){var e=this.state.text;e.indexOf("\n")>=0&&(this.editorHistory.push(e),this.setState({text:e.replaceAll(/\n/g,"\n".concat(t,"\n"))})),this.editorRef.current.focus()}},{key:"splitSelectedText",value:function(t){var e=this.getSelectedTextFromEditor();if(e.indexOf("\n")>=0){var n=e.replaceAll(/\n/g,"\n".concat(t,"\n")),r=this.setTextToEditor(n);this.setState({text:r,selectionStart:0,selectionEnd:0})}}},{key:"switchMode",value:function(){this.setState({allText:!this.state.allText})}},{key:"undo",value:function(){var t=this.editorHistory.pop();t&&this.setState({text:t}),this.editorRef.current.focus()}},{key:"onEditorChange",value:function(t){this.setState({text:t.target.value})}},{key:"onTextSelect",value:function(t){this.setState({selectionStart:t.target.selectionStart,selectionEnd:t.target.selectionEnd})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(l,{addTag:this.addTag,changeCase:this.changeCase,splitText:this.splitText,undo:this.undo,historyLength:this.editorHistory.length}),o.a.createElement(s,{text:this.state.text,onChange:this.onEditorChange,onSelect:this.onTextSelect,editorRef:this.editorRef}),o.a.createElement(u,{switchMode:this.switchMode,allText:this.state.allText}))}}])&&f(e.prototype,n),r&&f(e,r),a}(r.Component);a.a.render(o.a.createElement(g,null),document.getElementById("root"))}});