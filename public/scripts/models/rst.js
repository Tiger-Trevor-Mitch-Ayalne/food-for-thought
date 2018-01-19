Neighborhood.all = [];
Popularity.all = [];
NearbyRes.all = [];

let restaurants  ;
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
    Object.keys(data).forEach(key => this[key] = data[key]);   
}


    NearbyRes.prototype.toHtml = function() {
        let template = Handlebars.compile($('#restaurant-template').text());
        return template(this);
    }
  
