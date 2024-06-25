import { Alert } from 'react-native';
import React from 'react';
import AuthLayout from '../auth-layout';
import OTPForm from './otp-form';
import useTimer from '../../../utils/use-timer.hook';
import { AsyncError } from '../../../types';
import { Toast } from 'native-base';

const OTPVerify: React.FC = ({ route }) => {
  const { countryCode, phoneNumber } = route.params;
  const sendOTPDelayInMilliseconds = 60_000;

  const { startTimer, remaininingSecondsStr, isResendEnabled } = useTimer({
    delayInMilliseconds: sendOTPDelayInMilliseconds,
  });

  const onError = (error: AsyncError) => {
    Alert.alert('Error', error.message);
  };

  const onResendOTPSuccess = () => {
    startTimer();
  };

  const onVerifyOTPSuccess = () => {
    Toast.show({
      title: 'OTP verified successfully',
    });
  };

  return (
    <AuthLayout primaryTitle="OTP" secondaryTitle="Verification">
      <OTPForm
        countryCode={countryCode}
        isResendEnabled={isResendEnabled}
        onError={onError}
        onResendOTPSuccess={onResendOTPSuccess}
        onVerifyOTPSuccess={onVerifyOTPSuccess}
        phoneNumber={phoneNumber}
        remaininingSecondsStr={remaininingSecondsStr}
      />
    </AuthLayout>
  );
};

export default OTPVerify;