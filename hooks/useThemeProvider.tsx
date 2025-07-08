/**
 * Theme Provider Hook
 * 
 * Provides theme state management across the entire app
 * Handles system theme detection and user preference persistence
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ActualTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: ActualTheme;
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@portfolio_theme_preference';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme();
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>('system');
  const [isLoading, setIsLoading] = useState(true);

  // Calculate the actual theme based on preference and system setting
  const actualTheme: ActualTheme = 
    themePreference === 'system' 
      ? (systemColorScheme ?? 'light') 
      : themePreference;

  // Debug logging
  useEffect(() => {
    console.log('Theme state:', {
      themePreference,
      systemColorScheme,
      actualTheme,
      isLoading
    });
  }, [themePreference, systemColorScheme, actualTheme, isLoading]);

  // Load saved theme preference on mount
  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const saved = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        setThemePreferenceState(saved as ThemePreference);
      }
    } catch (error) {
      console.log('Error loading theme preference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setThemePreference = async (preference: ThemePreference) => {
    try {
      console.log('Setting theme preference:', preference);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, preference);
      setThemePreferenceState(preference);
      console.log('Theme preference set successfully');
    } catch (error) {
      console.log('Error saving theme preference:', error);
    }
  };

  const contextValue: ThemeContextType = {
    theme: actualTheme,
    themePreference,
    setThemePreference,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
