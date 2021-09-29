<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button @click="goToDoDayBook" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    goToDoDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
