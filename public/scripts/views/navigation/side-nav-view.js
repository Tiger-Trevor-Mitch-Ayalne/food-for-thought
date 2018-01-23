var app = app || {};
(module => {

    const SideNavView = {};

    function renderThings() {        
        $('#sideNavUL').empty()
        app.Topcuisines.all[0].top_cuisines.forEach(res => {
            $('#sideNavUL').append(`<li>${res}</li>`)
        })
    }
    SideNavView.init = () => {
        $('#side-nav-view').off()
        $('#side-nav-slot').empty()

        renderThings()
        $('#side-nav-view').show()
    }
    module.SideNavView = SideNavView
})(app)