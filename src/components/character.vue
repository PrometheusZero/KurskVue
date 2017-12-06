<template>
  <div>
    <character-creation v-bind:gang='gang'></character-creation>
    <character-roster v-bind:gang='gang'></character-roster>
  </div>
</template>

<script>
import CharGen from './character-creation.vue';
import CharRoster from './character-roster.vue';

export default {
  props: ['gang'],
  components: {
    'character-creation': CharGen,
    'character-roster': CharRoster
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