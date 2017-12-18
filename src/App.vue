<template>
  <div>
    <header>
      <input type="button" v-on:click="window = 'char'" value="Characters">
      <input type="button" v-on:click="window = 'wpn'" value="Weapons">
    </header>
    <charTab v-if="window === 'char'" v-bind:gang='gang'></charTab>
    <wpnTab v-if="window === 'wpn'" v-bind:gang="gang"></wpnTab>
  <!--  <vehTab></vehTab>-->
  </div>
</template>

<script>
import Character from './components/character.vue';
import Weapon from './components/weapon.vue';

export default {
  components: {
    'charTab': Character,
    'wpnTab': Weapon
  },
  data: function() {
    return {
      gang: {
        characters: [],
        weapons: [],
        vehicles: []
      },
      window: 'char'
    }
  },
  methods: {

  },
  computed: {
    
  }
}
</script>

<style lang="scss">
header {
  padding: 20px;
}

table {
  display: inline-block;
  padding: 25px;
}

table td, th {
  padding: 0 5px;
}
</style>