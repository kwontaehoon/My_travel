import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | 'xxl' | 'xxxl';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'xxs' ? styles.xxs: undefined,
        type === 'xs' ? styles.xs : undefined,
        type === 'sm' ? styles.sm : undefined,
        type === 'lg' ? styles.lg : undefined,
        type === 'xl' ? styles.xl : undefined,
        type === 'xxl' ? styles.xxl : undefined,
        type === 'xxxl' ? styles.xxxl : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  xxs: {
    fontSize: 10
  },
  xs: {
    fontSize: 12
  },
  sm: {
    fontSize: 14
  },
  lg: {
    fontSize: 18
  },
  xl: {
    fontSize: 20
  },
  xxl: {
    fontSize: 24
  },
  xxxl: {
    fontSize: 30
  }
});
