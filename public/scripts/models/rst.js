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

NearbyRes.prototype.toHtml = function () {
    var template = Handlebars.compile($('#restaurants-template').text());
    return template(this);
  };
