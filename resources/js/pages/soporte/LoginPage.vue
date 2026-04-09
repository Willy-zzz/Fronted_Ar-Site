<template>
    <div class="login-page">
        <Hero title="Soporte" subtitle="Accede a tu cuenta para gestionar tickets y solicitudes"  />

        <section class="login-section container">
            <div class="login-card">
                <h2 class="login-title">Iniciar sesión</h2>
                <p class="login-subtitle">Ingresa tus credenciales para acceder al panel de soporte</p>

                <form @submit.prevent="handleLogin" class="login-form">
                    <div class="form-group">
                        <label for="username">Usuario o correo electrónico</label>
                        <input type="text" id="username" v-model="form.username" placeholder="ej. usuario@ejemplo.com"
                            required class="form-input" />
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <div class="password-wrapper">
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.password"
                                placeholder="••••••••" required class="form-input" />
                            <button type="button" class="password-toggle" @click="showPassword = !showPassword"
                                tabindex="-1">
                                {{ showPassword ? '🙈' : '👁️' }}
                            </button>
                        </div>
                    </div>

                    <div class="captcha-box">
                        <VueRecaptcha v-if="showCaptcha" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            @verify="onCaptchaVerified" @expire="onCaptchaExpired" size="normal" theme="light" />
                        <p v-else class="captcha-loading">Cargando CAPTCHA...</p>
                    </div>

                    <div class="login-options">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="rememberMe" />
                            <span>Mantenerme conectado</span>
                        </label>
                        <router-link to="/soporte/recuperar" class="forgot-link">
                            ¿Has olvidado tu contraseña?
                        </router-link>
                    </div>

                    <button type="submit" class="login-button" :disabled="loading || !captchaToken">
                        <span v-if="loading"><span class="spinner"></span> Iniciando sesión...</span>
                        <span v-else>Iniciar sesión</span>
                    </button>

                    <p class="register-link">
                        ¿No tienes cuenta?
                        <router-link to="/soporte/registro">Regístrate aquí</router-link>
                    </p>

                    <div v-if="errorMessage" class="message error">
                        <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ errorMessage }}
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'
import VueRecaptcha from 'vue3-recaptcha2'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { login } = useAuth()

// Formulario
const form = reactive({ username: '', password: '' })
const rememberMe = ref(false)
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const captchaToken = ref(null)
const showCaptcha = ref(false)

onMounted(() => setTimeout(() => (showCaptcha.value = true), 500))

const onCaptchaVerified = (token) => {
    captchaToken.value = token
    errorMessage.value = ''
}
const onCaptchaExpired = () => {
    captchaToken.value = null
    errorMessage.value = 'El CAPTCHA expiró.'
}

const handleLogin = async () => {
    if (!form.username.trim()) return (errorMessage.value = 'Ingresa tu usuario o correo')
    if (!form.password.trim()) return (errorMessage.value = 'Ingresa tu contraseña')
    if (!captchaToken.value) return (errorMessage.value = 'Verifica que no eres un robot')

    loading.value = true
    errorMessage.value = ''

    try {
        // Simulación de llamada a API
        await new Promise(r => setTimeout(r, 1500))

        // Llama a la función login del composable
        // Aquí deberías enviar los datos a tu backend real
        login(
            {
                username: form.username,
                name: 'Usuario',  // Idealmente obtener del backend
                email: form.username
            },
            'token-simulado-123',
            rememberMe.value
        )

        // Redirige al panel de soporte
        router.push('/soporte/helpdesk')
    } catch {
        errorMessage.value = 'Credenciales incorrectas o error en el servidor'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
/* Copia todos los estilos de login que estaban en SoportePage */
.login-page {
    min-height: 100vh;
}

.login-section {
    padding: 60px 0;
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
    max-width: 500px;
    margin: 0 auto;
}

.login-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: .5rem;
    text-align: center;
}

.login-subtitle {
    text-align: center;
    color: #718096;
    margin-bottom: 2rem;
}

.login-form {
    width: 100%;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: .5rem;
    font-weight: 500;
    color: #2d3748;
    font-size: .95rem;
}

.req {
    color: #e53e3e;
}

.form-input {
    width: 100%;
    padding: .9rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    background: #f8fafc;
    transition: all .3s;
    font-family: inherit;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: #65B3CA;
    background: white;
    box-shadow: 0 0 0 3px rgba(101, 179, 202, .2);
}

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
    color: #718096;
}

.captcha-box {
    margin: 2rem 0 1.5rem;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.captcha-loading {
    color: #718096;
    font-style: italic;
}

.login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.8rem;
    flex-wrap: wrap;
    gap: 10px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #4a5568;
    font-size: .95rem;
}

.checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #65B3CA;
}

.forgot-link {
    color: #65B3CA;
    text-decoration: none;
    font-size: .95rem;
}

.forgot-link:hover {
    color: #3b82f6;
    text-decoration: underline;
}

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
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    margin-top: 1rem;
}

.login-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(101, 179, 202, .3);
}

.login-button:disabled {
    opacity: .6;
    cursor: not-allowed;
    transform: none;
}

.spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, .3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s linear infinite;
    display: inline-block;
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
    font-size: .95rem;
}

.register-link a {
    color: #65B3CA;
    text-decoration: none;
    font-weight: 600;
}

.message {
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: .75rem;
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

@media (max-width: 480px) {
    .login-section {
        padding: 30px 0;
    }

    .login-card {
        padding: 1.5rem;
    }
}
</style>