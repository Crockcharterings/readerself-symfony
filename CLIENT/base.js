var AppRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "getPost",
        "": "defaultRoute" 
        // Backbone will try to match the route above first
    }
});

// Instantiate the router
var app_router = new AppRouter();

var FeedModel = Backbone.Model.extend({
    url : function() {
      // Important! It's got to know where to send its REST calls. 
      // In this case, POST to '/donuts' and PUT to '/donuts/:id'
      return this.id ? 'test.php/' + this.id : 'test.php'; 
    },

    // Default attributes for the todo item.
    defaults: function() {
        return {
            title: "",
        };
    }
});

var FeedsCollection = Backbone.Collection.extend({
    model: FeedModel,
    url: 'feeds.php',
    parse: function(data) {
        console.log(data);
        return data.feeds;
    }
});

var feeds = new FeedsCollection();

feeds.on('add', function(feed) {
    console.log(feed.get("id") + " / " + feed.get("title") + "!");

    var view = new TodoView({model: feed});
    $("#todo-list").append(view.render().el);
});


// The DOM element for a todo item...
var TodoView = Backbone.View.extend({
    tagName: "div",
    className: "mdl-card mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--4-col",
    template: _.template($('#item-template').html()),
    // Re-render the titles of the todo item.
    render: function() {
        console.log('TodoView render');
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

app_router.on('route:getPost', function (id) {
    // Note the variable in the route definition being passed in here
    console.log( "Get post number " + id );
    feed.save({headers: {oo: 'tagada'}});
});
app_router.on('route:defaultRoute', function () {
    console.log( 'home' ); 
});

Backbone.history.start({pushState: false, root: base_dir});

feeds.fetch({data: {yo: 'test'}, headers: {yo: 'test'}});

$(document).ready(function() {
    $('a').each( function( index, link ){
      $(link).click( function( event ){
        event.preventDefault();
        app_router.navigate( $(this).attr( "href" ), {trigger: true} );
      });
    });
});
