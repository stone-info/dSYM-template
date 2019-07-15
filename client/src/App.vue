<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    // props     : ['users'],
    // props     : {
    //   users: {
    //     type    : Array,
    //     required: true,
    //   },
    // },
    components: {},
    name      : 'app',
    data() {
      return {}
    },
    /** methods */
    methods   : {
      isEmpty(value) {
        return (
          value === undefined ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length === 0) ||
          (typeof value === 'string' && value.trim().length === 0)
        )
      },
    },

    /** computed */
    computed: {},
    /** watch */
    watch   : {},

    created() {},

    mounted() {},
  }
</script>

<style lang="scss">

  html, body, #app {

    width  : 100%;
    height : 100%;
  }
</style>
