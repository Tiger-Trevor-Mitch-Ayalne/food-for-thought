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

    Object.keys(data).forEach(key => this[key] = data[key]);   
}

//Res Detail
function getID(id){
    for(index in NearbyRes.all){
       if(id == NearbyRes.all[index].restaurant.id){
           console.log(NearbyRes.all[index].restaurant.name)
           console.log(NearbyRes.all[index].restaurant.cuisines)
       }
    }
    }

