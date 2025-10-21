import { Pressable, Text, View } from "react-native"
import useStoreModal from "../../store/useStoreModal"
import { useStoreMovents } from "../../store/useStoreMovents"
import { IMovents } from "../../types/IMovents"
import { style } from "./SummaryOfMonthsStyles"
import { calculate } from "../../utils/calculate"
import { DownloadMovents } from "../DownloadMovent/DownloadMovents"

export const SummaryOfMonths = () => {

    const {movents, setActiveMovent, deleteMovents} = useStoreMovents()
    const {openView} = useStoreModal()

    const months = [
        ['Enero', '01'],
        ['Febrero', '02'],
        ['Marzo', '03'],
        ['Abril', '04'],
        ['Mayo', '05'],
        ['Junio', '06'],
        ['Julio', '07'],
        ['Agosto', '08'],
        ['Septiembre', '09'],
        ['Octubre', '10'],
        ['Noviembre', '11'],
        ['Diciembre', '12']
    ]

    const handleEdit = (movent : IMovents) => {
        setActiveMovent(movent)
        openView()
    }

    const handleDelete = (id : string) => {
        deleteMovents(id)
        alert('Se eliminó el movimiento')
    }

    return (
        <View style={style.container}>
            {months.map((month) => {
                // Filtro por mes
                const monthMovent = movents.filter((m) => m.date.split('-')[1] === month[1])
                const {income, expense, balance} = calculate(monthMovent)
                return (
                    <View key={month[1]} style={style.containerMonth}> 
                        <Text style={style.title}>{month[0]}</Text>
                        {monthMovent.length < 1 
                            ?
                            <View style={style.month}>
                                <Text style={{'color' : 'white', 'textAlign' : 'center'}}>No hay movimientos</Text>
                            </View>
                            : 
                            <View style={style.moventOfMonth}>
                                <View style={style.containerBalance}>
                                    <Text style={{'color' : 'white', 'textAlign': 'center'}}>Ingresos: $ {income}</Text>
                                    <Text style={{'color' : 'white', 'textAlign': 'center'}}>Gastos: $ {expense}</Text>
                                    <Text style={{'color' : 'white', 'textAlign': 'center'}}>Balance: $ {balance}</Text>
                                    <DownloadMovents resume={monthMovent} balance={balance} income={income} expense={expense}/>
                                </View>

                                {
                                    monthMovent.map((m) => (
                                        <View key={m.id} style={style.movent}>
                                            <Text style={style.date}>{m.date}</Text>
                                            <Text style={style.row}>{m.description}</Text>
                                            <Text style={m.type === 'gasto' ? style.expense : style.income}>{m.type}</Text>
                                            <Text style={style.row}>$ {m.amount}</Text>

                                            <View style={style.containerButton}>
                                                <Pressable style={style.edit} onPress={() => handleEdit(m)}>
                                                    <Text style={{'color' : 'white'}}>Editar</Text>
                                                </Pressable>

                                                <Pressable style={style.delete} onPress={() => handleDelete(m.id)}>
                                                    <Text style={{'color' : 'white'}}>Eliminar</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        }
                    </View>
                    
                )
            })}
        </View>
    )
}