(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([1,"chunk-vendors"]),a()})({0:function(t,e){},"034f":function(t,e,a){"use strict";a("85ec")},1:function(t,e,a){t.exports=a("56d7")},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",[t._v("Table Data")]),a("HelloWorld"),a("program")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{})},s=[],c={name:"HelloWorld",data:function(){return{}},created:function(){},methods:{}},l=c,u=(a("741c"),a("2877")),f=Object(u["a"])(l,o,s,!1,null,"7dc3ed19",null),d=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{drop:t._drop,dragenter:t._suppress,dragover:t._suppress}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 d-flex justify-content-center"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group col-xs-6"},[a("input",{staticClass:"form-control",attrs:{type:"file",id:"file",accept:t.SheetJSFT},on:{change:t._change}})])]),a("div",{staticClass:"d-flex justify-content-center mx-3"},[a("b-row",[a("b-col",{attrs:{lg:"11"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateData,expression:"dateData"}],staticClass:"form-control",attrs:{type:"text",id:"text"},domProps:{value:t.dateData},on:{keyup:t.dateFunc,input:function(e){e.target.composing||(t.dateData=e.target.value)}}})]),a("b-col",{attrs:{lg:"1"}},[a("b-button",{attrs:{variant:"success"},on:{click:t.dateFunc}},[t._v(" Sumbit ")])],1)],1)],1)])]),a("div",{staticClass:"table"},[a("table",[t._m(0),t._l(t.eightArray,(function(e,r){return a("tr",{key:e[r]},t._l(e,(function(e,r){return a("td",{key:e[r],class:"0"!=e?"active":"unactive"},[a("span",{class:"0"!=e?"active":"unactive"},[t._v(t._s(e))])])})),0)}))],2)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("price")]),a("th",[t._v("ID")]),a("th",[t._v("Total Dwell Time")]),a("th",[t._v("Total Fixation")]),a("th",[t._v("Sequencing")]),a("th",[t._v("Sequencing")]),a("th",[t._v("Total Saccades")]),a("th",[t._v("Choosen Product")]),a("th",[t._v("First view (s)")]),a("th",[t._v("Last view (S)")]),a("th",[t._v("1st Dwell Time (s)")]),a("th",[t._v("Second view (s)")]),a("th",[t._v("Last view (S)")]),a("th",[t._v("2nd Dwell Time (s)")]),a("th",[t._v("Third view (s)")]),a("th",[t._v("Last view (S)")]),a("th",[t._v("3rd Dwell Time (s)")]),a("th",[t._v("Fourth view (s)")]),a("th",[t._v("Last view (S)")]),a("th",[t._v("4th Dwell Time (s)")])])}],v=a("2909"),_=(a("d81d"),a("cb29"),a("a15b"),a("ac1f"),a("1276"),a("d3b7"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("159b"),a("1146")),m=a.n(_),y=function(t){return Array(m.a.utils.decode_range(t).e.c+1).fill(0).map((function(t,e){return{name:m.a.utils.encode_col(e),key:e}}))},b=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map((function(t){return"."+t})).join(","),g={name:"program",data:function(){return{data:["SheetJS".split(""),"1234567".split("")],cols:[{name:"A",key:0},{name:"B",key:1},{name:"C",key:2},{name:"D",key:3},{name:"E",key:4},{name:"F",key:5},{name:"G",key:6}],SheetJSFT:b,data_array:[],eightArray:[],newArray:[],arr:[],dateData:""}},methods:{_suppress:function(t){t.stopPropagation(),t.preventDefault()},_drop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files;e&&e[0]&&this._file(e[0])},_change:function(t){var e=t.target.files;e&&e[0]&&this._file(e[0])},_export:function(t){console.log(t);var e=m.a.utils.aoa_to_sheet([this.eightArray]),a=m.a.utils.book_new();m.a.utils.book_append_sheet(a,e,"SheetJS"),m.a.writeFile(a,"sheetjs.xlsx")},_file:function(t){var e=this,a=new FileReader;a.onload=function(t){var a=t.target.result,r=m.a.read(new Uint8Array(a),{type:"array"}),n=r.SheetNames[4],i=r.Sheets[n],o=m.a.utils.sheet_to_json(i,{header:1});e.data=o,e.tableData(),e.cols=y(i["!ref"])},a.readAsArrayBuffer(t)},dateFunc:function(){this.data_array=[],this.arr=[],this.newArray=[],this.eightArray=[],this.tableData()},tableData:function(){for(var t=this,e=0;e<this.data.length;e++)for(var a=0;a<this.data[e].length;a++)this.data[e][1]==this.dateData&&((null==this.data[e][a]||""==this.data[e][a]||0==this.data[e][a])&&(this.data[e][a]="0"),this.data_array.push(this.data[e][a]));this.arr=Object(v["a"])(this.data_array),this.arr.forEach((function(e,a){t.newArray.push(e),((a+1)%20===0&&0!==a||a+1==t.arr.length)&&(t.eightArray.push(t.newArray),t.newArray=[])}))}}},w=g,x=(a("eb24"),Object(u["a"])(w,h,p,!1,null,"5159a314",null)),S=x.exports,D={name:"App",components:{HelloWorld:d,program:S}},j=D,k=(a("034f"),Object(u["a"])(j,n,i,!1,null,null,null)),A=k.exports,T=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(A)}}).$mount("#app")},"741c":function(t,e,a){"use strict";a("fc94")},"85ec":function(t,e,a){},"8e51":function(t,e,a){},eb24:function(t,e,a){"use strict";a("8e51")},fc94:function(t,e,a){}});
//# sourceMappingURL=app.c25ae43b.js.map