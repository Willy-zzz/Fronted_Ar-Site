<template>
  <div class="contact-page">

    <!-- HERO SECTION -->
    <section class="contact-hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Contáctanos</h1>
          <p class="hero-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo
          </p>
        </div>
      </div>
    </section>

    <!-- MAIN CONTACT SECTION -->
    <section class="contact-main">
      <div class="page-container">
        <div class="contact-grid">

          <!-- FORMULARIO DE CONTACTO -->
          <div class="contact-form-section">
            <h2 class="section-title">Envíanos un mensaje</h2>
            <p class="section-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <input 
                    v-model="form.nombre" 
                    placeholder="Nombre *" 
                    required 
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <input 
                    v-model="form.apellido" 
                    placeholder="Apellido *" 
                    required 
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <input 
                    v-model="form.telefono" 
                    placeholder="Teléfono *" 
                    required 
                    class="form-input"
                    type="tel"
                  />
                </div>
                <div class="form-group">
                  <input 
                    v-model="form.email" 
                    placeholder="Email *" 
                    required 
                    class="form-input"
                    type="email"
                  />
                </div>
              </div>

              <div class="form-group">
                <input 
                  v-model="form.compania" 
                  placeholder="Compañía" 
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <textarea
                  v-model="form.mensaje"
                  rows="6"
                  placeholder="Mensaje *"
                  required
                  class="form-textarea"
                ></textarea>
              </div>

              <!-- CAPTCHA -->
              <div class="captcha-box">
                <VueRecaptcha
                  v-if="showCaptcha"
                  sitekey="AQUI_TU_SITE_KEY"
                  @verify="onCaptchaVerified"
                  @expire="onCaptchaExpired"
                  size="normal"
                  theme="light"
                />
                <p v-if="!showCaptcha" class="captcha-loading">
                  Cargando CAPTCHA...
                </p>
              </div>

              <button 
                type="submit" 
                class="submit-btn"
                :disabled="loading || !captchaToken"
              >
                <span v-if="loading">
                  <span class="spinner"></span>
                  Enviando...
                </span>
                <span v-else>
                  Enviar mensaje
                </span>
              </button>

              <!-- MENSAJES DE ESTADO -->
              <div v-if="successMessage" class="message success">
                <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ successMessage }}
              </div>

              <div v-if="errorMessage" class="message error">
                <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ errorMessage }}
              </div>
            </form>
          </div>

          <!-- INFORMACIÓN DE CONTACTO -->
          <div class="contact-info-section">
            <h2 class="section-title">Información de contacto</h2>
            <p class="section-subtitle">Puedes contactarnos por estos medios</p>

            <div class="info-grid">
              <!-- TELÉFONOS -->
              <div class="info-card">
                <div class="info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Teléfonos</h3>
                  <div class="phone-numbers">
                    <p><strong>CDMX:</strong></p>
                    <p><a href="tel:+525563903399">+52 55 6390 33 99</a></p>
                    <p><a href="tel:+525586625580">+52 55 8662 55 80</a></p>
                    <p><a href="tel:+525586625581">+52 55 8662 55 81</a></p>
                    <p><a href="tel:+525586625582">+52 55 8662 55 82</a></p>
                    <p><strong>Villahermosa:</strong></p>
                    <p><a href="tel:+529933657804">+52 993 3 65 78 04</a></p>
                  </div>
                </div>
              </div>

              <!-- EMAILS -->
              <div class="info-card">
                <div class="info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:contacto@arsite.com.mx">contacto@arsite.com.mx</a></p>
                  <p><a href="mailto:ventas@arsite.com.mx">ventas@arsite.com.mx</a></p>
                </div>
              </div>

              <!-- UBICACIONES -->
              <div class="info-card">
                <div class="info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Oficinas</h3>
                  <div class="locations">
                    <p><strong>CDMX:</strong></p>
                    <p>Unión 161, Escandón II Secc, Miguel Hidalgo, 11800 Ciudad de México, CDMX</p>
                    
                    <p><strong>Villahermosa:</strong></p>
                    <p>C. Músicos 714, Gaviotas Sur Sector San Jose, 86090 Villahermosa, Tab.</p>
                  </div>
                </div>
              </div>

              <!-- HORARIOS -->
              <div class="info-card">
                <div class="info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Horario de oficina</h3>
                  <div class="schedule">
                    <p><strong>Lunes – Viernes:</strong></p>
                    <p>9:00 AM a 6:00 PM</p>
                    <p class="note">Sábados con cita previa</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- BOTONES DE CÓMO LLEGAR -->
            <div class="directions-buttons">
              <a 
                href="https://maps.google.com/?q=Unión+161+Escandón+II+Secc+Miguel+Hidalgo+11800+Ciudad+de+México" 
                target="_blank" 
                rel="noopener noreferrer"
                class="direction-btn"
              >
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cómo llegar a CDMX
              </a>
              
              <a 
                href="https://maps.google.com/?q=C.+Músicos+714+Gaviotas+Sur+Sector+San+Jose+86090+Villahermosa+Tab." 
                target="_blank" 
                rel="noopener noreferrer"
                class="direction-btn"
              >
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cómo llegar a Villahermosa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAPAS -->
    <section class="maps-section">
      <div class="page-container">
        <h2 class="maps-title">Nuestras ubicaciones</h2>
        
        <div class="maps-grid">
          <!-- CDMX MAP -->
          <div class="map-container">
            <h3 class="map-title">
              <svg class="map-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Oficina Ciudad de México
            </h3>
            <p class="map-address">
              Unión 161, Escandón II Secc, Miguel Hidalgo, 11800 CDMX
            </p>
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.123456789012!2d-99.180000!3d19.410000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI0JzM2LjAiTiA5OcKwMTAnNDguMCJX!5e0!3m2!1ses!2smx!4v1645581234567!5m2!1ses!2smx"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa Oficina CDMX"
              ></iframe>
            </div>
            <div class="map-info">
              <p><strong>Horario:</strong> Lunes a Viernes 9:00 AM - 6:00 PM</p>
              <p><strong>Teléfono:</strong> <a href="tel:+525563903399">+52 55 6390 33 99</a></p>
            </div>
          </div>

          <!-- VILLAHERMOSA MAP -->
          <div class="map-container">
            <h3 class="map-title">
              <svg class="map-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Oficina Villahermosa
            </h3>
            <p class="map-address">
              C. Músicos 714, Gaviotas Sur Sector San Jose, 86090 Villahermosa, Tab.
            </p>
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.456789012345!2d-92.920000!3d18.010000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzM2LjAiTiA5MsKwNTUnMTIuMCJX!5e0!3m2!1ses!2smx!4v1645581300000!5m2!1ses!2smx"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa Oficina Villahermosa"
              ></iframe>
            </div>
            <div class="map-info">
              <p><strong>Horario:</strong> Lunes a Viernes 9:00 AM - 6:00 PM</p>
              <p><strong>Teléfono:</strong> <a href="tel:+529933657804">+52 993 3 65 78 04</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import VueRecaptcha from 'vue3-recaptcha2'

// Estado del formulario
const form = reactive({
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  compania: '',
  mensaje: ''
})

// Estados de la aplicación
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const captchaToken = ref(null)
const showCaptcha = ref(false)

// Inicializar CAPTCHA después del montaje
onMounted(() => {
  setTimeout(() => {
    showCaptcha.value = true
  }, 500)
})

// Manejar verificación del CAPTCHA
const onCaptchaVerified = (token) => {
  captchaToken.value = token
  errorMessage.value = '' // Limpiar error si había
}

const onCaptchaExpired = () => {
  captchaToken.value = null
  errorMessage.value = 'El CAPTCHA ha expirado. Por favor, verifica de nuevo.'
}

// Validar formulario
const validateForm = () => {
  const errors = []
  
  if (!form.nombre.trim()) errors.push('El nombre es requerido')
  if (!form.apellido.trim()) errors.push('El apellido es requerido')
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.push('Por favor ingresa un email válido')
  }
  
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  if (!phoneRegex.test(form.telefono.replace(/\s/g, ''))) {
    errors.push('Por favor ingresa un teléfono válido')
  }
  
  if (!form.mensaje.trim() || form.mensaje.length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres')
  }
  
  return errors
}

// Manejar envío del formulario
const handleSubmit = async () => {
  // Validar formulario
  const errors = validateForm()
  if (errors.length > 0) {
    errorMessage.value = errors[0]
    return
  }
  
  // Validar CAPTCHA
  if (!captchaToken.value) {
    errorMessage.value = 'Por favor, verifica que no eres un robot'
    return
  }
  
  // Iniciar carga
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    // Preparar datos para enviar
    const formData = {
      ...form,
      captchaToken: captchaToken.value,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    }
    
    // 🔵 Reemplaza esta URL con tu endpoint de Laravel cuando lo tengas
    const response = await axios.post('/api/contact', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    
    // Éxito
    successMessage.value = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    
    // Resetear formulario
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    // Resetear CAPTCHA
    captchaToken.value = null
    showCaptcha.value = false
    setTimeout(() => {
      showCaptcha.value = true
    }, 100)
    
    // Opcional: enviar evento de Google Analytics
    if (window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        'event_category': 'Contact',
        'event_label': 'Contact Form'
      })
    }
    
  } catch (error) {
    console.error('Error al enviar formulario:', error)
    
    if (error.response) {
      // Error del servidor
      switch (error.response.status) {
        case 422:
          errorMessage.value = 'Por favor verifica los datos del formulario'
          break
        case 429:
          errorMessage.value = 'Demasiados intentos. Por favor, espera unos minutos'
          break
        default:
          errorMessage.value = 'Error al enviar el mensaje. Por favor, intenta nuevamente'
      }
    } else if (error.request) {
      // Error de red
      errorMessage.value = 'Error de conexión. Por favor, verifica tu internet'
    } else {
      // Error general
      errorMessage.value = 'Error inesperado. Por favor, intenta nuevamente'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Layout Base */
.contact-page {
  min-height: 100vh;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.contact-hero {
  position: relative;
  height: 320px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/img/contact-bg.jpg') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* Main Contact Section */
.contact-main {
  padding: 4rem 0;
  background: #f8fafc;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Form Section */
.contact-form-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #718096;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* Form Styles */
.contact-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  background: #f8fafc;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* CAPTCHA */
.captcha-box {
  margin: 2rem 0;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.captcha-loading {
  color: #718096;
  font-style: italic;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Messages */
.message {
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
}

.message.success {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.message.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

.message-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Info Section */
.contact-info-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.info-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  transition: transform 0.3s;
}

.info-card:hover {
  transform: translateY(-2px);
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.info-icon svg {
  width: 24px;
  height: 24px;
}

.info-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.info-content p {
  color: #4a5568;
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.phone-numbers p,
.locations p,
.schedule p {
  margin-bottom: 0.5rem;
}

.note {
  font-size: 0.875rem;
  color: #718096;
  font-style: italic;
  margin-top: 0.5rem;
}

.info-content a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s;
}

.info-content a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Direction Buttons */
.directions-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.direction-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f1f5f9;
  color: #4a5568;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.direction-btn:hover {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

/* Maps Section */
.maps-section {
  padding: 4rem 0;
  background: #f1f5f9;
}

.maps-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 3rem;
}

.maps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.map-container {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.map-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.5rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
}

.map-icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}

.map-address {
  padding: 0 1.5rem 1rem;
  color: #718096;
  font-size: 0.95rem;
  border-bottom: 1px solid #e2e8f0;
}

.map-wrapper {
  padding: 1.5rem;
  background: #f8fafc;
}

.map-wrapper iframe {
  border-radius: 10px;
  display: block;
}

.map-info {
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.map-info p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.map-info a {
  color: #3b82f6;
  text-decoration: none;
}

.map-info a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    gap: 2rem;
  }
  
  .maps-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    height: 280px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .maps-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-main {
    padding: 2rem 0;
  }
  
  .contact-form-section,
  .contact-info-section {
    padding: 2rem;
  }
  
  .directions-buttons {
    grid-template-columns: 1fr;
  }
  
  .maps-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .contact-form-section,
  .contact-info-section {
    padding: 1.5rem;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
  }
  
  .info-icon {
    margin: 0 auto;
  }
  
  .map-title {
    font-size: 1.25rem;
  }
}
</style>