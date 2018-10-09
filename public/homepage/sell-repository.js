class sellRepository {
    constructor() {
        this.sell=[]
    }
    addSell(amount){
        return $.sell('/sell', {amount: amount}).then((data)=>{
            this.sell.push(data)
        })
    }
}

export default sellRepository;