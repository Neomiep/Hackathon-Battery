class EventsHandler {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;

    }

    async registerEvent(){
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
    }


    async loginEvent() {
        let username = $("#login").val()
        let user = await this.usersRepository.login(username)
        if (user[0] == undefined) {
            alert("User not found.")
        }
        else {
            localStorage.setItem("user", JSON.stringify(user))
            location.href = "/homepage";
        }
        $("#login").val("")
    }

    registerLogin() {
        $("#Login").on("click", async () => {
            await this.loginEvent()
        })

        $("#login").keypress(async(event) => {
            if (event.keyCode === 13) {
                await this.loginEvent()
            }
        })
    }

    registerAdduser() {
        $('#Register').on('click', async () => {
            await this.registerEvent()
        });
        $("#register").keypress(async(event) => {
            if (event.keyCode === 13) {
                await this.loginEvent()
            }
        })
        $("#first-name").keypress(async(event) => {
            if (event.keyCode === 13) {
                await this.loginEvent()
            }
        })
        $("#last-name").keypress(async(event) => {
            if (event.keyCode === 13) {
                await this.loginEvent()
            }
        })
    }

}

export default EventsHandler