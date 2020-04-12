import {useState} from 'react';

export default function useFormInput(initialVal, placeholder, regEx = '') {
  const [value, setValue] = useState(initialVal);
  const [enableCheck, setEnableCheck] = useState(false);
  const validator = RegExp(regEx);
  let isValid = validator.test(value);
  const handleInput = text => {
    setValue(text);
  };

  const handleValidation = () => {
    setEnableCheck(true);
  };

  let borderColor = '#F1F1F1';
  let borderWidth = 1;
  if (enableCheck && isValid === false) {
    isValid = false;
    borderColor = '#DC143C';
    borderWidth = 1;
  }
  const otherProps = {
    placeholder,
    placeholderTextColor: '#676B7F',
    underlineColorAndroid: 'transparent',
    autoCapitalize: 'none',
  };
  const inputStyle = {
    borderWidth,
    borderColor,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
  };
  return {
    value,
    setValue,
    isValid,
    enableCheck,
    keyboardType: 'default',
    onChangeText: handleInput,
    onFocus: handleValidation,
    style: inputStyle,
    ...otherProps,
  };
}
