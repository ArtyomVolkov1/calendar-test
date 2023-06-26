import React from 'react'
import { Routes, Route,  Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
const AppRouter = () => {
    const auth: boolean = true;
  return (
    auth ?
    <Routes>
       {privateRoutes.map((route) => 
       <Route key={route.path}
        path={route.path}
        element={route.element}/>)}
        <Route path={'*'} element={<Navigate to="/" replace />} />
    </Routes>
    :
    <Routes>
    {publicRoutes.map((route) => 
        <Route key={route.path}
         path={route.path}
         element={route.element}/>)}
         <Route path={'/'} element={<Navigate to="/login" replace />} />
         <Route path={'*'} element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter;
