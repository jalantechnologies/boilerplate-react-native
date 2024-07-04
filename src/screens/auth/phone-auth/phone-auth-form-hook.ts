import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

import { AsyncError } from '../../../types';
import constant from '../../../constants/auth';
import { useNavigation } from '@react-navigation/native';
import { sendOTP } from '../../../contexts/auth-slice';
import { useAppDispatch, useAppSelector } from '../../../contexts';

interface LoginFormProps {
  onError: (err: AsyncError) => void;
  onSendOTPSuccess: () => void;
}

const useLoginForm = ({ onSendOTPSuccess, onError }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const isSendOTPLoading = useAppSelector(state => state.auth.isSendOTPLoading);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      countryCode: '+1',
      country: 'US',
      phoneNumber: '',
    },

    validationSchema: Yup.object({
      phoneNumber: Yup.string().required(constant.PHONE_VALIDATION_ERROR),
    }),

    onSubmit: values => {
      const parsedPhoneNumber = PhoneNumberUtil.getInstance().parse(
        values.phoneNumber,
        values.country,
      );
      const isValidPhoneNumber =
        PhoneNumberUtil.getInstance().isValidNumber(parsedPhoneNumber);

      if (!isValidPhoneNumber) {
        onError({ message: constant.PHONE_VALIDATION_ERROR } as AsyncError);
        return;
      }

      const formattedPhoneNumber = parsedPhoneNumber
        ?.getNationalNumber()
        ?.toString();

      dispatch(
        sendOTP({
          countryCode: values.countryCode,
          phoneNumber: formattedPhoneNumber as string,
        }),
      )
        .unwrap()
        .then(() => {
          onSendOTPSuccess();
          navigation.navigate('OTPVerify', {
            countryCode: formik.values.countryCode,
            phoneNumber: formik.values.phoneNumber,
          });
        })
        .catch((err: AsyncError) => {
          onError(err as AsyncError);
        });
    },
  });

  return {
    formik,
    isSendOTPLoading,
  };
};

export default useLoginForm;
