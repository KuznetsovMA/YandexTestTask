<template>
     <table class="timetable">
            <template v-for="(flight, index) in flights">
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
        flights() {
            return this.$store.getters['getFlights']
        }
    },
    created() {
        return this.$store.dispatch('getData')
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.timetable {
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

  border-bottom: 1px solid $yellow;
}

</style>

