<template>
 <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
       {{datos.nombre}}
        <v-icon v-bind="attrs" v-on="on" size="36">mdi-account-multiple</v-icon>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{datos.usuario}}</v-list-item-title>
              <v-list-item-subtitle>{{datos.correo}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="cerrarsession()"
          >
           Cerrar Sesion
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menu = false"
          >
           Editar Perfil
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
 data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
      datos:{
        nombre:"",
        usuario:"",
        correo:""
      }
    }),
    created(){
      this.datos.nombre = sessionStorage.getItem("nombre");
       this.datos.usuario = sessionStorage.getItem("usuario");
       this.datos.correo = sessionStorage.getItem("correo");
    },
    methods:{
cerrarsession(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.$router.push("/");
    location.reload(true);
//      this.$swal.fire({
//               icon: 'success',
//               title: 'Session Cerrada',
//               text:'Session Cerrarda Correctamente',
//               allowOutsideClick: false
//             }).then(function(){
//     location.reload();
// });
}
  },
}
</script>

<style>

</style>