import { TouchableOpacity, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTouchViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  activeOpacity?: number;
  onPress?: () => void;
};

export function ThemedTouchView({ activeOpacity, onPress, style, lightColor, darkColor, ...otherProps }: ThemedTouchViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <TouchableOpacity 
    activeOpacity={activeOpacity} 
    onPress={onPress}
    style={[{ backgroundColor }, style]} 
    {...otherProps}
   />;
}
