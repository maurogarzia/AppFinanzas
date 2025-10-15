import {View, Text, Pressable} from 'react-native'
import styles from './HomeStyles'
import { useEffect, useState } from 'react'
import { useStoreMovents } from '../../store/useStoreMovents'
import { TableOfMovents } from '../TableOfMovents/TableOfMovents'
import { Pie } from '../PieChart/Pie'
import useStoreModal from '../../store/useStoreModal'


export const Home = () => {

    const {movents} = useStoreMovents()
    const {setViewScreen} = useStoreModal()

    const [income, setIncome] = useState<number>(0)
    const [expense, setExpense] = useState<number>(0)
    const [balance, setBalance] = useState<number>(0)

    useEffect(() => {
        const calculate = () => {
            let positive = 0 // Suma de saldos a favor
            let negative = 0 // Suma de saldos a restar
            movents.forEach((m) => (
                m.type === 'gasto' ? negative += m.amount : positive += m.amount
            ))
            setIncome(positive)
            setExpense(negative)
            setBalance(positive - negative)
        }
        calculate()
    },[movents])

    return (
        <View style ={styles.container}>
            <Text style = {styles.title}>Balance General</Text>

            <View style = {styles.containerBalance}>
                <Text style={{'color' : 'white'}}>Ingresos: ${income}</Text>
                <Text style={{'color' : 'white'}}>Gastos: ${expense}</Text>
                <Text style={{'color' : 'white'}}>Balance <Text style={balance === 0 ? styles.row : (balance < 0 ? styles.negative : styles.positive)}>${balance}</Text></Text>
            </View>

            <View style={styles.summaryButton}>
                <Pressable 
                    onPress={() => setViewScreen(true)}
                    style={({pressed}) => pressed ? styles.buttonResumenPressed : styles.buttonResumen}
                >
                    {({pressed}) => 
                        (<Text style={pressed ? {'color' : 'black', 'textAlign' : 'center'} : {'color' : 'white', 'textAlign' : 'center'}}>
                            Resumenes
                        </Text>)
                    }
                    
                </Pressable>
            </View>

            {movents.length > 0 && <Pie/> }

            <TableOfMovents/>

        </View>
    )
}

