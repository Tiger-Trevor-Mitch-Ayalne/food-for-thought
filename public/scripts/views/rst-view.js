for(index in NearbyRes.all){console.log(NearbyRes.all[index].restaurant.R)}

for(index in Neighborhood.all){console.log(Neighborhood.all[index])}

for(index in Popularity.all){console.log(Popularity.all[index])}

for(index in NearbyRes.all){console.log(NearbyRes.all[index].restaurant.location)}

$('#restaurants-container').html(theCompiledHtml);
$('#restaurants-container').append(Neighborhood.all.city_name)
$('#restaurants-container').append(Neighborhood.all.name)
$('#restaurants-container').append(NearbyRes.all.restaurant.name)


$(function () {
    // Grab the template script
   let theTemplateScript = $("#restaurant-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
   

  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });