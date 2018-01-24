var app = app || {};
(module => {

    const ReviewsView = {};

    const markup = `
        <div class="rst-top-level">
        <a href="{{profile_url}}id="rvw-name" style="font-weight:bold">{{name}}</a>
        
        <img id="rvw-img" src="{{profile_image}}">
        <p id="rvw-rating" style="background-color:#{{rating_color}}">{{rating}}</p>
        <p id="rvw-date">Reviewed: {{review_time_friendly}}</p>
        
        <p id="rvw-text">{{review_text}}</p>
        
        </div>

        <hr>
    `
    /*
    <p>likes = {{likes}}</p>
    <a>profile_deeplink = {{profile_deeplink}}</a>
        <p>profile_url = {{}}</p>
     <p>comments_count = {{comments_count}}</p>
        <p>id = {{id}}</p>
    <p>rating_color = {{rating_color}}</p>
        <p>rating_text = {{rating_text}}</p>
    <p>foodie_color = {{foodie_color}}</p>
        <p>foodie_level = {{foodie_level}}</p>
        <p>timestamp = {{timestamp}}</p>
        <p>foodie_level_num = {{foodie_level_num}}</p>
    */

    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#reviews-slot').empty()
        app.Reviews.all.forEach(res => {
            $('#reviews-slot').append((template(res)))
        })
    }
    ReviewsView.init = () => {
        $('#reviews-view').off()

        renderThings()
        $('#reviews-view').show()
    }
    module.ReviewsView = ReviewsView
})(app)