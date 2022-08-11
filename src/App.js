import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/components/DefaultLayout';
import { publicRoutes } from './routes';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
