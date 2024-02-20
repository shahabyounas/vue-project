import { defineStore } from 'pinia'
import airports from '../assets/airports.json'

export const useAirportStore = defineStore('airports', {

    state: () => {
    const airportOptions = Object.values(airports)
      return {
        options: airportOptions
      }
    },
  
    getters: {
       getAirportByCode(state){
        return (code) => state.airports.get(code)
      },
    },
  
    actions: {
       setAirport(code, data){
        this.airports.set(code, data)
      }
    }
  })

  export const useAirportDetailsStore = defineStore('airportDetails', {
    state: () => {
      return {
        airports: new Map()
      }
    }, 

    getters: {
      getAirportDetailsByCode(state) {
        return (code) => state.airports.get(code)
      }
    },

    actions: {
      setAirportDetails(code, data){
        this.airports.set(code, data)
      }
    }
  })