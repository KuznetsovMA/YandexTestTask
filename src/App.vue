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
            <tr class="timetable__row">
                <td class="timetable__column timetable__time">
                    {{ time }}
                </td>
                 <td class="timetable__column timetable__city">
                    {{ city }}
                </td>
                <td class="timetable__column timetable__number">
                    {{ number }}
                </td>
                <td class="timetable__column timetable__terminal">
                    {{ terminal }}
                </td>
                <td class="timetable__column timetable__status">
                    {{ status }}
                </td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    data() {
        return {
            time: '14:00',
            city: 'Вена',
            number: '2154',
            terminal: 'B',
            status: 'В полете'
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
      width: 1000px;
      margin: 20px auto 0px auto;

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
      width: 1000px;
      margin: 0 auto;
    }

    .timetable__column {
      text-align: center;
    }

    .timetable__row {
      display: flex;
      justify-content: space-between;
      padding: 10px;

      border-bottom: 1px solid #ffdb4d;
    }

</style>
