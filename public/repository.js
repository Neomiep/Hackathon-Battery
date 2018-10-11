class UsersRepository {

    constructor() {
        this.user = [],
        this.sales = [],
        this.history = []
    }

    async login(username) {
        try {
            let data = await $.get("/users/" + username)
            return data
        }
        catch (err) {
            throw err
        }
    }

    async getUser() {
        let username = this.user[0].userName
        let data = await $.get("/users/" + username)
        this.user = data
        return data
    }

    async getSales() {
        try {
            let sales = await $.get("/users/sell")
            this.sales = sales
        }
        catch (err) {
            throw err
        }
    }

    async deleteSale(saleIndex, username) {
        try {
            let saleId = this.sales[saleIndex]._id
            await $.ajax({
                url: "/users/sell/" + saleId + "/" + username,
                method: 'DELETE'
            })
            let sales = await $.get("/users/sell")
            this.sales = sales
        }
        catch (err) {
            throw err
        }
    };


    async addUser(username, firstname, lastname) {
        const newUser = { username: username, firstname: firstname, lastname: lastname };
        try {
            let user = await $.post('/users/' + firstname + "/" + lastname + "/" + username, newUser)
            return user
        } catch (error) {
            throw error;
        }
    }

    homepageLoad() {
        let user = JSON.parse(localStorage.getItem("user") || "[]")
        this.user = user
    }

    async addSell(amount) {
        try {
            let id = this.user[0]._id
            let username = this.user[0].userName
            await $.post('/users/' + id + '/sell/' + amount, { amount: amount })
        }
        catch (err) {
            throw err
        }
    }

    async addHistory(amount, userSellingUsername) {
        try {
            let userBuyingId = this.user[0]._id
            await $.post('/users/' + userBuyingId + '/' + userSellingUsername + '/history/' + amount, { amount: amount })
        }
        catch (err) {
            throw err
        }
    }

    async getHistory() {
        try {
            let userId = this.user[0]._id
            let history = await $.get("/users/history/"+userId)
            this.history = history


            for(let i=0;i<this.history[0].history.length;i++){
                if(this.user[0]._id == this.history[0].history[i].userBuying[0] && this.user[0]._id == this.history[0].history[i].userSelling[0]){
                    this.history[0].history[i].bought = true
                    this.history[0].history[i].sold = true
                }
                else if(this.user[0]._id == this.history[0].history[i].userSelling[0] && !(this.user[0]._id == this.history[0].history[i].userBuying[0])){
                    this.history[0].history[i].sold = true
                    this.history[0].history[i].bought = false
                }
                else if(this.user[0]._id == this.history[0].history[i].userBuying[0] && !(this.user[0]._id == this.history[0].history[i].userSelling[0])){
                    this.history[0].history[i].bought = true
                    this.history[0].history[i].sold = false
                }
                else if(!(this.user[0]._id == this.history[0].history[i].userBuying[0]) && !(this.user[0]._id == this.history[0].history[i].userSelling[0])){
                    this.history[0].history[i].bought = false
                    this.history[0].history[i].sold = false
                }
                else{alert("error")}
            }
        }
        catch (err) {
            throw err
        }
    }
}
export default UsersRepository