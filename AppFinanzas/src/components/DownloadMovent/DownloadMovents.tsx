import { Pressable, Text, View } from "react-native";
import { style } from './DownloadMoventsStyles';
import { IMovents } from "../../types/IMovents";
import { FC } from "react";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system/legacy';

interface IDownloadMovents {
    expense: number;
    income: number;
    balance: number;
    resume: IMovents[];
}

export const DownloadMovents: FC<IDownloadMovents> = ({ expense, income, balance, resume }) => {

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
    ];

    const month = (() => {
        const firstMov = resume[0];

        if (!firstMov) return 'Sin datos';
        const monthNum = firstMov.date.split('-')[1];
        const found = months.find(m => m[1] === monthNum);
        return found ? found[0] : 'Mensual';
    })();

    const handleDownload = async () => {
        try {
        // Genero el HTML
        const html = `
        <html>
            <head>
                <style>
                    body { font-family: Arial; padding: 20px; }
                    h1 { text-align: center; }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #999;
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #2874F0;
                        color: white;
                    }
                    .summary {
                        margin-top: 30px;
                        font-size: 16px;
                    }
                </style>
            </head>
                <body>
            <h1>Resumen ${month}</h1>
            <table>
                <tr>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Monto</th>
                    <th>Tipo</th>
                </tr>
                ${resume.map(mov => `
                    <tr>
                        <td>${mov.date}</td>
                        <td>${mov.description}</td>
                        <td>$${mov.amount}</td>
                        <td>${mov.type === 'ingreso' ? 'Ingreso' : 'Gasto'}</td>
                    </tr>
                `).join('')}
            </table>
            <div class="summary">
                <p><b>Ingresos:</b> $${income}</p>
                <p><b>Gastos:</b> $${expense}</p>
                <p><b>Balance:</b> $${balance}</p>
            </div>
            </body>
        </html>
        `;

        // Creo el PDF temporal
        const { uri } = await Print.printToFileAsync({ html });

        // Defino el destino con nombre
        const pdfName = `resumen-${month}.pdf`;
        const newPath = `${FileSystem.documentDirectory}${pdfName}`;

        // Muevo el archivo (sin warnings)
        await FileSystem.moveAsync({
            from: uri,
            to: newPath,
        });

        // Compartir PDF
        await Sharing.shareAsync(newPath);
        } catch (err) {
        console.error("Error generando PDF:", err);
        }
    };

    return (
        <View style={style.container}>
            <Pressable
                onPress={handleDownload}
                style={({ pressed }) => (pressed ? style.black : style.white)}
            >
            {({ pressed }) => (
                <Text
                    style={ pressed? { color: 'white', textAlign: 'center' } : { color: 'black', textAlign: 'center' }}
                >
                    Descargar resumen
                </Text>
            )}
        </Pressable>
        </View>
    );
};
