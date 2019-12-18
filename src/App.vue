<template>
  <v-app>
     <v-container>
     <toolbar></toolbar>
   <router-view>
</router-view>
  </v-container>
 
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
