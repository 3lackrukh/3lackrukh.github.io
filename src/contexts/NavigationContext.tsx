// src/contexts/NavigationContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';

interface NavItem {
  path: string;
  label: string;
  color: string;
}

interface NavigationContextType {
  hoveredPath: string | null;
  setHoveredPath: (path: string | null) => void;
  navItems: NavItem[];
  getNavItemColor: (path: string) => string;
}

const navItems = [
  { path: '/', label: 'Home', color: '#ff69b4' },
  { path: '/portfolio', label: 'Portfolio', color: '#4169e1' },
  { path: '/resume', label: 'Resume', color: '#32cd32' },
  { path: '/contact', label: 'Contact', color: '#ffd700' }
];

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const getNavItemColor = useCallback((path: string) => {
    const item = navItems.find(item => item.path === path);
    return item?.color || '#ffffff';
  }, []);

  return (
    <NavigationContext.Provider value={{ 
      hoveredPath, 
      setHoveredPath, 
      navItems,
      getNavItemColor 
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};