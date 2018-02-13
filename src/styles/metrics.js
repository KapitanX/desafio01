import { Platform } from 'react-native';

export default {
  padding: 20,
  margin: 20,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
};
