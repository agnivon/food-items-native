import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

import FilterBar from './components/FilterBar';
import FoodList from './components/FoodList';

import store from './store';
import { Provider } from 'react-redux';

// console.log(s);

const Separator = () => {
  return (<View style={styles.separator} />);
}

export default function App() {
  return (
    <Provider store={store} >
      <View style={[s.container, s.flexColumn, s.alignItemsStretch, s.bgLight, s.flex1]}>
        <Text style={[s.h1, s.textCenter, s.mt5, s.mb2]}>Food Items</Text>
        {/* <Separator /> */}
        <FilterBar />
        <FoodList />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
});
