class EventsHandler {
    constructor(sellRepository, sellRenderer) {
        this.sellRepository = sellRepository;
        this.sellRenderer = sellRenderer
    }

    onLoadHomepage() {
        this.sellRepository.homepageLoad()
    }

    registerAddSell() {
        $('#post-sell').on('click', async () => {
            let $amount = $('#amount-sell').val();
            let $battery = $("#battery").html()

            if ($amount === "") {
                console.log('Write text!')
            }
            else if ($amount > $battery) {
                alert("You're battery is too low!!")
            }
            else {
                await this.sellRepository.addSell($amount)
                let user = await this.sellRepository.getUser()
                localStorage.setItem("user", JSON.stringify(user))
                let $total = parseInt($battery) - parseInt($amount) 
                $("#battery").html($total)
            }
        })
    }

    registerShowBuy() {
        $("#buy").on('click', () => {
            this.sellRepository.getSales().then(() => {
                this.sellRenderer.renderBuy(this.sellRepository.sales);
            });
        })
    }

    deleteSale() {
        $("#buy-options").on("click",".buy", (event) => {
            let $battery = $("#battery").html()
            let $amount = $(event.currentTarget).closest(".sale").find(".amount").html()
            if (parseInt($battery) + parseInt($amount) > 100) {
                alert("This will result in you having more than 100%.");
            } else {
                let username = $(event.currentTarget).closest('.sale').find(".username").html()
                let saleIndex = $(event.currentTarget).closest('.sale').index()

                this.sellRepository.deleteSale(saleIndex,username).then(()=>{
                    this.sellRenderer.renderBuy(this.sellRepository.sales)});

                let $total = parseInt($battery) + parseInt($amount)
                $("#battery").html($total)
            }
        })
    }


    logout() {
        $("#logout").on("click", () => {
            localStorage.removeItem("user")
            $(location).attr('href', 'http://localhost:9999')
        })
    }
}

export default EventsHandler