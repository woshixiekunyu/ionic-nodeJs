!function(){function t(){var t="",e="";try{t=window.screen.width,e=window.screen.height}catch(r){}return t+"*"+e}function e(){var t="Android";return d.match(/(Android)\s+([\d.]+)/)&&(t="Android_"+d.match(/(Android)\s+([\d.]+)/)[2]),(d.match(/(iPad).*OS\s([\d_]+)/)||d.match(/(iPhone\sOS)\s([\d_]+)/))&&(t="iOS_"+(d.match(/(iPad).*OS\s([\d_]+)/)?d.match(/(iPad).*OS\s([\d_]+)/)[2]:d.match(/(iPhone\sOS)\s([\d_]+)/)[2])),d.match(/Windows Phone/)&&(t="WP"),t}function r(){var t,e,r=navigator.userAgent.toLowerCase(),n={};try{if(e=r.match(/(?:newsarticle|safari|chrome|msie|micromessenger)[\/: ]([\d.]+)/),e=e?e[1]:"0",n={version:e,safari:/version.+safari/.test(r)||/safari[\/ ]+([\d.]+)/.test(r),chrome:/chrome\/([\d.]+)/.test(r)||/crios\/([\d.]+)/.test(r),ie:/msie/.test(r)||/trident/.test(r),tt:/newsarticle/.test(r),uc:/ucbrowser\/([\d.]+)/.test(r),qq:/qqbrowser/.test(r),wx:/micromessenger/.test(r),facebook:/fban/.test(r),twitter:/twitter/.test(r)},t=n.version.split(".")[0],n.uc)return t=r.match(/ucbrowser\/([\d.]+)/)[1],"UC_"+t;if(n.qq)return t=r.match(/qqbrowser\/([\d.]+)/)[1],"QQ_"+t;if(n.tt)return t=r.match(/newsarticle\/([\d.]+)/)[1],"toutiao_"+t;if(n.chrome)return t=r.match(/chrome\/([\d.]+)/)[1],"chrome_"+t;if(n.wx)return t=r.match(/micromessenger\/([\d.]+)/)[1],"weixin_"+t;if(n.safari){if(r.match(/android/))return"Webkit_"+r.match(/webkit\/([\d.]+)/)[1];try{r.match(/(?:version)[\/: ]([\d.]+)/)&&(t=r.match(/(?:version)[\/: ]([\d.]+)/)[1])}catch(o){}return"safari_"+t}if(n.ie)return r.indexOf("rv:11")>-1&&(t="11"),"IE_"+t;if(n.facebook)return"facebook";if(n.twitter)return"twitter"}catch(a){return"unkonw"}return"unkonw"}function n(){var t=d.match(/NetType\/([^\s]*)/i),e="WIFI";return t&&(e=t[1]),e}function o(){var t=localStorage._ta;if(!t){var e=Math.random(),r=+new Date;t="TA."+e+"."+r,localStorage._ta=t}return t}function a(t){t=t||{};for(var e in m)t[e]=m[e];var r=[];for(var n in t)r.push(n+"="+t[n]);var o=new Image,a=c+"?"+r.join("&");window.console&&window.console.log("performance: ",a),o.src=a;var i=window.TT_PERF_CONFIG||u;if(i.metrics===!0){var d=i.percent||u.percent;if(Math.floor(100*Math.random())<d){var f=s.replace("{PATHNAME}",t.pathname);f+="?"+r.join("&");var h=new Image;h.src=f}}}function i(){var o={screen:t(),dpr:window.devicePixelRatio||1,net_type:n(),iframes:document.querySelectorAll("iframe").length,system:e(),browser:r(),event:"pv"};if("object"==typeof performance){var i=performance.timing;o.redirect_count=performance.navigation.redirectCount,o.redirect=i.redirectEnd-i.redirectStart,o.dns=i.domainLookupEnd-i.domainLookupStart,o.tcp=i.connectEnd-i.connectStart,o.request=i.responseStart-i.requestStart,o.response=i.responseEnd-i.responseStart,o.processing=i.domComplete-i.domLoading,o.blank=i.responseEnd-i.navigationStart,o.domready=i.domInteractive-i.navigationStart,o.load=i.loadEventEnd-i.navigationStart}a(o)}var c="http://www.toutiao.com/__utm.gif",s="http://m.toutiao.com/log/sentry/v2/api/{PATHNAME}/perf/",d=navigator.userAgent,m={},u={metrics:!1,percent:20};m.pathname=encodeURIComponent(location.pathname),m.hostname=location.hostname,m._ta=o();for(var f=document.querySelectorAll("meta"),h=0;h<f.length;h++)"pathname"===f[h].name&&(m.pathname=f[h].content);window.sendToutiaoGifLog=a,window.addEventListener&&window.performance&&window.addEventListener("load",function(){setTimeout(i,1e3)},!1)}();