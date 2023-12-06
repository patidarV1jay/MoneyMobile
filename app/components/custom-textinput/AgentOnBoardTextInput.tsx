import { Text, TextInput, View } from 'react-native';
import { Colors, moderateScale } from '../../theme';
import { AgentOnBoardProps } from './types';

const AgentOnBoardTextInput = ({
  placeholder,
  name,
  style,
  styleView,
  formik,
  styleErrorText,
  styleErrorView,
  secureTextEntry,
  keyboardType
}: AgentOnBoardProps) => {
  const { handleBlur, handleChange, values, touched, errors } = formik;

  return (
    <>
      <View style={styleView}>
        <TextInput
          placeholder={placeholder}
          // placeholderTextColor={Colors.offShade}
          style={style}
          value={values.name}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          
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

export default AgentOnBoardTextInput;
