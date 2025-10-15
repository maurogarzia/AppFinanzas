import { ScrollView, View } from "react-native"
import {StatusBar} from 'expo-status-bar'
import { Header } from '../../components/Header/Header';
import { Home } from '../../components/Home/Home';
import {AddMovents} from '../../components/AddMovents/AddMovents'
import {styles} from './MainScreenStyles'
import useStoreModal from "../../store/useStoreModal";

export const MainScreen = () => {

    const {view} = useStoreModal()

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style='light'/>
            <Header/>
            <ScrollView style={styles.container}>
                <Home/>
            </ScrollView>

            {view && (
                <View style={styles.modalBackdrop}>
                    <AddMovents/>
                </View>
            )}
        </View>
    )
}