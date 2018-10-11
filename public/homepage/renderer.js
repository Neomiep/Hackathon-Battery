class Renderer{
    constructor(){
        this.$sales = $("#buy-options")
        this.$salesTemplate = $("#sales-template").html()
        this.$history,
        this.$historyTemplate;
    }

    renderBuy(sales){
        this.$sales.empty();
        let template = Handlebars.compile(this.$salesTemplate);
        let newHTML = template({sale:sales})
        this.$sales.append(newHTML)
    }
    
    renderHistory(history){
        this.$history.empty();
        let template = Handlebars.compile(this.$historyTemplate);
        let newHTML = template({history:history})
        this.$history.append(newHTML)
    }
}

export default Renderer