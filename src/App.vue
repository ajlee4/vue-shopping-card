<template>

   <component :is="layout">
      <router-view />
    </component>

</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
   computed: {
     layout: function () {
       return (this.$route.meta.layout || "auth") + "-layout";
     },
     data() {
       return {
         test: true
       }
     },
  },
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>
