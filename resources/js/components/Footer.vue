<template>
  <footer class="footer">
    <!-- Nueva sección CTA dentro del footer -->
    <div class="footer-cta">
      <h2>«Soluciones Tecnológicas a Entera Satisfacción»</h2>
      <p>Contáctanos y lleva tu empresa al siguiente nivel</p>
      <router-link to="/contacto" class="cta-button">Contáctanos</router-link>
    </div>

    <!-- Pie de página original -->
    <div class="footer-bottom">
      <p>Copyright © {{ year }} Arsite Integradores</p>
      <a
        href="https://arsite.com.mx/terminos-y-condiciones/"
        target="_blank"
        rel="noopener"
      >
        Términos y condiciones
      </a>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: #78c2e7;
  color: white;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

/* Estilos para la nueva sección CTA */
.footer-cta {
  text-align: center;
  padding: 40px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.footer-cta h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 400;
}

.footer-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #78c2e7;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.cta-button:hover {
  background: transparent;
  color: white;
}

/* Pie de página inferior */
.footer-bottom {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.footer-bottom a {
  color: white;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-cta h2 {
    font-size: 1.5rem;
  }

  .footer-cta p {
    font-size: 1rem;
  }
}
</style>