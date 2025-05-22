import { ButtonKind, ButtonSize } from 'boilerplate-react-native/src/types/button';
import { useTheme } from 'native-base';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const useButtonStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    activityIndicator: {
      marginHorizontal: theme.space['1'],
    },
    button: {
      alignItems: 'center',
      borderRadius: theme.radii.md,
      borderWidth: 1,
      flexDirection: 'row',
      gap: theme.space['2'],
      justifyContent: 'center',
      minHeight: 40,
      width: '100%',
    },
    compact: {
      padding: theme.space['2'],
    },
    danger: {
      backgroundColor: theme.colors.danger['900'],
      borderColor: theme.colors.danger['600'],
    },
    default: {
      padding: theme.space['3'],
    },
    enhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 24,
    },
    horizontalStack: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: theme.space['2'],
    },
    large: {
      padding: theme.space['4'],
    },
    mini: {
      padding: theme.space['1'],
    },
    primary: {
      backgroundColor: theme.colors.primary as unknown as string,
      borderColor: theme.colors.primary as unknown as string,
    },
    secondary: {
      backgroundColor: theme.colors.secondary as unknown as string,
      borderColor: theme.colors.secondary as unknown as string,
    },
    tertiary: {
      backgroundColor: theme.colors.tertiary as unknown as string,
      borderColor: theme.colors.tertiary as unknown as string,
    },
  });
};

export const useKindStyles = () => {
  const appTheme = useTheme();
  return {
    [ButtonKind.PRIMARY]: StyleSheet.create({
      base: {
        backgroundColor: appTheme.colors.primary as unknown as string,
        borderRadius: appTheme.radii.md,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: appTheme.colors.lightText },
    }),
    [ButtonKind.SECONDARY]: StyleSheet.create({
      base: {
        backgroundColor: appTheme.colors.secondary as unknown as string,
        borderRadius: appTheme.radii.md,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: appTheme.colors.lightText },
    }),
    [ButtonKind.TERTIARY]: StyleSheet.create({
      base: {
        backgroundColor: appTheme.colors.tertiary as unknown as string,
        borderRadius: appTheme.radii.md,
        borderWidth: 1,
        borderColor: appTheme.colors.primary as unknown as string,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: appTheme.colors.primary as unknown as string },
    }),
    [ButtonKind.DANGER]: StyleSheet.create({
      base: { backgroundColor: appTheme.colors.danger['900'], borderRadius: 8 },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: appTheme.colors.lightText },
    }),
  } as Record<
    ButtonKind,
    { base: ViewStyle; disabled: ViewStyle; enabled: ViewStyle; text: TextStyle }
  >;
};

export const useSizeStyles = () => {
  const appTheme = useTheme();
  return {
    [ButtonSize.COMPACT]: StyleSheet.create({
      container: { padding: appTheme.space[1] },
      text: { fontSize: appTheme.fontSizes.sm },
    }),
    [ButtonSize.DEFAULT]: StyleSheet.create({
      container: { padding: appTheme.space[2] },
      text: { fontSize: appTheme.fontSizes.md },
    }),
    [ButtonSize.LARGE]: StyleSheet.create({
      container: { padding: appTheme.space[3] },
      text: { fontSize: appTheme.fontSizes.lg },
    }),
    [ButtonSize.MINI]: StyleSheet.create({
      container: { padding: appTheme.space['0.5'] },
      text: { fontSize: appTheme.fontSizes.xs },
    }),
  } as Record<ButtonSize, { container: ViewStyle; text: TextStyle }>;
};
