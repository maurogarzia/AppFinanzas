import { Pressable, ScrollView, Text, View } from 'react-native'
import { Header } from '../../components/Header/Header'
import useStoreModal from '../../store/useStoreModal'
import { AddMovents } from '../../components/AddMovents/AddMovents'
import styles from './SummaryScreenStyles'
import { SummaryOfMonths } from '../../components/SummaryOfMonths/SummaryOfMonths'


export const SummaryScreen = () => {

    const {view, setViewScreen} = useStoreModal()

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <View>
                    <View style={styles.containerButton}>

                        <Pressable
                            onPress={() => setViewScreen(false)}
                            style={({ pressed }) => pressed ? styles.buttonBackPressed : styles.buttonBack}
                            >
                            {({ pressed }) => (
                                <Text style={pressed ? { textAlign: 'center', color: 'black' } : { textAlign: 'center', color: 'white' }}>
                                    Atrás
                                </Text>
                            )}
                        </Pressable>

                    </View>

                    <SummaryOfMonths/>
                </View>
                
            </ScrollView>
            
            {view && 
                <View style={styles.modalBackdrop}>
                    <AddMovents/>
                </View>
            }
        </View>
    )
}