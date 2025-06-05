// import React from 'react'

// const AuthContext = () => {
//   return (
//     <div>
//       AuthContext
//     </div>
//   )
// }

// export default AuthContext

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// This is the named export you are trying to import in App.jsx
export const useAuth = () => useContext(AuthContext);
