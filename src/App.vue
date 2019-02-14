<template>
    <section class="schedule">
        <filters/>
        <timetable/>
    </section>
</template>

<script>
import filters from './components/filters'
import timetable from './components/timetable'

export default {
    created() {
        return this.$store.dispatch('getData')
    },
    components: {
        filters,
        timetable
    }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/style.scss";

.schedule {
  width: 1280px;
  margin: 20px auto 0 auto;

  font-size: 30px;

  @include font(30px, "Open Sans");
}

</style>
