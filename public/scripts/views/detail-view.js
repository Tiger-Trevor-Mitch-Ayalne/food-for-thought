var app = app || {};
(module => {

    const DetailView = {};

    const markup = `
    <div class="rst-top-level">
    <div class="img-info">
        <div class="rst-img">
           <img class ="featured-image" src={{"featured_image"}}>   
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
    <br>
    COST FOR TWO: $ {{average_cost_for_two}}</p> 
</div>   

<div class="menu">
    <a href="{{menu_url}}">Menu</a>
</div>


</div>
    




<!-- <p> rating_color= {{rating_color}}</p>
<p> rating_text {{rating_text}}</p> -->

<hr>
</div>
    `
    const template = Handlebars.compile(markup)

    function renderThings(res_id) {
        console.log('renderThings call res_id',res_id)
        console.log('renderThings Call for app.NearbyRes.res_id',app.NearbyRes.res_id)
        $('#detail-slot').append((template(app.NearbyRes.res_id)))
    }
    DetailView.init = (id) => {
        console.log('id inside detail',id)
        $('#detail-view').off()
        $('#detail-slot').empty()

        renderThings(id)
        $('#detail-view').show()
    }
    module.DetailView = DetailView
})(app)