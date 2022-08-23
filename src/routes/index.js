const { HomePage, TvPage, LoginPage, MovieDetailPage, CategoryPage, Search } = require('~/pages');

// import HomePage from ''
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/tv', component: TvPage },
    { path: '/login', component: LoginPage },
    { path: '/movie/:title/:id', component: MovieDetailPage },
    { path: '/tv/:title/:id', component: MovieDetailPage },
    { path: '/movie/category/:type', component: CategoryPage },
    { path: '/tv/search', component: Search },
    { path: '/movie/search', component: Search },
];
export { publicRoutes };
