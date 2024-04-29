import { StyleSheet } from "react-native"
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3962FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavContainer:{
        //bottom poisition
        position: 'absolute',
        alignItems: 'center',
        bottom: 20
    },
    NavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 40
    },
    IconBehave: {
        padding: 14
    }
})