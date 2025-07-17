# Light & Dark Theme System

## Overview

I've successfully implemented a comprehensive light and dark theme system for your portfolio app. Your existing theme makes a perfect **dark theme** with its earthy, professional color palette, and I've created a complementary **light theme** that maintains the same aesthetic.

## Theme Colors

### Dark Theme (Your Current Colors)
- **Background**: `#3B451B` (Dark olive green)
- **Text**: `#d7d9d1` (Off-white)
- **Highlight**: `#9da28d` (Sage green)
- **Card Background**: `#333` (Dark gray)
- **Borders**: `rgba(215, 217, 209, 0.1)` (Subtle light borders)

### Light Theme (New)
- **Background**: `#f8f9f6` (Light warm off-white)
- **Text**: `#2c3e15` (Dark olive green)
- **Highlight**: `#5d6b4f` (Darker sage green)
- **Card Background**: `#ffffff` (Pure white)
- **Borders**: `rgba(44, 62, 21, 0.15)` (Subtle dark borders)

## Features Implemented

### 1. Theme Provider System
- **File**: `hooks/useThemeProvider.tsx`
- Manages theme state globally across the app
- Supports three modes: `light`, `dark`, `system`
- Persists user preference using AsyncStorage
- Automatically follows system theme when set to "system"

### 2. Theme Toggle Component
- **File**: `components/theme_toggle.tsx`
- Interactive button to cycle through theme modes
- Shows appropriate icons:
  - ☀️ (sunny) for light theme
  - 🌙 (moon) for dark theme
  - 📱 (phone) for system theme
- Integrated into the side menu

### 3. Theme-Aware Components
- **Updated**: `components/common/page_wrapper.tsx`
- **Updated**: `app/_layout.tsx`
- **Updated**: `components/side_menu.tsx`
- **Updated**: `app/(tabs)/index.tsx`
- **Updated**: `components/animated_timeline_item.tsx`

### 4. Migration Utilities
- **File**: `utils/theme-migration.ts`
- Helper functions to easily migrate existing components
- `useLegacyColors()` hook for quick migration

## How to Use

### For New Components
```tsx
import { useThemeColor } from '@/hooks/useThemeColor';

const MyComponent = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const highlightColor = useThemeColor({}, 'textHighlight');
  
  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>Hello World</Text>
    </View>
  );
};
```

### For Existing Components (Migration)
```tsx
import { useLegacyColors } from '@/utils/theme-migration';

const MyComponent = () => {
  const colors = useLegacyColors();
  
  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <Text style={{ color: colors.white }}>Hello World</Text>
    </View>
  );
};
```

### Available Color Keys
- `background` - Main app background
- `text` - Primary text color
- `textHighlight` - Accent/highlight color
- `cardBackground` - Card and container backgrounds
- `border` - Subtle borders
- `placeholder` - Placeholder text
- `skillBarBackground` - Skill bar backgrounds
- `skillBarFill` - Skill bar fills

## Testing the Theme System

### 1. Add Theme Demo (Temporary)
You can temporarily add the theme demo to any page:

```tsx
import ThemeDemo from '@/components/theme_demo';

// In your component's render:
<ThemeDemo />
```

### 2. Access Theme Toggle
- Open the side menu (hamburger menu)
- Look for the theme toggle button at the bottom
- Tap to cycle through: System → Light → Dark → System

### 3. Test System Theme
- Set your device to dark mode
- Set the app theme to "System"
- Toggle your device theme to see the app change automatically

## File Structure

```
hooks/
├── useThemeProvider.tsx     # Theme context and state management
├── useThemeColor.ts         # Hook to get theme colors
├── useColorScheme.ts        # System color scheme detection
└── useColorScheme.web.ts    # Web-specific color scheme detection

components/
├── theme_toggle.tsx         # Theme toggle button
├── theme_demo.tsx           # Demo component (optional)
└── side_menu.tsx            # Updated with theme toggle

constants/
├── color.ts                 # Updated color definitions
└── theme.ts                 # Updated theme system

utils/
└── theme-migration.ts       # Migration utilities
```

## Next Steps

### Immediate
1. **Test the app** - The theme system is ready to use
2. **Try the theme toggle** - In the side menu
3. **Verify themes** - Check both light and dark modes

### Migration (Optional)
You can gradually migrate other components to use the new theme system:
1. Import `useLegacyColors` from `@/utils/theme-migration`
2. Replace hard-coded `Colors.x` with `colors.x`
3. Apply colors dynamically in JSX instead of StyleSheet

### Customization
- Adjust colors in `constants/theme.ts`
- Add new color keys to the theme system
- Modify the theme toggle behavior in `components/theme_toggle.tsx`

## Benefits

1. **Accessibility** - Users can choose their preferred theme
2. **System Integration** - Automatically follows device theme
3. **Consistency** - Unified color system across the app
4. **Future-Proof** - Easy to add new themes or modify existing ones
5. **Professional** - Modern apps are expected to support dark mode

The theme system is now fully functional and ready for use!
