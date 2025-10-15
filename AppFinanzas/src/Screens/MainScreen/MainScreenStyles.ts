import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
});