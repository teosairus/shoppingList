import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (props) => {
  const {addItem} = props;
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add item..."
        onChangeText={(val) => setText(val)}
      />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    padding: 9,
    margin: 5,
    backgroundColor: '#c2bad8',
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
