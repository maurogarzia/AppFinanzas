import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        
        
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10
    },
    containerData: {
        padding: 10,
        flex: 1
    },
    label: {
        textAlign: 'center',
        padding: 10
    },
    input : {
        borderWidth: 0.5,        
        borderColor: 'gray',
        textAlign: 'center',
        borderRadius: 10,
        color: 'black'
    },
    containerButtons: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        padding: 10,
        backgroundColor: '#000',
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputDate:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        textAlign: 'center',
        color: 'gray'
    }
})

export default style