(()=>{(()=>{let l=`
  <div class="code-figcaption">
    <div class="code-left-wrap">
      <div class="code-decoration"></div>
      <div class="code-lang"></div>
    </div>
    <div class="code-right-wrap">
      <div class="code-copy icon-copy"></div>
      <div class="icon-chevron-down code-expand"></div>
    </div>
  </div>
  <div class="code-figcaption-bottom">
    <span class="code-name"></span>
    <a class="code-link"></a>
  </div>`,s=(window.siteConfig?.code_block||{}).expand;if(_$$("div.highlight").forEach(e=>{e.querySelector(".code-figcaption")||e.insertAdjacentHTML("afterbegin",l),s!==void 0&&(s===!1||typeof s=="number"&&e.querySelectorAll("code[data-lang] .line").length>s)&&(e.classList.add("code-closed"),e.style.display="none",e.offsetWidth,e.style.display="");let t=e.querySelector(".code-figcaption-bottom"),o=e.getAttribute("name"),c=e.querySelector(".code-name");o?c.innerText=o:c.innerText="";let i=e.getAttribute("url"),n=e.getAttribute("link_text"),r=e.querySelector(".code-link");i?(r.setAttribute("href",i),r.innerText=n||i,t.classList.add("has-link")):(r.setAttribute("href",""),r.innerText="",t.classList.remove("has-link")),o||i?t.style.marginBottom="12px":t.style.marginBottom="0"}),_$$(".code-expand").forEach(e=>{e.off("click").on("click",()=>{e.closest("div.highlight")?.classList.toggle("code-closed")})}),_$$("div.highlight").forEach(e=>{let t;if(e.querySelector("table")?t=e.querySelector("tr td:last-of-type code"):t=e.querySelector("code"),!t)return;let o=t.dataset.lang;if(!o)return;let c=o.replace("line-numbers","").replace("language-","").trim().toUpperCase(),i=t.closest(".highlight");if(i){let n=i.querySelector(".code-lang");n&&(n.innerText=c)}}),!window.ClipboardJS)return;let d=(e,t)=>{if(typeof e=="string")return e;if(typeof e=="object"){let o=document.documentElement.lang.toLowerCase(),c=Object.keys(e).find(i=>i.toLowerCase()===o);if(c&&e[c])return e[c]}return t},a=new ClipboardJS(".code-copy",{text:e=>{let t=e.parentNode.parentNode.parentNode.querySelector("tr td:last-of-type");t||(t=e.parentNode.parentNode.parentNode.querySelector("code"));let o=t?.innerText||"";return window.siteConfig.clipboard.copyright?.enable&&o.length>=window.siteConfig.clipboard.copyright?.count&&(o+=`

`+window.siteConfig.clipboard.copyright?.content||""),o}});a.on("success",e=>{e.trigger.classList.add("icon-check"),e.trigger.classList.remove("icon-copy");let t=window.siteConfig.clipboard.success,o=d(t,"Copy successfully (*^\u25BD^*)");_$("#copy-tooltip").innerText=o,_$("#copy-tooltip").style.opacity="1",setTimeout(()=>{_$("#copy-tooltip").style.opacity="0",e.trigger.classList.add("icon-copy"),e.trigger.classList.remove("icon-check")},1e3),e.clearSelection()}),a.on("error",e=>{e.trigger.classList.add("icon-times"),e.trigger.classList.remove("icon-copy");let t=window.siteConfig.clipboard.fail,o=d(t,"Copy failed (\uFF9F\u22BF\uFF9F)\uFF82");_$("#copy-tooltip").innerText=o,_$("#copy-tooltip").style.opacity="1",setTimeout(()=>{_$("#copy-tooltip").style.opacity="0",e.trigger.classList.add("icon-copy"),e.trigger.classList.remove("icon-times")},1e3)}),window.Pjax&&window.addEventListener("pjax:send",()=>{a.destroy()},{once:!0}),window.AOS?.refresh()})();})();
