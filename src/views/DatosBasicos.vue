<template>
<div>
    <v-container>
  <!-- <Navbar/> -->
   <v-row class="text-center">      
      <v-col class="mb-4">
        <h3 class="display-2 font-weight-bold mb-3">
          Listado de Usuarios
        </h3>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
        <v-btn color="primary" :to="'/CrearEmpleado'">Agregar</v-btn>
    </v-col>
    </v-row>
<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
    <v-card>
    <!-- <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      >
      
      </v-text-field>
    </v-card-title> -->
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        dense
      :headers="headers"
      :items="usuarios"
      :search="search"
      multi-sort
    class="elevation-1"
    >
      <template v-slot:[`item.cedula`]="{ item }">
     
<v-chip class="v-chip v-chip--label theme--light v-size--small  white--text"
                    :color="`${getColor(item.cedula)} lighten-2`"
                    label
                    small
                  >
                    {{ item.cedula  }}
                  </v-chip>

    </template>
    <template v-slot:[`item.actions`]="{ item }">
    <td>
                    <v-btn :to="{params:{id_usuario:item.id_usuario}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id_usuario=item.id_usuario" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                    <v-icon color="blue">mdi-delete</v-icon>
                    <v-icon color="red">mdi-pencil</v-icon>
                </td>
    </template>
    </v-data-table>
  </v-card>
  
 <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

   <!-- <Footer/> -->
    </v-container>
  </div>
</template>

<script>
// import Navbar from '../components/includes/Navbar.vue'
// import Footer from '../components/includes/Footer.vue'
import axios from 'axios';
export default {
    components:{
        // Navbar,
        // Footer
    },
     mounted(){
        this.verUsuarios();
    },
    data(){
        return{            
            dialog:false,
            // articulos:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!',
             search: '',
        headers: [
          {
            text: 'id_usuario',
            align: 'start',
            filterable: false,
            value: 'id_usuario',
          },
          { text: 'cedula', value: 'cedula' },
          { text: 'usuario', value: 'usuario' },
          { text: 'correo', value: 'correo' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        usuarios: [],
        peticiontoken:''
        }
    },
    methods:{
         getColor (cedula) {
        if (cedula > 400) return 'red'
        else if (cedula > 200) return 'orange'
        else return 'green'
      },
        verUsuarios(){
            this.peticiontoken = localStorage.getItem("token");
            axios.get('http://localhost:3000/getUsuarios', { headers: { tokenautorizado: `Bearer ${this.peticiontoken}` } })
            .then(respuesta => {
                this.usuarios = respuesta.data.usuarios;
            })
            .catch(function(error){
                console.log(error);
            })

        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/articulos.php?id='+id)
            .then(()=>{
                    this.obtenerArticulos();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
};
</script>

<style>

</style>