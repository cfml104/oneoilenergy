import{_ as v,r as i,a as f,i as h,u as b,o as p,c as w,b as e,w as d,v as r,j as g,e as A,f as S,g as y,p as k,h as B,L as I}from"./index-c5ecdd67.js";const a=l=>(k("data-v-00916fab"),l=l(),B(),l),x=a(()=>e("div",{class:"top"},[e("i",{class:"bi bi-person-circle"})],-1)),U={action:""},V={class:"full"},W=a(()=>e("label",{for:"totalBalance"},"Username",-1)),C={class:"full"},R=a(()=>e("label",{for:"totalWithdrawal"},"Email",-1)),E={class:"full"},L=a(()=>e("label",{for:"pendingWithdrawal"},"Password",-1)),M={class:"full"},N=a(()=>e("label",{for:"role"},"Role",-1)),P=a(()=>e("option",{value:"",disabled:""},"Select role",-1)),j=a(()=>e("option",null,"Admin",-1)),z=a(()=>e("option",null,"Super Admin",-1)),D=[P,j,z],T={__name:"Add",setup(l){const o=i({role:""}),u=f();h();const n=i(!1);b();const _=i(localStorage.getItem("role")),m=async()=>{if(_.value!=="Super Admin")return;const c=localStorage.getItem("token");n.value=!0;try{const t=await y.post("/register",{...o.value},{headers:{Authorization:`Bearer ${c}`}});u.push({name:"Admin list"}),n.value=!1}catch(t){n.value=!1,u.push("/"),console.log(t)}};return(c,t)=>(p(),w("main",null,[x,e("form",U,[e("div",V,[W,d(e("input",{type:"text",name:"","onUpdate:modelValue":t[0]||(t[0]=s=>o.value.username=s),id:"totalBalance"},null,512),[[r,o.value.username]])]),e("div",C,[R,d(e("input",{type:"email",name:"","onUpdate:modelValue":t[1]||(t[1]=s=>o.value.email=s),id:"totalWithdrawal"},null,512),[[r,o.value.email]])]),e("div",E,[L,d(e("input",{type:"password",name:"","onUpdate:modelValue":t[2]||(t[2]=s=>o.value.password=s),id:"pendingWithdrawal"},null,512),[[r,o.value.password]])]),e("div",M,[N,d(e("select",{id:"role","onUpdate:modelValue":t[3]||(t[3]=s=>o.value.role=s)},D,512),[[g,o.value.role]])]),e("button",{onClick:m},"Add Admin")]),n.value?(p(),A(I,{key:0})):S("",!0)]))}},q=v(T,[["__scopeId","data-v-00916fab"]]);export{q as default};
