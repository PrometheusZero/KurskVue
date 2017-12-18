<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="2">Creation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name: </td>
          <td>
            <input type="text" v-model="name">
          </td>
        </tr>
        <tr>
          <td>Rank: </td>
          <td>
            <select v-model="rank">
              <option>Leader</option>
              <option>Engineer</option>
              <option>Fighter</option>
              <option>Green</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Cost: </td>
          <td>{{ charCost }}</td>
        </tr>
        <tr>
          <td id="buyWrap" colspan="2">
            <input type="button" v-show="buyVisible" v-on:click="buy()" value="BUY">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
function d6(){
    return Math.floor(Math.random() * 6) + 1;
}

export default {
  props: ['gang'],
  data: function() {
    return {
      name: '',
      rank: ''
    }
  },
  methods: {
    buy: function(){
        const char = {};
        char.name = this.name;
        char.rank = this.rank;
        char.ws = this.charWS;
        char.bs = this.charBS;
        char.s = this.charS;
        char.t = this.charT;
        char.i = this.charI;
        char.ld = this.charLd
        char.cost = this.charCost;
        char.xp = this.charXP;
        char.m = function(){return Math.ceil(Math.sqrt(this.s) + Math.sqrt(this.t));};
        char.w = function(){return Math.ceil((this.i + this.ld)/20);};
        char.a = function(){return Math.ceil((this.ws + this.bs)/40);};
        char.weight = function(){return (this.s*15)+(this.t*15)+30;};
        char.carry = function(){return (this.s*30)+(this.t*30)+30;};

        char.inventory = [];  
        char.armourEquip;
        char.sheildEquip;
        if(Math.random() > 0.95){
            char.leftHanded = true;
            char.rightHanded = false;
        }else{
            char.leftHanded = false;
            char.rightHanded = true;
        }
        char.leftHandEquip;
        char.rightHandEquip;

        char.inventoryWeight = function(){
                var invWgt = 0;
                for(let i=0;i<this.inventory.length;i++){
                    invWgt += this.inventory[i].totalWeight;
                }
                return invWgt;
        };
        
        char.inventoryValue = function(){
                var invValue = 0;
                for(let i=0;i<this.inventory.length;i++){
                    invValue += this.inventory[i].totalCost;
                }
                return invValue;
        };
        
        char.encumbrance = function(){
                if(this.inventoryWeight() > this.carry()){
                    return (this.inventoryWeight() / this.carry());
                }else{
                    return 1;
                }
        };
        
        char.totalMove = function(){
            return this.m / this.encumbrance;
        };

        char.totalValue = function(){
            return this.cost + this.inventoryValue;
        };

        char.totalWeight = function(){
            return this.weight + this.inventoryWeight;
        };

        this.gang.characters.push(char);

        this.name = '';
        this.rank = '';
    }
  },
  computed: {
    buyVisible: function(){
        if(this.name && this.rank){
            return true;
        }else{
            return false;
        }
    },
    charCost: function(){
      if(this.rank === 'Leader'){
      	return 240;
      }else if(this.rank === 'Engineer'){
      	return 160;
      }else if(this.rank === 'Fighter'){
      	return 100;
      }else if(this.rank === 'Green'){
      	return 0;
      }else{
      	return '';
     	}
    },
    charS: function(){
      if(this.rank === 'Leader'){
      	return 3;
      }else if(this.rank === 'Engineer'){
      	return 3;
      }else if(this.rank === 'Fighter'){
      	return 2;
      }else if(this.rank === 'Green'){
      	return 1;
      }else{
      	return 0;
     	}
    },
    charT: function(){
      if(this.rank === 'Leader'){
      	return 3;
      }else if(this.rank === 'Engineer'){
      	return 2;
      }else if(this.rank === 'Fighter'){
      	return 2;
      }else if(this.rank === 'Green'){
      	return 1;
      }else{
      	return 0;
     	}
    },
    charWS: function(){
      if(this.rank === 'Leader'){
      	return 60 + d6();
      }else if(this.rank === 'Engineer'){
      	return 40 + d6();
      }else if(this.rank === 'Fighter'){
      	return 50 + d6();
      }else if(this.rank === 'Green'){
      	return 30 + d6();
      }else{
      	return 0;
     	}
    },
    charBS: function(){
      if(this.rank === 'Leader'){
      	return 60 + d6();
      }else if(this.rank === 'Engineer'){
      	return 60 + d6();
      }else if(this.rank === 'Fighter'){
      	return 50 + d6();
      }else if(this.rank === 'Green'){
      	return 30 + d6();
      }else{
      	return 0;
     	}
    },
    charI: function(){
      if(this.rank === 'Leader'){
      	return 40 + d6();
      }else if(this.rank === 'Engineer'){
      	return 30 + d6();
      }else if(this.rank === 'Fighter'){
      	return 20 + d6();
      }else if(this.rank === 'Green'){
      	return 20 + d6();
      }else{
      	return 0;
     	}
    },
    charLd: function(){
      if(this.rank === 'Leader'){
      	return 45 + d6();
      }else if(this.rank === 'Engineer'){
      	return 20 + d6();
      }else if(this.rank === 'Fighter'){
      	return 30 + d6();
      }else if(this.rank === 'Green'){
      	return 10 + d6();
      }else{
      	return 0;
     	}
    }, 
    charXP: function(){
      if(this.rank === 'Leader'){
      	return 120;
      }else if(this.rank === 'Engineer'){
      	return 70;
      }else if(this.rank === 'Fighter'){
      	return 60;
      }else if(this.rank === 'Green'){
      	return 0;
      }else{
      	return 0;
      }
    },  
  }
}
</script>

<style lang="scss">
#buyWrap {
    height: 1.5em;
}
</style>