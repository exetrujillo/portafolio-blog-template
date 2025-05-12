import{_ as k}from"./C292tDVk.js";import{f as v,v as C,m as x,x as w,u as S,p as i,y as E,w as o,h as t,z as L,o as n,b as q,s as D,d as c,t as s,c as f,F as N,i as $,l as h}from"./BfL-rv32.js";import{u as b,q as j}from"./g0gv_9oa.js";import{_ as A}from"./DwZx36R8.js";const B={key:0},R=v({__name:"[slug]",async setup(F){var u;let r,l;const d=C(),{data:e}=([r,l]=x(()=>b(d.path,()=>j("portfolio").path(d.path).select("title","description","date","tags","path","body","image").first(),"$7IrgMF-sfc")),r=await r,l(),r);if(!e.value)throw w({statusCode:404,message:"Proyecto no encontrado"});return S({title:(u=e.value)==null?void 0:u.title,script:[{innerHTML:`
        document.addEventListener('DOMContentLoaded', function() {
          const proseContent = document.querySelector('.prose');
          if (proseContent) {
            const headings = proseContent.querySelectorAll('h2, h3, h4, h5, h6');
            headings.forEach(heading => {
              const links = heading.querySelectorAll('.header-anchor');
              links.forEach(link => {
                link.parentNode?.removeChild(link);
              });
            });
          }
        });
      `,type:"text/javascript"}]}),(M,V)=>{var m,p,_;const g=k,y=L;return n(),i(y,{name:"portfolio-project"},E({title:o(()=>{var a;return[c(s((a=t(e))==null?void 0:a.title),1)]}),meta:o(()=>{var a;return[(a=t(e))!=null&&a.date?(n(),f("span",B," Publicado: "+s(new Date(t(e).date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})),1)):h("",!0)]}),default:o(()=>[t(e)?(n(),i(g,{key:0,value:t(e)},null,8,["value"])):h("",!0)]),_:2},[(m=t(e))!=null&&m.image?{name:"image",fn:o(()=>{var a;return[q(t(D),{src:t(e).image,alt:`Imagen principal para ${(a=t(e))==null?void 0:a.title}`,class:"w-full object-cover rounded-lg",loading:"lazy"},null,8,["src","alt"])]}),key:"0"}:void 0,(p=t(e))!=null&&p.description?{name:"description",fn:o(()=>[c(s(t(e).description),1)]),key:"1"}:void 0,(_=t(e))!=null&&_.tags&&t(e).tags.length>0?{name:"tags",fn:o(()=>[(n(!0),f(N,null,$(t(e).tags,a=>(n(),i(t(A),{key:a,color:"primary",variant:"soft",class:"mr-2"},{default:o(()=>[c(s(a),1)]),_:2},1024))),128))]),key:"2"}:void 0]),1024)}}});export{R as default};
