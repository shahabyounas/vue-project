<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const menus = ref([
  { id: '1', name: 'Home', path: "/" },
  { id: '2', name: 'Airports', path: "/airports" },
  { id: '3', name: 'Runways', path: "/runways" },
  { id: '4', name: 'MyDrive', path: "/mydrive" },
  { id: '5', name: 'Parking', path: "/parking" },
  { id: '6', name: 'About', path: "/about" },
])
</script>

<template>
  <header class="wrapper">
    <h2>
        CAVU AIPORTS
    </h2>
    <nav class="navbar">
      <ul class="menus">
        <li v-for="menu in menus" :todo="menu" :key="menu.id">
            <RouterLink :to="menu.path"> {{ menu.name}} </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

h2 {
    font-weight: bolder;
    padding: 0 2rem;
}
.wrapper {
    display: flex;
    /* position: fixed; */
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    height: 5rem;
    width: 100%;
    align-items: center;
}

.menus {
  display: flex;
  flex-wrap: wrap;
}

ul li {
  list-style-type: none;
}

li a {
  color: var(--color-text);
  width: 6.5rem;
  text-align: center;
}

li a:hover {
  background-color: transparent;
}
li a.router-link-exact-active {
  color: black;
  font-weight: bold;
}

li a.router-link-exact-active:hover {
  background-color: transparent;
}

li a {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 2rem;
}

</style>
