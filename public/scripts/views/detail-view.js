var app = app || {};
(module => {

    const DetailView = {};

    const markup = `
        <div class="rst-top-level">
            <div class="img-info">
                <div class="rst-img">
                    <img class="featured-image" src={{featured_image}}>
                </div>
            </div>

            <div class="rst-info">
                <p class="rst-name">{{name}}</p>
                <p class="locality">{{locality_verbose}}</p>
                <p class="address">Address: {{address}}</p>
            </div>

            <div class="detail">
                <p class="rating" style="background-color:#{{rating_color}}">{{aggregate_rating}}</p>
                <p class="votes">Votes: {{votes}} </p>
            </div>

            <div class="more-info">
                CUISINES: {{cuisines}}
                <br> COST FOR TWO: $ {{average_cost_for_two}}</p>
            </div>

            <div class="menu">
                <a href="{{menu_url}}">Menu</a>
            </div>

        </div>

        <div id="googleMap" style="width:70%;height:300px;"></div>
        <hr>
    `
    const template = Handlebars.compile(markup)

    function renderThings(res_id) {
        $('#detail-slot').append((template(app.NearbyRes.res_id)))
    }
    DetailView.init = (id) => {
        console.log(app.NearbyRes.res_id.latitude,app.NearbyRes.res_id.longitude)
        $('#detail-view').off()
        $('#detail-slot').empty()
        renderThings(id)
        $('#detail-view').show()
        
    }
    module.DetailView = DetailView
})(app)