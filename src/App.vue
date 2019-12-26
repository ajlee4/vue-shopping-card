<template>
  <v-app>
    <toolbar></toolbar>
    <router-view> </router-view>
  </v-app>
</template>

<script>
import toolbar from "./components/tollbar";
import { mapActions } from "vuex";
export default {
  components: {
    toolbar
  },
  methods: mapActions(["getProducts"]),
  async mounted() {
    await this.getProducts();
  }
};
</script>
<style lang="scss"></style>
