/*! For license information please see component---src-pages-index-js-5713c6a91553ce4c179a.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var r=l.apply(null,n);r&&e.push(r)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},7408:function(e,t,n){"use strict";var a=n(2122),l=n(9756),s=n(5900),r=n.n(s),c=n(7294),o=n(9541),m=["xl","lg","md","sm","xs"],i=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.as,u=void 0===i?"div":i,f=(0,l.Z)(e,["bsPrefix","className","as"]),d=(0,o.vE)(n,"col"),p=[],E=[];return m.forEach((function(e){var t,n,a,l=f[e];if(delete f[e],"object"==typeof l&&null!=l){var s=l.span;t=void 0===s||s,n=l.offset,a=l.order}else t=l;var r="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+d+r:""+d+r+"-"+t),null!=a&&E.push("order"+r+"-"+a),null!=n&&E.push("offset"+r+"-"+n)})),p.length||p.push(d),c.createElement(u,(0,a.Z)({},f,{ref:t,className:r().apply(void 0,[s].concat(p,E))}))}));i.displayName="Col",t.Z=i},6187:function(e,t,n){"use strict";var a=n(2122),l=n(9756),s=n(5900),r=n.n(s),c=n(7294),o=n(9541),m=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.fluid,m=e.as,i=void 0===m?"div":m,u=e.className,f=(0,l.Z)(e,["bsPrefix","fluid","as","className"]),d=(0,o.vE)(n,"container"),p="string"==typeof s?"-"+s:"-fluid";return c.createElement(i,(0,a.Z)({ref:t},f,{className:r()(u,s?""+d+p:d)}))}));m.displayName="Container",m.defaultProps={fluid:!1},t.Z=m},994:function(e,t,n){"use strict";var a=n(2122),l=n(9756),s=n(5900),r=n.n(s),c=n(7294),o=n(9541),m=["xl","lg","md","sm","xs"],i=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.noGutters,u=e.as,f=void 0===u?"div":u,d=(0,l.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,o.vE)(n,"row"),E=p+"-cols",N=[];return m.forEach((function(e){var t,n=d[e];delete d[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&N.push(""+E+a+"-"+t)})),c.createElement(f,(0,a.Z)({ref:t},d,{className:r().apply(void 0,[s,p,i&&"no-gutters"].concat(N))}))}));i.displayName="Row",i.defaultProps={noGutters:!1},t.Z=i},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return s}});var a=n(7294),l=a.createContext({});l.Consumer,l.Provider;function s(e,t){var n=(0,a.useContext)(l);return e||n[t]||t}},471:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(3552),l=n(7294),s=n(994),r=n(7408),c=function(e){return l.createElement(s.Z,{ref:e.firstSceneRef,className:"first-scene-container mx-0 my-0"},l.createElement("div",{ref:e.firstSceneRef,className:"lines"},l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"}),l.createElement("div",{className:"lines__line"})),l.createElement(r.Z,{xs:{span:6,offset:4},sm:{span:6,offset:6},md:{span:6,offset:6}},l.createElement("div",{className:"text"},l.createElement("span",null,"H"),l.createElement("span",null,"e"),l.createElement("span",null,"l"),l.createElement("span",null,"l"),l.createElement("span",null,"o"),l.createElement("span",null,","),l.createElement("pre",null),l.createElement("span",null,"I'"),l.createElement("span",null,"m"),l.createElement("span",null,"K"),l.createElement("span",null,"r"),l.createElement("span",null,"z"),l.createElement("span",null,"y"),l.createElement("span",null,"s"),l.createElement("span",null,"z"),l.createElement("span",null,"t"),l.createElement("span",null,"o"),l.createElement("span",null,"f"),l.createElement("span",null,"W"),l.createElement("span",null,"i"),l.createElement("span",null,"t"),l.createElement("span",null,"k"),l.createElement("span",null,"o"),l.createElement("span",null,"w"),l.createElement("span",null,"s"),l.createElement("span",null,"k"),l.createElement("span",null,"i"))),l.createElement(s.Z,{className:"arrows-container justify-content-center"},l.createElement("svg",{onClick:function(){return e.scrollToSecondScene()},className:"arrows-container__arrows-down"},l.createElement("polygon",{className:"arrows-container__arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),l.createElement("polygon",{className:"arrows-container__arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),l.createElement("polygon",{id:"buggedArrow",className:"arrows-container__arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}))))},o=n(9519),m=n(7190),i=n(6187),u=n.p+"static/Photo-81bc2e83adbb8bd4fb1a33da9e560f3a.jpg",f=function(e){return l.createElement(i.Z,{ref:e.secondSceneRef,className:"second-scene-container"+(!0===e.secondSceneStatus?" second-scene-container-active":"")},l.createElement(r.Z,{xs:12,className:"about-title-container"},l.createElement("span",{className:"about-title"},"About")),l.createElement(s.Z,{className:"mt-md-5 mt-0"},l.createElement(r.Z,{xs:12,md:6,className:"left-section"},l.createElement("div",{className:"hexagon",style:{backgroundImage:"url("+u+")"}},l.createElement("div",{className:"hexagon__hexTop"}),l.createElement("div",{className:"hexagon__hexBottom"})),l.createElement("div",{className:"personal-information "},"I am a newly made engineer. I enjoy creating software and learning new technologies. In my spare time I like to play tennis, unfortunately the current situation makes it difficult. That's why I spend my time on studying and creating websites.")),l.createElement(r.Z,{xs:12,md:6,className:"right-section"},l.createElement(r.Z,{xs:12,className:"mt-5 mt-sm-3"},l.createElement("span",null,"Technologies:")),l.createElement(s.Z,{className:"skills-section mt-md-5"},l.createElement(r.Z,{xs:6,className:"skills-section__left"},l.createElement(o.G,{icon:m.DTC,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"JavaScript"),l.createElement(o.G,{icon:m.wn1,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"React"),l.createElement(o.G,{icon:m.r1q,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"PHP")),l.createElement(r.Z,{xs:6,className:"skills-section__right"},l.createElement(o.G,{icon:m.vNK,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"Laravel"),l.createElement(o.G,{icon:m.Gu1,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"CSS"),l.createElement(o.G,{icon:m.GJX,size:"3x"}),l.createElement("div",{className:"icon-name mb-md-4 mt-md-2"},"HTML"))))),l.createElement(s.Z,{style:{position:"absolute",bottom:0},className:"arrows-container mx-0 mt-0 mt-md-5 "},l.createElement("svg",{onClick:function(){return e.scrollToThirdScene()},className:"arrows-container__arrows-down"},l.createElement("polygon",{className:"arrows-container__arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),l.createElement("polygon",{className:"arrows-container__arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),l.createElement("polygon",{id:"buggedArrow",className:"arrows-container__arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}))))},d=n(5444),p=n.p+"static/CovidApi-ccb3e3d23cc57b56f5c1a8cf5a22217f.png",E=n.p+"static/Shop-87b57a82f9ac752040d701c196ddf568.png",N=function(e){return l.createElement(i.Z,{ref:e.thirdSceneRef,className:"third-scene-container"+(!0===e.thirdSceneStatus?" third-scene-container-active":"")},l.createElement(r.Z,{xs:12,className:"projects-title-container"},l.createElement("span",{className:"projects-title"},"Projects")),l.createElement(s.Z,{className:"mt-5 justify-content-center mb-5"},l.createElement(r.Z,{className:"projects-container"},l.createElement(s.Z,{className:"justify-content-center"},l.createElement(r.Z,{xs:4,lg:2,className:"project m-0 p-0"},l.createElement(d.rU,{to:"/covid"},l.createElement("img",{fluid:!0,src:p,alt:""}),l.createElement("div",{className:"project-text-container"},l.createElement("div",null," Covid Data App")))),l.createElement(r.Z,{xs:4,lg:2,className:"project m-0 p-0"},l.createElement(d.rU,{to:"/shop"},l.createElement("img",{fluid:!0,src:E,alt:""}),l.createElement("div",{className:"project-text-container"},l.createElement("div",null," Shop App")))),l.createElement(r.Z,{xs:4,lg:2,className:"project m-0 p-0"},l.createElement("a",{href:"https://github.com/krzysiekwit1",target:"_blank"},l.createElement("img",{fluid:!0,src:"data:image/png;base64,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",alt:""}),l.createElement("div",{className:"project-text-container"},l.createElement("div",null," GitHub"))))))),l.createElement(s.Z,{style:{position:"absolute",bottom:0},className:"arrows-container mx-0 mt-auto mb-3 justify-content-center "},l.createElement("svg",{onClick:function(){return e.scrollToFourthScene()},className:"arrows-container__arrows-down"},l.createElement("polygon",{className:"arrows-container__arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),l.createElement("polygon",{className:"arrows-container__arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),l.createElement("polygon",{id:"buggedArrow",className:"arrows-container__arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}))))},v=function(e){return l.createElement(i.Z,{fluid:!0,ref:e.fourthSceneRef,className:"fourth-scene-container"},l.createElement(s.Z,{className:"justify-content-center footer-icons-container pt-1"},l.createElement("a",{className:"ml-4",href:"https://www.linkedin.com/in/krzysztof-witkowski-5a773a196/",target:"_blank"},l.createElement(o.G,{icon:m.D9H,size:"3x"})),l.createElement("a",{className:"ml-3",href:"https://github.com/krzysiekwit1",target:"_blank"},l.createElement(o.G,{icon:m.zhw,size:"3x"}))),l.createElement(s.Z,{className:"copyright-container justify-content-center mt-3 ml-2"},l.createElement("span",null,"Krzysztof Witkowski ©2021")),l.createElement(s.Z,{className:"justify-content-end mini-arrows"},l.createElement("svg",{onClick:function(){return e.scrollToFirstScene()},className:"mini-arrows-container"},l.createElement("polygon",{class:"arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),l.createElement("polygon",{class:"arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),l.createElement("polygon",{class:"arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}))))},h=function(e){(0,a.Z)(n,e);var t=n.prototype;function n(t){var n;return(n=e.call(this,t)||this).state={secondScene:!1,thirdScene:!1,fourthScene:!1},n.scrollToSecondScene=function(){n.secondSceneRef.current.scrollIntoView({behavior:"smooth"}),n.setState({secondScene:!0})},n.scrollToThirdScene=function(){n.thirdSceneRef.current.scrollIntoView({behavior:"smooth"}),n.setState({thirdScene:!0})},n.scrollToFourthScene=function(){n.fourthSceneRef.current.scrollIntoView({behavior:"smooth"}),n.setState({fourthScene:!0})},n.scrollToFirstScene=function(){n.firstSceneRef.current.scrollIntoView({behavior:"smooth"})},n.firstSceneRef=l.createRef(),n.secondSceneRef=l.createRef(),n.thirdSceneRef=l.createRef(),n.fourthSceneRef=l.createRef(),n}return t.componentDidMount=function(){document.title="Krzysztof Witkowski",document.body.style="overflow:hidden;background: #ebebeb;"},t.render=function(){var e=this.state.secondScene,t=this.state.thirdScene,n=this.state.fourthScene;return l.createElement(l.Fragment,null,l.createElement(i.Z,{fluid:!0,className:"m-0 p-0"},l.createElement(c,{firstSceneRef:this.firstSceneRef,scrollToSecondScene:this.scrollToSecondScene}),l.createElement(f,{secondSceneRef:this.secondSceneRef,scrollToThirdScene:this.scrollToThirdScene,secondSceneStatus:e}),l.createElement(N,{thirdSceneRef:this.thirdSceneRef,scrollToFourthScene:this.scrollToFourthScene,thirdSceneStatus:t})),l.createElement(v,{fourthSceneRef:this.fourthSceneRef,scrollToFirstScene:this.scrollToFirstScene,fourthSceneStatus:n}))},n}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-5713c6a91553ce4c179a.js.map