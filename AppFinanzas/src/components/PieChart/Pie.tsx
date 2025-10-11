import {PieChart} from "react-native-chart-kit"
import { Dimensions, View } from "react-native"
import { useStoreMovents } from "../../store/useStoreMovents"
import { useEffect, useMemo, useState } from "react"

export const Pie = () => {

    const {movents} = useStoreMovents()
    

    const {totalIncome, totalExpense} = useMemo(() => {
        let income = 0
        let expense = 0

        movents.forEach((m) => {
            if (m.type === 'ingreso') income += m.amount
            else if (m.type === 'gasto') expense += m.amount
        })

        return {totalIncome: income, totalExpense: expense}

    },[movents])

    
    const screenWidth = Dimensions.get("window").width

    const data = [
        {
            name: "Ingresos",
            amount: totalIncome,
            color: "rgba(0, 200, 0, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Gastos",
            amount: totalExpense,
            color: "rgba(200, 0, 0, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
    ]

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientTo: "#08130D",
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };

    return (
        
        
        <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"amount"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute
        />
    )
}