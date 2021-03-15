<template>
<v-container class="height__100 mt__3">
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark class="teal lighten-2">
                <v-toolbar-title class="center"
                  >Ingreso Usuario</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <v-form
                  @submit.prevent="
                    ingresoUsuario({ email: email, password: pass })
                  "
                >
                  <v-text-field
                    prepend-icon="mdi-email"
                    label="Email"
                    type="email"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Contraseña"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="showPassword = !showPassword"
                    v-model="pass"
                  ></v-text-field>
                  <v-btn text class="btn__block teal lighten-2" type="submit">Ingresar</v-btn>
                </v-form>
                <p class="mt-5">{{error}}</p>
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
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      email: "",
      pass: "",
      showPassword:""
    };
    
  },
 
  created() {},
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
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
.mt-5{
    margin-top: 5%;
}
.v-btn:not(.v-btn--round).btn__block{
    min-width: 100% !important;
    margin-top: 15px;
    color: #fff !important;
}
.mt__3{
    margin-top: 3%;
}
.v-application--wrap {
  min-height: 80vh !important;
}
</style>
