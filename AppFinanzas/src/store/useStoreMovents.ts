import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { IMovents } from '../types/IMovents'

interface IUseStoreMovents {
    movents : IMovents[]
    activeMovent : IMovents | null
    listExpenses : IMovents[] | []
    listIncome : IMovents[] | []
    listAncient : IMovents[] | []
    listRecent : IMovents[] | []
    listMoventsOfMonths : IMovents[] | []

    setActiveMovent: (incommingMovent : IMovents | null) => void
    addMovents : (newMovent : IMovents) => void
    deleteMovents: (id: string) => void,
    editMovents: (id: string, newMovent : IMovents) => void
    setListExpenses : VoidFunction,
    setLisIncome : VoidFunction
    setListRecent: VoidFunction
    setListAncient : VoidFunction,
    setListMoventsOfMonths: () => void
}

export const useStoreMovents = create<IUseStoreMovents>()(
    persist((set) => ({
            movents : [],
            activeMovent : null,
            listExpenses : [],
            listIncome : [],
            listAncient: [],
            listRecent: [],
            listMoventsOfMonths : [],

            setActiveMovent: (incommingMovent) => set({activeMovent : incommingMovent}),

            addMovents : (newMovent) => set((state) => ({
                movents : [...state.movents, newMovent],
            })),

            deleteMovents : (id) => set((state) => ({
                movents : state.movents.filter((f) => (
                    f.id !== id
                ))
            })),


            editMovents: (id, newMovent) => set((state) => ({
                movents : state.movents.map((m) => (
                    m.id === id ? newMovent : m
                ))
            })),

            setLisIncome : () => set((state) => ({
                listIncome : state.listMoventsOfMonths.filter((i) => i.type === "ingreso")
            })),

            setListExpenses : () => set((state) => ({
                listExpenses : state.listMoventsOfMonths.filter((i) => i.type === "gasto")
            })),

            setListAncient: () => set((state) => ({
                listAncient : state.listMoventsOfMonths.slice().sort((a,b) => {
                    return new Date(a.date).getTime() - new Date(b.date).getTime()
                })
            })),

            setListRecent : () => set((state) => ({
                listRecent : state.listMoventsOfMonths.slice().sort((a,b) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                })
            })),

            setListMoventsOfMonths: () => {
                const month = new Date().toISOString().split('T')[0].split('-')[1]
                set((state) => ({
                    listMoventsOfMonths : state.movents.filter((f) => 
                        f.date.split('-')[1] === month
                    )
                }))
            }
        }),
        {
            name: 'user-storage', 
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)