class UsersRepository {

    constructor() {
        this.user = []
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

    async getUser(){
        let username = this.user[0].userName
        let data = await $.get("/users/" + username)
        this.user = data
        return data
    }

    async addUser(username, firstname, lastname) {
        const newUser = { username: username, firstname: firstname, lastname: lastname };
        try {
            let user = await $.post('/users/' + firstname + "/" + lastname + "/" + username, newUser)
            return user
        } catch (error) {
            throw error;
        }
    }

    homepageLoad(){
        let user = JSON.parse(localStorage.getItem("user")||"[]")
        this.user = user
    }

    async addSell(amount) {
        try {
            let id = this.user[0]._id
            let username = this.user[0].userName
            await $.post('/users/' + id + '/sell/' + amount, { amount: amount })
            let data = await $.get("/users/"+username)
            return data
        }
        catch (err) {
            throw err
        }
    }
}
export default UsersRepository