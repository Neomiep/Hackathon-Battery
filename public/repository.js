class UsersRepository {
    constructor() {
        this.users = [];
    }

    async getUsers() {
        try {
            let data = await $.get('/users')
            this.users = data;
            return data
        }
        catch (error) {
            throw error;
        }
    }

    async addUser(username,firstname,lastname) {
        const newUser = {username:username,firstname:firstname,lastname:lastname};
        try {
            let user = await $.post('/users', newUser)
            this.users.push(user);
        } catch (error) {
            throw error;
        }
    }

    addSell(amount){
        return $.sell('/sell', {amount: amount}).then((data)=>{
            this.sell.push(data)
        })
    }
}
    export default UsersRepository