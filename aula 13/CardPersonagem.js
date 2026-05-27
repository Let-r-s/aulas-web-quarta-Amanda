class CardPersonagem extends HTMLElements{
    constructor(){
        super()
    }

connectedCallback(){
    const container = document.createElement("div")
    container.setAttribute("class", "card-container")





    this.appendChild(container)

}
}

customElements.define("card-personagem", CardPersonagem)