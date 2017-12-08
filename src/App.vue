<template>
  <div>
    <header>
      <input type="button" v-on:click="showMe('char')" value="Characters">
      <input type="button" v-on:click="showMe('wpn')" value="Weapons">
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
    showMe: function(who){
      console.log(who);
      this.seeChar = false;
      this.seeWpn = false;
      this.seeVeh = false;
      if(who === 'char'){
        this.seeChar = true;
      }else if(who === 'wpn'){
        this.seeWpn = true;
      }else if(who === 'veh'){
        this.seeVeh = true;
      }else{}
    }
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