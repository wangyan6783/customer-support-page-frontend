(this["webpackJsonpcustomer-support-page-frontend"]=this["webpackJsonpcustomer-support-page-frontend"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"subTitle":"Frequently Asked Questions","title1":"You have questions.","title2":"Our sleep experts have answers.","link":"View all FAQs"}')},,function(e){e.exports=JSON.parse('{"subTitle":"Customer Support","title":"How can we help you today?","content":"Similique sunt in culpa qui officia deserunt mollitia animi, id estlaborum. Et harum rerum facilis est et expedita distinctio. At vero eoset accusamus et iusto odio."}')},,function(e){e.exports=JSON.parse('{"mainDirectory":"Home","subDirectory":"Customer Support"}')},,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Your Orders","description":"Check order status, track your order, return items and more.","icon":"shopping-cart"},{"id":2,"name":"Shipping and Delivery","description":"Shipping & delivery policies, rates, preparing for delivery, and more.","icon":"truck"},{"id":3,"name":"Policies","description":"Site Terms of Use, Privacy Policy, and Return Policy","icon":"file-alt"},{"id":4,"name":"Your Account","description":"Find or reset password, manage your account, and more.","icon":"user"},{"id":5,"name":"Product Registration","description":"Activate your warranty, Lorem ipsum dolor sit amen","icon":"tag"},{"id":6,"name":"Warranties","description":"Discover warranty information, file a claim, or check a claim status.","icon":"check-circle"},{"id":7,"name":"FAQs","description":"All of your Tempur-Pedic questions answered by our Sleep Experts.","icon":"question-circle"}]')},function(e){e.exports=JSON.parse('[{"id":1,"question":"Can I split my payment between financing and a credit card?","answer":"Yes, you can - but  please call our Sleep Experts at 888-811-5053 and place the order with them - they\'re equipped to handle these kinds of orders."},{"id":2,"question":"How are mattresses/foundations/power bases delivered?","answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."},{"id":3,"question":"What is the return policy?","answer":"In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"id":4,"question":"Is TEMPUR material the same as memory foam?","answer":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est."},{"id":5,"question":"I forgot to add a promo code or referral credit. What should I do?","answer":"Optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae."}]')},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(10),o=a.n(r),s=(a(19),a(20),a(8));var c=function(){return n.a.createElement("div",{className:"directory"},n.a.createElement("a",{href:"/",className:"main-link-text"},s.mainDirectory),n.a.createElement("p",{className:"sub-text inline"}," / ".concat(s.subDirectory)))},l=a(6);var u=function(){return n.a.createElement("header",{className:"main-header"},n.a.createElement("p",{className:"uppercase padding-b-3"},l.subTitle),n.a.createElement("h1",{className:"padding-b-3"},l.title),n.a.createElement("p",{className:"sub-text padding-b-3"},l.content))},m=a(11),d=a(3),p=a(5),f=a(2);d.b.add(f.f,f.h,f.b,f.i,f.g,f.a,f.e,f.d,f.c);var E=function(e){var t=e.category,a=t.name,i=t.description,r=t.icon;return n.a.createElement("li",{className:"category-item"},n.a.createElement("div",{className:"category-item-icon-wrapper"},n.a.createElement(p.a,{icon:r,className:"category-item-icon"})),n.a.createElement("div",null,n.a.createElement("h4",{className:"category-item-title"},a),n.a.createElement("p",null,i)))};var h=function(){return n.a.createElement("section",null,n.a.createElement("ul",{className:"category-list"},m.map((function(e){return n.a.createElement(E,{category:e,key:e.id})}))))},q=a(4);var v=function(){return n.a.createElement("header",{className:"faq-header"},n.a.createElement("div",{className:"faq-header-section-1"},n.a.createElement("p",{className:"uppercase padding-b-2"},q.subTitle),n.a.createElement("h1",null,q.title1),n.a.createElement("h1",null,q.title2)),n.a.createElement("a",{href:"/",className:"main-link-text"},q.link))},y=a(12),g=a(13);var b=function(e){var t=e.questionInfo,a=t.question,r=t.answer,o=Object(i.useState)(!1),s=Object(g.a)(o,2),c=s[0],l=s[1];return n.a.createElement("li",{className:"faq-question-item",onClick:function(){l(!c)}},n.a.createElement(p.a,{className:"faq-question-icon",icon:c?"minus":"plus"}),n.a.createElement("div",null,n.a.createElement("h4",{className:"faq-question-title"},a),n.a.createElement("p",{className:"faq-question-answer"},c&&r)))};var w=function(){return n.a.createElement("ul",{className:"faq-question-list"},y.map((function(e){return n.a.createElement(b,{key:e.id,questionInfo:e})})))};var N=function(){return n.a.createElement("section",{className:"faq"},n.a.createElement(v,null),n.a.createElement(w,null))};var x=function(){return n.a.createElement("div",null,n.a.createElement(c,null),n.a.createElement(u,null),n.a.createElement(h,null),n.a.createElement(N,null))};var k=function(){return n.a.createElement("div",null,n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.31e3e3e9.chunk.js.map