import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../../theme";

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.headerColor,
        flex:1
    },
    list:{
        backgroundColor:Colors.gray,
        margin:moderateScale(10),
        padding:moderateScale(8),
        borderRadius:moderateScale(5)
    },
    providerNameText:{
        fontWeight:'500',
        fontSize:moderateScale(15)
    }
})

export default styles
