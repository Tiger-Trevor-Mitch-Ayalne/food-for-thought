var app = app || {};
(module => {

    const ListView = {};

    const markup = `
    <div class="rst-top-level">
    <div class="img-info">
        <div class="rst-img">
           <img class ="featured-image" src={{"featured_image"}}>   
        </div>                 
    </div>

<div class="rst-info"> 
    <p class="rst-name">
    <a href="/detail-view/{{id}}">{{name}}</a></p> 
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
    <a href="{{menu_url}}" target="_blank">Menu</a>
</div>


</div>
    




<!-- <p> rating_color= {{rating_color}}</p>
<p> rating_text {{rating_text}}</p> -->

<hr>
</div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        app.NearbyRes.all.forEach(res => {
            $('#list-slot').append((template(res)))
        })
    }
    ListView.init = () => {
        $('#list-view').off()
        $('#list-slot').empty()

        app.NearbyRes.fetchAll(()=>{
            renderThings()
        });
        $('#list-view').show()
    }
    module.ListView = ListView
})(app)