import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from './Button';

export default function DetailsPage(props) {
  const {mobileno, fullname, upiId, profession} = props.navigation.state.params;
  const verifyDetails = () => {
    alert(`Hello ${fullname} \nWelcome To GoDutch`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tagLine}>Your Details</Text>
      <View style={styles.wrapper}>
        <View style={styles.displayWrapper}>
          <View style={styles.label}>
            <Text style={styles.labelText}>Name</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.valueText}>{fullname}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelText}>MobileNo</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.valueText}>{`+91 ${mobileno}`}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelText}>Upi Id</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.valueText}>{upiId}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelText}>Profession</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.valueText}>{profession}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button enabled={true} onClick={verifyDetails} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  tagLine: {
    marginLeft: 25,
    alignSelf: 'flex-start',
  },
  wrapper: {
    width: '90%',
    height: 450,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#ffffff',
    borderBottomWidth: 0,
    shadowColor: '#f1f1f1',
    elevation: 3,
    padding: 20,
  },
  label: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  value: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
  },
  labelText: {
    fontSize: 15,
    color: '#444444',
  },
  valueText: {
    fontSize: 15,
    color: '#5A67F2',
  },
  buttonWrapper: {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
});
