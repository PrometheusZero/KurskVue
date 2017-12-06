<template>
  <div>
    <weapon-creation v-bind:gang='gang'></weapon-creation>
    <weapon-roster v-bind:gang='gang'></weapon-roster>
  </div>
</template>

<script>
import WpnGen from './weapon-creation.vue';
import WpnRoster from './weapon-roster.vue';

export default {
  props: ['gang'],
  components: {
    'weapon-creation': WpnGen,
    'weapon-roster': WpnRoster
  },
  data: function() {
    return {
      name: '',
      rank: ''
    }
  },
  methods: {

  },
  computed: {
    
  }
}
</script>

<style lang="scss">

</style>