<template>
    <form 
    class="filters">
        <input
        v-model="number"
        type="text" 
        placeholder="Поиск по номеру рейса">
        <select
        v-model="selected"
        name="status" 
        id="status">
            <option ref="option" value="Все">Все рейсы</option>
            <option ref="option" value="Вылетает">Вылетающие рейсы</option>
            <option ref="option" value="Прилетает">Прилетающие рейсы</option>
            <option ref="option" value="Задерживается">Задержанные рейсы</option>
        </select>
    </form>
</template>

<script>
export default {
  data() {
    return {
      selected: 'Все',
      number: ''
    }
  },
  watch: {
    number: function() {
      this.$store.dispatch('setFilteredFlights', this.number, this.selected)
    },
    selected: function() {
      this.$store.dispatch('setFilteredFlights', this.number, this.selected)
    }
  },
  methods: {
      setFilteredFlights() {
        this.$store.dispatch('setFilteredFlights', this.number, this.selected)
      },
      setDefaultFlights() {
        this.$store.dispatch('setDefaultFlights')
      }
    },
    created() {
      this.setDefaultFlights()
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.filters {
  width: 100%;

  @include border(2px);
}

.filters {
  display: flex;
  justify-content: space-between;
  input {
    width: 50%;
    padding: 10px 0 10px 0;

    border: none;

    @include font(21px, "Open Sans");

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $gray;
    }
  }

  select {
    width: 50%;
    padding: 10px 0 10px 0;

    font-weight: 400;

    border: none;

    @include font(21px, "Open Sans");

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

