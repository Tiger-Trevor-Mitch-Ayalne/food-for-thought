var app = app || {};
(module => {

    const AboutUsView = {};

    const markup = `
        <div style="margin:10%;">
        <img class="featured-image" src={{img_src}}> <strong>{{name}}</strong>
        <br> 
        {{{write_up}}}
        </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        console.log('render things')
        $('#about-us-slot').empty()
        app.Admin.aboutUs.forEach(res => {
            console.log('inside aboutus loop')
            $('#about-us-slot').append((template(res)))
        })
        
        $('#about-us-view').show()
    }
    AboutUsView.init = () => {
        $('#about-us-view').off()
        app.Admin.fetchAboutUs(()=>{
            renderThings();
        },()=>{
            $('#about-us-view').show()
        })
    }
    module.AboutUsView = AboutUsView
})(app)