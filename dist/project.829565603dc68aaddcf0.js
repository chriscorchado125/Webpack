!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){"use strict";n.r(e),n.d(e,"fadeOut",(function(){return o})),n.d(e,"fadeIn",(function(){return c})),n.d(e,"updateMenuPages",(function(){return s})),n.d(e,"getCurrentPage",(function(){return l})),n.d(e,"getFullUrlByPage",(function(){return d})),n.d(e,"getMonthYear",(function(){return u})),n.d(e,"cleanURL",(function(){return f})),n.d(e,"setLoading",(function(){return p})),n.d(e,"updateInterface",(function(){return h}));var r=n(1),a=function(t,e,n,r){return new(n||(n=Promise))((function(a,i){function o(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,c)}s((r=r.apply(t,e||[])).next())}))},i="https://chriscorchado.com/drupal8",o=function(t){t.style.opacity=1,function e(){(t.style.opacity-=.2)<0?t.style.display="none":requestAnimationFrame(e)}()},c=function(t){t.style.opacity=0,function e(){var n=parseFloat(t.style.opacity);(n+=.2)>1||(t.style.opacity=n,requestAnimationFrame(e))}()},s=function(t,e){return a(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/api/menu_items/main?_format=json")).then((function(t){return t.ok?t.json():Promise.reject(t.statusText)})).then((function(n){var r="",a="",i="";"about"==t&&(i="border: 1px dashed rgb(115, 153, 234);");var o='<a href="index.html" class="navbar-brand" id="logo" style="'.concat(i,'">\n        <img src="./images/chriscorchado-initials-logo.png" title="Home" alt="Home">\n      </a>');for(var c in n)if("Home"!=(r=n[c].title)&&"About"!=r&&n[c].enabled){var s="";t==r.toLowerCase()&&(s="nav-item-active"),a=r,"Companies"==r&&(r="History"),o+='<a href="'.concat(a.toLowerCase(),'.html"\n        class="nav-item nav-link ').concat(s,'"\n        title="').concat(r,'"\n        id="').concat(r.toLowerCase(),'-link">').concat(r,"</a>")}document.getElementById(e).innerHTML=o})).catch((function(t){alert("Sorry an error has occurred: ".concat(t))}));case 2:case"end":return n.stop()}}),n)})))},l=function(){var t=window.location.pathname.split("/").filter((function(t){return t.length})).pop().split(".")[0];return"index"!=t&&"html5"!=t||(t="about"),t},d=function(t,e){var n="No Path Found";switch(e){case"companies":n="company-screenshot";break;case"courses":n=-1!==t.indexOf(".pdf")?"award-pdf":"award-images";break;case"projects":n="project-screenshot"}return"".concat(i,"/sites/default/files/").concat(n,"/").concat(t)},u=function(t){var e=new Date(t);return e.toLocaleString("default",{month:"long"})+" "+e.getFullYear().toString()},f=function(t){var e="";return t.split(" ").forEach((function(t){t&&(e+=t.replace(/$\n^\s*/gm,""))})),e},p=function(t){if(t){var e=document.createElement("div");e.innerHTML='\n      <div class="preloadAnimation" id="preloadAnimation">\n        <div class="bounce1"></div>\n        <div class="bounce2"></div>\n        <div class="bounce3"></div>\n        <br />Loading\n      </div>',document.body.append(e)}else{if(document.getElementById("preloadAnimation").remove(),document.getElementsByClassName("container")[0]){var n=document.getElementsByClassName("container")[0];c(n)}if(document.getElementsByClassName("container")[1]){var r=document.getElementsByClassName("container")[1];c(r)}}},h=function(t){Object(r.noRecordsFound)("noRecords",t,"navigation","No matches found for")}},function(t,e,n){"use strict";n.r(e),n.d(e,"getSearchCount",(function(){return c})),n.d(e,"getSearchOffset",(function(){return s})),n.d(e,"setPagination",(function(){return l})),n.d(e,"debounce",(function(){return d})),n.d(e,"debounceMe",(function(){return u})),n.d(e,"searchFilter",(function(){return f})),n.d(e,"searchClear",(function(){return p})),n.d(e,"noRecordsFound",(function(){return h})),n.d(e,"getIncludedData",(function(){return m})),n.d(e,"getElementRelationships",(function(){return g})),n.d(e,"itemWithSearchHighlight",(function(){return v}));var r=n(2),a=n(0),i=50,o="searchSite",c=function(t,e){if(document.getElementById(o).value)return document.getElementById(e).innerHTML=t<=i?t+"  ".concat(1==t?"Item":"Items"):i+"  ".concat("Items"),"".concat(t," ").concat(1==t?"Item":"Items"," ")},s=function(t){var e=t.href.replace(/%2C/g,",").replace(/%5B/g,"[").replace(/%5D/g,"]");return e.substring(e.search("offset")+8,e.search("limit")-6)},l=function(t,e,n,r){var a=0,o="",l="";r&&(a=s(r));var d=c(t,"searchCount");if(r||n){document.getElementById("search-container").className="paginationYes";var u=+a/i;d=t==a?'Items 1-<span id="lastCount">'.concat(i,"</span>"):0!==u?"Items ".concat(u*i-i,'-<span id="lastCount">').concat(u*i,"</span>"):"Items ".concat(e,'-<span id="lastCount">').concat(+e+t,"</span>"),document.getElementById("searchCount").innerHTML='<span id="paging-info">'.concat(d,"</span>"),o=n?'<a href="#" class="pager-navigation" id="prev" data-prev="'.concat(n.href,'" title="View the previous page" tabindex="10" role="button"\n         >Prev</a>'):'<span class="pager-navigation disabled" title="There is no previous page available" tabindex="11" role="button">Prev</span>',l=r?'<a href="#" class="pager-navigation" id="next" data-next="'.concat(r.href,'" title="View the next page" tabindex="12" role="button"\n          >Next</a>'):'<span class="pager-navigation disabled" title="There is no next page available" tabindex="13" role="button">Next</span>'}else document.getElementById("search-container").className="paginationNo",document.getElementById("searchCount").innerHTML='<span id="totalItems">'.concat(t,"</span>\n   ").concat(1==t?"Item":"Items");var f=document.getElementById("pagination");t<i&&1===e?f.style.display="none":(f.style.display="inline-block",f.innerHTML="".concat(o,"  ").concat(l))},d=function(t,e){var n;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=function(){n=null,t.apply(void 0,a)};clearTimeout(n),n=setTimeout(o,e)}},u=d((function(t){var e=document.getElementById(o);"Tab"!==t.key&&(Object(r.getPage)(Object(a.getCurrentPage)(),e.value),Object(a.updateInterface)())}),500),f=function(t){var e=t.keyCode||t.which;return e>=65&&e<=122||e>=96&&e<=105||e>=48&&e<=57||16==e||32==e},p=function(t){document.getElementById(t).value="",location.reload()},h=function(t,e,n,r){if(document.getElementById(t)&&document.getElementById(t).remove(),!document.getElementById(t)&&e){document.getElementById("pagination").style.display="none",document.getElementsByClassName("container")[0].removeAttribute("style");var a=document.createElement("div");a.id=t,a.innerHTML="".concat(r," '").concat(e,"'"),document.getElementById(n).appendChild(a),document.getElementById("preloadAnimation").remove(),document.getElementById("searchCount").innerHTML='<b style="color:red">No match</b>'}else document.getElementById("pagination").style.display="inline-block",document.getElementById("searchBtn").style.visibility="visible"},m=function(t){var e=[""],n=[""],r=[""],a=[""];return t.included.forEach((function(t){if(t.attributes.description){var i=/"(.*?)"/.exec(t.attributes.description.value);a[t.id]=i[1]}t.attributes.filename&&(e[t.id]=t.attributes.filename),t.attributes.field_company_name&&(n[t.id]=t.attributes.field_company_name),t.attributes.name&&(r[t.id]=t.attributes.name)})),[n,e,r,a]},g=function(t,e,n,r,a){var i=[],o="",c="",s="",l="",d="",u=[];if(t.relationships.field_award_images&&t.relationships.field_award_images.data&&i.push(e[t.relationships.field_award_images.data[0].id]),t.relationships.field_award_pdf&&t.relationships.field_award_pdf.data&&(o=e[t.relationships.field_award_pdf.data.id]),t.relationships.field_track_image&&t.relationships.field_track_image.data&&(c=e[t.relationships.field_track_image.data.id]),t.relationships.field_company&&t.relationships.field_company.data&&(s=n[t.relationships.field_company.data.id]),t.relationships.field_company_screenshot&&t.relationships.field_company_screenshot.data&&i.push(e[t.relationships.field_company_screenshot.data[0].id]),t.relationships.field_screenshot&&t.relationships.field_screenshot.data)for(var f=0;f<t.relationships.field_screenshot.data.length;f++)i.push(e[t.relationships.field_screenshot.data[f].id]);if(t.relationships.field_project_technology&&t.relationships.field_project_technology.data)for(var p=0;p<t.relationships.field_project_technology.data.length;p++){l+=r[t.relationships.field_project_technology.data[p].id]+", ",d+=a[t.relationships.field_project_technology.data[p].id]+", ";var h={name:r[t.relationships.field_project_technology.data[p].id],image:a[t.relationships.field_project_technology.data[p].id]};u.push(h)}return[i,o,c,s,l,d,u]},v=function(t,e){var n="";if(e){var r=new RegExp(e,"gi"),a="",i="";if(t&&-1!=+t&&(i=t.replace("&amp;","&").replace("&#039;","'")),-1!==i.indexOf("<ul>")){var o="";i.replace("<ul>","").replace("</ul>","").split("<li>").forEach((function(t){t.length>3&&((i=t.slice(0,t.lastIndexOf("<"))).match(r)?(a=i.replace(r,(function(t){return'<span class="highlightSearchText">'.concat(t,"</span>")})),o+="<li>".concat(a,"</li>")):o+="<li>".concat(i,"</li>"))})),n="<ul>".concat(o,"</ul>")}else i.match(r)?n+=a=i.replace(r,(function(t){return'<span class="highlightSearchText">'.concat(t,"</span>")})):n+=i}return n||t}},function(t,e,n){"use strict";n.r(e),n.d(e,"getPage",(function(){return d})),n.d(e,"getData",(function(){return u})),n.d(e,"addProfiles",(function(){return f})),n.d(e,"setPageHTML",(function(){return p})),n.d(e,"renderPage",(function(){return h}));var r=n(0),a=n(1),i=n(3),o=function(t,e,n,r){return new(n||(n=Promise))((function(a,i){function o(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,c)}s((r=r.apply(t,e||[])).next())}))},c="https://chriscorchado.com/drupal8",s=50,l="searchSite",d=function(t,e,n){return o(void 0,void 0,void 0,regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=null,Object(r.setLoading)(!0),"contact"!=t){a.next=12;break}if(-1!=location.toString().indexOf("submitted")){a.next=7;break}return a.next=7,fetch("".concat(c,"/contact/feedback")).then((function(t){return t.ok?t.text():Promise.reject(t.statusText)})).then((function(t){var e=(i=t.replace(/\/drupal8/g,c)).substr(i.indexOf("<form class="),i.indexOf("</form>"));e=(e=e.substr(0,e.indexOf("</form>")+8)).replace("Your email address","Email");var n=i.substr(i.indexOf('<script type="application/json" data-drupal-selector="drupal-settings-json">'),i.indexOf("><\/script>"));n=n.substr(0,n.indexOf("<\/script>")+9),i='<h1 id="content" tabindex="12">Contact</h1>'.concat(e," ").concat(n)})).catch((function(t){alert("Sorry an error has occurred: ".concat(t))}));case 7:return h(i,t),Object(r.setLoading)(!1),a.abrupt("return",!1);case 12:if(!n){a.next=18;break}return a.next=15,u(n);case 15:i=a.sent,a.next=55;break;case 18:a.t0=t,a.next="about"===a.t0?21:"companies"===a.t0?25:"courses"===a.t0?35:"projects"===a.t0?45:55;break;case 21:return a.next=23,u("".concat(c,"/jsonapi/node/page?fields[node--page]=id,title,body&\n              filter[id][operator]=CONTAINS&\n              filter[id][value]=ca23f416-ad70-41c2-9228-52ba6577abfe"));case 23:return i=a.sent,a.abrupt("break",55);case 25:if(!e){a.next=31;break}return a.next=28,u("".concat(c,"/jsonapi/node/company?filter[or-group][group][conjunction]=OR&\n                filter[field_company_name][operator]=CONTAINS&\n                filter[field_company_name][value]=").concat(e,"&\n                filter[field_company_name][condition][memberOf]=or-group&\n                filter[field_job_title][operator]=CONTAINS&\n                filter[field_job_title][value]=").concat(e,"&\n                filter[field_job_title][condition][memberOf]=or-group&\n                filter[body.value][operator]=CONTAINS&\n                filter[body.value][value]=").concat(e,"&\n                filter[body.value][condition][memberOf]=or-group&\n                sort=-field_end_date&\n                include=field_company_screenshot&\n                page[limit]=").concat(s));case 28:i=a.sent,a.next=34;break;case 31:return a.next=33,u("".concat(c,"/jsonapi/node/company?sort=-field_end_date&\n                include=field_company_screenshot&\n                page[limit]=").concat(s));case 33:i=a.sent;case 34:return a.abrupt("break",55);case 35:if(!e){a.next=41;break}return a.next=38,u("".concat(c,"/jsonapi/node/awards?filter[or-group][group][conjunction]=OR&\n                filter[title][operator]=CONTAINS&\n                filter[title][value]=").concat(e,"&\n                filter[title][condition][memberOf]=or-group&\n                filter[field_award_date][operator]=CONTAINS&\n                filter[field_award_date][value]=").concat(e,"&\n                filter[field_award_date][condition][memberOf]=or-group&\n                sort=-field_award_date&\n                include=field_award_pdf,field_track_image,field_award_images&\n                page[limit]=").concat(s));case 38:i=a.sent,a.next=44;break;case 41:return a.next=43,u("".concat(c,"/jsonapi/node/awards?sort=-field_award_date&\n                include=field_award_pdf,field_track_image,field_award_images&\n                page[limit]=").concat(s));case 43:i=a.sent;case 44:return a.abrupt("break",55);case 45:if(!e){a.next=51;break}return a.next=48,u("".concat(c,"/jsonapi/node/project?filter[or-group][group][conjunction]=OR&\n              filter[title][operator]=CONTAINS&\n              filter[title][value]=").concat(e,"&\n              filter[title][condition][memberOf]=or-group&\n              filter[taxonomy_term--tags][path]=field_project_technology.name&\n              filter[taxonomy_term--tags][operator]=CONTAINS&\n              filter[taxonomy_term--tags][value]=").concat(e,"&\n              filter[taxonomy_term--tags][condition][memberOf]=or-group&\n              filter[field_company.title][operator]=CONTAINS&\n              filter[field_company.title][value]=").concat(e,"&\n              filter[field_company.title][condition][memberOf]=or-group&\n              filter[field_screenshot.meta.alt][operator]=CONTAINS&\n              filter[field_screenshot.meta.alt][value]=").concat(e,"&\n              filter[field_screenshot.meta.alt][condition][memberOf]=or-group&\n              filter[field_date][operator]=CONTAINS&filter[field_date][value]=").concat(e,"&\n              filter[field_date][condition][memberOf]=or-group&\n              sort=-field_date&field_company.title&\n              include=field_project_technology,field_company,field_screenshot&fields[node--company]=field_company_name,field_video_url&\n              fields[node--project]=title,body,field_date,field_screenshot,field_project_technology,field_company,field_video_url&\n              page[limit]=").concat(s));case 48:i=a.sent,a.next=54;break;case 51:return a.next=53,u("".concat(c,"/jsonapi/node/project?sort=-field_date&field_company.title&\n                include=field_project_technology,field_company,field_screenshot&\n                fields[node--company]=field_company_name,field_video_url&\n                fields[node--project]=title,body,field_date,field_screenshot,field_project_technology,field_company,field_video_url&\n                page[limit]=").concat(s));case 53:i=a.sent;case 54:return a.abrupt("break",55);case 55:o={currentCount:document.getElementById("lastCount")?document.getElementById("lastCount").textContent:1},(i=Object.assign(Object.assign({},i),{passedInCount:o})).data.length?h(i,t,e,i.links.next,i.links.prev):Object(r.updateInterface)(e);case 58:case"end":return a.stop()}}),a)})))},u=function(t){return o(void 0,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,fetch(Object(r.cleanURL)(t)).then((function(t){return t.json()})).then((function(t){return n=t}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))},f=function(t){document.getElementById(t).innerHTML='\n  <div class="icon" id="pdf-resume">\n    <a href="https://chriscorchado.com/resume/Chris-Corchado-resume-2020.pdf" target="_blank" tabindex="7">\n      <img alt="Link to PDF Resume" src="https://chriscorchado.com/images/pdfIcon.jpg" title="Link to PDF Resume" />\n      <span>Resume</span>\n    </a>\n  </div>\n\n  <div class="icon" id="profile-linkedin">\n    <a href="https://www.linkedin.com/in/chriscorchado/" target="_blank" tabindex="8">\n      <img alt="Link to LinkedIn Profile" title="Link to LinkedIn Profile" src="https://chriscorchado.com/images/linkedInIcon.jpg" />\n      <span>LinkedIn</span>\n    </a>\n  </div>\n\n  <div class="icon" id="profile-azure">\n    <a href="https://docs.microsoft.com/en-us/users/corchadochrisit-2736/" target="_blank" tabindex="9">\n      <img alt="Link to Azure Profile" title="Link to Azure Profile" src="https://chriscorchado.com/images/azureIcon.png" />\n      <span>Azure</span>\n    </a>\n  </div>'},p=function(t){var e="",n=t[0],o=t[1],c=t[2],s=t[3],l=t[4],d=t[5],u=t[6],p=t[7],h=t[8],m=t[9],g=t[10],v=t[11],y=t[12],b=t[13],_=(t[14],t[15]);switch(n){case"about":document.getElementById("search-container").style.display="none",document.getElementById("logo").getElementsByTagName("img")[0].style.border="1px dashed #7399EA";var x=o.attributes.body.value.toString();return f("profiles"),x;case"contact":if(f("profiles"),-1!==location.toString().indexOf("/contact.html?submitted=true"))Object(i.formSubmitted)(5);else document.getElementsByClassName("container")[0].innerHTML=o.toString(),document.getElementById("contact-link").className+=" nav-item-active",document.getElementById("edit-field-site-0-value").value=location.toString(),document.getElementById("edit-mail").focus();break;case"companies":return'<div class="company-container col shadow">\n\n          <div class="company-name" tabindex="'.concat(_++,'">').concat(c,'</div>\n          <div class="company-job-title" tabindex="').concat(_++,'">').concat(s,'</div>\n          <div class="body-container" tabindex="').concat(_++,'">').concat(l,'</div>\n\n          <div class="screenshot-container">\n            <img loading="lazy" src=').concat(Object(r.getFullUrlByPage)(d[0],n),'\n            class="company-screenshot"\n            alt="').concat(o.attributes.title,' Screenshot"\n            title="').concat(o.attributes.title,' Screenshot" tabindex="').concat(_++,'" />\n          </div>\n\n          <div class="employment-dates" tabindex="').concat(_++,'">').concat(u," - ").concat(p,"</div>\n        </div>");case"courses":return e='<div class="course-box box">\n          <h2 tabindex="'.concat(_++,'">').concat(c,'</h2>\n\n          <div>\n            <img loading="lazy" src="').concat(Object(r.getFullUrlByPage)(d[0],n),'"\n              alt="').concat(c.replace(/(<([^>]+)>)/gi,""),'"\n              title="').concat(c.replace(/(<([^>]+)>)/gi,""),'"  tabindex="').concat(_++,'" />\n          </div>\n\n          <div class="course-wrapper">\n\n            <span class="course-date"  tabindex="').concat(_++,'">').concat(g,'</span>\n\n            <span class="course-links">\n              <a href="').concat(Object(r.getFullUrlByPage)(m,n),'" target="_blank"  tabindex="').concat(_++,'">\n                <img loading="lazy" src="https://chriscorchado.com/images/pdfIcon.jpg" height="25"\n                title="View the PDF Certificate" alt="View the PDF Certificate"/>\n              </a>\n            </span>'),h&&(e+='<span class="course-links">\n            <a href="'.concat(Object(r.getFullUrlByPage)(h,n),'" data-featherlight="image"  tabindex="').concat(_++,'">\n              <img loading="lazy" src="https://chriscorchado.com/images/linkedIn-track.png" height="25"\n              title="View the Courses in the Track" alt="View the Courses in the Track" />\n            </a>\n          </span>')),e+="</div></div>";case"projects":var j=0;if(e='<div class="project col">\n        <div class="project-title" tabindex="'.concat(_++,'">').concat(c,'</div>\n        <div class="project-company" tabindex="').concat(_++,'">').concat(v,' <span class="project-date" tabindex="').concat(_++,'">(').concat(g,')</span></div>\n        <div class="body-container" tabindex="').concat(_++,'">').concat(l,"</div>"),d){var w="project-item-grid project-items".concat(o.relationships.field_screenshot.data.length),O='<section data-featherlight-gallery data-featherlight-filter="a" class="'.concat(w,'">'),E=new Array;o.relationships.field_screenshot.data.forEach((function(t){E.push(t.meta.alt)})),j=0,d.forEach((function(t){t.split(",").forEach((function(t){var e=Object(r.getFullUrlByPage)(t,n);O+='<div class="project-item shadow" title=\''.concat(E[j],"'>\n\n              <a href=").concat(e,' class="gallery"  tabindex="').concat(_++,'">\n                <div class="project-item-desc">\n                  ').concat(Object(a.itemWithSearchHighlight)(E[j],b),'\n                </div>\n\n                <img loading="lazy" src=\'').concat(e,"' alt='").concat(E[j],"'\n                  title='").concat(E[j],"' />\n              </a>\n            </div>"),j++}))})),e+=O+="</section>"}if(o.attributes.field_video_url){var I=encodeURIComponent(c);o.attributes.field_video_url.forEach((function(t){e+='<span title="Play Video"><a href="https://chriscorchado.com/video.html?url='.concat(o.attributes.field_video_url,"&name=").concat(I,'" target="_blank" class="play-video"  tabindex="').concat(_++,'">\n            Play Video <img loading="lazy" src="https://chriscorchado.com/images/play_video_new_window_icon.png" alt="Play Video" width="20" />\n          </a></span>')}))}return e+='<div class="project-technology" tabindex="'.concat(_++,'">').concat(y.slice(0,-2),"</div>"),e+="</div>"}},h=function(t,e,n,i,o){var c=!1;if("contact"!=e){var s=[""],u=[""],f=[""],h=[""];if(t.included){var m=Object(a.getIncludedData)(t);s=m[0],u=m[1],f=m[2],h=m[3]}var g="",v="",y="",b="",_="",x="",j="",w="",O="",E="",I="",k="",L="",S=0,C=[],B=[];t.data.forEach((function(t){if(b=t.attributes.title,v=t.attributes.body?t.attributes.body.value:"",_=t.attributes.field_date||t.attributes.field_award_date,w=t.attributes.field_job_title,x=t.attributes.field_start_date,j=t.attributes.field_end_date,I="full"==t.attributes.field_type?"Full-Time":"Contract",O="",L="",C=[],B=[],t.relationships){var i=Object(a.getElementRelationships)(t,u,s,f,h);C.includes(i[0].toString())||C.push(i[0].toString()),k=i[1].toString(),i[2]&&(L=i[2].toString()),E=i[3].toString(),O+=i[4].toString(),i[5].toString(),B.push(i[6])}_&&("projects"==e&&(_=_.split("-")[0]),"courses"==e&&(_=Object(r.getMonthYear)(_))),x&&(x=Object(r.getMonthYear)(x)),j&&(j=Object(r.getMonthYear)(j)),b=b.replace("&amp;","&"),n&&(b=Object(a.itemWithSearchHighlight)(b,n),_=Object(a.itemWithSearchHighlight)(_,n),x=Object(a.itemWithSearchHighlight)(x,n),j=Object(a.itemWithSearchHighlight)(j,n),v=Object(a.itemWithSearchHighlight)(v,n),w=Object(a.itemWithSearchHighlight)(w,n),O=Object(a.itemWithSearchHighlight)(O,n),E=Object(a.itemWithSearchHighlight)(E,n),"node-company"!==I&&(I=Object(a.itemWithSearchHighlight)(I,n))),S++;var o=[e,t,b,w,v,C,x,j,L,k,_,E,O,n,B,15*S];switch(e){case"about":g=p(o);break;case"companies":case"courses":case"projects":g+=p(o)}}));var P=!1;switch(e){case"about":y="about-link",g='<h1 id="content" tabindex="12">About Me</h1>'.concat(g);break;case"companies":y="companies-link",c=!0,g='<h1 id="content" tabindex="12">History</h1><div class="container company">'.concat(g,"</div>");break;case"courses":y="courses-link",c=!0,P=!0,g=' <h1 id="content" tabindex="12">Courses</h1><div class="container courses-container row">'.concat(g,"</div>");break;case"projects":y="projects-link",c=!0,P=!0,g='<h1 id="content" tabindex="12">Projects</h1><div class="container project-container row">'.concat(g,"</div>")}if("about"!==e&&(document.getElementById(y).className+=" nav-item-active"),document.getElementsByClassName("container")[0].innerHTML=g,c){document.getElementById("search-container").style.display="block";var N=document.getElementById(l);N.addEventListener("keyup",(function(t){Object(a.debounceMe)(t)})),N.addEventListener("keydown",(function(t){return Object(a.searchFilter)(t)})),document.getElementById("searchBtn").addEventListener("click",(function(t){Object(a.searchClear)(l)}))}if(P&&$("a.gallery").featherlightGallery({previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:200,galleryFadeOut:300}),"about"!==e&&"contact"!==e){Object(a.setPagination)(S,t.passedInCount.currentCount,o,i);var T=document.getElementById(l);if(document.getElementById("prev")){var H=document.getElementById("prev");H.addEventListener("click",(function(t){d(Object(r.getCurrentPage)(),T.value,H.dataset.prev)}))}if(document.getElementById("next")){var A=document.getElementById("next");A.addEventListener("click",(function(t){d(Object(r.getCurrentPage)(),T.value,A.dataset.next)}))}}Object(r.setLoading)(!1),"about"==e&&(document.getElementById("html5").setAttribute("class","shadow-version noLink"),document.getElementById("html5-here").style.display="block")}else p([e,t])}},function(t,e,n){"use strict";n.r(e),n.d(e,"formSubmitted",(function(){return r}));var r=function(t){var e=document.createElement("div");e.style.padding="50px",e.innerHTML='<h2>Thanks For Your Submission</h2>\n    <h4>Redirecting to the homepage in <span id="secondCountDown">'.concat(t,'</span> seconds</h4>\n    <img id="timer" src="https://chriscorchado.com/images/timer.gif" />'),document.getElementsByClassName("container")[0].append(e);var n=setInterval((function(){t--,document.getElementById("secondCountDown").innerHTML=t.toString(),0===t&&(clearInterval(n),window.location.replace(location.href.substring(0,location.href.lastIndexOf("/")+1)))}),1e3)}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),o=new L(r||[]);return i._invoke=function(t,e,n){var r=u;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return C()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=d(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,o),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};b[i]=function(){return this};var _=Object.getPrototypeOf,x=_&&_(_(S([])));x&&x!==n&&r.call(x,i)&&(b=x);var j=y.prototype=g.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(a,i,o,c){var s=d(t[a],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(u).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=j.constructor=y,y.constructor=v,v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(O.prototype),O.prototype[o]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new O(l(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(j),s(j,c,"Generator"),j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e)},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(2);window.onload=function(){Object(a.getPage)(Object(r.getCurrentPage)())}},function(t,e,n){"use strict";n.r(e)},function(t,e,n){"use strict";n.r(e)},function(t,e,n){"use strict";n.r(e)},,function(t,e,n){"use strict";n.r(e)},,,,,,,function(t,e,n){"use strict";n.r(e);n(4);n(5),n(19),n(7),n(8),n(9),n(11),n(1),n(0),n(2),n(6)},function(t,e,n){"use strict";n.r(e)}]);
//# sourceMappingURL=project.829565603dc68aaddcf0.js.map