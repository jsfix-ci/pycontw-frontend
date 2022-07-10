(window.webpackJsonp=window.webpackJsonp||[]).push([[61,9,20],{1028:function(t,e,n){"use strict";n.r(e);var r=n(497),o=n(498),c=n(109),l={name:"PageConferenceWarmups",components:{I18nPageWrapper:r.default,CoreH1:o.default,LocaleLink:c.default},data:function(){return{title:"暖身活動",intro:"PyCon TW 暖身活動",events:[{title:"Young Inspirers",link:"/conference/young-inspirers",description:"Young Inspirers 是今年第一個由 PyCon Taiwan 所籌備的小型線上會議，我們將邀請具有獨特經歷的學生講者進行分享，期望透過學習經驗的交流與傳承，促進更多 Young Inspirers 的出現。"},{title:"PyCon TW x Taichung.py 聯合線上直播",link:"/conference/warmups/taichungpy",description:"接續 Young Inspirers 活動的經驗，PyCon Taiwan 這次合併 Taichung.py 聚會進行線上 Meetup，同時也可以在 Gather Town 上進行虛擬互動。"},{title:"PyCon TW x PyHUG.py 聯合線上直播",link:"/conference/warmups/pyhug",description:"暖身活動來到第三場，PyCon Taiwan 與地方社群 PyHUG 聚會進行線上 Meetup。"}]}},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}}},m=(n(854),n(4)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i18n-page-wrapper",{staticClass:"px-8 sm:px-10 md:px-32 lg:px-60",attrs:{"custom-x":""}},[n("core-h1",{attrs:{title:t.title,center:""}}),t._v(" "),n("div",{staticClass:"eventSection"},t._l(t.events,(function(e,i){return n("div",{key:"warmup_events_"+i,staticClass:"event"},[n("h2",[n("locale-link",{attrs:{to:e.link,highlight:""}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1),t._v(" "),n("p",[t._v(t._s(e.description))])])})),0)],1)}),[],!1,null,"d116b3c8",null);e.default=component.exports},491:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1a106523",content,!0,{sourceMap:!1})},492:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("43dbd13e",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(491)},494:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"h1[data-v-007b1bc8]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-007b1bc8]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-007b1bc8]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-007b1bc8], p[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-007b1bc8]{font-size:.625rem}ul[data-v-007b1bc8]{margin-bottom:1.5rem}ul.list-disc[data-v-007b1bc8]{padding-left:3rem}li[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-007b1bc8]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),r.locals={},t.exports=r},495:function(t,e,n){"use strict";n(492)},496:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"h1[data-v-2ff7513f]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 834px){h1[data-v-2ff7513f]{margin-bottom:2.25rem}h1[data-v-2ff7513f]{font-size:1.5rem;line-height:2rem}}h1[data-v-2ff7513f]{text-shadow:#3643b5 2px 1px 0}",""]),r.locals={},t.exports=r},497:function(t,e,n){"use strict";n.r(e);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},o=(n(493),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageWrapperClass},[n("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"007b1bc8",null);e.default=component.exports},498:function(t,e,n){"use strict";n.r(e);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(495),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"2ff7513f",null);e.default=component.exports},648:function(t,e,n){var content=n(855);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("06c0a22e",content,!0,{sourceMap:!1})},854:function(t,e,n){"use strict";n(648)},855:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"h2[data-v-d116b3c8]{margin-left:auto;margin-right:auto;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity));margin-top:3rem!important;margin-bottom:.5rem!important;font-size:24px}",""]),r.locals={},t.exports=r}}]);