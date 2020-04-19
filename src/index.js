import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import {Item,Input,Button} from './components';


export default class App extends React.Component {

  state = {
    data: [],
    isVisible: false,
    text: ''
  }
  handlePress = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }
  handleText = text => {
    this.setState({ text })
  }
  handleSave = () => {
    const { text, data } = this.state
    const datos = [{key: Math.random().toString(), title: text}].concat(data)
    this.setState({
      data: datos,
      isVisible: false,
      text: ''
    })
  }
  render() {
    const { data } = this.state
    return (
     
        <View style={[styles.container, styles.gray]}>
          <View style={styles.header}><Text style={styles.title}>Recordatorios</Text></View>
          <View style={styles.view}>
            <Button title='Agregar' onPress={this.handlePress} />
          </View>
          <FlatList data={data} renderItem={Item} />
          <Modal animated='slide' visible={this.state.isVisible}>
            <View style={[styles.container, styles.center]}>
              <Text style={styles.modalTitle}>Ingrese recordatorio</Text>
              <Input
                onChangeText={this.handleText}
                placeholder='Recordatorio'
                value={this.state.text}
              />
              <Button title='Guardar' onPress={this.handleSave} />
            </View>
          </Modal>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 28
  },
  gray: {
    backgroundColor: '#eee'
  },
  modalTitle: {
    fontSize: 28
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 15
  }
});
