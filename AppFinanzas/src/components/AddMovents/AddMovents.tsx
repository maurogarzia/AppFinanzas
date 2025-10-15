import {View, Text, TextInput, Pressable} from 'react-native'
import { Picker } from '@react-native-picker/picker' // npm install @react-native-picker/picker
import style from './AddMoventsStyles'

import { useState, type SetStateAction } from 'react'
import type { IMovents } from '../../types/IMovents'

import  DateTimePicker, { type DateTimePickerEvent }  from '@react-native-community/datetimepicker'
import uuid from 'react-native-uuid'
import useStoreModal from '../../store/useStoreModal'
import { useStoreMovents } from '../../store/useStoreMovents'

export const AddMovents = () => {

    const {closeView} = useStoreModal()
    const {activeMovent, addMovents, editMovents, setActiveMovent} = useStoreMovents()

    const [newMovent, setNewMovent] = useState({
        id: activeMovent?.id || uuid.v4(),
        date: activeMovent?.date || '', 
        type: activeMovent?.type || '',
        description: activeMovent?.description || '',
        amount: activeMovent?.amount || ''
    })

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    
    const handleChange = (key: string, value: string | undefined) => {
        setNewMovent((prev) => ({...prev, [key] : value}))
    }

    const handleDateChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowDatePicker(false)

        // 👇 protegemos el caso de cancelación, pero date nunca queda indefinido
        if (selectedDate) {
            const formatted = selectedDate.toISOString().split('T')[0]
            handleChange('date', formatted)
        }
    }


    const handleSubmit = () => {
        const movent : IMovents = {
            id : newMovent.id,
            date: newMovent.date,
            type : newMovent.type,
            amount : Number(newMovent.amount),
            description : newMovent.description
        }

        if (movent.type === '') {
            alert('Se debe agregar un tipo')
            return
        } 

        if (activeMovent) {
            editMovents(movent.id, movent)
            alert("Se edito el movimiento")
            closeView()
        }else{
            addMovents(movent)
            alert("Se creo el movimiento")
            closeView()
        }
    }


    return (
        <View style={style.container}>
            <Text style={style.title}>{activeMovent ? 'Editar Movimiento' : 'Agregar Movimiento'}</Text>

            <View style={style.containerData}>
                <Text style={style.label}>Fecha</Text>
                <Pressable onPress={() => setShowDatePicker(true)}>
                    <Text style={style.inputDate}> {newMovent.date ? newMovent.date : 'Seleccionar Fecha'}</Text>
                </Pressable>

                {showDatePicker && (
                    <DateTimePicker
                        value={activeMovent ? new Date(newMovent.date) : new Date()}
                        mode='date'
                        display='default'
                        onChange={handleDateChange}
                    />
                )}


                <Text style={style.label}>Tipo</Text>
                <View style={style.input}>
                    <Picker
                        selectedValue={newMovent.type}
                        onValueChange={(value) => handleChange('type', value)}
                        style={{ color: 'gray', backgroundColor: 'white' }} // 👈 forzamos contraste
                        dropdownIconColor="gray" // 👈 ícono visible
                    >
                        <Picker.Item label='Sin seleccion' value=''/>
                        <Picker.Item label='Ingreso' value='ingreso'/>
                        <Picker.Item label='Gasto' value={'gasto'}/>
                    </Picker>
                </View>

                <Text style={style.label}>Monto</Text>
                <TextInput
                    style={style.input}
                    placeholderTextColor="#999"  // <- color visible
                    placeholder='0.0'
                    keyboardType='numeric'
                    value={String(newMovent.amount)}
                    onChangeText={(value) => handleChange('amount', value)}
                />

                <Text style={style.label}>Descripción</Text>
                <TextInput
                    style={style.input}
                    placeholderTextColor="#999"  // <- color visible
                    placeholder='Agregar Descripción'
                    value={newMovent.description}
                    onChangeText={(value) => handleChange('description', value)}
                    />

                <View style={style.containerButtons}>
                    <Pressable onPress={() => {setActiveMovent(null), closeView()}} style={style.button}>
                        <Text style={{'color' : 'white'}}>Cancelar</Text>
                    </Pressable>

                    <Pressable style={style.button} onPress={handleSubmit}>
                        <Text style={{'color' : 'white'}}>{activeMovent ? 'Editar' : 'Crear'}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
} 