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
        for(var i=0;i<app.NearbyRes.user_favorites.length;i++){
            var resHolder = app.NearbyRes.user_favorites[i];
            for(var i=0; i<resHolder.length; i++){
                $('#user-slot').append((template(resHolder[i])))
            }
        }
    }
    UserView.init = () => {
        $('#user-view').off()
        renderThings()
        $('#user-view').show()
        app.NearbyRes.getFaves(()=>{
            renderThings()
        },()=>{
              $( ".rst-top-level" ).on('click',function ( event ) {
                  var fav_id = $( this ).children( ".menu" ).find('.delete-fave').attr('data-fave_id');
                  console.log('fav_id',fav_id);
                  var fav_name = $( this ).children('.rst-info').find( ".rst-name" ).text();
                  console.log('fav_name',fav_name);

                  confirm('Delete '+$( this ).children('.rst-info').find( ".rst-name" ).text())
                  app.NearbyRes.deletefaveIt($( this ).children( ".menu" ).find('.delete-fave').attr('data-fave_id'));
                  $(this).remove()
                  app.NearbyRes.deleteFaveArray($( this ).children( ".menu" ).find('.delete-fave').attr('data-fave_id'))
                  event.preventDefault();
                });
            })
    }
    module.UserView = UserView
})(app)