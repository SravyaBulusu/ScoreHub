// // styles/globalStyles.js
import { StyleSheet } from 'react-native';

// Color Palette
export const colors = {
  primary: '#FF6B35',        // Vibrant Orange
  secondary: '#004E89',      // Deep Blue
  accent: '#00A8CC',         // Light Blue
  success: '#2ECC71',        // Green
  warning: '#F39C12',        // Orange
  danger: '#E74C3C',         // Red
  
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F8F9FA',
  gray200: '#E9ECEF',
  gray300: '#DEE2E6',
  gray400: '#CED4DA',
  gray500: '#ADB5BD',
  gray600: '#6C757D',
  gray700: '#495057',
  gray800: '#343A40',
  gray900: '#212529',
  
  // Background
  background: '#F5F7FA',
  surface: '#FFFFFF',
  surfaceVariant: '#F8F9FA',
  
  // Text
  textPrimary: '#1A1A1A',
  textSecondary: '#6C757D',
  textMuted: '#ADB5BD',
  textLight: '#FFFFFF',
  
  // Sports specific
  homeTeam: '#2E8B57',      // Sea Green
  awayTeam: '#B22222',      // Fire Brick
  neutral: '#708090',       // Slate Gray
};

// Typography
export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 48,
  },
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
};

// Border Radius
export const borderRadius = {
  sm: 6,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  base: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  xl: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

// Global Styles
export const globalStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  
  // Headers
  header: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  headerGradient: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headerTitle: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: typography.sizes.base,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  
  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    margin: spacing.sm,
    ...shadows.base,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
  },
  cardContent: {
    flex: 1,
  },
  
  // Buttons
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...shadows.sm,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...shadows.sm,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    color: colors.white,
  },
  buttonTextOutline: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    color: colors.primary,
  },
  
  // Text
  textPrimary: {
    fontSize: typography.sizes.base,
    color: colors.textPrimary,
  },
  textSecondary: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
  },
  textMuted: {
    fontSize: typography.sizes.sm,
    color: colors.textMuted,
  },
  textBold: {
    fontWeight: typography.weights.bold,
  },
  textCenter: {
    textAlign: 'center',
  },
  
  // Sports specific
  scoreDisplay: {
    fontSize: typography.sizes['6xl'],
    fontWeight: typography.weights.extrabold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  teamName: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
  },
  gameStatus: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  // Status indicators
  statusLive: {
    backgroundColor: colors.danger,
    color: colors.white,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
  },
  statusScheduled: {
    backgroundColor: colors.warning,
    color: colors.white,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
  },
  statusCompleted: {
    backgroundColor: colors.success,
    color: colors.white,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
  },
  
  // Forms
  input: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.base,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    fontSize: typography.sizes.base,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  
  // Utils
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  
  // Margins and Paddings
  m0: { margin: 0 },
  m1: { margin: spacing.xs },
  m2: { margin: spacing.sm },
  m3: { margin: spacing.md },
  m4: { margin: spacing.base },
  m5: { margin: spacing.lg },
  
  p0: { padding: 0 },
  p1: { padding: spacing.xs },
  p2: { padding: spacing.sm },
  p3: { padding: spacing.md },
  p4: { padding: spacing.base },
  p5: { padding: spacing.lg },
  
  mt0: { marginTop: 0 },
  mt1: { marginTop: spacing.xs },
  mt2: { marginTop: spacing.sm },
  mt3: { marginTop: spacing.md },
  mt4: { marginTop: spacing.base },
  mt5: { marginTop: spacing.lg },
  
  mb0: { marginBottom: 0 },
  mb1: { marginBottom: spacing.xs },
  mb2: { marginBottom: spacing.sm },
  mb3: { marginBottom: spacing.md },
  mb4: { marginBottom: spacing.base },
  mb5: { marginBottom: spacing.lg },
});

// Theme configuration
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  globalStyles,
};

export default theme;




export const addPlayersStyles = StyleSheet.create({
  headerGradient: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
    ...shadows.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.textLight,
  },
  headerSubtitle: {
    fontSize: typography.sizes.base,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: colors.danger,
    borderRadius: borderRadius.full,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadgeText: {
    color: colors.white,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  teamLabel: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: colors.textPrimary,
    marginHorizontal: spacing.md,
  },
  vsLabel: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textPrimary,
  },
  editableInput: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.base,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    fontSize: typography.sizes.base,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.gray300,
    marginBottom: spacing.lg,
  },
  subheading: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  inputBox: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.base,
    borderWidth: 1,
    borderColor: colors.gray300,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  placeholderText: {
    color: colors.textMuted,
    fontSize: typography.sizes.sm,
  },
  playerList: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  playerInput: {
    flex: 1,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.base,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    fontSize: typography.sizes.base,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  editButton: {
    paddingHorizontal: spacing.sm,
    color: colors.primary,
    fontWeight: typography.weights.semibold,
    fontSize: typography.sizes.base,
  },
  deleteButton: {
    paddingHorizontal: spacing.sm,
    color: colors.danger,
    fontWeight: typography.weights.semibold,
    fontSize: typography.sizes.base,
  },
  helperText: {
    fontSize: typography.sizes.xs,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  instructionText: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  tossButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.base,
  },
  tossButtonText: {
    color: colors.white,
    fontWeight: typography.weights.bold,
    fontSize: typography.sizes.base,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  startScoringButton: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.xl,
    ...shadows.md,
  },
  startScoringButtonDisabled: {
    backgroundColor: colors.gray,
  },
  startScoringButtonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonPrimary: {
  backgroundColor: '#3366FF',
  paddingVertical: spacing.md,
  borderRadius: borderRadius.md,
  alignItems: 'center',
  justifyContent: 'center',
  ...shadows.medium,
},

buttonPrimaryText: {
  color: colors.white,
  fontWeight: 'bold',
  fontSize: 16,
},

buttonSecondary: {
  borderWidth: 1,
  borderColor: '#3366FF',
  paddingVertical: spacing.md,
  borderRadius: borderRadius.md,
  alignItems: 'center',
  justifyContent: 'center',
},

buttonSecondaryText: {
  color: '#3366FF',
  fontWeight: 'bold',
  fontSize: 16,
},

deleteIconButton: {
  padding: spacing.sm,
  alignItems: 'center',
  justifyContent: 'center',
},

});