import React,{ useState, useEffect } from 'react';
import {View,StyleSheet,ActivityIndicator,FlatList} from 'react-native';


import ListItem from '../components/ListItem';


const HomeScreen = props => {

  const [isData, isDataSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => isDataSet(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

  }, []);

    return(
        <View style={styles.screen}>
         {isLoading ? <ActivityIndicator/> : (
          <View style={styles.lisContainer}> 
  
        <FlatList data={isData} keyExtractor={(item) => item.dt} renderItem={({ item }) =>
              <ListItem
              userId={item.userId}
              id={item.id}
              title={item.title}
              completed = {item.completed.toString()}
              />} />
  
    
          </View>
         )}
  
      </View>
    );
};

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    lisContainer: {
        padding: 15
      },
      centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }

});

export default HomeScreen;

