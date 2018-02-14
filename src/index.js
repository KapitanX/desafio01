import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import { colors } from './styles';

import Header from './components/Header';
import ProductList from './components/PostList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

const App = () => (
  <View style={styles.container}>
    <Header />
    <ScrollView>
      <ProductList />
    </ScrollView>
  </View>
);

export default App;
