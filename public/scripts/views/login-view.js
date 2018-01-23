var app = app || {};
(module => {

    const LoginView = {};

    const markup = `
        <h1>
            Login View
        </h1>
        <form id="userLogForm">
            <input type="email" id="email_logForm" placeholder="Your Email" required>
            <input type="password" id="password_logForm" placeholder="Create Password" required>
            <button type="submit" id="login">Register</button>
        </form>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#login-slot').empty()
        $('#login-slot').append(template())
    }
    LoginView.init = () => {
        $('#login-view').off()
        renderThings()
        $('#login-view').show()
        $('#userLogForm').off()
        // handle UserForm
        $('#login').on('click',function(e){
            console.log("$('#password_logForm').val()",$('#password_logForm').val(),"$('#email_logForm').val()",
$('#email_logForm').val() )
            e.preventDefault()
            var existingUser = localStorage.getItem('userAccount');
            var userAccount = JSON.stringify(existingUser)
            if(
                $('#email_logForm').val() == userAccount.email 
                &&
                $('#password_logForm').val() == userAccount.password
            ){
                    $('#userLogForm').fadeOut( "slow");
            }
            else{
                if($('#email_logForm').val() != userAccount.email){$('#email_logForm').css("background-color", "yellow");}
                if($('#password_logForm').val() != userAccount.password){$('#password_logForm').css("background-color", "yellow");}
            }
        });

        
    }
    module.LoginView = LoginView
})(app)