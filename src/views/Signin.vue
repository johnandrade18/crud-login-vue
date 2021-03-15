<template>
<v-container class="height__100 mt__1">
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark class="teal lighten-2">
                <v-toolbar-title class="center"
                  >Registro Usuario</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <v-form
                  @submit.prevent="
                    crearUsuario({ email: email, password: pass1 })
                  "
                >
                  <v-text-field
                    prepend-icon="email"
                    label="Email"
                    type="email"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    label="Contraseña"
                    type="password"
                    v-model="pass1"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    label="Confirme su contraseña"
                    type="password"
                    v-model="pass2"
                  ></v-text-field>
                  <v-btn text class="btn__block teal lighten-2" type="submit" :disabled="!desactivar"
                    >Registrar</v-btn
                  >
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Signin",
  props: {
    source: String,
  },
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["crearUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1.trim() !== "" && this.pass1.length > 5;
    },
  },
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.v-btn:not(.v-btn--round).btn__block{
    min-width: 100% !important;
    margin-top: 15px;
    color: #fff !important;
}
.height__100{
    height: 100% !important;
}
.mt__1{
    margin-top: 3%;
}
.v-application--wrap {
  min-height: 80vh !important;
}
</style>
