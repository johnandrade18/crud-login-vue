<template>
  <v-app>
    <v-app-bar app color="teal lighten-2" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-img
          alt="Name"
          class="shrink"
          contain
          min-width="200"
          src="@/assets/images/logo.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn large text class="hidden-sm-and-down btn__primary">
        <router-link class="btn__secundary" v-if="!existeUsuario" to="/">
          <span class="mr-2">Ingresar</span>
        </router-link>
      </v-btn>
      <v-btn large text class="hidden-sm-and-down btn__primary">
        <router-link class="btn__secundary" v-if="!existeUsuario" to="/signin">
          <span class="mr-2">Registrar</span>
        </router-link>
      </v-btn>
      <v-btn
        @click="cerrarSesion"
        large
        text
        class="hidden-sm-and-down btn__primary"
        v-if="existeUsuario"
      >
        <span class="mr-2">Salir</span>
        <!-- <v-icon size="15">mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link class="btn__primary" to="/">Ingresar</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link class="btn__primary" to="/singin"
              >Registrar</router-link
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn text @click="cerrarSesion" class="btn__primary left__item"
              >Salir</v-btn
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <router-view />
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >CopyRight © 2020. Todos los derechos reservados, desarrollado por:
            John Andrade</strong
          >
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["existeUsuario"]),
    ...mapState(["usuario"]),
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
#nav {
  padding: 25px;
}
a.btn__primary {
  color: rgb(95, 93, 93) !important;
  text-decoration: none !important;
  list-style: none !important;
}
a.btn__secundary {
  color: #fff !important;
  text-decoration: none !important;
  list-style: none !important;
}

.left__item {
  justify-content: end !important;
  padding: 0 !important;
  font-weight: 400 !important;
}

.left__item::before {
  opacity: 0 !important;
}
.fill-height {
    height: 80% !important;
}
.v-application--wrap {
  min-height: 87vh !important;
}

</style>
