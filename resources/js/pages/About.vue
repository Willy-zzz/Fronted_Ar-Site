<template>
  <section class="about">

    <!-- HERO -->
    <div class="hero">
      <h1>Nosotros</h1>
      <div class="experience">
        <span class="years">18</span>
        <span>Años de Experiencia</span>
      </div>
    </div>

    <!-- DESCRIPCIÓN -->
    <div class="content">
      <p>
        Los alcances de nuestros productos y servicios incluyen redes de datos inalámbricas 
        de banda ancha WAN y LAN, WiMAX, fibra óptica, voz IP, CCTV circuito cerrado de TV 
        análogo y digital, virtualización, almacenamiento, switches de alto desempeño, 
        seguridad, recuperación de desastres, aceleración WAN y servidores.
      </p>

      <p>
        Ofrecemos productos con tecnología de vanguardia que cuentan con garantía y servicio,
        brindando un valor agregado al mejor precio del mercado.
      </p>
    </div>

    <!-- MISIÓN Y VISIÓN -->
    <div class="grid-2">
      <div class="card">
        <h2>Misión</h2>
        <p>
          Ser una empresa líder en integración de tecnologías de información y 
          telecomunicaciones en México, ofreciendo servicios de consultoría de alto nivel,
          traduciendo la tecnología en rentabilidad para el negocio, disminuyendo costos
          y aumentando ganancias para nuestros clientes.
        </p>
      </div>

      <div class="card">
        <h2>Visión</h2>
        <p>
          Ser reconocidos por la excelencia en la calidad de nuestros servicios,
          ofreciendo soluciones integrales en tecnologías de información que se
          traduzcan en una oferta competitiva en precio y calidad.
        </p>
      </div>
    </div>

    <!-- VALORES -->
    <div class="values">
      <h2>Valores</h2>

      <div class="grid">
        <div class="value-card">
          <h3>Honestidad</h3>
          <p>Brindamos soluciones claras y objetivas, siempre buscando el mejor costo/beneficio.</p>
        </div>

        <div class="value-card">
          <h3>Calidad</h3>
          <p>Trabajamos bajo mejora continua en procesos humanos y de servicio.</p>
        </div>

        <div class="value-card">
          <h3>Innovación</h3>
          <p>Adoptamos nuevas tecnologías para mejorar nuestro servicio.</p>
        </div>

        <div class="value-card">
          <h3>Excelencia</h3>
          <p>Capacitación constante para mantener la confianza de nuestros clientes.</p>
        </div>

        <div class="value-card">
          <h3>Unidad</h3>
          <p>Trabajo en equipo para alcanzar metas y satisfacer necesidades tecnológicas.</p>
        </div>
      </div>
    </div>

    <!-- PREMIOS -->
    <div class="awards">
      <h2>Premios y Reconocimientos</h2>

      <ul>
        <li><strong>2006:</strong> The Best New Performance Partner (Fortinet)</li>
        <li><strong>2007:</strong> 1er AR-SITE Security Day – Tabasco</li>
        <li><strong>2008:</strong> 3er Lugar Best National Fortinet Deployment</li>
        <li><strong>2009:</strong> The Best Fortinet National Deployment</li>
        <li><strong>2016:</strong> Premio Monarca – Hewlett Packard Enterprise</li>
      </ul>
    </div>

  </section>
</template>

<style scoped>
.about {
  padding: 60px 40px;
  max-width: 1200px;
  margin: auto;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}

.years {
  font-size: 60px;
  color: #007BFF;
}

.content {
  margin-bottom: 50px;
  line-height: 1.6;
  text-align: center;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.card {
  background: #f5f5f5;
  padding: 25px;
  border-radius: 12px;
}

.values {
  margin-bottom: 60px;
}

.values h2,
.awards h2 {
  text-align: center;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.value-card {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
}

.awards ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
}
</style>