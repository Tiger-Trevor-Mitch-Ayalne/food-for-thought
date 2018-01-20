page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', app.ListView.init)

page('/detail-view/:id', (ctx) =>{
        console.log('ctx.params.id',ctx.params.id)
        app.NearbyRes.fetchOne(ctx.params.id);
        app.DetailView.init(ctx.params.id);
})


page.start()