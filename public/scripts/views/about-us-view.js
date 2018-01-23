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
        $('#about-us-slot').empty()
        $('#about-us-slot').append(template())
    }
    AboutUsView.init = () => {
        $('#about-us-view').off()
        renderThings()
        $('#about-us-view').show()
    }
    module.AboutUsView = AboutUsView
})(app)