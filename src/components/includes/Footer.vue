<template>
 
  


  <footer class="v-footer font-weight-medium shadow-sm ma-4 rounded-lg v-sheet theme--light rounded-0 v-footer--inset white" data-booted="true" style="height: 80px;">
    <div class="text-left col col-12">
      <div class="text-center align-center">
        <div><a href="https://store.vuetifyjs.com/products/octavia-admin-pro" target="_blank" class="v-btn v-btn--has-bg theme--light v-size--default primary"><v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn></a>
        </div>
         <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
        </div>
        </div>
        </footer>
</template>
<script>
  export default {
   data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>