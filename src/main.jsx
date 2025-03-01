import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ AuthProvider wraps everything */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
/* 
major changes
Removed useAxiosSecure() from AuthProvider

useAxiosSecure() was being used before authentication was fully initialized, which could cause a circular dependency.
Now, it should be used only inside protected routes or components, not in AuthProvider.
Fixed logOut() to Ensure Token is Removed Properly

Previously, localStorage.removeItem("access-token") was running before signOut(auth).
Now, the token is removed only after signOut(auth) is successfully executed.
Added a .catch() Block to axiosOpenForAll.post('/jwt', userInfo)

If the API request to /jwt failed, there was no error handling, which could break the app.
Now, errors are logged to the console to prevent crashes.
Ensured AuthContext Always Provides a Default Value

The useEffect() handling onAuthStateChanged(auth, (currentUser) => { ... }) now ensures setUser(null) runs properly when the user logs out.
Prevents cases where useContext(AuthContext) might return null.
Added console.error("JWT Token fetch failed", error);

Helps debug cases where the /jwt API request fails.

*/