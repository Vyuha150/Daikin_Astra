import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

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
      const storedToken = Cookies.get("adminToken");
      const storedAdmin = Cookies.get("adminUser");

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
            setAdmin(JSON.parse(storedAdmin));
          } else {
            // Token is invalid, clear cookies
            Cookies.remove("adminToken");
            Cookies.remove("adminUser");
          }
        } catch (error) {
          console.error("Auth verification failed:", error);
          Cookies.remove("adminToken");
          Cookies.remove("adminUser");
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = (newToken: string, newAdmin: Admin) => {
    setToken(newToken);
    setAdmin(newAdmin);

    // Set cookies with secure options
    Cookies.set("adminToken", newToken, {
      expires: 7, // 7 days
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict", // CSRF protection
    });

    Cookies.set("adminUser", JSON.stringify(newAdmin), {
      expires: 7, // 7 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    Cookies.remove("adminToken");
    Cookies.remove("adminUser");
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
