(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1025:function(e,t,r){"use strict";r(804)},1026:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,".profile-info-form label[data-v-78e7991e]{margin-bottom:0.125rem;display:block;font-weight:500;color:#282533}.dropdown[data-v-78e7991e]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-78e7991e]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-78e7991e]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-78e7991e]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>div>li[data-v-78e7991e]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;transition:.2s}.dd-image[data-v-78e7991e]{transition:.2s}.dropdown>div:hover .dd-image[data-v-78e7991e]{width:20px;height:20px;border-radius:50px}.dropdown>div>li[data-v-78e7991e]:hover{padding-left:10px}.custom-input[data-v-78e7991e]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-78e7991e]{width:100%;text-align:left}",""]),o.locals={},e.exports=o},1306:function(e,t,r){"use strict";r.r(t);r(787),r(31),r(37),r(59),r(30),r(60);var o=r(3),n=r(15),c=(r(38),r(26),r(371),r(45),r(9),r(259),r(698),r(70),r(21),r(691)),l=(r(256),r(760)),m=r(659),A=r(144),d=r(119),f=r(47),h=(r(761),r(788)),v=r(656),y=r(22);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=Object(y.a)(f.a).extend({name:"UserForm",components:{InputField:c.default,MessageAlertWidget:m.default,SpinnerDottedIcon:A.default},data:function(){return{dropDownContent:[],setDropDown:!1,formData:{firstName:"",lastName:"",email:"",phone:"",timezone:"",country:"",state:""},country:"",state:"",states:[],timezones:l.a,loading:!1,errorMessage:""}},computed:w({},Object(d.e)(["initialUser"])),props:{editingDetails:{type:Boolean,default:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCountries();case 2:return t.next=4,e.fetchStates();case 4:e.formData.state=e.$auth.user?e.$auth.user.state:"";case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){for(var e=0,t=Object.keys(this.formData);e<t.length;e++){var r=t[e];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.country=this.$auth.user.country,this.state=this.$auth.user.state},methods:{inputValid:function(e,title){var t=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(e)&&(this.errorMessage="".concat(title," format not correct"),t=!1),t},inputPhone:function(e,title){var t=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/.test(e)&&(this.errorMessage="".concat(title," format not correct"),t=!1),t},cancleOut:function(e){"LI"!=e.target.tagname&&(this.setDropDown=!1)},setCountryInfo:function(e){var t=this;this.country=e.target.textContent.trim().toLowerCase(),this.setDropDown=!1;try{var r=h.a.filter((function(e){return e.name.common.toLowerCase().startsWith(t.country)}))[0];this.formData.timezone=r.timezones[0],this.state=r.capital[0]}catch(e){this.state=""}},displayCountry:function(){var e=this;""!=this.country.trim()?(this.setDropDown=!0,this.dropDownContent=h.a.map((function(e){return e})).filter((function(t){return t.name.common.toLowerCase().startsWith(e.country)})).sort()):this.setDropDown=!1},fetchCountries:function(){},fetchStates:function(){},onSubmit:function(){var e,t,r=this;if(null===(e=event)||void 0===e||e.preventDefault(),this.inputValid(this.formData.firstName,"first name")&&this.inputValid(this.formData.lastName,"last name")&&this.inputValid(this.formData.briefIntro,"Brief introduction")&&this.inputValid(this.country,"country")&&this.inputValid(this.state,"state")&&this.inputPhone(this.formData.phone,"Phone")){if(!this.loading){this.loading=!0,this.errorMessage="";var n=null===(t=this.$auth.user)||void 0===t?void 0:t.id;this.formData=w(w({},this.formData),{},{country:this.country,state:this.state}),this.$axios.$patch("/users/".concat(n),this.formData).then(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.filterUsers(),r.$notify.success({title:"Data write",message:"Data updated successfully!"}),r.loading=!1,e.next=5,r.$nextTick();case 5:r.$emit("stop-editing");case 6:case"end":return e.stop()}}),e)})))).catch((function(e){var t=e.response;console.log(t);var o=Object(v.ErrorHandler)(t);r.errorMessage=o})).finally((function(){r.loading=!1}))}}else this.$refs.form.scrollIntoView()}},watch:{"formData.country":function(){this.formData.state="",this.fetchStates()},"$auth.user.country":function(){for(var e=0,t=Object.keys(this.formData);e<t.length;e++){var r=t[e];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.country=this.$auth.user.country,this.state=this.$auth.user.state}}}),D=(r(1025),r(1)),component=Object(D.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("form",{ref:"form",staticClass:"profile-info-form grid grid-cols-1 gap-5",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"mb-8",attrs:{message:e.errorMessage,type:"error"}}),e._v(" "),t("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[t("div",[t("label",{attrs:{for:""}},[e._v("First Name")]),e._v(" "),t("el-input",{attrs:{placeholder:"Enter first name...",disabled:!e.editingDetails},model:{value:e.formData.firstName,callback:function(t){e.$set(e.formData,"firstName",t)},expression:"formData.firstName"}})],1),e._v(" "),t("div",[t("label",{attrs:{for:""}},[e._v("Last Name")]),e._v(" "),t("el-input",{attrs:{placeholder:"Enter last name...",disabled:!e.editingDetails},model:{value:e.formData.lastName,callback:function(t){e.$set(e.formData,"lastName",t)},expression:"formData.lastName"}})],1)]),e._v(" "),t("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[t("div",[t("label",{attrs:{for:""}},[e._v("Email")]),e._v(" "),t("el-input",{attrs:{placeholder:"Enter email...",required:"",type:"email",disabled:!e.editingDetails},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),t("div",[t("label",{attrs:{for:""}},[e._v("Phone Number")]),e._v(" "),t("el-input",{attrs:{placeholder:"Enter phone number...",disabled:!e.editingDetails},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1)]),e._v(" "),t("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[t("div",{staticClass:"relative"},[t("label",{staticClass:"mb block",attrs:{for:""}},[e._v("Country")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],ref:"countryInitial",staticClass:"custom-input py-2 px-2 text-[14px] width-full pl-4 text-paperdazgray-300",class:[1==e.editingDetails?"text-black":"text-paperdazgray-300"],attrs:{disabled:!e.editingDetails,type:"text",placeholder:"country"},domProps:{value:e.country},on:{input:[function(t){t.target.composing||(e.country=t.target.value)},e.displayCountry]}}),e._v(" "),e.setDropDown?t("div",{staticClass:"dropdown cursor-pointer z-10"},e._l(e.dropDownContent,(function(r,i){return t("div",{staticClass:"flex items-center my-2 px-1"},[t("img",{staticClass:"w-8 h-6 rounded-md mr-2 dd-image",attrs:{src:r.flags.png}}),e._v(" "),t("li",{attrs:{id:r.dial_code},on:{click:e.setCountryInfo}},[e._v("\n            "+e._s(r.name.common)+"\n          ")])])})),0):e._e()]),e._v(" "),t("div",[t("label",{attrs:{for:""}},[e._v("State")]),e._v(" "),t("el-input",{staticClass:"w-full",attrs:{placeholder:"State",filterable:"",disabled:!e.editingDetails||!e.country},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1)]),e._v(" "),t("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[t("div",[t("label",{attrs:{for:""}},[e._v("Timezone")]),e._v(" "),t("el-select",{staticClass:"w-full",attrs:{placeholder:"Timezone",filterable:"",disabled:!e.editingDetails},model:{value:e.formData.timezone,callback:function(t){e.$set(e.formData,"timezone",t)},expression:"formData.timezone"}},e._l(e.timezones,(function(e,i){return t("el-option",{key:i,attrs:{value:e,label:e}})})),1)],1),e._v(" "),t("div")]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.editingDetails,expression:"editingDetails"}],staticClass:"flex items-center justify-center mt-2"},[t("button",{staticClass:"shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50",attrs:{disabled:!e.editingDetails||e.loading}},[t("span",{staticClass:"inline-flex items-center gap-3"},[t("span",[e._v("Update")]),e._v(" "),t("transition",{attrs:{name:"fade",duration:100}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])])],1)}),[],!1,null,"78e7991e",null);t.default=component.exports},760:function(e,t,r){"use strict";t.a=["Africa/Abidjan","Africa/Accra","Africa/Algiers","Africa/Bissau","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/El_Aaiun","Africa/Johannesburg","Africa/Juba","Africa/Khartoum","Africa/Lagos","Africa/Maputo","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/UTC","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Helsinki","Europe/Istanbul","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Saratov","Europe/Simferopol","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","WET"]},761:function(e,t,r){"use strict"},804:function(e,t,r){var content=r(1026);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("6149dce3",content,!0,{sourceMap:!1})}}]);