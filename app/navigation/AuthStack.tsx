import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../constants";
import { PasswordReset, Signin, VerifyOtp } from "../modules";
import { useAppSelector } from "../redux";

const StackAuth = createNativeStackNavigator()

const AuthStack = () =>{
    const {data} = useAppSelector(state=> state.signin)
    return(
        <StackAuth.Navigator screenOptions={{headerShown: false}}>
            <StackAuth.Screen name={Routes.Signin} component={Signin}/>
            <StackAuth.Screen name={Routes.VerifyOtp} component={VerifyOtp}/>
            <StackAuth.Screen name={Routes.PasswordReset} component={PasswordReset}/>
        </StackAuth.Navigator>
    )
}

export default AuthStack
