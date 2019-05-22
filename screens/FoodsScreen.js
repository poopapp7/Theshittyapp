import React from 'react';
import { AppRegistry, FlatList, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { ExpoLinksView } from '@expo/samples';



export default class FoodsScreen extends React.Component {
  static navigationOptions = {
    title: 'Foods',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }


  componentDidMount() {
    return fetch('http://foothillertech.com/student/globalit/2017/poopappweb/treatments.json')
    .then((response) => response.json())
    .then((responseJson) => {
      //return responseJson.foods;
      this.setState({
        isLoading: false,
        dataSource: responseJson.treatments,
      }, function(){

      });


    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

   return (
     <View>
     <FlatList
     data={this.state.dataSource}
     renderItem={({item}) => <Text>{item.title}, {item.description}</Text>}
     keyExtractor={({id}, index) => id}
     
     />
     </View>
   )


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
