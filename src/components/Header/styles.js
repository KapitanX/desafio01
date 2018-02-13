import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
});

export default styles;
