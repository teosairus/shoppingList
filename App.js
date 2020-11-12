import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    <View style={styles.container}>
      <Header />
    </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
});
