import { ComponentType } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { FormikProps } from '../../types';

export interface IconComponentProps {
  size: number;
  color: string;
}

export interface Props {
  placeholder: string;
  name: string;
  style: StyleProp<TextStyle>;
  styleView: StyleProp<TextStyle>;
  styleErrorView: StyleProp<Text>;
  styleErrorText: StyleProp<TextStyle>;
  Icon: ComponentType<IconComponentProps>;
  formik: FormikProps;
  secureTextEntry: boolean;
}
