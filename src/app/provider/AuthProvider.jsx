import React, { createContext, useEffect, useState, useContext } from "react";

export const AuthStateContext = createContext(null);
export const AuthActionContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = (userData, accessToken) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", accessToken);
    setUser(userData);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.href = "/login";
  };

  const isAdmin = user?.AccountRole === "ADMIN";
  const isStaff = user?.AccountRole === "STAFF";
  const isReader = user?.AccountRole === "READER";
  const isAuthenticated = !!user;

  const stateValue = {
    user,
    loading,
    isAuthenticated,
    isAdmin,
    isStaff,
    isReader,
  };

  const actionValue = {
    login,
    logout,
    setUser,
  };

  return (
    <AuthStateContext.Provider value={stateValue}>
      <AuthActionContext.Provider value={actionValue}>
        {!loading && children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

export const useAuthAction = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error("useAuthAction must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
