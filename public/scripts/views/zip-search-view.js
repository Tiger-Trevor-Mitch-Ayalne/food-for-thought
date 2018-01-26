var app = app || {};
(module => {

    const ZipSearchView = {};

    const markup = `
    <h3>Enter a zip code to find restaurants</h3>
        <form>
            <input type="text" id="zip">
            <button type="submit" id="searchByZIP">Search</button>
        </form>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#zip-search-slot').empty()
        //list-slot
        
        $('#list-slot').empty()
        $('#zip-search-slot').append(template())
    }
    ZipSearchView.init = () => {

        $('#zip-search-view').off()
        renderThings()
        $('#zip-search-view').show()
        $('#searchByZIP').on('click',function(e){
            e.preventDefault()
            var zip = $('#zip').val();
            console.log($('#zip').val())
            $.get('http://api.zippopotam.us/us/'+zip)
            .then((data)=>{
                zipData = {
                    latitude:data.places[0].latitude,
                    longitude:data.places[0].longitude,
                    city_name:data.places[0]['place name']
                }
                console.log('zipData',zipData)
                localStorage.setItem('zipData',JSON.stringify(zipData));
                $('#zip-search-view').hide()
            })
            .then(function(){ 
                $('#list-slot').empty()
                app.ListView.init() })
            .catch(function(err){ console.error(err)});
        });
    }
    module.ZipSearchView = ZipSearchView
})(app)