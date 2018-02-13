import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderRadius: 3,
    marginVertical: metrics.margin,
  },
  title: {
    fontSize: fonts.big,
    color: colors.titulo,
    fontWeight: 'bold',
  },
  author: {
    fontSize: fonts.regular,
    color: colors.author,
  },
  description: {
    fontSize: fonts.small,
    color: colors.text,
  },
  line: {
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default styles;
