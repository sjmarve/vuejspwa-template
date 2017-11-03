<template>
  <component :is="componentInUse"></component>
</template>

<script>
  import Home from './Home.vue';
  import Dashboard from './dashboard/index.vue';

  export default {
    computed:{
      componentInUse(){
        return this.$auth.check() ? Dashboard : Home;
      }
    }
  }
</script>
