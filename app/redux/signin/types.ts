interface UserDataType {
  [key:string]:string
}

export interface InitialStateType {
  isSuccess: boolean;
  data: {
    error?: boolean;
    message?: string;
    token?: string;
    user?: UserDataType
  };
  isloading: boolean;
}
