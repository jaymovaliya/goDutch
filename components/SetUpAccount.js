import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import useFormInput from '../Hooks/useFormInput';
import Button from './Button';

export default function SetUpAccount(props) {
  const mobileno = props.navigation.state.params.mobileno;
  const FullName = useFormInput('', 'Enter your name here', /^[\w]+[\s*\w*]*$/);
  const UPIId = useFormInput('', 'Enter UPI ID here', /^\w+@\w+$/);
  const [activeTab, setActiveTab] = useState(0);
  const tags = ['Student', 'Professional'];
  const submitDetails = () => {
    if (UPIId.isValid && FullName.isValid) {
      props.navigation.navigate('DetailsPage', {
        mobileno,
        fullname: FullName.value,
        upiId: UPIId.value,
        profession: tags[activeTab],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tagLine}>setup your GoDutch account</Text>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <View style={styles.headline}>
            <Image
              style={styles.logo}
              source={require('../assets/ic_launcher.png')}
            />
          </View>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>current profession</Text>
          </View>
          <View style={styles.labelSelector}>
            {tags.map((item, i) => {
              return (
                <TouchableOpacity onPress={() => setActiveTab(i)} key={i}>
                  <View
                    style={
                      activeTab === i
                        ? {...styles.profession, borderColor: '#5A67F2'}
                        : {...styles.profession}
                    }
                    key={i}>
                    <Text
                      style={{color: activeTab === i ? '#5A67F2' : '#444444'}}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>full name</Text>
            <Text style={styles.mandetoryText}>*</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput {...FullName} />
          </View>
          {!FullName.isValid && FullName.enableCheck && (
            <View style={styles.validationResult}>
              <Text style={styles.mandetoryText}>
                Full name cannot be empty
              </Text>
            </View>
          )}
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>UPI ID</Text>
            <Text style={styles.mandetoryText}>*</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput {...UPIId} />
          </View>
          {!UPIId.isValid && UPIId.enableCheck && (
            <View style={styles.validationResult}>
              <Text style={styles.mandetoryText}>Enter Valid UPI Id</Text>
            </View>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            enabled={UPIId.isValid && FullName.isValid}
            onClick={submitDetails}
          />
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
  tagLine: {
    marginLeft: 25,
    alignSelf: 'flex-start',
  },
  wrapper: {
    width: '90%',
    height: 600,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#ffffff',
    shadowColor: '#f1f1f1',
    elevation: 3,
    padding: 20,
  },
  logo: {
    height: 70,
    width: 70,
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  headline: {
    display: 'flex',
    justifyContent: 'center',
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '55%',
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
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
    height: '25%',
  },
  validationResult: {
    alignSelf: 'flex-start',
  },
  labelSelector: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  profession: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    marginRight: 5,
    marginTop: 5,
  },
});
