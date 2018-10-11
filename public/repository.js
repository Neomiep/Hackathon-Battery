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
            let history = await $.get("/users/history")
            this.history = history
        }
        catch (err) {
            throw err
        }
    }
}
export default UsersRepository