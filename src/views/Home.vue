<template>
  <v-container class="mt__10 height__100">
    <ModalCrear/>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Salario</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
            <td>
                <v-btn class="orange darken-3 text-white pr-2">Editar</v-btn>
                <v-btn class="red darken-4 text-white pl-2">Borrar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import ModalCrear from '../components/ModalCrear.vue';
import Servicios from '../servicios'
export default {
  name: "Home",
  components:{ 
      ModalCrear,
  },
  data() {
      return {
          desserts: [],
      }
  },
  Servicios : null,
  created() {
      this.Servicios = new Servicios();
  },
  mounted() {
      this.getAll();
  },
  methods: {
      getAll(){
          this.Servicios.getAll().then(data =>{
          this.desserts = data.data
      })
      }
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
.text-white{
    color: #fff !important;
}

.pr-2{
    margin-right: 2px;
}
.pl-2{
    margin-left: 2px;
}
</style>
