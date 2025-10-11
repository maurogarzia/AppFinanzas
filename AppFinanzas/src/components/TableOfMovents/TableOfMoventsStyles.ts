import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    title : {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        padding: 10
    },
    movent: {
        width: '100%',
        padding:10,
        marginTop: 20,
        gap: 30
    },
    emptyList: {
        padding: 10,
        color: 'white',
        fontSize: 15,
        width: '100%',
        
    },
    date:{
        backgroundColor: 'gray',
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },
    containerTitle: {
        width: '100%',
        borderColor: 'gray',
        flexDirection: 'column',  
        alignItems: 'center',     
        gap: 10,
    },
    button : {
        width: 160,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'gray',
        borderRadius: 10
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
    containerButtons: {
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
    },
    containerSearch: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 10
    },
    input : {
        backgroundColor: 'white',
        borderWidth: 0.5,        
        borderColor: 'gray',
        borderRadius: 10,
        width: 160,
        color: 'gray',
        
    },
    buttonSearch: {
        width: 90,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        color: 'white'
    },
    pressedButton :{
        width: 160,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        
    }

})

export default styles