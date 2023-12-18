import { Text, TextInput, View } from 'react-native';
import { Colors, moderateScale } from '../../theme';
import { Props } from './types';

const CustomTextInput = ({
  placeholder,
  name,
  style,
  styleView,
  formik,
  Icon,
  styleErrorText,
  styleErrorView,
  secureTextEntry,
  inputRef,
  onSubmitEditing,
  returnKeyType
}: Props) => {
  const { handleBlur, handleChange, values, touched, errors } = formik;

  return (
    <>
      <View style={styleView}>
        <Icon size={moderateScale(25)} color={Colors.light} />
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={Colors.offShade}
          style={style}
          value={values.name}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
      </View>
      <View style={styleErrorView}>
        {errors[name] && touched[name] && (
          <Text style={styleErrorText}>{errors[name]}</Text>
        )}
      </View>
    </>
  );
};

export default CustomTextInput;
