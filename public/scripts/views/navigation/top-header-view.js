var app = app || {};
(module => {

    const TopHeaderView = {};

    const markup = `
        <div>
            <h4> Find Restaurants around {{title}}  </h4>
            <p>city_id = {{city_id}} // 
                city_name = {{city_name}} //
                latitude = {{latitude}} // 
                longitude = {{longitude}} //
                title = {{title}}
            </p>
        </div>
        <hr>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        console.log('app.UserLocation.all[0]',app.UserLocation.all[0])
        $('#top-header-slot').append((template(app.UserLocation.all[0])))
    }
    TopHeaderView.init = () => {
        console.log('inside top-header')
        $('#top-header-view').off()
        $('#top-header-slot').empty()

        renderThings()
        $('#top-header-view').show()
    }
    module.TopHeaderView = TopHeaderView
})(app)