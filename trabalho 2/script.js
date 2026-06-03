const formulario = document.querySelector(".formulario");
const inventario = document.querySelector(".inventario");
const nomeItem = document.getElementById("nomeItem");
const descricaoItem = document.getElementById("descricaoItem");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = nomeItem.value;
    const descrição = descriçãoItem.value; 
    
    const card = document.createElement("div");
    card.classList.add("item-card");

    const titulo = document.createElement("h3");
})