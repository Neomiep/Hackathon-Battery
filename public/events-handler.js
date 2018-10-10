class EventsHandler {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;

    }

     registerAdduser() {
        $('#Register').on('click', async () => {
            let $input = $("#register").val();
            let $inputFname = $("#first-name").val();
            let $inputLname = $("#last-name").val();
            if ($input === "" || $inputFname === "" || $inputLname === "") {
                alert("Please enter text!");
            } else {
             let user = await this.usersRepository.addUser($input, $inputFname, $inputLname)
             localStorage.setItem("user", JSON.stringify(user))
             location.href = "/homepage";
            }
            $("#register").val("")
            $("#first-name").val("")
            $("#last-name").val("")

        });
    }

    registerLogin(){
        $("#Login").on("click",async()=>{
            let username = $("#login").val()
            let user = await this.usersRepository.login(username)
            localStorage.setItem("user", JSON.stringify(user))
            location.href = "/homepage";
            $("#login").val("")
        })
    }

}

export default EventsHandler