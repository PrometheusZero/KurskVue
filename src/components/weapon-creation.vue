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
              <input v-on:click="buy()" type="button" value="BUY">
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
          <th>PRE-SELECTORS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select v-model="selectorType" v-on:change="selectorChange()">
              <option>Pistol</option>
              <option>Basic</option>
              <option>Heavy</option>
              <option>Ordnance</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <select v-model="selectorPistol" v-if="selectorType === 'Pistol'" v-on:change="selectorChange()">
              <option>Laspistol</option>
              <option>Bolt Pistol</option>
              <option>Stub Gun</option>
              <option>Plasma Pistol</option>
            </select>
            <select v-model="selectorBasic" v-if="selectorType === 'Basic'" v-on:change="selectorChange()">
              <option>Lasgun</option>
              <option>Boltgun</option>
              <option>Autogun</option>
              <option>Plasma Gun</option>
            </select>  
            <select v-model="selectorHeavy" v-if="selectorType === 'Heavy'" v-on:change="selectorChange()">
              <option>Lascannon</option>
              <option>Heavy Bolter</option>
              <option>Heavy Stubber</option>
              <option>Plasma Cannon</option>
            </select>  
            <select v-model="selectorOrdnance" v-if="selectorType === 'Ordnance'" v-on:change="selectorChange()">
              <option>Battlecannon</option>
              <option>Punisher Gatling</option>
              <option>Nova Blaster</option>
              <option>Plasma Executioner</option>
            </select>  
          </td>          
        </tr>
        <tr>
          <td>
            <select v-model="selectorQuality" v-on:change="selectorChange()">
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
        selectorQuality: 'Ordinary',
        selectorPistol: 'Laspistol',
        selectorBasic: 'Lasgun',
        selectorHeavy: 'Lascannon',
        selectorOrdnance: 'Battlecannon'
    }
  },
  methods: {
    selectorChange: function(){
      if(this.selectorType === 'Pistol'){
        
        if(this.selectorPistol === 'Laspistol'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Laspistol';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 2;
            this.die2 = 4;
            this.range = 12;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Laspistol';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 12;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Laspistol';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 18;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }else if(this.selectorPistol === 'Bolt Pistol'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Bolt Pistol';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 4;
            this.die2 = 6;
            this.range = 12;
            this.accX = 3;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Bolt Pistol';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 12;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Bolt Pistol';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 12;
            this.accX = 1;
            this.accY = 2;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorPistol === 'Stub Gun'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Stub Gun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 2;
            this.die2 = 2;
            this.range = 12;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Stub Gun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 2;
            this.die2 = 4;
            this.range = 12;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Stub Gun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 2;
            this.die2 = 4;
            this.range = 12;
            this.accX = 1;
            this.accY = 3;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorPistol === 'Plasma Pistol'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Plasma Pistol';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 4;
            this.die2 = 6;
            this.range = 6;
            this.accX = 2;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'Full';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Plasma Pistol';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 12;
            this.accX = 2;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'Full';
            this.ordRating = 2;
            this.weightMod = 0.5;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Plasma Pistol';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 18;
            this.accX = 2;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Pistol';
            this.delay = 'Partial';
            this.ordRating = 2;
            this.weightMod = 0.5;
          }
        
        }

      }else if(this.selectorType === 'Basic'){

        if(this.selectorBasic === 'Lasgun'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Lasgun';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Lasgun';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Lasgun';
            this.type = 'e';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 36;
            this.accX = 1;
            this.accY = 2;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }else if(this.selectorBasic === 'Boltgun'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Boltgun';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Boltgun';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Boltgun';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 30;
            this.accX = 1;
            this.accY = 2;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorBasic === 'Autogun'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Autogun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 2;
            this.die2 = 2;
            this.range = 24;
            this.accX = 3;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Autogun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 2;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Autogun';
            this.type = 'p';
            this.stren = 3;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 1;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorBasic === 'Plasma Gun'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Plasma Gun';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 24;
            this.accX = 4;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'Full';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Plasma Gun';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'Full';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Plasma Gun';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 24;
            this.accX = 1;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = 'None';
            this.size = 'Basic';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }

      }else if(this.selectorType === 'Heavy'){

        if(this.selectorHeavy === 'Lascannon'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Lascannon';
            this.type = 'e';
            this.stren = 9;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 48;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Lascannon';
            this.type = 'e';
            this.stren = 9;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 48;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Lascannon';
            this.type = 'e';
            this.stren = 9;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 48;
            this.accX = 1;
            this.accY = 2;
            this.rof = 'Single';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }else if(this.selectorHeavy === 'Heavy Bolter'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Heavy Bolter';
            this.type = 'p';
            this.stren = 5;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 36;
            this.accX = 2;
            this.accY = 1;
            this.rof = '2 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Heavy Bolter';
            this.type = 'p';
            this.stren = 5;
            this.die1 = 8;
            this.die2 = 6;
            this.range = 36;
            this.accX = 1;
            this.accY = 1;
            this.rof = '2 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Heavy Bolter';
            this.type = 'p';
            this.stren = 5;
            this.die1 = 8;
            this.die2 = 6;
            this.range = 48;
            this.accX = 1;
            this.accY = 2;
            this.rof = '2 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorHeavy === 'Heavy Stubber'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Heavy Stubber';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 3;
            this.accY = 1;
            this.rof = '2 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Heavy Stubber';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = '3 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Heavy Stubber';
            this.type = 'p';
            this.stren = 4;
            this.die1 = 4;
            this.die2 = 4;
            this.range = 36;
            this.accX = 1;
            this.accY = 1;
            this.rof = '3 Fire Dice';
            this.blast = 'None';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorHeavy === 'Plasma Cannon'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Plasma Cannon';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 36;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Heavy';
            this.delay = 'Full';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Plasma Cannon';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 36;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Plasma Cannon';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 48;
            this.accX = 1;
            this.accY = 2;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Heavy';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }

      }else if(this.selectorType === 'Ordnance'){

        if(this.selectorOrdnance === 'Battlecannon'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Battlecannon';
            this.type = 'p';
            this.stren = 8;
            this.die1 = 8;
            this.die2 = 6;
            this.range = 72;
            this.accX = 3;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 4;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Battlecannon';
            this.type = 'p';
            this.stren = 8;
            this.die1 = 8;
            this.die2 = 8;
            this.range = 72;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Battlecannon';
            this.type = 'p';
            this.stren = 8;
            this.die1 = 8;
            this.die2 = 8;
            this.range = 72;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }else if(this.selectorOrdnance === 'Punisher Gatling'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Punisher Gatling';
            this.type = 'p';
            this.stren = 6;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 24;
            this.accX = 2;
            this.accY = 1;
            this.rof = '3 Fire Dice';
            this.blast = 'None';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Punisher Gatling';
            this.type = 'p';
            this.stren = 6;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 36;
            this.accX = 1;
            this.accY = 1;
            this.rof = '3 Fire Dice';
            this.blast = 'None';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Punisher Gatling';
            this.type = 'p';
            this.stren = 6;
            this.die1 = 6;
            this.die2 = 6;
            this.range = 48;
            this.accX = 1;
            this.accY = 2;
            this.rof = '3 Fire Dice';
            this.blast = 'None';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorOrdnance === 'Nova Blaster'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Nova Blaster';
            this.type = 'e';
            this.stren = 6;
            this.die1 = 10;
            this.die2 = 10;
            this.range = 48;
            this.accX = 3;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 3;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Nova Blaster';
            this.type = 'e';
            this.stren = 6;
            this.die1 = 10;
            this.die2 = 10;
            this.range = 48;
            this.accX = 2;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Nova Blaster';
            this.type = 'e';
            this.stren = 6;
            this.die1 = 12;
            this.die2 = 10;
            this.range = 48;
            this.accX = 1;
            this.accY = 1;
            this.rof = 'Single';
            this.blast = '2" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }

        }else if(this.selectorOrdnance === 'Plasma Executioner'){
          if(this.selectorQuality === 'Poor'){
            this.name = 'Poor Plasma Executioner';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 8;
            this.die2 = 6;
            this.range = 36;
            this.accX = 2;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = '1" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 2;
          }else if(this.selectorQuality === 'Ordinary'){
            this.name = 'Plasma Executioner';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 8;
            this.die2 = 8;
            this.range = 36;
            this.accX = 1;
            this.accY = 1;
            this.rof = '1 Fire Dice';
            this.blast = '1" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }else if(this.selectorQuality === 'Fine'){
            this.name = 'Fine Plasma Executioner';
            this.type = 'e';
            this.stren = 7;
            this.die1 = 8;
            this.die2 = 8;
            this.range = 48;
            this.accX = 1;
            this.accY = 2;
            this.rof = '1 Fire Dice';
            this.blast = '1" Blast';
            this.size = 'Ordnance';
            this.delay = 'None';
            this.ordRating = 2;
            this.weightMod = 1;
          }
        
        }

      }
    },
    buy: function(){
      const obj = {};
      obj.name = this.name;
      obj.size = this.size;
      obj.type = this.type;
      obj.stren = this.stren;
      obj.die1 = this.die1;
      obj.die2 = this.die2;
      obj.range = this.range;
      obj.accX = this.accX;
      obj.accY = this.accY;
      obj.rof = this.rof;
      obj.blast = this.blast;
      obj.delay = this.delay;
      obj.ordRating = this.ordRating;
      obj.totalCost = this.totalCost;
      obj.totalWeight = this.totalWeight;
      obj.uniqueID = Date.now();
      obj.owner;

      this.gang.weapons.push(obj);
    }
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

        if(this.delay === 'None'){
          this.delayMult = 1;
        }else if(this.delay === 'Partial'){
          this.delayMult = 0.85;
        }else if(this.delay === 'Full'){
          this.delayMult = 0.666;
        }else if(this.delay === 'One Shot'){
          this.delayMult = 0.125;
        }

        this.overallMult = this.delayMult * this.sizeMult * this.rofMult * this.blastMult * this.rangeMult * this.accMult * this.ordMult * (1/this.weightMod);

        this.totalCost = this.basicValue * this.overallMult;

        this.weightMult = this.rofMult * this.blastMult * this.rangeMult * this.accMult * (1/this.ordMult);

        if(this.size === 'Pistol'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*100))*this.weightMod/50)*5;
        }else if(this.size === 'Basic'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*150))*this.weightMod/40)*5;
        }else if(this.size === 'Heavy'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*200))*this.weightMod/20)*5;
        }else if(this.size === 'Ordnance'){
          this.totalWeight = Math.ceil((this.basicValue+(this.weightMult*250))*this.weightMod/10)*5;
        }

        return Math.round(this.basicValue * this.overallMult);

    },
    isOrd: function(){
        if(this.size === "Ordnance"){
            return true;
        }else{
            return false;
        }  
    }
  }
}
</script>

<style scoped lang="scss">

</style>