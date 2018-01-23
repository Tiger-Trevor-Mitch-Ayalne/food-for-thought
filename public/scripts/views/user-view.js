var app = app || {};
(module => {

    const UserView = {};

    const markup = `
        <h1>
            User View
        </h1>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#user-slot').empty()
        $('#user-slot').append(template())
    }
    UserView.init = () => {
        $('#user-view').off()
        renderThings()
        $('#user-view').show()
    }
    module.UserView = UserView
})(app)