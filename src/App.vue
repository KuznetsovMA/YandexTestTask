<template>
    <section>
        <div class="filter">
            <input type="text" placeholder="Поиск по номеру рейса">
            <select name="status" id="status">
                <option value="All">Все рейсы</option>
                <option value="Departing">Вылетающие рейсы</option>
                <option value="Arriving">Прилетающие рейсы</option>
                <option value="Postponed">Задержанные рейсы</option>
            </select>
        </div>
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
    </section>
</template>

<script>
export default {
    computed: {
        flights() {
            return this.$store.getters['getFlights']
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
      width: 1300px;
      margin: 20px auto 0 auto;

      font-size: 30px;
      font-family: "Open Sans", Helvetica, sans-serif;
    }

    .filter {
      width: 100%;

      border-bottom: 2px solid #ffdb4d;
    }

    .filter {
      display: flex;
      justify-content: space-between;
      input {
        width: 49%;
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
        width: 49%;
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

      border-bottom: 1px solid #ffdb4d;
    }

</style>
