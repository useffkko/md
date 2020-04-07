/*
*  Dsplay Buttons
*  On click will be shown more Buttons. Ech Button has one functionality.
*  Buttons like: Save, Feedback, Copy, Close and Others..
*
*/
$(function () {
    // clear
    $("#clear_btn").on('click', function () {
      console.log("Cleared!");
      document.getElementById('textarea').value = "";
    });
  
    // close
    $("#close_btn").on('click', function () {
      console.log("closed!");
    });
  
    // email
    $("#email_btn").on('click', function () {
      let e = document.getElementById("email_btn");
      e.onclick = function () {
        window.location.href = 'mailto:?subject=Check it out!'
        + '&body=https%3A%2F%2Fmakemd.de%2F&amp;';
      };
      console.log("email!");
    });
    // copy
    $("#copy_btn").on('click', function () {
      let copy = document.getElementById("copy_btn");
      copy.onclick = function () {
        let elm = document.getElementById("textarea");
        if (elm.value !== "") {
          elm.select();
          document.execCommand("copy");
          console.log(" Content copied to clipboard Successfully!");
        }
      };
    });
    // download
    $("#download_btn").on('click', function () {
      console.log("download.");
      let a = document.getElementById("href");
      let text_size = document.getElementById('textarea');
      a.onclick = function () {
        if (text_size.value.trim() < 1) {
          console.log(' File is empty.');
        } else {
          let text = document.getElementById('textarea').value,
          FileData = new Blob([text], {type: 'text/markdown'}),
          getLink = document.getElementById('href');
          getLink.href = window.URL.createObjectURL(FileData);
        }
      };
    });
    // info
    $("#info_btn").on('click', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        window.location.href = 'pub/pg/examples';
    });
  });
!function(A,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(A.AnchorJS=e(),A.anchors=new A.AnchorJS)}(this,function(){"use strict";return function(A){function d(A){A.icon=A.hasOwnProperty("icon")?A.icon:"",A.visible=A.hasOwnProperty("visible")?A.visible:"hover",A.placement=A.hasOwnProperty("placement")?A.placement:"right",A.ariaLabel=A.hasOwnProperty("ariaLabel")?A.ariaLabel:"Anchor",A.class=A.hasOwnProperty("class")?A.class:"",A.truncate=A.hasOwnProperty("truncate")?Math.floor(A.truncate):64}function f(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],d(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var e,t,i,n,o,s,r,a,c,h,l,u=[];if(d(this.options),"touch"===(l=this.options.visible)&&(l=this.isTouchDevice()?"always":"hover"),A||(A="h2, h3, h4, h5, h6"),0===(e=f(A)).length)return this;for(function(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",e.sheet.cssRules.length),e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",e.sheet.cssRules.length),e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",e.sheet.cssRules.length),e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',e.sheet.cssRules.length)}}(),t=document.querySelectorAll("[id]"),i=[].map.call(t,function(A){return A.id}),o=0;o<e.length;o++)if(this.hasAnchorJSLink(e[o]))u.push(o);else{if(e[o].hasAttribute("id"))n=e[o].getAttribute("id");else if(e[o].hasAttribute("data-anchor-id"))n=e[o].getAttribute("data-anchor-id");else{for(c=a=this.urlify(e[o].textContent),r=0;void 0!==s&&(c=a+"-"+r),r+=1,-1!==(s=i.indexOf(c)););s=void 0,i.push(c),e[o].setAttribute("id",c),n=c}n.replace(/-/g," "),(h=document.createElement("a")).className="anchorjs-link "+this.options.class,h.href="#"+n,h.setAttribute("aria-label",this.options.ariaLabel),h.setAttribute("data-anchorjs-icon",this.options.icon),"always"===l&&(h.style.opacity="1"),""===this.options.icon&&(h.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(h.style.lineHeight="inherit")),"left"===this.options.placement?(h.style.position="absolute",h.style.marginLeft="-1em",h.style.paddingRight="0.5em",e[o].insertBefore(h,e[o].firstChild)):(h.style.paddingLeft="0.375em",e[o].appendChild(h))}for(o=0;o<u.length;o++)e.splice(u[o]-o,1);return this.elements=this.elements.concat(e),this},this.remove=function(A){for(var e,t,i=f(A),n=0;n<i.length;n++)(t=i[n].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(i[n]))&&this.elements.splice(e,1),i[n].removeChild(t));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){return this.options.truncate||d(this.options),A.trim().replace(/\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&-1<(" "+A.firstChild.className+" ").indexOf(" anchorjs-link "),t=A.lastChild&&-1<(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ");return e||t||!1}}});

!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(i!==t?"hidden"===o.overflowY&&(n("scroll"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(n("hidden"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,c=function(){e.clientWidth!==u&&l()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:p,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});



function getSize(e) {
    let w = e.target.outerWidth;
    let h = e.target.outerHeight;
    document.getElementById('window-size').innerHTML = "Window Size: " + w + "&#215;" + h;
}

window.addEventListener("resize", getSize);

window.onbeforeunload = function(){
  let tag = document.getElementById("textarea");
	   if(tag.value != ""){
		     return "You have unsaved work!";
	   }
	}

$(document).ready(function () {
    function selectFile(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        let files = evt.dataTransfer.files;
        let reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('textarea').value = event.target.result;
        };
        reader.readAsText(files[0], "UTF-8");
    }

    function dragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }

    let drop = document.getElementById('textarea');
    drop.addEventListener('dragover', dragOver, false);
    drop.addEventListener('drop', selectFile, false);
});


$(window).load(function () {
    let preloaderDelay = 350,
        preloaderFadeOutTime = 800;

    function hidePreloader() {
        let loadingAnimation = $('#loading-animation'),
            preloader = $('#preloader');
        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();
});


anchors.options.placement = 'left';
anchors.options.truncate = 50;
anchors.add();

var md = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
            }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {
        }

        return '';
    }
});

var rendered = document.querySelector('#rendered');
rendered.innerHTML = md.render(document.querySelector('textarea').textContent);

document.querySelector('textarea').addEventListener('keyup', function (e) {
    rendered.innerHTML = md.render(e.target.value);
});

autosize(document.querySelector('textarea'));


$(document).ready(function () {
    $("#textarea").on('input change mouseover', function () {
        let tl = this.value.length;
        if (tl <= 100000) {
            // do nth
        } else {
            if (tl <= 100100) {
                console.log("Stop writing..");
            } else {
                $("#textarea").attr('disabled', true);
            }
        }
    });
});

const b = document.getElementById('cbanner'),
    accept = document.getElementById('caccept');
if (!localStorage.uid) {
    b.style.display = "inherit";
} else {
    b.style.display = "none";
}
accept.addEventListener('click', function () {
    b.style.display = "none";
    localStorage.uid = btoa("2020");
});
if (navigator.userAgent.match(/Opera|OPR\//)) {
    b.style.display = "inherit";
}

