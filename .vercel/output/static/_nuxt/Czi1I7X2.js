import{f as v,v as x,m as C,x as b,u as w,p as _,y as E,w as n,h as t,z as L,o,b as N,s as D,d as h,t as r,c as i,F as S,i as A,l as f,a as B}from"./BfL-rv32.js";import{_ as q}from"./C292tDVk.js";import{u as V,q as $}from"./g0gv_9oa.js";const j={class:"flex flex-col gap-2"},z={key:0,class:"text-sm",style:{color:"var(--ui-text)"}},O=v({__name:"[slug]",async setup(F){var d;let s,l;const c=x(),{data:e}=([s,l]=C(()=>V(c.path,()=>$("blog").path(c.path).select("title","description","date","tags","path","image","body").first(),"$fhvmE-Di65")),s=await s,l(),s);if(!e.value)throw b({statusCode:404,message:"Artículo no encontrado"});return w({title:(d=e.value)==null?void 0:d.title,script:[{innerHTML:`
        document.addEventListener('DOMContentLoaded', function() {
          const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');
          headings.forEach(heading => {
            const links = heading.querySelectorAll('a');
            links.forEach(link => {
              if (link.classList.contains('header-anchor')) {
                const parent = link.parentNode;
                while (link.firstChild) {
                  parent.insertBefore(link.firstChild, link);
                }
                parent.removeChild(link);
              }
            });
          });
        });
      `,type:"text/javascript"}]}),(H,I)=>{var u,p,m;const g=D,y=q,k=L;return o(),_(k,{name:"blog-post"},E({title:n(()=>{var a;return[h(r((a=t(e))==null?void 0:a.title),1)]}),meta:n(()=>{var a;return[B("div",j,[(a=t(e))!=null&&a.date?(o(),i("span",z," Publicado: "+r(new Date(t(e).date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})),1)):f("",!0)])]}),default:n(()=>[t(e)?(o(),_(y,{key:0,value:t(e)},null,8,["value"])):f("",!0)]),_:2},[(u=t(e))!=null&&u.image?{name:"image",fn:n(()=>{var a;return[N(g,{src:t(e).image,alt:`Imagen principal para ${(a=t(e))==null?void 0:a.title}`,class:"w-full object-cover rounded-md",loading:"lazy"},null,8,["src","alt"])]}),key:"0"}:void 0,(p=t(e))!=null&&p.description?{name:"description",fn:n(()=>[h(r(t(e).description),1)]),key:"1"}:void 0,(m=t(e))!=null&&m.tags&&t(e).tags.length>0?{name:"tags",fn:n(()=>[(o(!0),i(S,null,A(t(e).tags,a=>(o(),i("span",{key:a,class:"text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200",style:{backgroundColor:"var(--ui-primary)",color:"var(--ui-bg)",opacity:"1"}},r(a),1))),128))]),key:"2"}:void 0]),1024)}}});export{O as default};
