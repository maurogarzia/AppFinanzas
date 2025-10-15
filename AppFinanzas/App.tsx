import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header/Header';
import { Home } from './src/components/Home/Home';
import { AddMovents } from './src/components/AddMovents/AddMovents';
import useStoreModal from './src/store/useStoreModal';
import { MainScreen } from './src/Screens/MainScreen/MainScreen';
import { SummaryScreen } from './src/Screens/SummaryScreen/SummaryScreen';


export default function App() {
  const { view, viewScreen } = useStoreModal();

  return (
    <View style={{ flex: 1 }}>
      {!viewScreen ? <MainScreen/> : <SummaryScreen/>}
    </View>
  );
}

const styles = StyleSheet.create({

});
