<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="2">CUSTOM GENERATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Name: </td>
          <td><input v-model="name" class="textInput" type="text" value="" placeholder="Enter Name"></input></td>
        </tr>
        <tr>
          <td>Type: </td>
          <td>
            <select v-model="type">
              <option value="e">Energy</option>
              <option value="p">Projectile</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Strength:</td>
          <td>
            <select v-model.number="stren">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Die 1: </td>
          <td>
            <select v-model.number="die1">
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
              <option>12</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Die 2: </td>
          <td>
            <select v-model.number="die2">
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
              <option>12</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Range: </td>
          <td>
            <select v-model.number="range">
              <option>6</option>
              <option>12</option>
              <option>18</option>
              <option>24</option>
              <option>30</option>
              <option>36</option>
              <option>48</option>
              <option>60</option>
              <option>72</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Acc &#37;: </td>
          <td>
            <select v-model.number="accX">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </td>
        </tr>
        <tr>
            <td>Acc / in: </td>
            <td>
              <select v-model.number="accY">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>RoF: </td>
            <td>
              <select v-model="rof">
                <option>Single</option>
                <option>1 Fire Dice</option>
                <option>2 Fire Dice</option>
                <option>3 Fire Dice</option>
                <option>4 Fire Dice</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Blast: </td>
            <td>
              <select v-model="blast">
                  <option>None</option>
                  <option>1" Blast</option>
                  <option>2" Blast</option>
                  <option>3" Blast</option>
                  <option>4" Blast</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Size: </td>
            <td>
              <select v-model="size">
                <option>Ordnance</option>
                <option>Heavy</option>
                <option>Basic</option>
                <option>Pistol</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Delay: </td>
            <td>
              <select v-model="delay">
                <option>None</option>
                <option>Partial</option>
                <option>Full</option>
                <option>One Shot</option>
              </select>
            </td>
          </tr>
          <tr v-if="isOrd">
            <td>Ord Rating: </td>
            <td>
              <select v-model.number="ordRating">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Weight Mod: </td>
            <td>
              <select v-model.number="weightMod">
                <option>0.25</option>
                <option>0.33</option>
                <option>0.5</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td v-if="warning">TOO HEAVY</td>
            <td>
              <input v-on:click="buy" type="button" value="BUY">
            </td>
          </tr>
          <tr>
            <td>Total Cost: </td>
            <td>{{ calculateCost }}</td>
          </tr>
          <tr>
            <td>Total Weight: </td>
            <td>{{ totalWeight }}</td>
          </tr>
      </tbody>
    </table>

    <!-- PRESELECTES -->
    <table>
      <thead>
        <tr>
          <th>Pre-selectors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select v-model="selectorType">
              <option>Pistol</option>
              <option>Basic</option>
              <option>Heavy</option>
              <option>Ordnance</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <select v-if="selectorType === 'Pistol'">
              <option>pistol1</option>
              <option>pistol2</option>
              <option>pistol3</option>
              <option>option4</option>
            </select>
            <select v-if="selectorType === 'Basic'">
              <option>basic1</option>
              <option>basic2</option>
              <option>basic3</option>
              <option>basic4</option>
            </select>  
            <select v-if="selectorType === 'Heavy'">
              <option>heavy1</option>
              <option>heavy2</option>
              <option>heavy3</option>
              <option>heavy4</option>
            </select>  
            <select v-if="selectorType === 'Ordnance'">
              <option>ord1</option>
              <option>ord2</option>
              <option>ord3</option>
              <option>ord4</option>
            </select>  
          </td>          
        </tr>
        <tr>
          <td>
            <select v-model="selectorQuality">
              <option>Poor</option>
              <option>Ordinary</option>
              <option>Fine</option>
            </select>  
          </td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: ['gang'],
  data: function() {
    return {
        name: 'Lasgun',
        type: 'e',
        stren: 3,
        die1: 2,
        die2: 4,
        range: 24,
        accX: 2,
        accY: 1,
        rof: 'Single',
        blast: 'None',
        size: 'Basic',
        delay: 'None',
        ordRating: 2,
        weightMod: 1,
        warning: false,
        totalCost: 0,
        lowRoll: 5,
        highRoll: 9,
        avgRoll: 7,
        diff: 4,
        diffSquared: 56,
        avgSquared: 49,
        basicValue: 33.2,
        sizeMult: 1,
        rofMult: 1,
        blastMult: 1,
        rangeMult: 1,
        accMult: 1,
        ordMult: 1,
        delayMult: 1,
        overallMult: 1,
        totalCost: 33.2,
        weightMult: 1,
        totalWeight: 25,
        selectorType: 'Basic',
        selectorQuality: 'Ordinary'
    }
  },
  methods: {
    
  },
  computed: {
    calculateCost: function(){
        this.lowRoll = this.stren + 2;
        this.highRoll = this.stren + this.die1 + this.die2;
        this.avgRoll = this.stren + ((this.die1 + 1) + (this.die2 + 1))/2;
        this.diff = this.highRoll - this.lowRoll;
        this.diffSquared = Math.pow(this.highRoll,2) - Math.pow(this.lowRoll,2);
        this.avgSquared = Math.pow(this.avgRoll,2);
        this.basicValue = ( (this.diffSquared * this.avgSquared) / ((2*this.diff) + (2*this.avgRoll)) )/4;

        if(this.size === 'Pistol'){
          this.sizeMult = 1/(Math.sqrt(2));
        }else if(this.size === 'Basic'){
          this.sizeMult = 1/(Math.sqrt(1));
        }else if(this.size === 'Heavy'){
          this.sizeMult = 1/(Math.sqrt(0.5));
        }else if(this.size === 'Ordnance'){
          this.sizeMult = 1/(Math.sqrt(0.333));
        }

        if(this.rof === 'Single'){
          this.rofMult = 1;
        }else{
          this.rofMult = Math.pow((parseInt(this.rof)/2),2) + 1;
        }

        if(this.blast === 'None'){
          this.blastMult = 1;
        }else{
          this.blastMult = Math.pow((parseInt(this.blast)*0.4),2) + 1;
        }

        if(this.size === 'Pistol'){
          this.rangeMult = this.range/12;
        }else if(this.size === 'Basic'){
          this.rangeMult = this.range/24;
        }else if(this.size === 'Heavy'){
          this.rangeMult = this.range/48;
        }else if(this.size === 'Ordnance'){
          this.rangeMult = this.range/72;
        }
        if(this.rangeMult < 1){
          this.rangeMult = Math.pow(this.rangeMult,2/3);
        }else{
          this.rangeMult = Math.pow(this.rangeMult,1.5);
        }

        this.accMult = Math.pow(Math.sqrt(this.accY/this.accX),Math.sqrt(this.range/24));

        this.ordMult = Math.sqrt(2/this.ordRating);

        if(this.delay = 'None'){
          this.delayMult = 1;
        }else if(this.delay = 'Partial'){
          this.delayMult = 0.85;
        }else if(this.delay = 'Full'){
          this.delayMult = 0.5;
        }else if(this.delay = 'One Shot'){
          this.delayMult = 0.125;
        }

        this.overallMult = this.delayMult * this.sizeMult * this.rofMult * this.blastMult * this.rangeMult * this.accMult * this.ordMult * (1/this.weightMod);

        this.totalCost = this.basicValue * this.overallMult;

        this.weightMult = this.rofMult * this.blastMult * this.rangeMult * this.accMult * (1/this.ordMult);

        if(this.size === 'Pistol'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*100))*this.weightMod/10)*5;
        }else if(this.size === 'Basic'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*150))*this.weightMod/20)*5;
        }else if(this.size === 'Heavy'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*200))*this.weightMod/40)*5;
        }else if(this.size === 'Ordnance'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*250))*this.weightMod/50)*5;
        }

        return this.basicValue * this.overallMult;

    },
    isOrd: function(){
        if(this.size === "Ordnance"){
            return true;
        }else{
            return false;
        }  
    },
    buy: function(){
        return true;
    },
  }
}
</script>

<style scoped lang="scss">
table {
  display: inline;
  padding: 25px;
}
</style>