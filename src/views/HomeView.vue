<script setup>
</script>

<template>
  <main>
    <section class="wrapper">
      <div class="title-container">
        <h1 class="title animate-slide">
          Optimize Operations with our Airport Solutions, Venues, and Strategic Business Insights.
      </h1>
      <p class="description">
        Unlock B2B success with <strong>CAUV </strong>, seamlessly connecting businesses to strategic airports, 
        curated venues, and growth opportunities. Elevate operations and navigate corporate expansion effortlessly.
         Your gateway to efficient, tailored solutions for unparalleled business aviation.
      </p>
      </div>
    </section>
  </main>
</template>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 35rem;
}

.title-container {
  width: 54.5rem;
}

.title {
  font-size: 3em;
  line-height: 1.2;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

.title::first-letter {
  font-size: 4rem;
}
.description {
  margin-top: 1.4rem;
}

h1 {
  font-weight: bold;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Apply animation to an element with the 'animate-slide' class */
.animate-slide {
  animation: slideIn 1s ease-in-out;
}
</style>