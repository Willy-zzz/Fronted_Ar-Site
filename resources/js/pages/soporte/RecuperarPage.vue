<template>
    <div class="support-page">
        <Hero title="Soporte" subtitle="Recupera el acceso a tu cuenta" />

        <section class="support-content container">
            <div class="login-card">

                <!-- Paso 1: Solicitar correo -->
                <template v-if="step === 1">
                    <div class="step-icon">🔑</div>
                    <h2 class="login-title">¿Olvidaste tu contraseña?</h2>
                    <p class="login-subtitle">
                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                    </p>

                    <form @submit.prevent="sendReset" class="login-form">
                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" id="email" v-model="email"
                                placeholder="ej. usuario@ejemplo.com" required class="form-input" />
                        </div>

                        <button type="submit" class="login-button" :disabled="loading">
                            <span v-if="loading"><span class="spinner"></span> Enviando...</span>
                            <span v-else>Enviar enlace de recuperación</span>
                        </button>

                        <p class="register-link">
                            <router-link to="/soporte">← Volver al inicio de sesión</router-link>
                        </p>

                        <div v-if="errorMessage" class="message error">
                            <svg class="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ errorMessage }}
                        </div>
                    </form>
                </template>

                <!-- Paso 2: Confirmación enviada -->
                <template v-else-if="step === 2">
                    <div class="step-icon success-icon">✉️</div>
                    <h2 class="login-title">Revisa tu correo</h2>
                    <p class="login-subtitle">
                        Hemos enviado un enlace de recuperación a <strong>{{ email }}</strong>.
                        Revisa tu bandeja de entrada y sigue las instrucciones.
                    </p>

                    <div class="info-box">
                        <p>¿No recibiste el correo?</p>
                        <button class="btn-resend" :disabled="resendCooldown > 0" @click="resend">
                            {{ resendCooldown > 0 ? `Reenviar en ${resendCooldown}s` : 'Reenviar correo' }}
                        </button>
                    </div>

                    <p class="register-link" style="margin-top: 2rem;">
                        <router-link to="/soporte">← Volver al inicio de sesión</router-link>
                    </p>
                </template>

                <!-- Paso 3: Nueva contraseña (cuando llegue por token en URL) -->
                <template v-else-if="step === 3">
                    <div class="step-icon">🔒</div>
                    <h2 class="login-title">Nueva contraseña</h2>
                    <p class="login-subtitle">Elige una contraseña segura para tu cuenta.</p>

                    <form @submit.prevent="setNewPassword" class="login-form">
                        <div class="form-group">
                            <label>Nueva contraseña</label>
                            <div class="password-wrapper">
                                <input :type="showPw ? 'text' : 'password'" v-model="newPw"
                                    placeholder="Mínimo 8 caracteres" required class="form-input" />
                                <button type="button" class="password-toggle"
                                    @click="showPw = !showPw" tabindex="-1">
                                    {{ showPw ? '🙈' : '👁️' }}
                                </button>
                            </div>
                            <!-- Fuerza -->
                            <div v-if="newPw" class="password-strength">
                                <div class="strength-bars">
                                    <div v-for="n in 4" :key="n" class="strength-bar"
                                        :class="{ active: pwStrength >= n, [`level-${pwStrength}`]: pwStrength >= n }">
                                    </div>
                                </div>
                                <span class="strength-label" :class="`level-${pwStrength}`">{{ strengthLabel }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Confirmar contraseña</label>
                            <div class="password-wrapper">
                                <input :type="showConfirm ? 'text' : 'password'" v-model="confirmPw"
                                    placeholder="Repite tu contraseña" required class="form-input"
                                    :class="{ 'input-success': confirmPw && newPw === confirmPw }" />
                                <button type="button" class="password-toggle"
                                    @click="showConfirm = !showConfirm" tabindex="-1">
                                    {{ showConfirm ? '🙈' : '👁️' }}
                                </button>
                            </div>
                            <span v-if="confirmPw && newPw === confirmPw" class="field-ok">
                                ✓ Las contraseñas coinciden
                            </span>
                        </div>

                        <div v-if="pwError" class="message error">{{ pwError }}</div>

                        <button type="submit" class="login-button" :disabled="loading">
                            <span v-if="loading"><span class="spinner"></span> Guardando...</span>
                            <span v-else>Restablecer contraseña</span>
                        </button>
                    </form>
                </template>

                <!-- Paso 4: Éxito final -->
                <template v-else-if="step === 4">
                    <div class="step-icon success-icon">✅</div>
                    <h2 class="login-title">¡Contraseña restablecida!</h2>
                    <p class="login-subtitle">
                        Tu contraseña ha sido actualizada correctamente. Ya puedes iniciar sesión.
                    </p>
                    <router-link to="/soporte" class="login-button" style="text-decoration:none; margin-top: 1rem;">
                        Ir al inicio de sesión
                    </router-link>
                </template>

            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Hero from '@/components/Hero.vue'

const route = useRoute()

// Si viene con ?token=xxx en la URL, saltar al paso 3
const step  = ref(route.query.token ? 3 : 1)
const email = ref('')

// Paso 1
const loading      = ref(false)
const errorMessage = ref('')

const sendReset = async () => {
    loading.value      = true
    errorMessage.value = ''
    try {
        // 👇 Reemplaza con: await axios.post('/api/password/reset', { email: email.value })
        await new Promise(r => setTimeout(r, 1500))
        step.value = 2
        startCooldown()
    } catch {
        errorMessage.value = 'No encontramos una cuenta con ese correo.'
    } finally {
        loading.value = false
    }
}

// Paso 2 — reenvío con cooldown
const resendCooldown = ref(0)
let timer = null

const startCooldown = () => {
    resendCooldown.value = 60
    timer = setInterval(() => {
        resendCooldown.value--
        if (resendCooldown.value <= 0) clearInterval(timer)
    }, 1000)
}

const resend = async () => {
    await sendReset()
}

onUnmounted(() => clearInterval(timer))

// Paso 3 — nueva contraseña
const newPw      = ref('')
const confirmPw  = ref('')
const showPw     = ref(false)
const showConfirm = ref(false)
const pwError    = ref('')

const pwStrength = computed(() => {
    const p = newPw.value
    if (!p) return 0
    let s = 0
    if (p.length >= 8)          s++
    if (/[A-Z]/.test(p))        s++
    if (/[0-9]/.test(p))        s++
    if (/[^A-Za-z0-9]/.test(p)) s++
    return s
})
const strengthLabel = computed(() => ['', 'Débil', 'Regular', 'Buena', 'Fuerte'][pwStrength.value])

const setNewPassword = async () => {
    pwError.value = ''
    if (newPw.value !== confirmPw.value) return (pwError.value = 'Las contraseñas no coinciden')
    if (newPw.value.length < 8)          return (pwError.value = 'Mínimo 8 caracteres')
    loading.value = true
    try {
        // 👇 Reemplaza con: await axios.post('/api/password/reset/confirm', { token: route.query.token, password: newPw.value })
        await new Promise(r => setTimeout(r, 1500))
        step.value = 4
    } catch {
        pwError.value = 'El enlace ha expirado. Solicita uno nuevo.'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.support-page    { min-height: 100vh; }
.support-content {
    padding: 80px 0; background: #f8fafc;
    display: flex; justify-content: center; align-items: flex-start;
}
.login-card {
    background: white; border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0,0,0,.08);
    padding: 2.5rem; width: 100%; max-width: 480px; margin: 0 auto;
}

.step-icon     { text-align: center; font-size: 3rem; margin-bottom: .5rem; }
.success-icon  { filter: saturate(1.2); }

.login-title    { font-size: 1.8rem; font-weight: 700; color: #1a202c; margin-bottom: .5rem; text-align: center; }
.login-subtitle { text-align: center; color: #718096; margin-bottom: 2rem; line-height: 1.6; }
.login-form     { width: 100%; }

.form-group       { margin-bottom: 1.4rem; }
.form-group label { display: block; margin-bottom: .5rem; font-weight: 500; color: #2d3748; font-size: .95rem; }

.form-input {
    width: 100%; padding: .9rem 1rem;
    border: 2px solid #e2e8f0; border-radius: 12px;
    font-size: 1rem; background: #f8fafc;
    transition: all .3s; font-family: inherit; box-sizing: border-box;
}
.form-input:focus         { outline: none; border-color: #65B3CA; background: white; box-shadow: 0 0 0 3px rgba(101,179,202,.2); }
.form-input.input-success { border-color: #68d391; background: #f0fff4; }

.password-wrapper { position: relative; }
.password-toggle  {
    position: absolute; right: 1rem; top: 50%; transform: translateY(-50%);
    background: none; border: none; cursor: pointer; font-size: 1.2rem; color: #718096;
}

/* Fuerza contraseña */
.password-strength { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
.strength-bars { display: flex; gap: 4px; flex: 1; }
.strength-bar  { height: 4px; flex: 1; border-radius: 99px; background: #e2e8f0; transition: background .3s; }
.strength-bar.active.level-1 { background: #fc8181; }
.strength-bar.active.level-2 { background: #f6ad55; }
.strength-bar.active.level-3 { background: #68d391; }
.strength-bar.active.level-4 { background: #38a169; }
.strength-label          { font-size: .8rem; font-weight: 600; min-width: 52px; }
.strength-label.level-1  { color: #e53e3e; }
.strength-label.level-2  { color: #dd6b20; }
.strength-label.level-3  { color: #38a169; }
.strength-label.level-4  { color: #276749; }
.field-ok { display: block; margin-top: 5px; font-size: .82rem; color: #38a169; font-weight: 500; }

.login-button {
    width: 100%; padding: 1rem;
    background: linear-gradient(135deg, #65B3CA 0%, #3b82f6 100%);
    color: white; border: none; border-radius: 12px;
    font-size: 1.1rem; font-weight: 600; cursor: pointer;
    transition: all .3s; display: flex; align-items: center; justify-content: center; gap: .75rem; margin-top: .5rem;
}
.login-button:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(101,179,202,.3); }
.login-button:disabled { opacity: .6; cursor: not-allowed; transform: none; }

.spinner {
    width: 20px; height: 20px;
    border: 2px solid rgba(255,255,255,.3); border-radius: 50%; border-top-color: white;
    animation: spin 1s linear infinite; display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }

.register-link      { text-align: center; margin-top: 1.5rem; color: #4a5568; font-size: .95rem; }
.register-link a    { color: #65B3CA; text-decoration: none; font-weight: 600; }
.register-link a:hover { text-decoration: underline; }

.message         { padding: 1rem; border-radius: 10px; margin-top: 1.5rem; display: flex; align-items: center; gap: .75rem; font-weight: 500; }
.message.success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
.message.error   { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
.message-icon    { width: 20px; height: 20px; flex-shrink: 0; }

/* Info box reenvío */
.info-box {
    background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px;
    padding: 1.25rem; text-align: center; color: #4a5568;
}
.info-box p { margin: 0 0 .75rem; font-size: .95rem; }
.btn-resend {
    padding: .6rem 1.4rem; background: #65B3CA; color: white;
    border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all .2s;
}
.btn-resend:hover:not(:disabled) { background: #4a9ab5; }
.btn-resend:disabled { opacity: .5; cursor: not-allowed; }

@media (max-width: 480px) {
    .support-content { padding: 40px 0; }
    .login-card      { padding: 1.5rem; }
    .login-title     { font-size: 1.5rem; }
}
</style>