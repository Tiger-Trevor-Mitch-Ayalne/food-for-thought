var app = app || {};
(module => {

    const UserView = {};

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
                <a data-fave_id="{{fave_id}}" id="delete-fave" class="delete-fave" style="position: absolute; right: 20px;">delete</a>
            </div>

        </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#user-slot').empty()
        app.NearbyRes.user_favorites.forEach(res => {
            $('#user-slot').append((template(res)))
        })
    }
    UserView.init = () => {
        $('#user-view').off()
        renderThings()
        $('#user-view').show()
        app.NearbyRes.getFaves(()=>{
            renderThings();
        },()=>{
            $(".delete-fave").on('click',function(){
                console.log('delete-fave clicked')
                var fave_id = $(this).attr('data-fave_id');
                app.NearbyRes.deletefaveIt(fave_id);
                app.NearbyRes.getFaves(()=>{
                    renderThings();
                });
            })
        });
        
    }
    module.UserView = UserView
})(app)