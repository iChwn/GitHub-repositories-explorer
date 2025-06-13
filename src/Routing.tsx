import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routeUrl } from "constant";
import ProtectedRoute from "utility/auth/ProtectedRoute";
import AuthenticationRoute from "utility/auth/AuthenticationRoute";
import GitHubUserSearch from "page/github";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<div />}>
            <Route path="/*" element={<Navigate to={routeUrl.home} replace />} />
            <Route path={routeUrl.home} element={<div>authenticated users</div>} />
          </Route>
        </Route>
        
        <Route element={<AuthenticationRoute />} >
          <Route path="/*" element={<Navigate to={routeUrl.github} replace />} />
          <Route path={routeUrl.github} element={<GitHubUserSearch/>} />
        </Route>
      </Routes>
    </Suspense>
  )
}
 
export default Router