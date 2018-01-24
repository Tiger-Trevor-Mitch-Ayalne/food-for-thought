page('/*', (ctx, next) => {
    $('.page').hide()
    $('.menu').show()
    app.MainMenuView.init();
    next()
})

page('/', ()=>{
    app.ListView.init()
    app.TopHeaderView.init()
    app.SideNavView.init()
    
})

page('/detail-view/:id', (ctx) =>{
        app.NearbyRes.fetchOne(ctx.params.id);
        app.DetailView.init(ctx.params.id);
        app.TopHeaderView.init()
        app.SideNavView.init()
        googleMap()

})
page('/login-view', app.LoginView.init)
page('/register-view', app.RegisterView.init)
page('/user-view', app.UserView.init)

page('/about-us-view', app.AboutUsView.init)
page('/contact-us-view', app.ContactUsView.init)
page('/admin-view', app.AdminView.init)


page.start()