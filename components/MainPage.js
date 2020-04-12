import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import useFormInput from '../Hooks/useFormInput';
import Button from './Button';

export default function MainPage(props) {
  const MobileNo = useFormInput('', 'Enter Mobile number here', /^\d{10}$/);
  const submitNumber = () => {
    if (MobileNo.isValid) {
      props.navigation.navigate('SetUpAccount', {
        mobileno: MobileNo.value,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <View style={styles.headline}>
            <Image
              style={styles.logo}
              source={require('../assets/ic_launcher.png')}
            />
            <Image
              style={styles.logoTitle}
              source={require('../assets/goDutch.png')}
            />
          </View>
          <View style={styles.line}>
            <Image
              style={styles.logoTitle}
              source={require('../assets/Line.png')}
            />
          </View>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Mobile number</Text>
            <Text style={styles.mandetoryText}>*</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput {...MobileNo} keyboardType={'numeric'} />
          </View>
          {!MobileNo.isValid && MobileNo.enableCheck && (
            <View style={styles.validationResult}>
              <Text style={styles.mandetoryText}>
                Mobile number should be 10 digit long
              </Text>
            </View>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <Button enabled={MobileNo.isValid} onClick={submitNumber} />
        </View>
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
  wrapper: {
    width: '90%',
    height: 450,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#ffffff',
    shadowColor: '#f1f1f1',
    elevation: 3,
    padding: 20,
  },
  logo: {
    height: 45,
    width: 45,
  },
  logoTitle: {
    marginLeft: 5,
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  headline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  labelText: {
    color: '#333333',
    fontSize: 14,
  },
  mandetoryText: {
    color: '#DC143C',
    fontSize: 12,
  },
  inputs: {
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  validationResult: {
    alignSelf: 'flex-start',
  },
});
