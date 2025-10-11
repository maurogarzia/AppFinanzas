import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header/Header';
import { Home } from './src/components/Home/Home';
import { AddMovents } from './src/components/AddMovents/AddMovents';
import useStoreModal from './src/store/useStoreModal';


export default function App() {
  const { view } = useStoreModal();

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalBackdrop: {
    position: 'absolute',   
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0000007c',  
    justifyContent: 'center',      
    alignItems: 'center',          
    zIndex: 999,
  },
});
