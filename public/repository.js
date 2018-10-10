class UsersRepository {

    async login(username){
        try {
        let data = await $.get("/users/"+username)
        return data
        }
        catch(err){
            throw err
        }
    }

    async addUser(username,firstname,lastname) {
        const newUser = {username:username,firstname:firstname,lastname:lastname};
        try {
            let user = await $.post('/users/'+firstname + "/" + lastname + "/" + username, newUser)
            return user
        } catch (error) {
            throw error;
        }
    }

    addSell(amount){
        return $.sell('/users/sell', {amount: amount}).then((data)=>{
            this.sell.push(data)
        })
    }
}
    export default UsersRepository