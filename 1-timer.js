import"./assets/styles-ZXNzG7EY.js";import{f as x,i as m}from"./assets/vendor-BbbuE1sJ.js";const f=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),c=document.querySelector("span[data-hours]"),u=document.querySelector("span[data-minutes]"),i=document.querySelector("span[data-seconds]");let h=null,y=null;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(n.disabled=!0,m.error({title:"Error",message:"Please choose a date in the future"})):(h=e,n.disabled=!1)}};x("#datetime-picker",q);function w(t){const p=Math.floor(t/864e5),C=Math.floor(t%864e5/36e5),S=Math.floor(t%864e5%36e5/6e4),b=Math.floor(t%864e5%36e5%6e4/1e3);return{days:p,hours:C,minutes:S,seconds:b}}function o(t){return String(t).padStart(2,"0")}function l(){const t=h-new Date;if(t<=0){clearInterval(y),d.textContent="00",c.textContent="00",u.textContent="00",i.textContent="00",n.disabled=!1,f.disabled=!1,m.success({title:"Completed",message:"The countdown has ended!"});return}const{days:e,hours:s,minutes:a,seconds:r}=w(t);d.textContent=o(e),c.textContent=o(s),u.textContent=o(a),i.textContent=o(r)}n.addEventListener("click",D);function D(){n.disabled=!0,f.disabled=!0,y=setInterval(l,1e3),l()}
//# sourceMappingURL=1-timer.js.map
