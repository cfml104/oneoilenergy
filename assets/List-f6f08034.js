import{_ as m,r as i,u as g,a as h,o as n,c as l,b as e,F as f,d as v,e as k,f as y,g as I,t as _,p as S,h as L,L as $}from"./index-2816af59.js";const d=t=>(S("data-v-313e4657"),t=t(),L(),t),B=d(()=>e("h1",null,"Admin list",-1)),C=d(()=>e("p",null,"Users",-1)),x=["onClick"],A={__name:"List",setup(t){const c=i([]);g();const u=h(),s=i(!1);return`${location.origin}${localStorage.getItem("ref_code")}`,(async()=>{const a=localStorage.getItem("token");if(!a){u.push("/");return}s.value=!0;try{const o=await I.get("/list_admin",{headers:{Authorization:`Bearer ${a}`}});c.value=o.data,s.value=!1}catch(o){s.value=!1,u.push("/"),console.log(o)}})(),(a,o)=>(n(),l("main",null,[B,e("ul",null,[C,(n(!0),l(f,null,v(c.value,(r,p)=>(n(),l("li",{key:p,onClick:b=>a.$router.push(`/admin/user/${r._id}`)},[e("span",null,[e("h2",null,_(r.username),1),e("p",null,_(r.email),1)])],8,x))),128))]),s.value?(n(),k($,{key:0})):y("",!0)]))}},F=m(A,[["__scopeId","data-v-313e4657"]]);export{F as default};
