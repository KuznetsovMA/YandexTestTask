<template>
     <table class="timetable">
            <template v-for="(flight, index) in filteredFlights">
                <tr class="timetable__row" :key="index">
                <td class="timetable__column timetable__time">
                    {{ flight.time }}
                </td>
                 <td class="timetable__column timetable__city">
                    {{ flight.city }}
                </td>
                <td class="timetable__column timetable__number">
                    {{ flight.number }}
                </td>
                <td class="timetable__column timetable__terminal">
                    {{ flight.terminal }}
                </td>
                <td class="timetable__column timetable__status">
                    {{ flight.status }}
                </td>
            </tr>
            </template>
        </table>
</template>

<script>
export default {
    computed: {
        filteredFlights() {
            return this.$store.getters['getFilteredFlights']
        },
    },
    created() {
        return this.$store.dispatch('getData')
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.timetable {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
}

.timetable__column {
  width: 18%;

  text-align: center;
  &:first-child {
    text-align: left;
  }
}

.timetable__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0 10px 0;

  @include border(1px);
}

</style>

