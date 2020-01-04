<template>
  <v-app>
    <toolbar></toolbar>
    <router-view> </router-view>
  </v-app>
</template>

<script>
import toolbar from "@/components/toolbar";
import { mapActions } from "vuex";
export default {
  components: {
    toolbar
  },
  middleware: ["auth"],
  methods: mapActions(["getProducts"]),
  async mounted() {
    await this.getProducts();
  }
};
</script>
