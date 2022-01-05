<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <v-form v-model="valid"> -->
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="6" md="4">
            <v-btn x-large @click="buscarCedula(numerocedula)" color="success"
              >Aceptar</v-btn
            >
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              type="number"
              v-model="numerocedula"
              label="Buscar por numerocedula"
              solo
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-btn x-large color="primary" @click.stop="dialog = true"
              >Buscar</v-btn
            >
          </v-col>

          <!-- ventana de diálogo para eliminar registros -->
          <v-dialog v-model="dialog" max-width="350">
            <v-card>
              <v-card-title class="headline"
                >¿Desea eliminar el registro?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="success"
                  >Aceptar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- componente snackbar para mostrar mensaje de eliminación -->

          <!-- ------------------------------------- -->
          <template v-if="datousuario.cedula != ''">
           <div class="col-xl-4 col-12">
  <div class="v-card v-sheet theme--light">
    <div class="v-card__text red--text text--darken-4">
       <v-col cols="12" sm="6" md="3">
              <v-text-field v-model="datousuario.cedula"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field v-model="datousuario.usuario"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="datousuario.correo"
                label="Solo"
                placeholder="Placeholder"
                solo
              ></v-text-field>
            </v-col>
            <v-row align="center" justify="space-around">
              <v-btn depressed color="primary">
                <v-icon left> mdi-pencil </v-icon>
                Editar
              </v-btn>
            </v-row>
       </div>
       </div>
       </div>
          </template>
          <!-- -------------------------------------------- -->
        </v-row>



        <div class="row">
          <div class="col-md-6 col-12">
            <div class="v-card--material mt-4 v-card v-sheet theme--light">
              <div class="v-card__title align-start">
                <div
                  class="
                    overflow-hidden
                    mt-n9
                    transition-swing
                    v-card--material__sheet
                    v-sheet
                    theme--light
                    elevation-6
                    rounded
                    accent
                  "
                  style="max-width: 100%"
                >
                  <div class="pa-7">
                    <i
                      aria-hidden="true"
                      class="v-icon notranslate mdi mdi-mail theme--dark"
                    ></i>
                  </div>
                </div>
                <div class="text-h4 pl-4 v-card--material__title">
                  Register Form
                  <div class="text-subtitle-1 mb-n2"><!----></div>
                </div>
              </div>
              <div class="v-card__text">
               <h1>input aqui</h1>
              </div>
              <!---->
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="v-card--material mt-4 v-card v-sheet theme--light">
              <div class="v-card__title align-start">
                <div
                  class="
                    overflow-hidden
                    mt-n9
                    transition-swing
                    v-card--material__sheet
                    v-sheet
                    theme--light
                    elevation-6
                    rounded
                    accent
                  "
                  style="max-width: 100%"
                >
                  <div class="pa-7">
                    <i
                      aria-hidden="true"
                      class="
                        v-icon
                        notranslate
                        mdi mdi-camera-account
                        theme--dark
                      "
                    ></i>
                  </div>
                </div>
                <div class="text-h4 pl-4 v-card--material__title">
                  Login Form
                  <div class="text-subtitle-1 mb-n2"><!----></div>
                </div>
              </div>
              <div class="v-card__text">
                <form novalidate="novalidate" class="v-form">
                  <div
                    class="
                      v-input
                      theme--light
                      v-text-field v-text-field--is-booted
                    "
                  >
                    <div class="v-input__control">
                      <div class="v-input__slot">
                        <div class="v-text-field__slot">
                          <label
                            for="input-795"
                            class="v-label theme--light"
                            style="left: 0px; right: auto; position: absolute"
                            >Email Address*</label
                          ><input id="input-795" type="text" />
                        </div>
                      </div>
                      <div class="v-text-field__details">
                        <div class="v-messages theme--light">
                          <div class="v-messages__wrapper"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      v-input
                      theme--light
                      v-text-field v-text-field--is-booted
                    "
                  >
                    <div class="v-input__control">
                      <div class="v-input__slot">
                        <div class="v-text-field__slot">
                          <label
                            for="input-798"
                            class="v-label theme--light"
                            style="left: 0px; right: auto; position: absolute"
                            >Password*</label
                          ><input id="input-798" type="password" />
                        </div>
                        <div class="v-input__append-inner">
                          <div class="v-input__icon v-input__icon--append">
                            <button
                              type="button"
                              aria-label="append icon"
                              class="
                                v-icon
                                notranslate
                                v-icon--link
                                mdi mdi-eye-off
                                theme--light
                              "
                            ></button>
                          </div>
                        </div>
                      </div>
                      <div class="v-text-field__details">
                        <div class="v-messages theme--light">
                          <div class="v-messages__wrapper"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="v-card__actions pa-0">
                    <div class="spacer"></div>
                    <button type="button" class="mr-2 mb-2 v-btn v-btn--contained theme--light v-size--default success"><span class="v-btn__content"> success </span></button>
                  </div>
                </form>
              </div>
              <!---->
            </div>
          </div>
   
        </div>
      </v-container>
    </v-form>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Navbar from "../components/includes/Navbar.vue";
// import Footer from "../components/includes/Footer.vue";
import axios from "axios";
export default {
  components: {
    // Navbar,
    // Footer,
  },
  data() {
    return {
      dialog: false,
      numerocedula: "",
      // valid:null,
      datousuario: {
        cedula: "",
        correo: "",
        usuario: "",
      },
      peticiontoken: "",
    };
  },
  methods: {
    buscarCedula(numerocedula) {
      this.peticiontoken = localStorage.getItem("token");
      const bodyParameters = {
        cedula: numerocedula,
      };
      const tokenpeticion = {
        tokenautorizado: `Bearer ${this.peticiontoken}`,
      };
      axios
        .get("http://localhost:3000/getUser", {
          params: bodyParameters,
          headers: tokenpeticion,
        })
        .then((respuesta) => {
          this.datousuario = respuesta.data.user;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>