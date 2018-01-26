var app = app || {};
(module => {

    const AboutUsView = {};

    const markup = `
        <h1>
            About Us
        </h1>
        <div class="profile" style="margin-left:10%;">

        <img id ="profile-img" src = "../img/Trevor.jpg"/>
        <p id="bioParagraph">Trevor is a veteran of the United States Army. Originally from Iowa, he is now settled in Washington for the foreseeable future. He hopes to combine Code Fellows with his background in business management to jump-start a career in the tech industry. During his free time he enjoys hiking, golfing, and traveling.</p>
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