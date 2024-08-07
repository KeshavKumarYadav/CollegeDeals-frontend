import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <p>Auth Layout</p>
          <Outlet />
        </>
      )}
    </>
  );
}

export default AuthLayout;
