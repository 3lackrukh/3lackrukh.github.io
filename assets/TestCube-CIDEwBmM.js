import{a as r,j as a,C as v,O as j,u as b}from"./react-three-DwCniOcJ.js";import{c as x,u as S}from"./index-Bap_62Th.js";import{k as w,F as y,D as R}from"./three-core-Du3KwIHa.js";const E=x("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),M=x("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),k=({color:s,wireframe:h,autoRotate:f,hoverTime:p,scale:i,initialRotation:m=[0,0,0]})=>{const g=r.useMemo(()=>{const e=(1+Math.sqrt(5))/2,t=i||.5,o=[t*e,t*e,t*e,-t*e,-t*e,t*e,-t*e,t*e,-t*e,t*e,-t*e,-t*e,-t*e,t*e,t*e,t*e,-t*e,t*e,t*e,t*e,-t*e,-t*e,-t*e,-t*e],c=[0,1,2,0,2,3,0,3,1,1,3,2,4,5,6,4,6,7,4,7,5,5,7,6],d=new w;return d.setAttribute("position",new y(o,3)),d.setIndex(c),d.computeVertexNormals(),d},[i]),n=r.useRef(null),l=r.useRef(.5),u=r.useRef(0);return r.useEffect(()=>{n.current&&(n.current.rotation.x=m[0],n.current.rotation.y=m[1],n.current.rotation.z=m[2])},[]),b((e,t)=>{if(f&&n.current){const o=.5+p*2;l.current+=(o-l.current)*.1,n.current.rotation.y+=t*l.current;const c=p*2;u.current+=(c-u.current)*.1}}),a.jsx("mesh",{ref:n,geometry:g,children:a.jsx("meshStandardMaterial",{color:s,wireframe:h,side:R,metalness:.5,roughness:.5,emissive:s,emissiveIntensity:u.current})})},C=()=>{const{navItems:s,hoveredPath:h}=S(),[f,p]=r.useState(!0),[i,m]=r.useState(!0),[g,n]=r.useState(Object.fromEntries(s.map(e=>[e.path,0]))),l=r.useRef(Object.fromEntries(s.map(e=>[e.path,0]))),u=r.useRef();return r.useEffect(()=>{s.forEach(e=>{l.current[e.path]=h===e.path?1:0})},[h,s]),r.useEffect(()=>{const e=()=>{n(t=>{const o={...t};return s.forEach(c=>{l.current[c.path]>0?o[c.path]=(t[c.path]||0)+.032:o[c.path]=Math.max(0,(t[c.path]||0)-.128)}),o}),u.current=requestAnimationFrame(e)};return u.current=requestAnimationFrame(e),()=>{u.current&&cancelAnimationFrame(u.current)}},[h,s]),a.jsxs("div",{className:"w-full h-96 bg-gray-900 rounded-lg relative",children:[a.jsxs("div",{className:"absolute top-4 right-4 z-10 flex gap-2",children:[a.jsx("button",{onClick:()=>p(!f),className:"p-2 bg-white/10 rounded-full hover:bg-white/20",title:"Toggle Wireframe",children:a.jsx(M,{className:"w-5 h-5 text-white"})}),a.jsx("button",{onClick:()=>m(!i),className:"p-2 bg-white/10 rounded-full hover:bg-white/20",title:"Toggle Auto-rotation",children:a.jsx(E,{className:"w-5 h-5 text-white"})})]}),a.jsx(v,{camera:{position:[3,2,3]},children:a.jsxs(r.Suspense,{fallback:null,children:[a.jsx("ambientLight",{intensity:.5}),a.jsx("pointLight",{position:[10,10,10]}),s.map((e,t)=>{const o=[Math.PI/4*t,Math.PI/3*(t+1),Math.PI/6*(t*2)];return a.jsx(k,{color:e.color,wireframe:f,autoRotate:i,hoverTime:g[e.path],scale:.5+t*.2,initialRotation:o},e.path)}),a.jsx(j,{autoRotate:i,autoRotateSpeed:2})]})})]})};export{C as S};
