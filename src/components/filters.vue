<template>
    <div class="filters">
        <input type="text" placeholder="Поиск по номеру рейса">
        <select
        ref="status" 
        @change="getFilteredFlights" 
        name="status" 
        id="status">
            <option ref="option" value="Все">Все рейсы</option>
            <option ref="option" value="Вылетает">Вылетающие рейсы</option>
            <option ref="option" value="Прилетает">Прилетающие рейсы</option>
            <option ref="option" value="Задерживается">Задержанные рейсы</option>
        </select>
    </div>
</template>

<script>
export default {
  methods: {
      getFilteredFlights() {
        const selectedIndex = this.$refs.status.selectedIndex
        const selectedIndexValue = this.$refs.status.querySelectorAll('option')[selectedIndex].value
        if (selectedIndexValue !== 'Все') {
          const result = this.$store.state.flights.filter((flight) => {
            return flight.status === selectedIndexValue
          })
          this.$store.commit('set', {
            name: 'filteredFlights',
            value: result
          })
        } else {
          this.setDefaultFlights()
        }
      },
      setDefaultFlights() {
        const flights = this.$store.state.flights
        const filteredFlights = this.$store.state.filteredFlights
        this.$store.commit('set', {
          name: 'filteredFlights',
          value: flights
        })
      }
    },
    created() {
      this.setDefaultFlights()
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.filters {
  width: 100%;

  border-bottom: 2px solid $yellow;
}

.filters {
  display: flex;
  justify-content: space-between;
  input {
    width: 50%;
    padding: 10px 0 10px 0;

    font-size: 21px;
    font-family: "Open Sans", Helvetica, sans-serif;

    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #919191;
    }
  }

  select {
    width: 50%;
    padding: 10px 0 10px 0;

    font-weight: 400;
    font-size: 21px;
    font-family: "Open Sans", Helvetica, sans-serif;

    border: none;

    &:focus {
      outline: none;
    }

    option {
      padding: 0;

      border: none;

      &:focus {
        border: none;
      }
    }
  }
}

</style>

