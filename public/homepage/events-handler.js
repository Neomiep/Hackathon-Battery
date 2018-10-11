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
            else if (parseInt($amount) > parseInt($battery)) {
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
        $("#buy").on('click', async() => {
            await this.sellRepository.getSales()
            this.sellRenderer.renderBuy(this.sellRepository.sales);
        })
    }

    deleteSaleAddHistory() {
        $("#buy-options").on("click", ".buy", async (event) => {
            let $battery = $("#battery").html()
            let $amount = $(event.currentTarget).closest(".sale").find(".amount").html()
            if (parseInt($battery) + parseInt($amount) > 100) {
                alert("This will result in you having more than 100%.");
            } else {
                let username = $(event.currentTarget).closest('.sale').find(".username").html()
                let saleIndex = $(event.currentTarget).closest('.sale').index()
                let amount = parseInt($amount)

                await this.sellRepository.addHistory(amount, username)

                await this.sellRepository.deleteSale(saleIndex, username)
                this.sellRenderer.renderBuy(this.sellRepository.sales)

                let user = await this.sellRepository.getUser()
                localStorage.setItem("user", JSON.stringify(user))

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

    registerGetHistory() {
        $("#history").on('click', async () => {
            await this.sellRepository.getHistory()
            this.sellRenderer.renderHistory(this.sellRepository.history[0].history);
        })

    }
}

export default EventsHandler