import React, { Suspense } from 'react';

import { Loader } from './components';
import './App.css';

const Layout = React.lazy(() => import('./components/Layout/Layout'));
const App = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Layout/>
        </Suspense>
    );
};

export default App;