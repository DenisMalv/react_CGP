import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const Page404 = lazy(() => import('pages/Page404.js'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
  // }
};

export default App;
