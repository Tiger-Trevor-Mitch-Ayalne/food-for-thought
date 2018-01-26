var app = app || {};
(module => {

    const AboutUsView = {};

    const markup = `
        <h1>
            About Us
        </h1>
        <div style="margin-left:10%;">
        Our aim is to help you find and connect with local eateries.
        
        </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        app.Admin.aboutUs.forEach(res => {
            console.log(res.dev_team.name)
            $('#about-us-slot').append(template(res))
        })
        $('#about-us-slot').empty()
    }
    AboutUsView.init = () => {
        app.Admin.fetchAboutUs()
        $('#about-us-view').off()
        renderThings()
        $('#about-us-view').show()
    }
    module.AboutUsView = AboutUsView
})(app)