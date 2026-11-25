const products=[
 {name:"Espresso",category:"cafe",label:"CAFÉ",detail:"Um espresso curto, direto ao ponto.",size:"40 ML",price:"R$ 10,90"},
 {name:"Doppio",category:"cafe",label:"CAFÉ",detail:"Dose dupla para estender a conversa.",size:"80 ML",price:"R$ 17,90"},
 {name:"Cappuccino",category:"cafe",label:"CAFÉ",detail:"Espresso, leite vaporizado e espuma cremosa.",size:"120 ML",price:"R$ 18,40"},
 {name:"Cappuccino Vienense",category:"cafe",label:"CAFÉ DA CASA",detail:"Xarope de cookie, chantilly e raspas de chocolate.",size:"120 ML",price:"R$ 19,90"},
 {name:"Latte Macchiato",category:"cafe",label:"CAFÉ",detail:"Leite, espresso e camadas bem marcadas.",size:"190 ML",price:"R$ 19,40"},
 {name:"Flat White",category:"cafe",label:"CAFÉ",detail:"Espresso com leite vaporizado e textura aveludada.",size:"275 ML",price:"R$ 20,40"},
 {name:"Mocha",category:"cafe",label:"CAFÉ",detail:"Uma combinação de espresso, leite e chocolate.",size:"190 ML",price:"R$ 23,40"},
 {name:"Hario V60",category:"filtrado",label:"FILTRADO",detail:"Extração manual, servida sem pressa.",size:"190 ML",price:"R$ 18,90"},
 {name:"Prensa Francesa",category:"filtrado",label:"FILTRADO",detail:"Corpo e aroma em uma extração clássica.",size:"190 ML",price:"R$ 18,90"},
 {name:"Koar",category:"filtrado",label:"FILTRADO",detail:"Método brasileiro para explorar o café.",size:"190 ML",price:"R$ 18,90"},
 {name:"Aeropress",category:"filtrado",label:"FILTRADO",detail:"Uma extração versátil, com perfil intenso.",size:"190 ML",price:"R$ 18,90"},
 {name:"Iced Flat White",category:"gelado",label:"GELADO",detail:"A versão refrescante do clássico da casa.",size:"420 ML",price:"R$ 25,40"},
 {name:"Citrus Coffee",category:"gelado",label:"GELADO",detail:"Café e notas cítricas para uma pausa fresca.",size:"420 ML",price:"R$ 24,40"},
 {name:"81 Salt Caramel",category:"gelado",label:"GELADO",detail:"Café gelado com caramelo salgado.",size:"420 ML",price:"R$ 26,90"},
 {name:"Espresso Tônica 81",category:"gelado",label:"GELADO",detail:"Espresso com tônica, servido bem gelado.",size:"250 ML",price:"R$ 22,40"},
 {name:"Croque 81",category:"brunch",label:"BRUNCH ALL DAY",detail:"Um dos pratos publicados na seção de brunch.",size:"CONSULTE O MENU",price:"R$ 37,90"},
 {name:"Croque Benedito",category:"brunch",label:"BRUNCH ALL DAY",detail:"Brunch servido a qualquer hora, conforme o menu.",size:"CONSULTE O MENU",price:"R$ 42,90"},
 {name:"Omelete Caprese",category:"brunch",label:"BRUNCH ALL DAY",detail:"Omelete com referência caprese no nome do prato.",size:"CONSULTE O MENU",price:"R$ 40,90"}
];
const grid=document.querySelector("#menu-grid");
function render(filter="todos"){
 const filtered=filter==="todos"?products:products.filter(p=>p.category===filter);
 grid.innerHTML=filtered.map((p,i)=>`<article class="menu-card" style="animation-delay:${Math.min(i*35,240)}ms"><div class="card-top"><span class="card-category">${p.label}</span><span class="card-symbol" aria-hidden="true">✳</span></div><h3>${p.name}</h3><p>${p.detail}</p><div class="card-bottom"><span class="card-size">${p.size}</span><span class="card-price">${p.price}</span></div></article>`).join("");
}
render();
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{document.querySelector(".filter.active")?.classList.remove("active");button.classList.add("active");render(button.dataset.filter)}));
const toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>{const nav=document.querySelector(".site-header nav"),open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));nav.classList.toggle("mobile-open",!open)});
document.querySelectorAll(".site-header nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelector(".site-header nav").classList.remove("mobile-open");toggle.setAttribute("aria-expanded","false")}));
