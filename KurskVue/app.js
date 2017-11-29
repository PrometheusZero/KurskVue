Vue.config.devtools = true;

const charDB = [];

function d6(){
	return Math.floor(Math.random() * 6) + 1;
}

const character = {
  movement: function(s, t){
    return Math.ceil(Math.sqrt(s) + Math.sqrt(t));
  },
  wounds: function(i, ld){
    return Math.ceil((i + ld)/20);
  },
  attack: function(ws, bs){
    return Math.ceil((ws + bs)/40);
  },
  weight: function(s, t){
    return (s*15)+(t*15)+30;
  },
  carry: function(s, t){
    return (s*30)+(t*30)+30;
  }
};

function characterConstructor(data){
  const char = {};
  char.name = data.name;
  char.rank = data.rank;
  char.ws = data.ws;
  char.bs = data.bs;
  char.s = data.s;
  char.t = data.t;
  char.i = data.i;
  char.ld = data.ld
  char.cost = data.cost;
  char.xp = data.xp;
  char.m = function(){return character.movement(this.s, this.t)};
  char.w = function(){return character.wounds(this.i, this.ld)};
  char.a = function(){return character.attack(this.ws, this.bs)};
  char.weight = function(){return character.weight(this.s, this.t)};
  char.carry = function(){return character.carry(this.s, this.t)};

  char.inventory = [];
  char.armourEquip;
  char.sheildEquip;
  char.leftHanded = data.handedness == "left" ? true : false;
  char.rightHanded = data.handedness == "right" ? true : false;
  char.leftHandEquip;
  char.rightHandEquip;

  char.inventoryWeight = function(){
		var invWgt = 0;
		for(let i=0;i<this.inventory.length;i++){
			invWgt += this.inventory[i].totalWeight();
		}
		return invWgt;
  };
  
  char.inventoryValue = function(){
		var invValue = 0;
		for(let i=0;i<this.inventory.length;i++){
			invValue += this.inventory[i].totalCost();
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

  charDB.push(char);

}

const characterCreation = new Vue({
  el: '#characterCreation',
  data: {
    charName: '',
    charRank: ''
  },
  methods: {
  	submit: function(){
    	var data = {};
      data.name = this.charName;
      data.rank = this.charRank;
      data.ws = this.charWS;
      data.bs = this.charBS;
      data.s = this.charS;
      data.t = this.charT;
      data.i = this.charI;
      data.ld = this.charLd;
      data.xp = this.charXP;
      data.cost = this.charCost;
      data.handedness = Math.random() > 0.9 ? "left" : "right";
      
      characterConstructor(data);

      this.charName = '';
      this.charRank = '';
    }
  },
  computed: {
  	charS: function(){
    	if(this.charRank === 'Leader'){
      	return 3;
      }else if(this.charRank === 'Engineer'){
      	return 3;
      }else if(this.charRank === 'Fighter'){
      	return 2;
      }else if(this.charRank === 'Green'){
      	return 1;
      }else{
      	return 0;
     	}
    },
    charT: function(){
    	if(this.charRank === 'Leader'){
      	return 3;
      }else if(this.charRank === 'Engineer'){
      	return 2;
      }else if(this.charRank === 'Fighter'){
      	return 2;
      }else if(this.charRank === 'Green'){
      	return 1;
      }else{
      	return 0;
     	}
    },
    charWS: function(){
    	if(this.charRank === 'Leader'){
      	return 60 + d6();
      }else if(this.charRank === 'Engineer'){
      	return 40 + d6();
      }else if(this.charRank === 'Fighter'){
      	return 50 + d6();
      }else if(this.charRank === 'Green'){
      	return 30 + d6();
      }else{
      	return 0;
     	}
    },
    charBS: function(){
    	if(this.charRank === 'Leader'){
      	return 60 + d6();
      }else if(this.charRank === 'Engineer'){
      	return 60 + d6();
      }else if(this.charRank === 'Fighter'){
      	return 50 + d6();
      }else if(this.charRank === 'Green'){
      	return 30 + d6();
      }else{
      	return 0;
     	}
    },
    charI: function(){
    	if(this.charRank === 'Leader'){
      	return 40 + d6();
      }else if(this.charRank === 'Engineer'){
      	return 30 + d6();
      }else if(this.charRank === 'Fighter'){
      	return 20 + d6();
      }else if(this.charRank === 'Green'){
      	return 20 + d6();
      }else{
      	return 0;
     	}
    },
    charLd: function(){
    	if(this.charRank === 'Leader'){
      	return 45 + d6();
      }else if(this.charRank === 'Engineer'){
      	return 20 + d6();
      }else if(this.charRank === 'Fighter'){
      	return 30 + d6();
      }else if(this.charRank === 'Green'){
      	return 10 + d6();
      }else{
      	return 0;
     	}
    },
    charCost: function(){
    	if(this.charRank === 'Leader'){
      	return 240;
      }else if(this.charRank === 'Engineer'){
      	return 160;
      }else if(this.charRank === 'Fighter'){
      	return 100;
      }else if(this.charRank === 'Green'){
      	return 0;
      }else{
      	return 0;
     	}
    },
    charXP: function(){
    	if(this.charRank === 'Leader'){
      	return 120;
      }else if(this.charRank === 'Engineer'){
      	return 70;
      }else if(this.charRank === 'Fighter'){
      	return 60;
      }else if(this.charRank === 'Green'){
      	return 0;
      }else{
      	return 0;
     	}
    },
  	charM: function(){
    	return character.movement(this.charS, this.charT);
    },
    charW: function(){
    	return character.wounds(this.charI, this.charLd);
    },
    charA: function(){
    	return character.attack(this.charWS, this.charBS);
    },
    charWeight: function(){
    	return character.weight(this.charS, this.charT);
    },
    charCarry: function(){
    	return character.carry(this.charS, this.charT);
    }
  }
})

const characterRoster = new Vue({
	el: '#characterRoster',
  data: {
  	chars: charDB
  }
})
