import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const ListItem = props => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>userId: {props.userId}</Text>
            <Text style={styles.textStyle}>Id: {props.id}</Text>
            <Text style={styles.textStyle}>Title: {props.title}</Text>
            <Text style={styles.textStyle}>completed: {props.completed}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        borderRadius:10,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex:1,
        marginTop:25,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
        
    },
    textStyle: {
        height:25,
        width:'80%',
        fontSize: 18,
        color: 'white'
        
    }
});

export default ListItem;