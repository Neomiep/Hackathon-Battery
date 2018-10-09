class EventsHandler {
    constructor(sellRepository,sellRenderer){
        this.sellRepository = sellRepository;
        this.sellRenderer = sellRenderer
    }
    registerAddSell() {
        $('#post-sell').on('click', ()=>{
            let $amount = $('#amount-sell').val();
            if($amount === "") {
                console.log ('Write text!')
            }
            else {
                this.sellRepository.addSell($amount)
            }
            $amount.val("")
        })
    }
}