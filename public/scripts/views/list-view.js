var app = app || {};
(module => {

    const ListView = {};

    const markup = `
    <div class="rst-top-level">
        <div class="img-info">
            <div class="rst-img">
            <a href="/detail-view/{{id}}">{{name}}</a>
                <img class="featured-image" src={{featured_image}}>
            </div>
        </div>
        <div class="detail">
        <p class="rating-expanded">Rating</p>
        <p class="rating" style="background-color:#{{rating_color}}">{{aggregate_rating}}</p>
         </div>

        <div class="rst-info">
        
            <p class="locality">{{locality_verbose}}</p>
            <p class="address">Address: {{address}}</p>
        </div>  

        <div class="more-info">
            CUISINES: {{cuisines}}
            <br> COST FOR TWO: $ {{average_cost_for_two}}</p>
        </div>

        <div class="menu">
            <a href="{{menu_url}}">Menu</a>
            <a data-res_id="{{id}}" id="fave" style="position: absolute; right: 20px;">save</a>
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
            
            $("#fave").on('click',function(){
                var faveIt = $(this).attr('data-res_id');
                app.NearbyRes.faveIt(faveIt);
                console.log($(this).attr('data-res_id'));
            })
        });
        $('#list-view').show()
    }
    module.ListView = ListView
})(app)