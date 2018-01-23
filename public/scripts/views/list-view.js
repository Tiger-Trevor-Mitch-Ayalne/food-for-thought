var app = app || {};
(module => {

    const ListView = {};

    const markup = `
    <div class="rst-top-level">
        <div class="img-info">
            <div class="rst-img">
                <img class="featured-image" src={{featured_image}}>
            </div>
        </div>

        <div class="rst-info">
        <a href="/detail-view/{{id}}">{{name}}</a>
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

    <hr>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#list-slot').empty()
        app.NearbyRes.all.forEach(res => {
            $('#list-slot').append((template(res)))
        })
    }
    ListView.init = () => {
        $('#list-slot').empty()
        $('#list-view').off()

        app.NearbyRes.fetchAll(()=>{
            renderThings()
        });
        $('#list-view').show()
    }
    module.ListView = ListView
})(app)