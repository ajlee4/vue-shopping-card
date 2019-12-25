<template>
  <v-app>
     <toolbar></toolbar>
   <router-view>
</router-view>
  </v-app>
</template>

<script>
import toolbar from './components/tollbar'

export default {
    components: {
    toolbar,
  
  },

};
</script>
