import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),m=localStorage.getItem("feedback-form-state");if(m){const{email:a,message:e}=JSON.parse(m);t.email.value=a,t.message.value=e}t.addEventListener("input",a=>{const{name:e,value:o}=a.target,r=JSON.parse(localStorage.getItem("feedback-form-state"))||{};localStorage.setItem("feedback-form-state",JSON.stringify({...r,[e]:o.trim()}))}),t.addEventListener("submit",a=>{a.preventDefault();const{email:e,message:o}=t;e.value.trim()&&o.value.trim()&&(console.log({email:e.value.trim(),message:o.value.trim()}),localStorage.removeItem("feedback-form-state"),e.value="",o.value="")})});
//# sourceMappingURL=commonHelpers2.js.map
