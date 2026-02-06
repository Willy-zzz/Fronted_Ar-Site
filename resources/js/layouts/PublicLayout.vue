<template>
  <div>
    <Navbar />

    <main class="content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
