var app = app || {};
(module => {

    const RegisterView = {};

    const markup = `
        <h1>
            Register View
        </h1>
        <form id="userRegForm">
            <input type="text" id="name_regForm" placeholder="Your Name" required>
            <input type="email" id="email_regForm" placeholder="Your Email" required>
            <input type="password" id="password_regForm" placeholder="Create Password" required>
            <button type="submit" id="register">Register</button>
        </form>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $( "#register-slot" ).each(function() {
            $(this).empty()
          });
        $('#register-slot').append(template())
    }
    RegisterView.init = () => {
        $('#register-view').off()
        renderThings()
        $('#register-view').show()
        $('#userRegForm').off()
        // handle UserForm
        $('#register').on('click',function(e){
            e.preventDefault()
            
            if(
                $('#name_regForm').val() !="" ||
                $('#email_regForm').val() !="" ||
                $('#password_regForm').val() !=""
            ){
               var NewUserAccount = {
                    name:  $('#name_regForm').val(),
                    email: $('#email_regForm').val(),
                    password: $('#password_regForm').val()
                }
                var userHolder = [];
                var userStings = localStorage.getItem('userAccount');
                var allUserAccounts = JSON.parse(userStings);
                userHolder.push(allUserAccounts);
                userHolder.push(NewUserAccount);
                localStorage.setItem('userAccount', JSON.stringify(userHolder));
                $('#userRegForm').fadeOut( "slow");
            }
            else{
                if($('#name_regForm').val() == ""){$('#name_regForm').css("background-color", "yellow");}
                if($('#email_regForm').val() == ""){$('#email_regForm').css("background-color", "yellow");}
                if($('#password_regForm').val() == ""){$('#password_regForm').css("background-color", "yellow");}
            }
        });

        
    }
    module.RegisterView = RegisterView
})(app)