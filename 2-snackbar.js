import"./assets/styles-ZXNzG7EY.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector(".form");t.addEventListener("submit",a);function a(i){i.preventDefault();const e=parseInt(t.delay.value,10),o=t.state.value;new Promise((s,m)=>{setTimeout(()=>{o==="fulfilled"?s(e):m(e)},e)}).then(s=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${s}ms`})}).catch(()=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=2-snackbar.js.map
