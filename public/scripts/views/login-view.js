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
            <button type="submit" id="login">Log-in</button>
        </form>
        <div id="user-faves-view" class="page">
            <div id="user-faves-slot"></div>
        </div>
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
        app.Admin.fetchUsers()
        // handle UserForm
        $('#login').on('click', function (e) {
            console.log("$('#password_logForm').val()", $('#password_logForm').val(), "$('#email_logForm').val()",
                $('#email_logForm').val())
            e.preventDefault()

        });
        app.NearbyRes.getFaves()

    }
    module.LoginView = LoginView
})(app)