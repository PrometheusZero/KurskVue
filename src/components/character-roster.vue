<template>
  <div>
    <span>
      <table>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>M</th>
          <th>WS</th>
          <th>BS</th>
          <th>S</th>
          <th>T</th>
          <th>W</th>
          <th>I</th>
          <th>A</th>
          <th>Ld</th>
          <th>Info</th>
        </tr>
        <tr v-for="obj in gang.characters">
          <td>{{ obj.name }}</td>
          <td>{{ obj.rank }}</td>
          <td>{{ obj.m() }}</td>
          <td>{{ obj.ws }}</td>
          <td>{{ obj.bs }}</td>
          <td>{{ obj.s }}</td>
          <td>{{ obj.t }}</td>
          <td>{{ obj.w() }}</td>
          <td>{{ obj.i }}</td>
          <td>{{ obj.a() }}</td>
          <td>{{ obj.ld }}</td>
          <td><input type="button" value="..." v-on:click="showDetails(obj)"></td>
        </tr>
      </table>
    </span>
    <span>
      <h2>{{ detail.name }}</h2>
      <p>{{ detail.rank }}</p>
      <table>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>M</td>
          <td>{{ detail.m }}</td>
        </tr>
        <tr>
          <td>WS</td>
          <td>{{ detail.ws }}</td>
        </tr>
        <tr>
          <td>BS</td>
          <td>{{ detail.bs }}</td>
        </tr>
        <tr>
          <td>S</td>
          <td>{{ detail.s }}</td>
        </tr>
        <tr>
          <td>T</td>
          <td>{{ detail.t }}</td>
        </tr>
        <tr>
          <td>W</td>
          <td>{{ detail.w }}</td>
        </tr>
        <tr>
          <td>I</td>
          <td>{{ detail.i }}</td>
        </tr>
        <tr>
          <td>A</td>
          <td>{{ detail.a }}</td>
        </tr>
        <tr>
          <td>Ld</td>
          <td>{{ detail.ld }}</td>
        </tr>
        <tr>
          <td>XP</td>
          <td>{{ detail.xp }}</td>
        </tr>
        <tr>
          <td>Enc.</td>
          <td>{{ detail.inventoryWeight }} / {{ detail.carry }}</td>
        </tr>
      </table>
      <span>
        <dl>
          <dt>Armour</dt>
          <dd>{{ detail.armour }}</dd>
        </dl>
        <dl>
          <dt>Sheild</dt>
          <dd>{{ detail.sheild }}</dd>
        </dl>
        <dl>
          <dt>Handedness</dt>
          <dd>{{ detail.handedness }}</dd>
        </dl>
        <dl>
          <dt>Left Equip</dt>
          <dd>{{ detail.leftHandEquip }}</dd>
        </dl>
        <dl>
          <dt>Right Equip</dt>
          <dd>{{ detail.rightHandEquip }}</dd>
        </dl>
      </span>
      <span>
        <p>Inventory</p>
        <ul>
          <li v-for="item in detail.inventory">{{ item.name }}, {{ item.totalWeight }}</li>
        </ul>
      </span>
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
        rank: '',
        m: '',
        ws: '',
        bs: '',
        s: '',
        t: '',
        w: '',
        i: '',
        a: '',
        ld: '',
        xp: '',
        carry: '',
        inventoryWeight: '',
        inventory: [],
        inventoryValue: '',
        armour: '',
        sheild: '',
        handedness: '',
        leftHandEquip: '',
        rightHandEquip: ''
      }
    }
  },
  methods: {
    showDetails: function(obj){
        this.detail.name = obj.name;
        this.detail.rank = obj.rank;
        this.detail.m = obj.m();
        this.detail.ws = obj.ws;
        this.detail.bs = obj.bs;
        this.detail.s = obj.s;
        this.detail.t = obj.t;
        this.detail.w = obj.w();
        this.detail.i = obj.i;
        this.detail.a = obj.a();
        this.detail.ld = obj.ld;
        this.detail.xp = obj.xp;
        this.detail.carry = obj.carry();
        this.detail.inventoryWeight = obj.inventoryWeight();
        this.detail.inventory = obj.inventory;
        this.detail.inventoryValue = obj.inventoryValue();

        this.detail.armour = obj.armourEquip ? obj.armourEquip.name : 'None';
        this.detail.sheild = obj.sheildEquip ? obj.sheildEquip.name : 'None';

        if(obj.leftHanded == false){
          this.detail.handedness = 'Right';
        }else if(obj.rightHanded == false){
          this.detail.handedness = 'Left';
        }else{
          this.detail.handedness = 'Ambidextrous';
        }

        this.detail.leftHandEquip = obj.leftHandEquip ? obj.leftHandEquip.name : 'None';
        this.detail.rightHandEquip = obj.rightHandEquip ? obj.rightHandEquip.name : 'None';
    }
  }
}
</script>

<style lang="scss">

</style>