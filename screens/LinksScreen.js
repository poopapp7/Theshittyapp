import React from 'react';
import { AppRegistry, Alert, Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { ExpoLinksView } from '@expo/samples';

import FoodsScreen from '../screens/FoodsScreen';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Reminders',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={() => {
            Alert.alert('Drink Water!                           Remember to drink 64oz a day.');
          }}
          title="Reminder"
        />
        
      </ScrollView>
        
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
