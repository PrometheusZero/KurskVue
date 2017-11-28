var app1 = new Vue({
  el: '#app',
  data: {
    charName: '',
    charRank: ''
  },
  methods: {
  	submit: function(){
    	var data = {};
      data.name = this.charName;
      data.rank = this.charRank;
      data.s = this.charS;
      data.t = this.charT;
      data.ws = this.charWS;
      data.bs = this.charBS;
      
      charDB.push(data);
      console.log(charDB);
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
    	return Math.ceil(Math.sqrt(this.charS) + Math.sqrt(this.charT));
    },
    charW: function(){
    	return Math.ceil((this.charI + this.charLd)/20);
    },
    charA: function(){
    	return Math.ceil((this.charWS+this.charWS)/40);
    },
    charWeight: function(){
    	return (this.charS*15)+(this.charT*15)+30;
    },
    charCarry: function(){
    	return (this.charS*30)+(this.charT*30)+30;
    }
  }
})

function d6(){
	return Math.floor(Math.random() * 6) + 1;
}

var charDB = [];

var app2 = new Vue({
	el: '#app2',
  data: {
  	chars: charDB
  }
})
