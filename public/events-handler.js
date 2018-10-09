class EventsHandler {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;

    }

     registerAdduser() {
        $('#Register').on('click', async () => {
            let $input = $("#register");
            let $inputFname = $("#first-name")
            let $inputLname = $("#last-name")
            if ($input.val() === "" || $inputFname.val() === "" || $inputLname.val() === "") {
                alert("Please enter text!");
            } else {
             await this.usersRepository.addUser($input.val(), $inputFname.val(), $inputLname.val())
            }
        });
    }

}



export default EventsHandler