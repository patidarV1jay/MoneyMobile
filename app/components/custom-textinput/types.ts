import { ComponentType } from 'react';
import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
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

export interface AgentOnBoardProps {
  placeholder: string;
  name: string;
  style: StyleProp<TextStyle>;
  styleView: StyleProp<TextStyle>;
  styleErrorView: StyleProp<Text>;
  styleErrorText: StyleProp<TextStyle>;
  formik: FormikProps;
  secureTextEntry: boolean;
  keyboardType?: KeyboardTypeOptions;
}
