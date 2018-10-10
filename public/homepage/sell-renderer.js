class Renderer{
    constructor(){
        this.$sales = $("#buy-options")
        this.$salesTemplate = $("#sales-template").html()
    }

    renderBuy(sales){
        this.$sales.empty();
        let template = Handlebars.compile(this.$salesTemplate);
        let newHTML = template({sale:sales})
        this.$sales.append(newHTML)
    }
}

export default Renderer