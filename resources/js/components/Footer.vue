<template>
  <footer class="footer">
    <p>Copyright © {{ year }} Arsite Integradores</p>
    <a
      href="https://arsite.com.mx/terminos-y-condiciones/"
      target="_blank"
      rel="noopener"
    >
      Terminos y condiciones
    </a>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  padding: 50px;
  background: #78c2e7;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  flex-wrap: wrap;

  width: 100%;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
