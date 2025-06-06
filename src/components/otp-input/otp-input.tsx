import { Box, HStack } from 'native-base';
import React, { useRef } from 'react';
import { TextInput } from 'react-native';

import { KeyboardKeys } from '../../constants';
import { Input } from '../inputs';

interface OTPInputProps {
  length: number;
  otp: string[];
  setOtp: (otp: string[]) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, otp, setOtp }) => {
  const inputsRef = useRef<Array<TextInput>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === KeyboardKeys.BACKSPACE && index > 0 && otp[index] === '') {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <HStack space={2} width="100%">
      {Array(length)
        .fill('')
        .map((_, index) => (
          <Box flex={1} key={index}>
            <Input
              handleInputRef={el => (inputsRef.current[index] = el)}
              value={otp[index]}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          </Box>
        ))}
    </HStack>
  );
};

export default OTPInput;
