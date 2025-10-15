import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#242424ff',
        minHeight: 700
    },
    containerButton: {
        padding: 10
    },
    buttonBack: {
        width: 100,
        backgroundColor: 'black',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        color: 'white'
    },
    buttonBackPressed: {
        width: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        color: 'black'
    },
    modalBackdrop: {
        position: 'absolute',   
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0000007c',  
        justifyContent: 'center',      
        alignItems: 'center',          
        zIndex: 999,
    },
})

export default styles