import React from "react";
import home from "./home";

const App = () => (
  <UserAuthContextProvider>
  <div>
  <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
  </div>
  </UserAuthContextProvider>
);

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default App;