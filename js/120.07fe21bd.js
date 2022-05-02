"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[120],{6128:function(t,e,a){a.d(e,{Z:function(){return m}});var i=a(6252),s=a(3577),o=a(9963);const c={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},n=(0,i._)("span",{"aria-hidden":"true"},"«",-1),l=[n],d={key:0,class:"page-link"},g=["onClick"],u=(0,i._)("span",{"aria-hidden":"true"},"»",-1),p=[u];function v(t,e,a,n,u,v){return(0,i.wg)(),(0,i.iD)("nav",c,[(0,i._)("ul",r,[(0,i._)("li",{class:(0,s.C_)([{disabled:!a.pages.has_pre},"page-item"])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((t=>v.updatePage(a.pages.current_page-1)),["prevent"]))},l)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.pages.total_pages,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["page-item",{active:a.pages.current_page===t}]),key:t},[t===a.pages.current_page?((0,i.wg)(),(0,i.iD)("span",d,(0,s.zw)(t),1)):((0,i.wg)(),(0,i.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,o.iM)((e=>v.updatePage(t)),["prevent"])},(0,s.zw)(t),9,g))],2)))),128)),(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((t=>v.updatePage(a.pages.current_page+1)),["prevent"]))},p)],2)])])}var h={props:["pages"],methods:{updatePage(t){this.$emit("emitPages",t)}}},_=a(3744);const f=(0,_.Z)(h,[["render",v]]);var m=f},9120:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var i=a(6252),s=a(3577);const o=(0,i.uE)('<div class="container-fluid"><div class="row"><div class="product-img d-flex justify-content-center align-items-center"></div></div></div><div class="container"><div class="row"><div class="col"><h2 class="text-center text-danger my-5">Cosmos 手工冰淇淋</h2></div></div></div>',2),c={class:"container"},r={class:"row"},n={class:"col-12 d-flex justify-content-center category mb-5"},l=(0,i.Uk)(" 全部商品 "),d=(0,i.Uk)(" 甜筒系列 "),g=(0,i.Uk)(" 冰沙系列 "),u=(0,i.Uk)(" 冰棒系列 "),p={class:"container"},v={class:"row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-4 mb-13"},h={class:"card"},_=["src"],f={class:"card-body"},m={class:"card-title"},w={class:"card-text text-danger"},y={class:"card-text ms-2 fs-6"},k={class:"text-gray"},b={class:"product-btn-group"},C=["onClick"],x=(0,i._)("i",{class:"bi bi-heart-fill"},null,-1),P=[x],$=["onClick"],D=(0,i._)("i",{class:"bi bi-heart"},null,-1),L=[D],q=["onClick"],A={class:"container"},W={class:"row"},z={class:"col-12 my-5"};function N(t,e,a,x,D,N){const S=(0,i.up)("Loading"),U=(0,i.up)("router-link"),Z=(0,i.up)("PaginationView");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(S,{active:D.isLoading,"z-index":1060},null,8,["active"]),o,(0,i._)("div",c,[(0,i._)("div",r,[(0,i._)("ul",n,[(0,i._)("li",{class:(0,s.C_)(["category-btn",""===D.isActive?"active":""]),onClick:e[0]||(e[0]=t=>N.getProducts("",1))},[(0,i.Wm)(U,{to:{query:{category:"all",page:1}}},{default:(0,i.w5)((()=>[l])),_:1})],2),(0,i._)("li",{class:(0,s.C_)(["category-btn","甜筒"===D.isActive?"active":""]),onClick:e[1]||(e[1]=t=>(N.getProducts("甜筒"),1))},[(0,i.Wm)(U,{to:{query:{category:"甜筒",page:1}}},{default:(0,i.w5)((()=>[d])),_:1})],2),(0,i._)("li",{class:(0,s.C_)(["category-btn","冰沙"===D.isActive?"active":""]),onClick:e[2]||(e[2]=t=>N.getProducts("冰沙",1))},[(0,i.Wm)(U,{to:{query:{category:"冰沙",page:1}}},{default:(0,i.w5)((()=>[g])),_:1})],2),(0,i._)("li",{class:(0,s.C_)(["category-btn","冰棒"===D.isActive?"active":""]),onClick:e[3]||(e[3]=t=>N.getProducts("冰棒",1))},[(0,i.Wm)(U,{to:{query:{category:"冰棒",page:1}}},{default:(0,i.w5)((()=>[u])),_:1})],2)])])]),(0,i._)("div",p,[(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(D.products,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:t.id},[(0,i._)("div",h,[(0,i.Wm)(U,{to:`/product/${t.id}`,class:"card-img card-img-rotate"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:t.imageUrl,class:"card-img-top rounded-3",alt:"item.title"},null,8,_),(0,i._)("div",f,[(0,i._)("h4",m,(0,s.zw)(t.title),1),(0,i._)("h5",w,[(0,i.Uk)("NT$"+(0,s.zw)(t.price)+" ",1),(0,i._)("span",y,[(0,i._)("del",k,"NT$"+(0,s.zw)(t.origin_price),1)])])])])),_:2},1032,["to"]),(0,i._)("div",b,[D.favorite.includes(t.id)?((0,i.wg)(),(0,i.iD)("button",{key:0,type:"button",class:"add-favorite btn btn-danger rounded-circle",onClick:e=>N.toggleFavorite(t.id)},P,8,C)):((0,i.wg)(),(0,i.iD)("button",{key:1,type:"button",class:"add-favorite btn btn-outline-danger rounded-circle",onClick:e=>N.toggleFavorite(t.id)},L,8,$)),(0,i._)("button",{type:"button",class:"add-cart-btn btn btn-outline-danger",onClick:e=>N.addToCart(t.id)}," 加到購物車 ",8,q)])])])))),128))])]),(0,i._)("div",A,[(0,i._)("div",W,[(0,i._)("div",z,[(0,i.Wm)(Z,{pages:D.pagination,onEmitPages:e[4]||(e[4]=t=>N.getProducts(D.category,t))},null,8,["pages"])])])])],64)}var S=a(5011),U=a(6128),Z={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,product:{},status:{loadingItem:""},coupon_code:"",currentPage:1,cart:{},isActive:"",category:"",favorite:JSON.parse(localStorage.getItem("favorite"))||[]}},inject:["emitter"],components:{PaginationView:U.Z},methods:{getProducts(t,e=1){this.isLoading=!0,this.currentPage=e,this.isActive="",this.category=t;let a=`https://vue3-course-api.hexschool.io/v2//api/xqrass-hexschool/products?page=${e}`;t&&(a=`https://vue3-course-api.hexschool.io/v2//api/xqrass-hexschool/products?category=${t}&page=${e}`,this.isActive=t),this.$http.get(a).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{this.isLoading=!1,this.$httpMessageState(t.response,"錯誤訊息")}))},getProduct(t){this.$router.push(`/product/${t}`)},addToCart(t,e=1){this.isLoading=!0;const a="https://vue3-course-api.hexschool.io/v2//api/xqrass-hexschool/cart",i={product_id:t,qty:e};this.$http.post(a,{data:i}).then((t=>{S.Z.emit("get-cart"),this.isLoading=!1,this.$swal({title:"成功加入購物車",icon:"success",confirmButtonColor:"#dc3545"})})).catch((t=>{this.isLoading=!1,this.$httpMessageState(t.response,"錯誤訊息")}))},toggleFavorite(t){S.Z.emit("get-favorite"),console.log(t);const e=this.favorite.findIndex((e=>e===t));-1===e?this.favorite.push(t):this.favorite.splice(e,1),console.log(this.favorite)}},watch:{favorite:{handler(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted(){this.getProducts()}},M=a(3744);const j=(0,M.Z)(Z,[["render",N]]);var I=j}}]);
//# sourceMappingURL=120.07fe21bd.js.map