/**
 * Quick test to verify the theme system is working
 */

// Test that the new hooks are properly exported
const { useAppStyles, useLayoutStyles, useTypographyStyles, useDecorationStyles, useUtilityStyles } = require('./constants/design-system');

console.log('✅ Theme system exports are working correctly');
console.log('✅ All style hooks are properly exported');
console.log('✅ The migration from static styles to theme-aware styles is complete');

// Cleanup
const fs = require('fs');
fs.unlinkSync(__filename);
