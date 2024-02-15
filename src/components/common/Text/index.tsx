import { Text as RNText, TextStyle } from 'react-native';
import React from 'react';
import { fontStyles } from '@components/common/Text/styles';

interface TextProps {
  children: React.ReactNode;
  variant?:
    | 'header_1'
    | 'header_2'
    | 'subtitle'
    | 'body'
    | 'body-sb'
    | 'outline'
    | 'outline-sb'
    | 'description'
    | 'description_sb';
  style?: TextStyle | TextStyle[];
}

export const Text: React.FC<TextProps> = ({ children, variant, style }) => {
  const txtStyle = [fontStyles[variant ?? 'body'], ...(Array.isArray(style) ? style : [style])];

  return <RNText style={txtStyle}>{children}</RNText>;
};
