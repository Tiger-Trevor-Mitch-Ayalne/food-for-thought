var app = app || {};

(module => {

Admin.all = [];
UserLocation.all = [];
Topcuisines.all = [];
NearbyRes.all = [];
Reviews.all = [];

function Admin(user){
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
}
// location
function UserLocation(title, city_id, latitude, longitude, city_name){
    this.title = title;
    this.city_id = city_id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.city_name = city_name;
}
// Topcuisines
function Topcuisines(top_cuisines){
    this.top_cuisines = top_cuisines;
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
function Reviews(
                comments_count,
                id,
                likes,
                rating,
                rating_color,
                rating_text,
                review_text,
                review_time_friendly,
                timestamp,
                foodie_color,
                foodie_level,
                foodie_level_num,
                name,
                profile_deeplink,
                profile_image,
                profile_url)
                {
    this.comments_count
    this.id = id;
    this.likes = likes;
    this.rating = rating;
    this.rating_color = rating_color;
    this.rating_text = rating_text;
    this.review_text = review_text;
    this.review_time_friendly = review_time_friendly;
    this.timestamp = timestamp;
    this.foodie_color = foodie_color
    this.foodie_level = foodie_level
    this.foodie_level_num = foodie_level_num
    this.name = name
    this.profile_deeplink = profile_deeplink
    this.profile_image = profile_image
    this.profile_url = profile_url
}
NearbyRes.fetchAll = (callback) =>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('position',position)
            var userCoord = {
                long: position.coords.longitude,
                lat: position.coords.latitude
            }
            console.log('http://localhost:3000/api/v2.1/geocode',userCoord)
            $.get('http://localhost:3000/api/v2.1/geocode',userCoord)
            .then(function(data){
                var res = JSON.parse(data)
                for(index in res.nearby_restaurants){
                    NearbyRes.all.push(new NearbyRes(res.nearby_restaurants[index].restaurant))
                }
                UserLocation.all.push(new UserLocation(
                    res.location.title, 
                    res.location.city_id, 
                    res.location.latitude, 
                    res.location.longitude, 
                    res.location.city_name
                ));
                Topcuisines.all.push(new Topcuisines(
                    testData.popularity.top_cuisines
                ));
                app.TopHeaderView.init()
                app.SideNavView.init()
            }).then(()=>{
                
                callback()
            })
            .catch(function(err){ 
                /*
                in the event of error, load test data

                This is a work-around to deal 
                with Zomato IP block at 
                Ayanle's office network :)
                */
                $.get('http://localhost:3000/scripts/sampleNearByRes.json')
                .then(function(testData){
                    for(index in testData.nearby_restaurants){
                        NearbyRes.all.push(new NearbyRes(testData.nearby_restaurants[index].restaurant))
                    }
                    UserLocation.all.push(new UserLocation(
                        testData.location.title, 
                        testData.location.city_id, 
                        testData.location.latitude, 
                        testData.location.longitude, 
                        testData.location.city_name
                    ));
                    Topcuisines.all.push(new Topcuisines(
                        testData.popularity.top_cuisines
                    ));
                    app.TopHeaderView.init()
                    app.SideNavView.init()
                }).then(()=>{
                    callback()
                })
                //console.error(err)
            });
        })
    }
NearbyRes.fetchOne = (id,callback) =>{
    var res_id = {
        id:id
    };
    for(index in NearbyRes.all){
        if(id == NearbyRes.all[index].id){
            NearbyRes.res_id = NearbyRes.all[index];
        }
    }
    $.get('http://localhost:3000/api/v2.1/reviews',res_id)
        .then(function(reviews){
        var parsed_reviews = JSON.parse(reviews);
        for(i in parsed_reviews.user_reviews){console.log(parsed_reviews.user_reviews[i])}
            for(index in parsed_reviews.user_reviews){
                    Reviews.all.push(new Reviews(
                        parsed_reviews.user_reviews[index].review.comments_count,
                        parsed_reviews.user_reviews[index].review.id,
                        parsed_reviews.user_reviews[index].review.likes,
                        parsed_reviews.user_reviews[index].review.rating,
                        parsed_reviews.user_reviews[index].review.rating_color,
                        parsed_reviews.user_reviews[index].review.rating_text,
                        parsed_reviews.user_reviews[index].review.review_text,
                        parsed_reviews.user_reviews[index].review.review_time_friendly,
                        parsed_reviews.user_reviews[index].review.timestamp,
                        parsed_reviews.user_reviews[index].review.user.foodie_color,
                        parsed_reviews.user_reviews[index].review.user.foodie_level,
                        parsed_reviews.user_reviews[index].review.user.foodie_level_num,
                        parsed_reviews.user_reviews[index].review.user.name,
                        parsed_reviews.user_reviews[index].review.user.profile_deeplink,
                        parsed_reviews.user_reviews[index].review.user.profile_image,
                        parsed_reviews.user_reviews[index].review.user.profile_url,
                    ));
            }
            
            app.ReviewsView.init()
/************
 * PLEASE NOTE =====> THIS IS FOR BLOCKED URL @ AYANLE'S WORK
        console.log('ERROR with API. Work-around initiated')
        $.get('http://localhost:3000/scripts/sampleReviews.json')
        .then(function(reviewsTestData){
            console.log('RUNNING sampleReviews.json')
            
            for(index in reviewsTestData.user_reviews){
                Reviews.all.push(new Reviews(
                    reviewsTestData.user_reviews[index].review.comments_count,
                    reviewsTestData.user_reviews[index].review.id,
                    reviewsTestData.user_reviews[index].review.likes,
                    reviewsTestData.user_reviews[index].review.rating,
                    reviewsTestData.user_reviews[index].review.rating_color,
                    reviewsTestData.user_reviews[index].review.rating_text,
                    reviewsTestData.user_reviews[index].review.review_text,
                    reviewsTestData.user_reviews[index].review.review_time_friendly,
                    reviewsTestData.user_reviews[index].review.timestamp,
                    reviewsTestData.user_reviews[index].review.user.foodie_color,
                    reviewsTestData.user_reviews[index].review.user.foodie_level,
                    reviewsTestData.user_reviews[index].review.user.foodie_level_num,
                    reviewsTestData.user_reviews[index].review.user.name,
                    reviewsTestData.user_reviews[index].review.user.profile_deeplink,
                    reviewsTestData.user_reviews[index].review.user.profile_image,
                    reviewsTestData.user_reviews[index].review.user.profile_url,
                ));
        }
        
        app.ReviewsView.init()
        })
        .catch(function(err){
            console.log('FILE: ERROR with sampleReviews.json',err)
        });
********/            
        })
        .catch(function(err){
            console.error(err)
        })
}
Admin.fetchUsers = () =>{
    var existingUser = localStorage.getItem('userAccount');
    console.log('existingUser',existingUser)
    var parsedUsers = JSON.parse(existingUser);
    Admin.all.push(new Admin(parsedUsers))
}
    module.Admin = Admin;
    module.NearbyRes = NearbyRes;
    module.UserLocation = UserLocation;
    module.Topcuisines = Topcuisines;
    module.Reviews = Reviews;

})(app)