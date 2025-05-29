import soiGearAPI from "@/lib/soiGearApi";
import { createContext, useContext, useEffect, useState } from "react";

export interface IAuthResponseData {
  success: boolean;
  status: number;
  data: {
    accessToken: string;
    refreshToken: string;
    expiredAt: Date;
  };
}

export interface IRefreshTokenResponse {
  success: boolean;
  status: number;
  data: {
    accessToken: string;
    refreshToken: string;
    expiredAt: Date;
  };
}

interface UserPayload {
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  role: string;
}

interface AuthContextType {
  user: UserPayload | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Khởi tạo context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// Lấy thông tin người dùng
const fetchUserInfo = async (): Promise<UserPayload> => {
  const response = await soiGearAPI.get("/auth/me");
  const data = response.data.data;

  return {
    userId: data.userId,
    fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    avatarUrl: data.avatarUrl,
    role: data.role,
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hàm đăng nhập
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await soiGearAPI.post<IAuthResponseData>(
        "/auth/admin/login",
        { email, password },
      );

      const { accessToken, refreshToken } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const userInfo = await fetchUserInfo();
      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Login error:", err);
      setError("Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Kiểm tra token khi load app
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUserInfo()
        .then((userInfo) => {
          setUser(userInfo);
          setIsAuthenticated(true);
        })
        .catch(() => {
          logout();
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được dùng bên trong AuthProvider");
  }
  return context;
};
