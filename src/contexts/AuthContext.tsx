import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface Admin {
  id: string;
  username: string;
  name: string;
}

interface AuthContextType {
  admin: Admin | null;
  token: string | null;
  login: (token: string, admin: Admin) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem("adminToken");
      const storedAdmin = localStorage.getItem("adminUser");

      if (storedToken && storedAdmin) {
        try {
          // Verify token with backend
          const response = await fetch(`${API_URL}/api/auth/verify`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setToken(storedToken);
            setAdmin(data.admin);
          } else {
            // Token is invalid, clear storage
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminUser");
          }
        } catch (error) {
          console.error("Auth verification failed:", error);
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = (newToken: string, newAdmin: Admin) => {
    setToken(newToken);
    setAdmin(newAdmin);
    localStorage.setItem("adminToken", newToken);
    localStorage.setItem("adminUser", JSON.stringify(newAdmin));
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
  };

  const value = {
    admin,
    token,
    login,
    logout,
    isAuthenticated: !!admin && !!token,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
