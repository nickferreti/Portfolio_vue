<template>
  <v-app>
    <v-main>
      <mainPage />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import mainPage from "./components/mainPage.vue";

export default Vue.extend({
  name: "App",

  components: {
    mainPage,
  },

  data: () => ({
    //
  }),
});
</script>
