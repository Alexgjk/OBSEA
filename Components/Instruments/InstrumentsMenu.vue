<template>
  <div id="instruments-menu">
    <div class="container vertical-center">

      <!-- OBSEA Buoy button-->
      <button @click="buoyButtonClicked" :title="$i18n.t('buoyButtonTitle')">
        <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
          <path id="Buoy" class="buoyLine"
            d="M237,160c-4.781-7.974-18.144-13.452-23-33-3.366-13.548-1.7-27.055,15-40a39.736,39.736,0,0,1,50,1c14.183,12.3,17.286,32.33,11,46-5.926,12.889-17.827,18.351-21,25-3.9,8.181,40.372,107.418,41,125,0.493,13.813-35.64,91.562-46.12,137.363C257.718,448.292,255.352,444.976,250,445c-4.892.022-7.635,7.094-12.936-13.772C223,375.878,189.094,301.389,189,285,188.868,261.924,242.694,169.5,237,160Z" />
          <path id="SeaSurface" class="seaLine"
            d="M0,265c0.747,0.276,26.493,59.805,50,59,25.725-.881,62.869-58,63-58,0.545,0,46.559,56.567,77,55,29.011-1.493,69.42-57,67-57-2.288,0,46.3,63.112,76,62,28.266-1.058,68.314-61,67-61-0.867,0,41.493,57.342,68,57,24.727-.319,44.789-57.065,44-57" />
        </svg>
      </button>
      <!-- OBSEA Base button-->
      <button @click="baseButtonClicked" :title="$i18n.t('baseButtonTitle')">
        <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
          <path id="Bottom" class="cls-1"
            d="M126,276c-31.347,2.3-66.907,6.877-68,17-1.185,10.969,38.5,24.815,84,38,24.781,7.18,48.159,12.666,71,17,34.2,6.49,78.043,15.249,101,19,69.82,11.409,109.658,15.441,115,3,4.621-10.762-14.418-29.868-37-48-39.528-6.831-77.4-11.849-114-15-33.912-2.92-83.278-8.127-132-24C139.217,280.79,132.66,278.5,126,276Z" />
          <path id="Side" class="cls-2"
            d="M84,193l68.168,22.424A6.587,6.587,0,0,1,159,218a6.773,6.773,0,0,1-2,9v62c1.245,1.113,2.316,2.329,2,3-0.472,1-3.838.373-5.979-.152L88.936,264.534c-5.1-2.174-9.276-7.027-9.4-10.876L79,196a3.159,3.159,0,0,1,1-3A3.231,3.231,0,0,1,84,193Zm78.728,25.969,231.8,26.87c5.984,0.694,10.812,4.688,10.764,8.913l-0.759,66.481c-0.047,4.121-4.881,6.779-10.778,5.946L165.1,294.877A8.292,8.292,0,0,1,157,287q-0.5-29.5-1-59A8.966,8.966,0,0,1,162.728,218.969Z" />
          <path id="Front" class="cls-3"
            d="M406.942,244.645L424,239a3.373,3.373,0,0,1,4,0,2.991,2.991,0,0,1,1,2q-0.774,33.149-1.547,66.3c-0.1,4.991-4.676,11.015-10.364,13.55l-10.731,4.782c-6.18,2.753-11.329.728-11.329-4.634v-62.8C395.029,252.352,400.448,246.25,406.942,244.645Z" />
          <path id="Cable1" class="cls-4"
            d="M416,276a52.137,52.137,0,0,1,23,4c15.787,6.81,19.9,18.853,34,26,9.6,4.868,20.658,6.407,33,5" />
          <path id="Cable2" class="cls-5"
            d="M420,261c12.012,0.892,22.038,4.213,30.246,9.986,8.121,5.711,12.971,15.544,25.109,21.288,3.606,1.706,10.516,3.632,17.645,4.726a86.766,86.766,0,0,0,14,1" />
          <path id="Top" class="cls-5"
            d="M85.814,190.54l161.343-37.772c4.024-.942,14.491.375,23.493,2.969l51.033,14.709c9.809,2.827,14.489,5.982,10.321,7.014L164.421,218.977c-4.618,1.144-15.8-.643-24.838-3.95L92.652,197.86C86.4,196.582,78.9,194.744,79,193,79.064,191.844,82.446,191.062,85.814,190.54ZM335,176l92.725,60.69c0.7,0.471.126,1.438-1.259,2.185L410.1,247.694a11.374,11.374,0,0,1-5.368,1.284L189,226c-11.558-.938-28.976-2.629-29-5a1.451,1.451,0,0,1,1-1l155-44a21.524,21.524,0,0,1,13-2A20.541,20.541,0,0,1,335,176Z" />
          <path id="Legs" class="cls-6"
            d="M88,260a55,55,0,0,1,7,4,46.225,46.225,0,0,1,5,4v26a9.609,9.609,0,0,1-3,4,12.415,12.415,0,0,1-6,2,16.166,16.166,0,0,1-9-2V257C83.917,257.954,86,259,88,260Zm312.5,58c3.605-2.2,6.026-2.7,7.5-2,1.727,0.826,2.654,2.851,3,5q-1,18.75-2,37.5a8.469,8.469,0,0,1-2.49,6.01A9.466,9.466,0,0,1,400.5,367a13.641,13.641,0,0,1-10.5-4q1-19,2-38A40.686,40.686,0,0,1,400.5,318Z" />
        </svg>
      </button>
      
      <!-- FPS button -->
      <button @click="fpsButtonClicked">
        <strong>FPS</strong>
      </button>
      <!-- <button>Config</button> -->

    </div>
  </div>
</template>







<script>


export default {
  name: "InstrumentsMenu",
  created() {
    
  },
  mounted() {
    
  },
  data (){
    return {
      buoyTitle: this.$i18n.t("Wind")
    }
  },
  methods: {
    // USER ACTIONS
    buoyButtonClicked: function(e){
      window.eventBus.emit('InstrumentsMenu_buoyButtonClicked');
    },
    baseButtonClicked: function (e) {
      window.eventBus.emit('InstrumentsMenu_baseButtonClicked');
    },
    // Show/hide FPS panel
    fpsButtonClicked: function(e){
      window.eventBus.emit('InstrumentsMenu_fpsButtonClicked')
    }
  },
  components: {
  }
}
</script>











<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding:0;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* Button */
button {
  background: #d7effa;
  padding: 4px;
  border: none;
}
button:hover {
  background: #ace1f9;
  border-color: #5fc9f6;
}

/* SVG */
.icon-svg:hover {
  border-radius: 50%;
  background-color: #32bffb;
}


/* OBSEA Buoy SVG style */
.buoyLine, .seaLine {
  fill: none;
  stroke: #1a1a1a;
  stroke-linecap: round;
  stroke-linejoin: bevel;
  stroke-width: 18px;
  fill-rule: evenodd;
}
/* Sea line animation */
.seaLine {
 animation: seaLine 4s alternate infinite ease-in-out; 
}
@keyframes seaLine {
  0% {
    transform: translatex(-20px);
    
  }
  50% {
    transform: translatex(20px);
  }
  100% {
    transform: translatex(-20px);
  }
}

/* Buoy animation */
.buoyLine {
  animation: buoyLine 4s alternate infinite ease-in-out;
  transform-origin: 50% 50%;
}
@keyframes buoyLine {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}



/* OBSEA Base SVG style */
  .cls-1 {
    fill: #acacac;
  }
  .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
    fill-rule: evenodd;
  }
  .cls-2, .cls-4, .cls-5 {
    fill: none;
  }
  .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
    stroke: #1a1a1a;
  }
  .cls-2, .cls-3 {
    stroke-width: 18px;
  }
  .cls-3, .cls-6 {
    fill: #1a1a1a;
  }
  .cls-4 {
    stroke-width: 10px;
  }
  .cls-5, .cls-6 {
    stroke-width: 16px;
  }


</style>