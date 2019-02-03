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
          number: '1437',
          terminal: 'B',
          status: 'Задерживается'
        },
        {
          time: '14:00',
          city: 'Вена',
          number: '1437',
          terminal: 'B',
          status: 'Задерживается'
        },
        {
          time: '14:00',
          city: 'Вена',
          number: '1437',
          terminal: 'B',
          status: 'Задерживается'
        }
      ]
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      }
    },
    actions: {
      getData() {
        return axios.get("https://api.flightstats.com/flex/flightstatus/historical/rest/v3/json/route/status/SVO/HNL/dep/2019/01/1?appId=00b18f10&appKey=+cae0453c3c40ba5a9b8219968ce4bb68&hourOfDay=0&utc=true&numHours=24&maxFlights=10")
               .then(res => {
                 console.log(res)
               })
               .catch(err => {
                 console.log(err)
               })
      }
    },
    getters: {
      getFlights (state) {
        return state.flights
      }
    }
})

export default store