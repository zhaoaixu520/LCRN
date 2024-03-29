import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {
  black: '#1E1F20',
  white: '#FFFFFF',
  gray: '#0682FE',
};

const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font size
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

const FONTS = {
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Black', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Black', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Black', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Black', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Black', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Black', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Black', fontSize: SIZES.body4, lineHeight: 22},
};

export default {
  COLORS,
  SIZES,
  FONTS,
};
