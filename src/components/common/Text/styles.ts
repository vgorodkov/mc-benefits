import { TextStyle } from 'react-native';

enum FontVariant {
  header_1 = 'header_1',
  header_2 = 'header_2',
  subtitle = 'subtitle',
  body = 'body',
  body_sb = 'body-sb',
  outline = 'outline',
  outline_sb = 'outline-sb',
  description = 'description',
  description_sb = 'description_sb',
}

export const fontStyles: Record<FontVariant, TextStyle | TextStyle[]> = {
  [FontVariant.header_1]: {
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 28,
    lineHeight: 28,
  },
  [FontVariant.header_2]: {
    fontSize: 20,
    fontFamily: 'SF-UI-Display-Bold',
    lineHeight: 24,
  },
  [FontVariant.subtitle]: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'SF-UI-Display-Bold',
  },
  [FontVariant.body]: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'SF-UI-Display-Regular',
  },
  [FontVariant.body_sb]: {
    fontFamily: 'SF-UI-Display-Semibold',
  },
  [FontVariant.outline]: {
    fontSize: 14,
    fontFamily: 'SF-UI-Display-Regular',
    lineHeight: 20,
  },
  [FontVariant.outline_sb]: {
    fontFamily: 'SF-UI-Display-Semibold',
  },
  [FontVariant.description]: {
    fontSize: 12,
    fontFamily: 'SF-UI-Display-Regular',
    lineHeight: 16,
  },
  [FontVariant.description_sb]: {
    fontFamily: 'SF-UI-Display-Semibold',
  },
};
