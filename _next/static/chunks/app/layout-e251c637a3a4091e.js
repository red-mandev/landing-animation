(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9885:function(e,n,t){Promise.resolve().then(t.bind(t,24)),Promise.resolve().then(t.t.bind(t,1232,23)),Promise.resolve().then(t.t.bind(t,54,23))},6236:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(6006),r=t(226);function s(e){let{children:n}=e,t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=r.ZP.quickTo(t.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),n=r.ZP.quickTo(t.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});t.current.addEventListener("mousemove",i=>{let{clientX:r,clientY:s}=i,{height:a,width:l,left:c,top:o}=t.current.getBoundingClientRect();e(.35*(r-(c+l/2))),n(.35*(s-(o+a/2)))}),t.current.addEventListener("mouseleave",t=>{e(0),n(0)})},[n]),i.cloneElement(n,{ref:t})}},1579:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(9268),r=t(6006),s=t(4082),a=t.n(s),l=t(226),c=t(6236);function o(e){let{children:n,backgroundColor:t="#455CE9",...s}=e,o=(0,r.useRef)(null),d=(0,r.useRef)(null),u=null;(0,r.useEffect)(()=>{d.current=l.ZP.timeline({paused:!0}),d.current.to(o.current,{top:"-25%",width:"150%",duration:.4,ease:"power3.in"},"enter").to(o.current,{top:"-150%",width:"125%",duration:.25},"exit")},[]);let _=()=>{u&&clearTimeout(u),d.current.tweenFromTo("enter","exit")},x=()=>{u=setTimeout(()=>{d.current.play()},300)};return(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:a().roundedButton,style:{overflow:"hidden"},onMouseEnter:()=>{_()},onMouseLeave:()=>{x()},...s,children:[n,(0,i.jsx)("div",{ref:o,style:{backgroundColor:t},className:a().circle})]})})}},24:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var i=t(9268),r=t(6006),s=t(7794),a=t.n(s),l=t(6008),c=t(7743),o=t(2774),d=t.n(o),u=t(8453);let _={initial:{x:"calc(100% + 100px)"},enter:{x:"0",transition:{duration:.8,ease:[.76,0,.24,1]}},exit:{x:"calc(100% + 100px)",transition:{duration:.8,ease:[.76,0,.24,1]}}},x={initial:{x:80},enter:e=>({x:0,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*e}}),exit:e=>({x:80,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*e}})},h={open:{scale:1,transition:{duration:.3}},closed:{scale:0,transition:{duration:.4}}};var v=t(5765),m=t.n(v),f=t(5846),j=t.n(f);function g(e){let{data:n,isActive:t,setSelectedIndicator:r}=e,{title:s,href:a,index:l}=n;return(0,i.jsxs)(u.E.div,{className:m().link,onMouseEnter:()=>{r(a)},custom:l,variants:x,initial:"initial",animate:"enter",exit:"exit",children:[(0,i.jsx)(u.E.div,{variants:h,animate:t?"open":"closed",className:m().indicator}),(0,i.jsx)(j(),{href:a,children:s})]})}var y=t(6363),N=t.n(y);function p(){let e="M100 0 L100 ".concat(window.innerHeight," Q-100 ").concat(window.innerHeight/2," 100 0"),n="M100 0 L100 ".concat(window.innerHeight," Q100 ").concat(window.innerHeight/2," 100 0");return(0,i.jsx)("svg",{className:N().svgCurve,children:(0,i.jsx)(u.E.path,{variants:{initial:{d:e},enter:{d:n,transition:{duration:1,ease:[.76,0,.24,1]}},exit:{d:e,transition:{duration:.8,ease:[.76,0,.24,1]}}},initial:"initial",animate:"enter",exit:"exit"})})}var b=t(3185),w=t.n(b);function E(){return(0,i.jsxs)("div",{className:w().footer,children:[(0,i.jsx)("a",{children:"Awwwards"}),(0,i.jsx)("a",{children:"Instagram"}),(0,i.jsx)("a",{children:"Dribble"}),(0,i.jsx)("a",{children:"LinkedIn"})]})}let Z=[{title:"Home",href:"/"},{title:"Work",href:"/work"},{title:"About",href:"/about"},{title:"Contact",href:"/contact"}];function k(){let e=(0,l.usePathname)(),[n,t]=(0,r.useState)(e);return(0,i.jsxs)(u.E.div,{variants:_,initial:"initial",animate:"enter",exit:"exit",className:d().menu,children:[(0,i.jsxs)("div",{className:d().body,children:[(0,i.jsxs)("div",{onMouseLeave:()=>{t(e)},className:d().nav,children:[(0,i.jsx)("div",{className:d().header,children:(0,i.jsx)("p",{children:"Navigation"})}),Z.map((e,r)=>(0,i.jsx)(g,{data:{...e,index:r},isActive:n==e.href,setSelectedIndicator:t},r))]}),(0,i.jsx)(E,{})]}),(0,i.jsx)(p,{})]})}var P=t(226),C=t(8040),B=t(1579),H=t(6236);function L(){let e=(0,r.useRef)(null),[n,t]=(0,r.useState)(!1),s=(0,l.usePathname)(),o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{n&&t(!1)},[s,n]),(0,r.useLayoutEffect)(()=>{P.ZP.registerPlugin(C.i),P.ZP.to(o.current,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,onLeave:()=>{P.ZP.to(o.current,{scale:1,duration:.25,ease:"power1.out"})},onEnterBack:()=>{P.ZP.to(o.current,{scale:0,duration:.25,ease:"power1.out"},t(!1))}}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{ref:e,className:a().header,children:[(0,i.jsxs)("div",{className:a().logo,children:[(0,i.jsx)("p",{className:a().copyright,children:"\xa9"}),(0,i.jsx)("div",{className:a().name,children:(0,i.jsx)("p",{className:a().snellenberg,children:"Snellenberg"})})]}),(0,i.jsxs)("div",{className:a().nav,children:[(0,i.jsx)(H.Z,{children:(0,i.jsxs)("div",{className:a().el,children:[(0,i.jsx)("a",{children:"Work"}),(0,i.jsx)("div",{className:a().indicator})]})}),(0,i.jsx)(H.Z,{children:(0,i.jsxs)("div",{className:a().el,children:[(0,i.jsx)("a",{children:"About"}),(0,i.jsx)("div",{className:a().indicator})]})}),(0,i.jsx)(H.Z,{children:(0,i.jsxs)("div",{className:a().el,children:[(0,i.jsx)("a",{children:"Contact"}),(0,i.jsx)("div",{className:a().indicator})]})})]})]}),(0,i.jsx)("div",{ref:o,className:a().headerButtonContainer,children:(0,i.jsx)(B.Z,{onClick:()=>{t(!n)},className:"".concat(a().button),children:(0,i.jsx)("div",{className:"".concat(a().burger," ").concat(n?a().burgerActive:"")})})}),(0,i.jsx)(c.M,{mode:"wait",children:n&&(0,i.jsx)(k,{})})]})}},54:function(){},4082:function(e){e.exports={roundedButton:"style_roundedButton__ne1xQ",circle:"style_circle__yB8nE"}},6363:function(e){e.exports={svgCurve:"styles_svgCurve__a63F0"}},3185:function(e){e.exports={footer:"style_footer__eZZQQ"}},5765:function(e){e.exports={link:"style_link__p0dN0",indicator:"style_indicator__IaE_R"}},2774:function(e){e.exports={menu:"style_menu__jOZ4g",body:"style_body__g5v8Q",nav:"style_nav__aHW3P",header:"style_header__r4s_r"}},7794:function(e){e.exports={header:"style_header__Pp4Zg",logo:"style_logo__IVIWQ",name:"style_name__egQcH",copyright:"style_copyright__18m1I",codeBy:"style_codeBy__4WfDj",dennis:"style_dennis__nVN0i",snellenberg:"style_snellenberg__6hKH9",nav:"style_nav__bNmn6",el:"style_el__f_u5S",indicator:"style_indicator__nD4Ou",headerButtonContainer:"style_headerButtonContainer__Sg8RS",button:"style_button__i4W7i",burger:"style_burger__9M2JV",burgerActive:"style_burgerActive__Jt0At"}}},function(e){e.O(0,[224,975,135,253,961,744],function(){return e(e.s=9885)}),_N_E=e.O()}]);