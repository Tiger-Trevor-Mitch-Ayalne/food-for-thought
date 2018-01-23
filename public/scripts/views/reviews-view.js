var app = app || {};
(module => {

    const ReviewsView = {};

    const markup = `
        <div class="rst-top-level">
        <p>comments_count = {{comments_count}}</p>
        <p>id = {{id}}</p>
        <p>likes = {{likes}}</p>
        <p>rating = {{rating}}</p>
        <p>rating_color = {{rating_color}}</p>
        <p>rating_text = {{rating_text}}</p>
        <p>review_text = {{review_text}}</p>
        <p>review_time_friendly = {{review_time_friendly}}</p>
        <p>timestamp = {{timestamp}}</p>
        <p>foodie_color = {{foodie_color}}</p>
        <p>foodie_level = {{foodie_level}}</p>
        <p>foodie_level_num = {{foodie_level_num}}</p>
        <p>name = {{name}}</p>
        <p>profile_deeplink = {{profile_deeplink}}</p>
        <p>profile_image = {{profile_image}}</p>
        <p>profile_url = {{profile_url}}</p>
        </div>

        <hr>
    `
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