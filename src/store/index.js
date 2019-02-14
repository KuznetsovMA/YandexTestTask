import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      flights: [
        {
          time: '14:00',
          city: 'Вена',
          number: '3798',
          terminal: 'B',
          status: 'Задерживается'
        },
        {
          time: '15:00',
          city: 'Москва',
          number: '1137',
          terminal: 'C',
          status: 'Вылетает'
        },
        {
          time: '16:00',
          city: 'Берлин',
          number: '1439',
          terminal: 'B',
          status: 'Прилетает'
        },
        {
          time: '17:00',
          city: 'Амстердам',
          number: '1237',
          terminal: 'A',
          status: 'Прилетает'
        },
        {
          time: '18:00',
          city: 'Пекин',
          number: '801',
          terminal: 'A',
          status: 'Задерживается'
        },
        {
          time: '19:00',
          city: 'Сидней',
          number: '3209',
          terminal: 'D',
          status: 'Задерживается'
        },
        {
          time: '19:00',
          city: 'Москва',
          number: '1139',
          terminal: 'A',
          status: 'Вылетает'
        },
        {
          time: '20:00',
          city: 'Москва',
          number: '1138',
          terminal: 'A',
          status: 'Вылетает'
        }
      ],
      filteredFlights: []
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      }
    },
    actions: {
      getData() {
        return axios.get("")
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      },
      setFilteredFlights({commit, state}, number, status) {
        const result = state.flights.filter((flight) => {
            return flight.status === status && flight.number.startsWith(number)
        })
        commit('set', {
          name: 'filteredFlights',
          value: result
        })
      },
      setDefaultFlights({commit,state}) {
        commit('set', {
          name: 'filteredFlights',
          value: state.flights
        })
      }
    },
    getters: {
      getFlights (state) {
        return state.flights
      },
      getFilteredFlights (state) {
        return state.filteredFlights
      }
    }
})

export default store