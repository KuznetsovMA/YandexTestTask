<template>
    <div class="filters">
        <input type="text" placeholder="Поиск по номеру рейса">
        <select name="status" id="status">
            <option value="All">Все рейсы</option>
            <option value="Departing">Вылетающие рейсы</option>
            <option value="Arriving">Прилетающие рейсы</option>
            <option value="Postponed">Задержанные рейсы</option>
        </select>
    </div>
</template>

<script>
export default {

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

</style>

