<template>
    <section>
        <filters/>
        <timetable/>
    </section>
</template>

<script>
import filters from './components/filters'
import timetable from './components/timetable'

export default {
    components: {
        filters,
        timetable
    }
}
</script>

<style lang="scss" scoped>
section {
  width: 1280px;
  margin: 20px auto 0 auto;

  font-size: 30px;
  font-family: "Open Sans", Helvetica, sans-serif;
}

</style>
