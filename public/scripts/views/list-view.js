var app = app || {};
(module => {

    const ListView = {};

    const markup = `
    <div class="rest-detail-page">
        <p> average_cost_for_two= {{average_cost_for_two}}</p>
        <p> cuisines= {{cuisines}}</p>
        <p> featured_image= {{featured_image}}</p>
        <p> has_online_delivery= {{has_online_delivery}}</p>
        <p> has_table_booking= {{has_table_booking}}</p>
        
        <h1>
            <a href="/detail-view/{{id}}" >{{id}}</a>
        </h1>
        <p> address= {{address}}</p>
        <p> city= {{city}}</p>
        <p> locality= {{locality}}</p>
        <p> locality_verbose= {{locality_verbose}}</p>
        <p> longitude= {{longitude}}</p>
        <p> latitude= {{latitude}}</p>
        <p> zipcode= {{zipcode}}</p>
        <p> menu_url= {{menu_url}}</p>
        <p> name= {{name}}</p>
        <p> photos_url= {{photos_url}}</p>
        <p> price_range= {{price_range}}</p>
        <p> aggregate_rating= {{aggregate_rating}}</p>
        <p> rating_color= {{rating_color}}</p>
        <p> rating_text {{rating_text}}</p>
        <p> votes= {{votes}}</p>
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