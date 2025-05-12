// hooks/useAuthUser.ts
import { useEffect, useState } from 'react';

interface User {
  username: string;
  name: string;
  email: string;
  isLogin: boolean;
}

export const useAuthUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const storedUsers = JSON.parse(localStorage.getItem("user") || "[]");
      const loggedInUser = Array.isArray(storedUsers)
        ? storedUsers.find(u => u.isLogin)
        : storedUsers.isLogin ? storedUsers : null;
      setUser(loggedInUser);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth); // Sync antar tab
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return user;
};