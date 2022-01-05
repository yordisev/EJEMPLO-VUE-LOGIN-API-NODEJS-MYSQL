
<template>
  <v-app id="inspire">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window >
                <v-window-item>
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 primary--text text--accent-3"
                        >Iniciar Sesion TH</h1>
                        <div class="text-center mt-4">
                          <!-- <v-btn class="mx-2" fab color="black" outlined>
                           <v-icon size="50">mdi-account-group</v-icon>
                          </v-btn> -->

                          <v-btn class="mx-2" fab color="primary" outlined>
                         <v-icon size="90" style="color: #1976d2;">mdi-account-circle</v-icon>
                          </v-btn>
                          <!-- <v-btn class="mx-2" fab color="black" outlined>
                           <v-icon size="50">mdi-account-group</v-icon>
                          </v-btn> -->
                        </div>
                        <h4 class="text-center mt-4">Bienvenido A su Sistema de Gestion Humana</h4>
                        <v-form v-on:submit.prevent="login">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginEmail"  prepend-icon="mdi-account"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field type="password" v-model="loginPassword" prepend-icon="mdi-key-variant"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                        </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                         <div class="text-center mt-3">
                        <v-btn x-large type="submin" color="primary"> Ingresar </v-btn>
                      </div>
                                </v-form>
                        <h3 class="text-center mt-4">Olvido Contraseña ?</h3>
                      </v-card-text>
                     
                    </v-col>
                    <v-col cols="12" md="4" class="primary accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Gestion Integral!</h1>
                        <h5
                          class="text-center"
                        >Sistema Integral Es una Plataforma Para que lleves un mejor control en el area de gestion humana</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name:"Home",
  components: {},
  data: function() {
    return {
       dialog: true,
    tab: 0,
    valid: true,
    loginPassword: "yordis",
    loginEmail: "yordis.escorcia",
    show1: false,
    token:"",
    };
  },
  methods: {
    login() {
      let loginacceso = {
        usuario: this.loginEmail,
        password: this.loginPassword,
      };

      axios
        .post("login", loginacceso)
        .then((data) => {
          console.log(data.data.estatus);
          if (!data.data.estatus) {
            const {nombre,usuario,correo} = data.data.user[0];
            this.token = data.data.token;
            sessionStorage.setItem("token", this.token);
             localStorage.setItem("token", this.token);
            sessionStorage.setItem("nombre", nombre);
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("correo", correo);
             this.$swal.fire(
              'Bienvenido',
              'Session Iniciada Correctamente',
              'success'
            ).then(function(){
    location.reload();
});
            this.$router.push('inicio');
          } else {
            this.$swal.fire(
              'Ups!!',
              'Usuario o Contraseña Incorrectos',
              'error'
            )
          }
        });
    },
  },
};
</script>
