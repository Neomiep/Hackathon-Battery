class UsersRepository {

    async login(){
        try {
        let data = await $.get("/users")
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
            // this.users.push(user);
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