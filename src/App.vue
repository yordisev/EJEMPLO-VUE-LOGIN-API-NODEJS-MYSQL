<template>
<div v-if="validaciontoken == null || validaciontoken == '' || validaciontoken == undefined">
  <v-app>
<v-main style="background: rgb(242, 243, 248);">
<Index/>
      <!-- <router-view/> -->
    </v-main>
  </v-app>
  </div>
  <div v-else-if="$route.path!='/'">
  <v-app>
   <Navbar/>
<v-main style="background: rgb(242, 243, 248);">
      <router-view/>
    </v-main>
<Footer/>
  </v-app>
  </div>
</template>

<script>
import Navbar from './components/includes/Navbar.vue'
import Footer from './components/includes/Footer.vue'
import Index from './views/Index.vue'
export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
    Index
  },
  data(){
    return{
     validaciontoken:''
    }
  },
created(){
  this.validaciontoken = localStorage.getItem("token");
}

};
</script>
