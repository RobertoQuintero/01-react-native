import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container:{
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  item:{
    fontSize:18,
    height:50,
    padding:13,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
})
export default ({item}) => (
  <View style={styles.container}>
    <Text style={styles.item}>{item.title}</Text>
  </View>
)