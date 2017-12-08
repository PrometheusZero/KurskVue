<template>
  <div>
    <span>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
            <th>Str</th>
            <th>Dice</th>
            <th>Range</th>
            <th>Accuracy</th>
            <th>Cost</th>
            <th>Weight</th>
            <th>Owned</th>
            <th>More...</th>
          </tr>
          <tr v-for="obj in gang.weapons">
            <td>{{ obj.name }}</td>
            <td>{{ obj.size }}</td>
            <td v-if="obj.type === 'e'">Energy</td>
            <td v-else>Projectile</td>
            <td>{{ obj.stren }}</td>
            <td>d{{ obj.die1 }} + d{{ obj.die2 }}</td>
            <td>{{ obj.range }}</td>
            <td>{{ obj.accX }}&#37; / {{ obj.accY }}&#34;</td>
            <td>{{ Math.round(obj.totalCost) }}</td>
            <td>{{ obj.totalWeight }}</td>
            <td v-if="obj.owner">Y</td>
            <td v-else>N</td>
            <td><input type="button" value="..." v-on:click="showDetails(obj)"></td>
          </tr>
        </thead>
      </table>
    </span>
    <span>
      <h2>{{ detail.name }}</h2>
      <p>{{ detail.size }} <span v-if="detail.type==='e'">Energy</span><span v-else>Projectile</span></p>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stength</td>
            <td>{{ detail.stren }}</td>
          </tr>
          <tr>
            <td>Dice</td>
            <td>d{{ detail.die1 }} + d{{ detail.die2 }}</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>{{ detail.range }}</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>{{ detail.accX }}&#37; / {{ detail.accY }}&#34;</td>
          </tr>
          <tr>
            <td>Rate of Fire</td>
            <td>{{ detail.rof }}</td>
          </tr>
          <tr>
            <td>Blast</td>
            <td>{{ detail.blast }}</td>
          </tr>
          <tr>
            <td>Delay</td>
            <td>{{ detail.delay }}</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>{{ Math.round(detail.totalCost) }}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{{ detail.totalWeight }}</td>
          </tr>
          <tr v-if="detail.owner">
            <td>Owner</td>
            <td>
              <input type="button" v-bind:value="detail.name" v-on:click="unequipWeapon()">
            </td>
          </tr>
          <tr v-else>
            <td>Assign</td>
            <td>
              <select v-on:change="assignWeapon(person)"><!-- THIS DOESN'T WORK. FIGURE WAY AROUND! -->
                <option disabled value="">Select Char</option>
                <option v-for="person in gang.characters">{{ person.name }}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
  </div>
</template>

<script>

export default {
  props: ['gang'],
  data: function() {
    return {
      detail: {
        name: '',
        size: '',
        type: '',
        stren: '',
        die1: '',
        die2: '',
        range: '',
        accX: '',
        accY: '',
        rof: '',
        blast: '',
        delay: '',
        totalCost: '',
        totalWeight: '',
        owner: '',
      }
    }
  },
  methods: {
    showDetails: function(obj){
      this.detail.name = obj.name,
      this.detail.size = obj.size,
      this.detail.type = obj.type,
      this.detail.stren = obj.stren,
      this.detail.die1 = obj.die1,
      this.detail.die2 = obj.die2,
      this.detail.range = obj.range,
      this.detail.accX = obj.accX,
      this.detail.accY = obj.accY,
      this.detail.rof = obj.rof,
      this.detail.blast = obj.blast,
      this.detail.delay = obj.delay,
      this.detail.totalCost = obj.totalCost,
      this.detail.totalWeight = obj.totalWeight,
      this.detail.owner = obj.owner
    },
    unequipWeapon: function(){
      return true;
    },
    assignWeapon: function(person){
      console.log(person);
      return true;
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss">

</style>