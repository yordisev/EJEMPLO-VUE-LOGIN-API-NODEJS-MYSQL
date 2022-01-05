<template>
<div>
  <v-navigation-drawer
      v-model="drawer"
     :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
    >
      <v-list
        nav
        dense
      >
        <!-- <v-list-item-group
          v-model="group"
          active-class="blue lighten-3--text text--accent-4"
         
          
        >
          <v-list-item :to="'/Inicio'">
            <v-list-item-title> <v-icon  color="white"  size="36">mdi-home-city-outline</v-icon> INICIO</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
        
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                
                <v-list-item-title> <v-icon color="white" size="36">mdi-account-group</v-icon> EMPLEADOS </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
             <v-list-item :to="'/datosbasicos'">
            <v-list-item-title><v-icon color="white">mdi-account</v-icon> Datos Basicos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/Usuarios'">
            <v-list-item-title> <v-icon color="white">mdi-account-multiple</v-icon> Usuarios</v-list-item-title>
          </v-list-item>
          </v-list-group>
        </template>
        
        <v-list-item :to="'/Informes'">
            <v-list-item-title> <v-icon color="white" size="36">mdi-monitor-dashboard</v-icon> INFORMES</v-list-item-title>
          </v-list-item> -->
  <Menu/>
      </v-list>
    </v-navigation-drawer>
     <v-app-bar
     :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <v-icon  size="36">mdi-account-multiple</v-icon>
      
      <span class="hidden-sm-and-down">TALENTO</span> 
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>  
 </v-toolbar-title>
      <v-spacer></v-spacer>

     
        <Drawer/>
        
    </v-app-bar>
<br>
<br>
<br>
 </div>
</template>

<script>
import Drawer from './Drawer.vue'
import Menu from './Menu.vue'
export default {
components:{
Drawer,
Menu
},
  data: () => ({
      drawer: true,
      group: null

    }),

 
    watch: {
      group () {
        this.drawer = false
      },
    }
}
</script>

<style>

</style>