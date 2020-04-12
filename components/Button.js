import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Button(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={props.enabled ? 0.8 : 1}
        onPress={() => props.onClick()}>
        <View style={props.enabled ? styles.buttonView : styles.disabled}>
          <Text style={styles.button}>{'Continue'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A67F2',
    borderRadius: 5,
    height: 50,
  },
  disabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#909cf5',
    borderRadius: 5,
    height: 50,
  },
  button: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  buttonContainer: {
    width: '60%',
  },
});
