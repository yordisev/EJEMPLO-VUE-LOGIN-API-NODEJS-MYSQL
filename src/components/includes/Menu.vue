<template>
          <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item :to="'/Inicio'">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>DASHBOARD</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="false"
        prepend-icon="mdi-account-circle"
      >
        <template slot="activator">
          <v-list-item-title>USUARIOS</v-list-item-title>
        </template>
 <v-list-item
            v-for="([title, icon, enlace], i) in admins"
            :key="i"
           :to="enlace"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
      </v-list-group>
      <!-- ------------------------------------------------------ -->
       <v-list-group
        :value="false"
        prepend-icon="mdi-finance"
      >
        <template slot="activator">
          <v-list-item-title>FINANCIERA</v-list-item-title>
        </template>
  <v-list-item :to="'/ingresos'">
            <v-list-item-title><v-icon color="primary">mdi-account</v-icon> Ingresos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/egresos'">
            <v-list-item-title> <v-icon color="primary">mdi-account-multiple</v-icon> Egresos</v-list-item-title>
          </v-list-item>
      </v-list-group>
      <!-- --------------------------------------------------------------------- -->
    </v-list>
  </v-card>
</template>

<script>
export default {
data: () => ({
  value:true,
      admins: [
        ['Datos Basicos', 'mdi-account-multiple-outline','/datosbasicos'],
        ['Actualizar Datos', 'mdi-cog-outline', '/editarf'],
      ]
    }),
}
</script>

<style>

</style>