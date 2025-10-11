import {View, Text} from 'react-native'
import styles from './HeaderStyles';

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gestión de Finanzas</Text>
        </View>
    );
};
