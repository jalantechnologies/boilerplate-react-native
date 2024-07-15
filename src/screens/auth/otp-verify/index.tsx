import { Alert } from 'react-native';
import React from 'react';
import AuthLayout from '../auth-layout';
import OTPForm from './otp-form';
import useTimer from '../../../utils/use-timer.hook';
import { AsyncError } from '../../../types';
import { Toast } from 'native-base';
import { useAccountContext } from '../../../contexts';
import { MainScreenProps } from '../../../../@types/navigation';

const OTPVerify: React.FC<MainScreenProps<'OTPVerify'>> = ({ route }) => {
  const { countryCode, phoneNumber } = route.params;
  const sendOTPDelayInMilliseconds = 60_000;
  const { getAccountDetails } = useAccountContext();

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
    getAccountDetails();
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
