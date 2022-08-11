const { HomePage, TvPage, LoginPage } = require('~/pages');

// import HomePage from ''
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/tvPage', component: TvPage },
    { path: '/login', component: LoginPage },
];
export { publicRoutes };
