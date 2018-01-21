var app = app || {};

(module => {

Neighborhood.all = [];
Popularity.all = [];
NearbyRes.all = [];


// location
function Neighborhood(data){
    this.title = data.title;
    this.city_id = data.city_id;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.city_name = data.city_name;
}
// popularity
function Popularity(data){
    Object.keys(data).forEach(key => this[key] = data[key]);
   
}
// nearbyRes
function NearbyRes(data){
    this.average_cost_for_two = data.average_cost_for_two;
    this.cuisines = data.cuisines;
    this.featured_image = data.featured_image;
    this.has_online_delivery = data.has_online_delivery;
    this.has_table_booking = data.has_table_booking;
    this.id = data.id;
    this.address = data.location.address;
    this.city = data.location.city;
    this.locality = data.location.locality;
    this.locality_verbose = data.location.locality_verbose;
    this.longitude = data.location.longitude;
    this.latitude = data.location.latitude;
    this.zipcode = data.location.zipcode;
    this.menu_url = data.menu_url;
    this.name = data.name;
    this.photos_url = data.photos_url;
    this.price_range = data.price_range;
    this.aggregate_rating = data.user_rating.aggregate_rating;
    this.rating_color = data.user_rating.rating_color;
    this.rating_text = data.user_rating.rating_text;
    this.votes = data.user_rating.votes;   
}

NearbyRes.fetchAll = (callback) =>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('position',position)
            var userCoord = {
                long: position.coords.longitude,
                lat: position.coords.latitude
            }
            $.get('http://localhost:3000/api/v2.1/geocode',userCoord)
            .then(function(data){
                var res = JSON.parse(data)
                for(index in res.nearby_restaurants){
                    NearbyRes.all.push(new NearbyRes(res.nearby_restaurants[index].restaurant))
                }
            }).then(()=>{
                callback()
            })
            .catch(function(err){ console.error(err)});
        })
    }
    // if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log('position',position)
    //         var userCoord = {
    //             long: position.coords.longitude,
    //             lat: position.coords.latitude
    //         }
    //         $.get('http://localhost:3000/api/v2.1/geocode',userCoord)
    //         .then(function(data){
    //             var res = JSON.parse(data)
    //             for(index in res.nearby_restaurants){
    //                 NearbyRes.all.push(new NearbyRes(res.nearby_restaurants[index].restaurant))
    //             }
    //         }).then(()=>{
    //             callback()
    //         })
    //         .catch(function(err){ console.error(err)});
    //     }, function(err){
    //         console.log(err);
    //         var localZip = localStorage.getItem('zipData');
    //         var parsedZip = JSON.parse(localZip)
    //         console.log('http://localhost:3000/api/v2.1/geocode',parsedZip)
    //         $.get('http://localhost:3000/api/v2.1/geocode',parsedZip)
    //         .then(function(data){
    //             var res = JSON.parse(data)
    //             for(index in res.nearby_restaurants){
    //                 NearbyRes.all.push(new NearbyRes(res.nearby_restaurants[index].restaurant))
    //             }
    //             renderThings()
    //         })
    //         .catch(function(err){ console.error(err)});
    //     })
    // }

NearbyRes.fetchOne = (id) =>{
    for(index in NearbyRes.all){
        if(id == NearbyRes.all[index].id){
            console.log('NearbyRes.all[index]',NearbyRes.all[index])
            NearbyRes.res_id = NearbyRes.all[index];
        }
    }
}

  module.NearbyRes = NearbyRes;

})(app)