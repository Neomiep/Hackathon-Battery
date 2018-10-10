class EventsHandler {
    constructor(sellRepository,sellRenderer){
        this.sellRepository = sellRepository;
        this.sellRenderer = sellRenderer
    }

    onLoadHomepage(){
        this.sellRepository.homepageLoad()
    }

    registerAddSell() {
        $('#post-sell').on('click', async()=>{
            let $amount = $('#amount-sell').val();
            let $battery = $("#battery").val()

            if($amount === "") {
                console.log ('Write text!')
            }
            // else if($amount > $battery){
            //     alert("You're battery is too low!!")
            // }
            else {
                await this.sellRepository.addSell($amount)
                let user = await this.sellRepository.getUser()
                localStorage.setItem("user", JSON.stringify(user))
            }
        })
    }

    registerShowBuy(){
        $("#buy").on('click',()=>{
            
        })
    }

    logout(){
        $("#logout").on("click",()=>{
            localStorage.removeItem("user")
            $(location).attr('href', 'http://localhost:9999')
        })
    }
}

export default EventsHandler