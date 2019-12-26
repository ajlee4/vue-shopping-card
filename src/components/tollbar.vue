<template>
  <div>
    <v-toolbar class="toolbar">
      <v-container>
        <div class="toolbar__inner">
          <v-toolbar-title>Shopping Card</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items> </v-toolbar-items>

          <template v-if="$vuetify.breakpoint.smAndUp">
            <router-link to="/basket">
              <v-badge color="green" overlap>
                <template v-slot:badge>
                  <span v-if="product > 0">{{ product }}</span>
                </template>

                <v-icon large>mdi-cart</v-icon>
              </v-badge>
            </router-link>
          </template>
        </div>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    product() {
      return this.$store.getters.addProduct;
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  &__inner {
    display: flex;
    align-items: center;
  }
}
</style>
