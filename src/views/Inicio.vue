<template>
<div>
  <v-container>
    
    <div class="row">
      <div v-for="municipios in personaltotal" :key="municipios.nom_seccional">
      <div class="col-12">
        <div
          class="mx-auto v-card v-sheet theme--light primary"
          style="
            max-width: 100%;
            box-shadow: rgba(47, 60, 74, 0.01) 0px 8px 32px,
              rgba(47, 60, 74, 0.02) 0px 8px 16px;
          "
        >
          <div class="v-skeleton-loader theme--light">
            <div class="v-card__text d-flex align-center h-full">
              <div
                class="
                  d-flex
                  flex-grow-1
                  justify-space-between
                  align-center
                  flex-wrap
                "
              >
                <div>
                  <p class="ma-0 white--text">{{municipios.nom_seccional}}</p>
                  <div class="text-h5 white--text ma-0">{{municipios.total_municipios}}</div>
                </div>
                <i
                  aria-hidden="true"
                  class="
                    v-icon
                    notranslate
                    text-h3
                    mdi mdi-numeric-9-plus-circle-outline
                    theme--light
                    primary--text
                    text--lighten-2
                  "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- <div class="col-md-4 col-12">
        <div
          class="mx-auto v-card v-sheet theme--light info"
          style="
            max-width: 100%;
            box-shadow: rgba(47, 60, 74, 0.01) 0px 8px 32px,
              rgba(47, 60, 74, 0.02) 0px 8px 16px;
          "
        >
          <div class="v-skeleton-loader theme--light">
            <div class="v-card__text d-flex align-center h-full">
              <div
                class="
                  d-flex
                  flex-grow-1
                  justify-space-between
                  align-center
                  flex-wrap
                "
              >
                <div>
                  <p class="ma-0 white--text">Etherium</p>
                  <div class="text-h5 white--text ma-0">73.90 USDT</div>
                </div>
                <i
                  aria-hidden="true"
                  class="
                    v-icon
                    notranslate
                    text-h3
                    mdi mdi-numeric-9-plus-circle-outline
                    theme--light
                    info--text
                    text--lighten-2
                  "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div
          class="mx-auto v-card v-sheet theme--light warning"
          style="
            max-width: 100%;
            box-shadow: rgba(47, 60, 74, 0.01) 0px 8px 32px,
              rgba(47, 60, 74, 0.02) 0px 8px 16px;
          "
        >
          <div class="v-skeleton-loader theme--light">
            <div class="v-card__text d-flex align-center h-full">
              <div
                class="
                  d-flex
                  flex-grow-1
                  justify-space-between
                  align-center
                  flex-wrap
                "
              >
                <div>
                  <p class="ma-0 white--text">Doge Coin</p>
                  <div class="text-h5 white--text ma-0">14.30 USDT</div>
                </div>
                <i
                  aria-hidden="true"
                  class="
                    v-icon
                    notranslate
                    text-h3
                    mdi mdi-numeric-9-plus-circle-outline
                    theme--light
                    warning--text
                    text--lighten-2
                  "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </v-container>
    
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    components:{
    },

data(){
  return{
        totalpersona:"",

  }
},

 created() {
    this.listar();
  },
  computed: {
    ...mapState("datosinicio", ["personaltotal", "article"]),
  },
      methods: {
    ...mapActions("datosinicio", [
      "getArticle",
      "getPersonaltotal",
    
    ]),
    
    listar() {
    this.getPersonaltotal();
    console.log(this.getPersonaltotal())
    },
  },
};
</script>

<style>
</style>