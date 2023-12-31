import { ComponentType } from 'react';

export interface IconComponentProps {
  size: number;
  color: string;
}

export interface Props {
  Icon?: ComponentType<IconComponentProps>;
  name: string;
  Filter?: ComponentType<IconComponentProps>;
  Flag: boolean,
  IsDate: boolean
}
