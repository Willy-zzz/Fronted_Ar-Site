<template>
    <div class="support-page">
        <!-- HERO FULL WIDTH -->
        <Hero title="Soporte" subtitle="Crea tu cuenta para gestionar tickets y solicitudes" />

        <!-- CONTENIDO -->
        <section class="support-content container">
            <div class="login-card">
                <h2 class="login-title">Crear cuenta</h2>
                <p class="login-subtitle">Completa el formulario para registrarte en el panel de soporte</p>

                <form @submit.prevent="handleRegister" class="login-form">

                    <!-- Usuario -->
                    <div class="form-group">
                        <label for="username">Usuario <span class="required">*</span></label>
                        <input type="text" id="username" v-model="form.username" placeholder="ej. jperez" required
                            class="form-input" :class="{ 'input-error': errors.username }" />
                        <span v-if="errors.username" class="field-error">{{ errors.username }}</span>
                    </div>

                    <!-- Nombre y Apellidos en grid -->
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nombres">Nombre(s) <span class="required">*</span></label>
                            <input type="text" id="nombres" v-model="form.nombres" placeholder="ej. Juan" required
                                class="form-input" :class="{ 'input-error': errors.nombres }" />
                            <span v-if="errors.nombres" class="field-error">{{ errors.nombres }}</span>
                        </div>
                        <div class="form-group">
                            <label for="apellidos">Apellidos <span class="required">*</span></label>
                            <input type="text" id="apellidos" v-model="form.apellidos" placeholder="ej. Pérez García"
                                required class="form-input" :class="{ 'input-error': errors.apellidos }" />
                            <span v-if="errors.apellidos" class="field-error">{{ errors.apellidos }}</span>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <label for="email">E-mail <span class="required">*</span></label>
                        <input type="email" id="email" v-model="form.email" placeholder="ej. usuario@ejemplo.com"
                            required class="form-input" :class="{ 'input-error': errors.email }" />
                        <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                    </div>

                    <!-- Dependencia -->
                    <div class="form-group">
                        <label for="dependencia">Dependencia <span class="required">*</span></label>
                        <input type="text" id="dependencia" v-model="form.dependencia"
                            placeholder="ej. Dirección de Tecnología" required class="form-input"
                            :class="{ 'input-error': errors.dependencia }" />
                        <span v-if="errors.dependencia" class="field-error">{{ errors.dependencia }}</span>
                    </div>

                    <!-- Contraseña -->
                    <div class="form-group">
                        <label for="password">Contraseña <span class="required">*</span></label>
                        <div class="password-wrapper">
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.password"
                                placeholder="Mínimo 8 caracteres" required class="form-input"
                                :class="{ 'input-error': errors.password }" />
                            <button type="button" class="password-toggle" @click="showPassword = !showPassword"
                                tabindex="-1">
                                <span v-if="showPassword">🙈</span>
                                <span v-else>👁️</span>
                            </button>
                        </div>
                        <!-- Indicador de fuerza -->
                        <div v-if="form.password" class="password-strength">
                            <div class="strength-bars">
                                <div v-for="n in 4" :key="n" class="strength-bar"
                                    :class="{ active: passwordStrength >= n, [`level-${passwordStrength}`]: passwordStrength >= n }">
                                </div>
                            </div>
                            <span class="strength-label" :class="`level-${passwordStrength}`">{{ strengthLabel }}</span>
                        </div>
                        <span v-if="errors.password" class="field-error">{{ errors.password }}</span>
                    </div>

                    <!-- Confirmar Contraseña -->
                    <div class="form-group">
                        <label for="confirmPassword">Confirmar Contraseña <span class="required">*</span></label>
                        <div class="password-wrapper">
                            <input :type="showConfirm ? 'text' : 'password'" id="confirmPassword"
                                v-model="form.confirmPassword" placeholder="Repite tu contraseña" required
                                class="form-input"
                                :class="{ 'input-error': errors.confirmPassword, 'input-success': form.confirmPassword && form.password === form.confirmPassword }" />
                            <button type="button" class="password-toggle" @click="showConfirm = !showConfirm"
                                tabindex="-1">
                                <span v-if="showConfirm">🙈</span>
                                <span v-else>👁️</span>
                            </button>
                        </div>
                        <span v-if="form.confirmPassword && form.password === form.confirmPassword" class="field-ok">
                            ✓ Las contraseñas coinciden
                        </span>
                        <span v-if="errors.confirmPassword" class="field-error">{{ errors.confirmPassword }}</span>
                    </div>

                    <!-- reCAPTCHA -->
                    <div class="captcha-box">
                        <VueRecaptcha v-if="showCaptcha" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            @verify="onCaptchaVerified" @expire="onCaptchaExpired" size="normal" theme="light" />
                        <p v-if="!showCaptcha" class="captcha-loading">Cargando CAPTCHA...</p>
                    </div>

                    <!-- Términos -->
                    <div class="form-group terms-group">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="acceptTerms" />
                            <span>
                                Acepto los
                                <router-link to="/terminos" class="terms-link">Términos y Condiciones</router-link>
                                y el tratamiento de mis datos personales
                            </span>
                        </label>
                    </div>

                    <!-- Botón -->
                    <button type="submit" class="login-button" :disabled="loading || !captchaToken || !acceptTerms">
                        <span v-if="loading">
                            <span class="spinner"></span>
                            Creando cuenta...
                        </span>
                        <span v-else>Crear cuenta</span>
                    </button>

                    <!-- Link a login -->
                    <p class="register-link">
                        ¿Ya tienes cuenta? <router-link to="/soporte">Inicia sesión aquí</router-link>
                    </p>

                    <!-- Mensajes -->
                    <div v-if="errorMessage" class="message error">
                        <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ errorMessage }}
                    </div>
                    <div v-if="successMessage" class="message success">
                        <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ successMessage }}
                    </div>

                </form>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import Hero from '@/components/Hero.vue'
import VueRecaptcha from 'vue3-recaptcha2'

const form = reactive({
    username: '',
    nombres: '',
    apellidos: '',
    email: '',
    dependencia: '',
    password: '',
    confirmPassword: ''
})

const errors = reactive({})
const showPassword = ref(false)
const showConfirm = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const captchaToken = ref(null)
const showCaptcha = ref(false)
const acceptTerms = ref(false)

onMounted(() => {
    setTimeout(() => { showCaptcha.value = true }, 500)
})

// ── Fuerza de contraseña ──────────────────────────────
const passwordStrength = computed(() => {
    const p = form.password
    if (!p) return 0
    let score = 0
    if (p.length >= 8) score++
    if (/[A-Z]/.test(p)) score++
    if (/[0-9]/.test(p)) score++
    if (/[^A-Za-z0-9]/.test(p)) score++
    return score
})

const strengthLabel = computed(() => {
    const labels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte']
    return labels[passwordStrength.value]
})

// ── Captcha ───────────────────────────────────────────
const onCaptchaVerified = (token) => {
    captchaToken.value = token
    errorMessage.value = ''
}
const onCaptchaExpired = () => {
    captchaToken.value = null
    errorMessage.value = 'El CAPTCHA ha expirado. Por favor, verifica de nuevo.'
}

// ── Validación ────────────────────────────────────────
const validate = () => {
    Object.keys(errors).forEach(k => delete errors[k])
    let valid = true

    if (!form.username.trim()) { errors.username = 'El usuario es requerido'; valid = false }
    else if (form.username.length < 3) { errors.username = 'Mínimo 3 caracteres'; valid = false }

    if (!form.nombres.trim()) { errors.nombres = 'El nombre es requerido'; valid = false }
    if (!form.apellidos.trim()) { errors.apellidos = 'Los apellidos son requeridos'; valid = false }

    if (!form.email.trim()) { errors.email = 'El correo es requerido'; valid = false }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Correo no válido'; valid = false }

    if (!form.dependencia.trim()) { errors.dependencia = 'La dependencia es requerida'; valid = false }

    if (!form.password) { errors.password = 'La contraseña es requerida'; valid = false }
    else if (form.password.length < 8) { errors.password = 'Mínimo 8 caracteres'; valid = false }

    if (!form.confirmPassword) { errors.confirmPassword = 'Confirma tu contraseña'; valid = false }
    else if (form.password !== form.confirmPassword) { errors.confirmPassword = 'Las contraseñas no coinciden'; valid = false }

    return valid
}

// ── Submit ────────────────────────────────────────────
const handleRegister = async () => {
    if (!validate()) return
    if (!captchaToken.value) { errorMessage.value = 'Por favor, verifica que no eres un robot'; return }
    if (!acceptTerms.value) { errorMessage.value = 'Debes aceptar los términos y condiciones'; return }

    loading.value = true
    errorMessage.value = ''
    successMessage.value = ''

    try {
        // Aquí iría la llamada real a la API:
        // await axios.post('/api/register', { ...form, captchaToken: captchaToken.value })
        await new Promise(resolve => setTimeout(resolve, 1500))
        successMessage.value = '¡Cuenta creada exitosamente! Revisa tu correo para confirmar tu cuenta.'
        Object.keys(form).forEach(k => form[k] = '')
        acceptTerms.value = false
        captchaToken.value = null
    } catch (error) {
        errorMessage.value = 'Error al crear la cuenta. Intenta de nuevo.'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.support-page {
    min-height: 100vh;
}

.support-content {
    padding: 80px 0;
    background: #f8fafc;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.login-card {
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    padding: 2.5rem;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
}

.login-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
    text-align: center;
}

.login-subtitle {
    text-align: center;
    color: #718096;
    margin-bottom: 2rem;
    font-size: 1rem;
}

.login-form {
    width: 100%;
}

/* Grid 2 columnas para nombre/apellidos */
.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.form-group {
    margin-bottom: 1.4rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2d3748;
    font-size: 0.95rem;
}

.required {
    color: #65B3CA;
}

.form-input {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s;
    background: #f8fafc;
    font-family: inherit;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: #65B3CA;
    background: white;
    box-shadow: 0 0 0 3px rgba(101, 179, 202, 0.2);
}

.form-input.input-error {
    border-color: #fc8181;
    background: #fff5f5;
}

.form-input.input-success {
    border-color: #68d391;
    background: #f0fff4;
}

.field-error {
    display: block;
    margin-top: 5px;
    font-size: 0.82rem;
    color: #e53e3e;
}

.field-ok {
    display: block;
    margin-top: 5px;
    font-size: 0.82rem;
    color: #38a169;
    font-weight: 500;
}

/* Contraseña */
.password-wrapper {
    position: relative;
}

.password-toggle {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.25rem;
    color: #718096;
}

.password-toggle:hover {
    color: #2d3748;
}

/* Fuerza contraseña */
.password-strength {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
}

.strength-bars {
    display: flex;
    gap: 4px;
    flex: 1;
}

.strength-bar {
    height: 4px;
    flex: 1;
    border-radius: 99px;
    background: #e2e8f0;
    transition: background 0.3s;
}

.strength-bar.active.level-1 {
    background: #fc8181;
}

.strength-bar.active.level-2 {
    background: #f6ad55;
}

.strength-bar.active.level-3 {
    background: #68d391;
}

.strength-bar.active.level-4 {
    background: #38a169;
}

.strength-label {
    font-size: 0.8rem;
    font-weight: 600;
    min-width: 52px;
}

.strength-label.level-1 {
    color: #e53e3e;
}

.strength-label.level-2 {
    color: #dd6b20;
}

.strength-label.level-3 {
    color: #38a169;
}

.strength-label.level-4 {
    color: #276749;
}

/* Captcha */
.captcha-box {
    margin: 1.5rem 0;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.captcha-loading {
    color: #718096;
    font-style: italic;
}

/* Términos */
.terms-group {
    margin-bottom: 0.5rem;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    cursor: pointer;
    color: #4a5568;
    font-size: 0.92rem;
    line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #65B3CA;
    margin-top: 2px;
    flex-shrink: 0;
}

.terms-link {
    color: #65B3CA;
    text-decoration: none;
    font-weight: 600;
}

.terms-link:hover {
    text-decoration: underline;
}

/* Botón */
.login-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #65B3CA 0%, #3b82f6 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
}

.login-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(101, 179, 202, 0.3);
}

.login-button:disabled {
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
    to {
        transform: rotate(360deg);
    }
}

.register-link {
    text-align: center;
    margin-top: 1.5rem;
    color: #4a5568;
    font-size: 0.95rem;
}

.register-link a {
    color: #65B3CA;
    text-decoration: none;
    font-weight: 600;
}

.register-link a:hover {
    text-decoration: underline;
}

/* Mensajes */
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

/* Responsive */
@media (max-width: 600px) {
    .support-content {
        padding: 40px 0;
    }

    .login-card {
        padding: 1.5rem;
    }

    .login-title {
        font-size: 1.8rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}
</style>