var app = app || {};
(module => {

    const ListView = {};

    const markup = `
    <div class="rst-top-level">
    <div id="main-info">
        <div class="img-info">
            <div class="rst-img">
            <img class ="featured-image" src={{"featured_image"}}>   
            </div>                 
        </div>
    
        <div class="rst-info"> 
            <p class="rst-name">
            <a href="/detail-view/{{id}}">{{name}}</a></p> 
            <p class="locality">{{locality_verbose}}</p>
            <p class="address">Address: {{address}}</p>
        </div>          
        
        <div class="detail">          
            <p class="rating" style="background-color:#{{rating_color}}">{{aggregate_rating}}</p>
        </div>
    </div>

    <div class="more-info"> 
        <b>Cuisines:</b> {{cuisines}}
        <br>
        <b>Cost For 2:</b> \${{average_cost_for_two}}</p> 
    </div>   

    <div class="menu">
        <a href="{{menu_url}}" target="_blank">Menu</a>
    </div>

</div>
    




<!-- <p> rating_color= {{rating_color}}</p>
<p> rating_text {{rating_text}}</p> -->


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

//Back to Top Button
window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    if (window.scrollY != 0) {
      setTimeout(function() {
        window.scrollTo(0, window.scrollY - 900);
        topFunction();
      }, 40);
    }
  }

  //Search box
  $(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
});
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }