<template>
  <div>card inner</div>
</template>

<script>
export default {
  name: "Card",
 
  computed: {
    productId() {
      return this.$route.params.id;
    }
  }
};
</script>