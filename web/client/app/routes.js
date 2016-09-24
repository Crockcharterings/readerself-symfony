var routes = [];
routes['#login'] = {view: 'view-login', query: false, title: 'login'};
routes['#logout'] = {view: 'view-logout', query: '/logout'};
routes['#profile'] = {view: 'view-profile', query: '/profile', title: 'profile'};
routes['#profile/update'] = {view: 'view-profile-update', query: '/profile', title: 'profile'};
routes['#profile/connections'] = {view: 'view-profile-connections', query: '/profile/connections', title: 'profile'};
routes['#profile/notifications'] = {view: 'view-profile-notifications', query: '/profile/notifications', title: 'profile'};
routes['#401'] = {view: 'view-401', query: false, title: 'error_401'};
routes['#404'] = {view: 'view-404', query: false, title: 'error_404'};
routes['#500'] = {view: 'view-500', query: false, title: 'error_500'};
routes['#configuration'] = {view: 'view-configuration', query: false, title: 'configuration'};

routes['#search/categories'] = {view: 'view-search-categories', query: false, title: 'title.search_categories'};
routes['#search/categories/result'] = {view: 'view-search-categories', view_unit: 'view-categories-unit', query: '/categories/search', title: 'title.search_categories'};

routes['#search/items'] = {view: 'view-search-items', query: false, title: 'title.search_items'};
routes['#search/items/result'] = {view: 'view-search-items', view_unit: 'view-items-unit', query: '/items/search', title: 'title.search_items'};

routes['#search/feeds'] = {view: 'view-search-feeds', query: false, title: 'title.search_feeds'};
routes['#search/feeds/result'] = {view: 'view-search-feeds', view_unit: 'view-feeds-unit', query: '/feeds/search', title: 'title.search_feeds'};

routes['#feeds'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds', title: 'title.all_feeds'};
routes['#feeds/errors'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds?errors=1', title: 'title.feeds_witherrors'};
routes['#feeds/subscribed'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds?subscribed=1', title: 'title.subscribed_feeds'};
routes['#feeds/not_subscribed'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds?not_subscribed=1', title: 'title.unsubscribed_feeds'};
routes['#feeds/category/{id}'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds?category={id}'};
routes['#feeds/recent'] = {view: 'view-feeds', view_unit: 'view-feeds-unit', query: '/feeds?sortField=date_created&sortDirection=DESC', title: 'title.recent_feeds'};

routes['#feeds/import'] = {view: 'view-feeds-import', query: false, title: 'import_feeds'};

routes['#feed/create'] = {view: 'view-feed-create', query: false};
routes['#feed/read/{id}'] = {view: 'view-feed-read', query: '/feed/{id}'};
routes['#feed/update/{id}'] = {view: 'view-feed-update', query: '/feed/{id}'};
routes['#feed/subscribe/{id}'] = {view: false, query: '/feed/subscribe/{id}'};

routes['#categories'] = {view: 'view-categories', view_unit: 'view-categories-unit', query: '/categories', title: 'title.all_categories'};
routes['#categories/excluded'] = {view: 'view-categories', view_unit: 'view-categories-unit', query: '/categories?excluded=1', title: 'title.excluded_categories'};
routes['#categories/feed'] = {view: 'view-categories', view_unit: 'view-categories-unit', query: '/categories?feed=1', title: 'title.categories_usedbyfeeds'};

routes['#category/read/{id}'] = {view: 'view-category-read', query: '/category/{id}'};
routes['#category/exclude/{id}'] = {view: false, query: '/category/exclude/{id}'};

routes['#items'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items', title: 'title.all_items'};
routes['#items/unread'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items?unread=1', title: 'title.unread_items'};
routes['#items/starred'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items?starred=1', title: 'title.starred_items'};
routes['#items/feed/{id}'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items?feed={id}'};
routes['#items/author/{id}'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items?author={id}'};
routes['#items/category/{id}'] = {view: 'view-items', view_unit: 'view-items-unit', query: '/items?category={id}'};

routes['#items/markallasread/all'] = {view: false, query: '/items/markallasread'};
routes['#items/markallasread/unread'] = {view: false, query: '/items/markallasread?unread=1'};
routes['#items/markallasread/starred'] = {view: false, query: '/item/markallasreads?starred=1'};
routes['#items/markallasread/feed/{id}'] = {view: false, query: '/items/markallasread?feed={id}'};
routes['#items/markallasread/author/{id}'] = {view: false, query: '/items/markallasread?author={id}'};
routes['#items/markallasread/category/{id}'] = {view: false, query: '/items/markallasread?category={id}'};

routes['#item/read/{id}'] = {view: false, query: '/item/read/{id}'};
routes['#item/star/{id}'] = {view: false, query: '/item/star/{id}'};
