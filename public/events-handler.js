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
             await this.usersRepository.addUser($input, $inputFname, $inputLname)
            }
            $("#register").val("")
            $("#first-name").val("")
            $("#last-name").val("")
        });
    }

}

export default EventsHandler