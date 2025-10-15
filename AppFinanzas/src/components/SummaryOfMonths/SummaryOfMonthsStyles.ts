import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    containerMonth:{
        marginTop: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gap: 10,
        borderRadius: 10
    },
    title:{
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        width: '100%',
        textAlign: 'center'
    },
    month: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
    containerBalance: {
        padding: 10,
        
    },
    moventOfMonth: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    movent: {
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 2,
        borderColor: 'white'
    },
    date:{
        backgroundColor: 'gray',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        width: '100%'
    },
    row: {
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },
    income: {
        backgroundColor: 'green',
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },
    expense: {
        backgroundColor: 'red',
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },
    containerButton: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        gap: 20
    },
    edit : {
        backgroundColor: 'gray',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 80
    },
    delete: {
        backgroundColor: 'red',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 80
    }
    
})