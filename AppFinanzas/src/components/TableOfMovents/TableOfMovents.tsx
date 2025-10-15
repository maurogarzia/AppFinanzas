import { View, Text, Pressable, TextInput } from "react-native"
import styles from './TableOfMoventsStyles'

import type { IMovents } from "../../types/IMovents"
import { useEffect, useState } from "react"
import { useStoreMovents } from "../../store/useStoreMovents"
import useStoreModal from "../../store/useStoreModal"



export const TableOfMovents = () => {

    const {
        movents, setActiveMovent, deleteMovents, setLisIncome, setListExpenses, setListRecent, setListAncient, listAncient, listExpenses, listIncome, listRecent, listMoventsOfMonths, setListMoventsOfMonths

    } = useStoreMovents()
    const {openView} = useStoreModal()

    const [viewMovents, setViewMovents] = useState<string>('allsMovents')
    const [search, setSearch] = useState<string>('')
    

    // Barra de busqueda
    const listFilter = movents.filter((m) => {
        const term = search.toLocaleLowerCase()
        return (
            m.description.toLocaleLowerCase().includes(term) || 
            m.type.toLocaleLowerCase().includes(term) || 
            m.date.toLocaleLowerCase().includes(term) || 
            String(m.amount).toLocaleLowerCase().includes(term)
        )
    })

    // Funcion para abrir modal
    const handleOpen = (movent : IMovents | null) => {
        if (movent) {
            openView()
            setActiveMovent(movent)
        } else {
            setActiveMovent(null)
            openView()
        }
    }

    const handleDelete = (id: string) => {
        deleteMovents(id)
        alert('Se eliminó el movimiento')
    }

    useEffect(() => {
        setLisIncome(),
        setListExpenses(),
        setListRecent(),
        setListAncient(),
        setListMoventsOfMonths()
    },[movents])

    return (
        <View style = {styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Movimientos</Text>
                <Pressable 
                    onPress={() => handleOpen(null)}
                    style={({pressed}) => {
                        return pressed ? styles.pressedButton : styles.button
                    }} 
                >
                    {({pressed}) => 
                        <Text style={pressed ? {'textAlign' : 'center', 'color' : 'black'}
                            : 
                            {'textAlign' : 'center', 'color' : 'white'}}
                            >Agregar Movimiento
                        </Text>
                    }
                </Pressable>

                <Pressable 
                    onPress={() => setViewMovents('allsMovents')}
                    style={viewMovents === 'allsMovents' ? styles.pressedButton : styles.button} >

                    <Text style={viewMovents === 'allsMovents' ? 
                        {'textAlign' : 'center', 'color' : 'black'} : {'textAlign' : 'center', 'color' : 'white'}}>Orden de creación</Text>
                </Pressable>

                <Pressable 
                    onPress={() => setViewMovents('incomes')}
                    style={viewMovents === 'incomes' ? styles.pressedButton : styles.button}>
                    <Text style={viewMovents === 'incomes' ? 
                        {'textAlign' : 'center', 'color' : 'black'} : {'textAlign' : 'center', 'color' : 'white'}}>Ingresos</Text>
                </Pressable>

                <Pressable 
                    onPress={() => setViewMovents('expenses')}
                    style={viewMovents === 'expenses' ? styles.pressedButton : styles.button}>
                    <Text style={viewMovents === 'expenses' ? 
                        {'textAlign' : 'center', 'color' : 'black'} : {'textAlign' : 'center', 'color' : 'white'}}>Gastos</Text>
                </Pressable>

                <Pressable 
                    onPress={() => setViewMovents('ancient')}
                    style={viewMovents === 'ancient' ? styles.pressedButton : styles.button}>
                    <Text style={viewMovents === 'ancient' ? 
                        {'textAlign' : 'center', 'color' : 'black'} : {'textAlign' : 'center', 'color' : 'white'}}>Mas antiguo</Text>
                </Pressable>

                <Pressable 
                    onPress={() => setViewMovents('recent')}
                    style={viewMovents === 'recent' ? styles.pressedButton : styles.button}>
                    <Text style={viewMovents === 'recent' ? 
                        {'textAlign' : 'center', 'color' : 'black'} : {'textAlign' : 'center', 'color' : 'white'}}>Reciente</Text>
                </Pressable>

                <View style={styles.containerSearch}>
                    <TextInput style={styles.input}
                        placeholderTextColor="#999"  // <- color visible
                        placeholder="Buscar..."
                        onChangeText={(e) => setSearch(e)}
                    />
                    
                </View>
            </View>

            <View style={styles.movent}>
                {movents.length < 1 && <Text style={styles.emptyList}>No hay movimientos registrados</Text>}

                {/* Todos los movimientos */}
                {(viewMovents === 'allsMovents' && search === '') && listMoventsOfMonths.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}

                {/* Ingresos */}
                {(viewMovents === 'incomes' && search === '') && listIncome.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}

                {/* Gastos */}
                {(viewMovents === 'expenses' && search === '') && listExpenses.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}


                {/* Mas reciente */}
                {(viewMovents === 'recent' && search === '') && listRecent.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}

                {/* Mas viejo */}
                {(viewMovents === 'ancient' && search === '') && listAncient.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}

                {/* Barra de busqueda */}
                {(search !== '') && listFilter.map((m) => (
                    <View key={m.id} style={{'borderBottomWidth' : 3, 'borderColor' : 'white'}}>
                        <Text style={styles.date}>{m.date}</Text>
                        <Text style={styles.row}>{m.description}</Text>
                        <Text style={m.type === 'gasto' ? styles.expense : styles.income}>{m.type}</Text>
                        <Text style={styles.row}>${m.amount}</Text>
                        <View style={styles.containerButtons}>
                            <Pressable style={styles.edit} onPress={() => handleOpen(m)}>
                                <Text style={{'color' : 'white'}}>Editar</Text>
                            </Pressable>

                            <Pressable style={styles.delete} onPress={() => handleDelete(m.id)}>
                                <Text style={{'color' : 'white'}}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}


            </View>
        </View>
    )
}