import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      try {
        const session = localStorage.getItem('ticketapp_session');
        if (session) {
          const userData = JSON.parse(session);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        localStorage.removeItem('ticketapp_session');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call with mock validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for demo admin user
      if (email === 'admin@gettix.com' && password === 'password123') {
        const userData = {
          id: '1',
          email: email,
          name: 'Admin User',
          role: 'admin'
        };
        
        localStorage.setItem('ticketapp_session', JSON.stringify(userData));
        setUser(userData);
        toast.success('Login successful!');
        return { success: true };
      }
      
      // Check for registered users
      const registeredUsers = JSON.parse(localStorage.getItem('ticketapp_users') || '[]');
      const user = registeredUsers.find(u => u.email === email);
      
      if (user) {
        // For registered users, just verify email (no password checking in frontend)
        localStorage.setItem('ticketapp_session', JSON.stringify(user));
        setUser(user);
        toast.success('Login successful!');
        return { success: true };
      }
      
      toast.error('Invalid email or password');
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
      return { success: false, error: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists (mock)
      const existingUsers = JSON.parse(localStorage.getItem('ticketapp_users') || '[]');
      const userExists = existingUsers.find(u => u.email === email);
      
      if (userExists) {
        toast.error('User already exists with this email');
        return { success: false, error: 'User already exists' };
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user'
      };
      
      // Save to users list
      existingUsers.push(newUser);
      localStorage.setItem('ticketapp_users', JSON.stringify(existingUsers));
      
      // Auto-login after signup
      localStorage.setItem('ticketapp_session', JSON.stringify(newUser));
      setUser(newUser);
      
      toast.success('Account created successfully!');
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
      return { success: false, error: 'Signup failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
