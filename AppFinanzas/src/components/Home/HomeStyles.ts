
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#242424ff',
    },
    title : {
        color : 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10
        
    },
    containerBalance: {
        backgroundColor: 'gray',
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    negative: {
        backgroundColor: 'red',
    },
    positive: {
        backgroundColor: 'green',
    },
    row : {
        backgroundColor: 'gray'
    }
    
})

export default styles