/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.1a1
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),force_dialog:false,menu:null,init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length>0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length>0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length>0&&b.search.length===0){b.psnb.css("width","100%")}else{if(b.psnb.length===0&&b.search.length>0){b.search.css("width","100%")}}},mobileview:function(){var r,y,w,f="",q=pe.dic.get("%menu"),o=pe.dic.get("%search"),k,g,j,s,p=false,u='data-role="page"',l='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",n="",t,d,m,i,h,v,x;if(b.menubar.length>0||pe.secnav.length>0||b.search.length>0){v=b.menubar.find("ul.mb-menu li");r="<div "+(p?u:l)+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length>0?pe.secnav.find("h2").eq(0):"");y=(b.menubar.length>0?b.psnb.children(":header"):(pe.secnav.length>0?g:b.bcrumb.children(":header")));w=y[0].innerHTML;r+="<h1>"+q+"</h1>"+(p?"":e)+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length>0){r+='<section><div id="jqm-mb-location-text">'+b.bcrumb[0].innerHTML+"</div></section>";b.bcrumb.remove()}else{r+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length>0){j=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true);pe.menu.expandcollapsemobile(j,(pe.secnav.find("h3.top-section").length>0?"h4":"h3"),true,false);pe.menu.expandcollapsemobile(j,".nav-current",false,true);f+="<section><div><h2>"+g[0].innerHTML+'</h2><div data-role="controlgroup">'+j[0].innerHTML+"</div></div></section>";pe.secnav.remove()}if(b.menubar.length>0){j=pe.menu.buildmobile(v,3,"a",true,true,"c",true);f+="<section><div><h2>"+w+'</h2><div data-role="controlgroup">'+j[0].innerHTML+"</div></div></section>"}r+='<div id="jqm-mb-menu"></div></nav></div></div></div>';(p?pe.pagecontainer():pe.bodydiv).append(r);b.force_dialog=p;b.menu=f;y.wrapInner('<a href="#jqm-wb-mb" data-rel="'+(p?"dialog":"popup")+'"></a>');n+='<li><a data-rel="'+(p?"dialog":"popup")+'" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+q+"</a></li>"}if(b.search.length>0){k=b.search.find(":header");s="<div "+l+' id="jqm-wb-search"><div data-role="header"><h1>'+o+"</h1>"+e+'</div><div data-role="content">'+(c("<div/>").append(b.search.find("form")))[0].innerHTML+"</div></div>";pe.bodydiv.append(s);k.wrapInner('<a href="#jqm-wb-search" data-rel="popup"></a>');n+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+o+"</a></li>"}if(n.length>0){t=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+n+"</ul></div>");b.title.after(t)}i=c("#gcwu-lang");if(i.length>0){d=i.find("a");h='<div data-role="navbar"><ul>';d.each(function(){h+='<li><a href="'+this.href+'" data-theme="a">'+this.innerHTML+"</a></li>"});h+="</ul></div>";i.find("#gcwu-ef-lang").replaceWith(h);i.find("#gcwu-other-lang").remove()}if(b.sft.length>0){d=b.sft.find("#gcwu-tctr a, .gcwu-col-head a");x=b.sft.children("#gcwu-sft-in");b.gcft.parent().remove()}else{x=pe.footer.find("#gcwu-tc");if(x.length>0){d=x.find("a")}}if(x.length>0){m='<div data-role="navbar"><ul>';d.each(function(){m+='<li><a href="'+this.href+'" data-theme="b">'+this.innerHTML+"</a></li>"});m+="</ul></div>";x.replaceWith(m)}pe.footer.find("footer").append(b.wmms.detach());c(document).on("pagecreate",function(){if(b.menubar.length>0){b.psnb.parent().remove()}if(b.search.length>0){b.search.parent().remove()}if(n.length>0){t.children().removeClass("wb-hide")}setTimeout(function(){(b.force_dialog?pe.pagecontainer():pe.bodydiv).find("#jqm-mb-menu").append(b.menu).trigger("create")},1);function z(B,A,E,D){var C;c.mobile.showPageLoadingMsg();C=c.mobile.transitionHandlers.simultaneous("pop",A,E,D);C.done(function(){c.mobile.hidePageLoadingMsg()});return C}c.mobile.transitionHandlers.loadingTransition=z;c.mobile.defaultDialogTransition="loadingTransition"});c(document).on("pageinit",function(){pe.menu.correctmobile(c("#jqm-wb-mb"))});c(document).trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));