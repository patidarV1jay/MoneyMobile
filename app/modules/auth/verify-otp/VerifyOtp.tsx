import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import useVerifyOtp from './useVerifyOtp';
import styles from './VerifyOtpStyles';
import { Colors, moderateScale } from '../../../theme';
export type OtpState = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};
const VerifyOtp = () => {
  const {
    // params,
    inputs,
    newOtp,
    handleChange,
    inputRef,
    nextInput,
    handleSubmit,
    handlePress,
    // status,
    resendOtp,
    // isloading,
  } = useVerifyOtp();
  // const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.otpSentText}>
          {/* {t('screens.intro.text.otpSent')} */}
          {/* OTP send on WhatsApp: {params} */}
          OTP send on Mail
        </Text>
        <View style={styles.otpContainer}>
          <View style={styles.inputWrapper}>
            {inputs.map((value, index) => {
              return (
                <TextInput
                  ref={nextInput === index ? inputRef : null}
                  value={newOtp[index as keyof OtpState]}
                  key={index.toString()}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.textInputComponent}
                  onChangeText={text => handleChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    handlePress(nativeEvent, index);
                  }}
                />
              );
            })}
          </View>
          {true && (
            <Text style={styles.incorrectOtp}>
              Incorrect OTP
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {false ? (
            <View style={styles.submitText}>
              <ActivityIndicator color={Colors.light} size={moderateScale(20)}/>
            </View>
          ) : (
            <Text style={styles.submitText}>
              {' '}
               Verify OTP
            </Text>
          )}
        </TouchableOpacity>
        {/* <View style={styles.resendOtpContainer}>
          {count === 0 ? (
            <Text style={styles.timeExpired}>
              {' '}
              {t('screens.intro.text.timeExpired')}
            </Text>
          ) : (
            <Text style={styles.resendOtp}>
              {t('screens.intro.text.resendOtp')} {t('screens.intro.text.in')}{' '}
              {count}
              {t('screens.intro.text.seconds')}
            </Text>
          )}
          {count === 0 && (
            <TouchableOpacity style={styles.button} onPress={resendOtp}>
              <Text style={styles.submitText}>
                {t('screens.intro.text.resendOtp')}
              </Text>
            </TouchableOpacity>
          )}
        </View> */}
      </View>
    </View>
  );
};

export default VerifyOtp;
