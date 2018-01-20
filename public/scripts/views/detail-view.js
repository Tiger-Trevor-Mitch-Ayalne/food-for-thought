var app = app || {};
(module => {

    const DetailView = {};

    const markup = `
    <div class="rest-detail-page" style="background:orange;">
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