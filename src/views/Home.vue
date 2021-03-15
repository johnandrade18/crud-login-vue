<template>
  <v-container class="mt__10 height__100">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      headers: [
        { text: "id", value: "id" },
        { text: "Nombre", value: "name" },
        { text: "Salario", value: "salary" },
        { text: "Accion", value: "actions" },
      ],
      desserts: [],
    }
  },
  mounted() {
    this.getClientes();
  },
  methods: {
    getClientes() {
      axios
        .get("http://localhost:3000")
        .then((response) => {
          this.desserts = response.data
          console.log(this.d)
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.mt__10 {
  margin-top: 10% !important;
}
.bg__danger {
  background-color: red;
  color: #fff !important;
}

.bg__sucess {
  background-color: green;
  color: #fff !important;
}
.v-application--wrap {
  min-height: 100vh !important;
}
.height__100 {
  height: 100% !important;
}
</style>
