var app = app || {};
(module => {

    const ContactUsView = {};

    const markup = `
        <h1>
            Contact Us View
        </h1>
        <div style="margin-left:10%;">
            We want to hear from you. Send us a note.
        </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#contact-us-slot').empty()
        $('#contact-us-slot').append(template())
    }
    ContactUsView.init = () => {
        $('#contact-us-view').off()
        renderThings()
        $('#contact-us-view').show()
    }
    module.ContactUsView = ContactUsView
})(app)