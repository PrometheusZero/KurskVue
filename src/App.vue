<template>
  <div>
    <header>
      <input type="button" v-on:click="showChar()" value="Characters">
      <input type="button" v-on:click="showWpn()" value="Weapons">
    </header>
    <charTab v-if="seeChar" v-bind:gang='gang'></charTab>
    <wpnTab v-if="seeWpn" v-bind:gang="gang"></wpnTab>
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
      seeChar: true,
      seeWpn: false,
      seeVeh: false
    }
  },
  methods: {
    showChar: function(){
      this.seeChar = true;
      this.seeWpn = false;
      this.seeVeh = false;
    },
    showWpn: function(){
      this.seeWpn = true;
      this.seeChar = false;
      this.seeVeh = false;
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss">

</style>