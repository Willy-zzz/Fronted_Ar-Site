<template>
    <div class="cuenta-page">
        <Hero title="Cuenta" subtitle="Gestiona tu información personal"  />

        <section class="cuenta-content container">
            <div class="cuenta-layout">

                <!-- Sidebar izquierdo -->
                <aside class="cuenta-sidebar">
                    <div class="sidebar-profile">
                        <div class="profile-avatar">
                            <svg viewBox="0 0 24 24" fill="#aaa" width="52" height="52">
                                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                        </svg>
                        </div>
                        <p class="profile-name">{{ user?.name || user?.username }}</p>
                        <router-link to="/soporte" class="profile-link">Ver el perfil</router-link>
                    </div>

                    <nav class="sidebar-nav">
                        <button v-for="t in tabs" :key="t.id"
                            :class="['snav-item', { active: activeTab === t.id }]"
                            @click="activeTab = t.id">
                            <span class="snav-icon" v-html="t.icon"></span>
                            <span>{{ t.label }}</span>
                            <span class="snav-arrow">›</span>
                        </button>
                    </nav>
                </aside>

                <!-- Contenido derecho -->
                <div class="cuenta-main">

                    <!-- ── Cuenta / Perfil ── -->
                    <div v-if="activeTab === 'perfil'">
                        <h3 class="section-head">
                            <span class="sh-icon">👤</span> Cuenta
                        </h3>
                        <form @submit.prevent="saveProfile" class="cuenta-form">
                            <div class="form-group">
                                <label>Nombre de usuario <span class="req">*</span></label>
                                <input v-model="profile.username" class="form-input"
                                    :placeholder="user?.username || 'usuario'" />
                            </div>
                            <div class="cf-row">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input v-model="profile.nombre" class="form-input" placeholder="Nombre" />
                                </div>
                                <div class="form-group">
                                    <label>Apellidos</label>
                                    <input v-model="profile.apellidos" class="form-input" placeholder="Apellidos" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Dirección de correo electrónico</label>
                                <input v-model="profile.email" type="email" class="form-input" />
                            </div>
                            <div class="form-group">
                                <label>Contraseña <span class="req">*</span></label>
                                <input v-model="profile.currentPassword" type="password" class="form-input"
                                    placeholder="Ingresa tu contraseña para confirmar cambios" />
                            </div>
                            <button type="submit" class="btn-primary" :disabled="profileLoading">
                                <span v-if="profileLoading"><span class="spinner"></span> Guardando...</span>
                                <span v-else>Actualizar la cuenta</span>
                            </button>
                            <div v-if="profileMsg" class="message success">{{ profileMsg }}</div>
                        </form>
                    </div>

                    <!-- ── Cambiar contraseña ── -->
                    <div v-if="activeTab === 'password'">
                        <h3 class="section-head">
                            <span class="sh-icon">✱</span> Cambiar la contraseña
                        </h3>
                        <form @submit.prevent="changePassword" class="cuenta-form">
                            <div class="form-group">
                                <label>Contraseña actual <span class="req">*</span></label>
                                <input v-model="pwForm.current" type="password" class="form-input" placeholder="••••••••" required />
                            </div>
                            <div class="form-group">
                                <label>Nueva contraseña <span class="req">*</span></label>
                                <input v-model="pwForm.new" type="password" class="form-input" placeholder="••••••••" required />
                            </div>
                            <div class="form-group">
                                <label>Confirmar la contraseña <span class="req">*</span></label>
                                <input v-model="pwForm.confirm" type="password" class="form-input" placeholder="Confirmar la contraseña" required />
                            </div>
                            <div v-if="pwError" class="message error">{{ pwError }}</div>
                            <button type="submit" class="btn-primary" :disabled="pwLoading">
                                <span v-if="pwLoading"><span class="spinner"></span> Actualizando...</span>
                                <span v-else>Actualizar la contraseña</span>
                            </button>
                            <div v-if="pwSuccess" class="message success">{{ pwSuccess }}</div>
                        </form>
                    </div>

                    <!-- ── Borrar cuenta ── -->
                    <div v-if="activeTab === 'delete'">
                        <h3 class="section-head">
                            <span class="sh-icon">🗑</span> Borrar la cuenta
                        </h3>
                        <p class="danger-desc">
                            ¿Seguro que quieres borrar tu cuenta? Esto borrará todos los datos de tu cuenta en el sitio.
                            Para borrar tu cuenta, introduce a continuación tu contraseña.
                        </p>
                        <form @submit.prevent="deleteAccount" class="cuenta-form">
                            <div class="form-group">
                                <label>Contraseña <span class="req">*</span></label>
                                <input v-model="deleteConfirm" type="password" class="form-input" placeholder="••••••••" required />
                            </div>
                            <button type="submit" class="btn-danger" :disabled="!deleteConfirm">
                                Borrar la cuenta
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'
import { useAuth } from '@/composables/useAuth'

const { user, logout, updateUser } = useAuth()
const router = useRouter()

const tabs = [
    { id: 'perfil',   label: 'Cuenta',              icon: '👤' },
    { id: 'password', label: 'Cambiar la contraseña', icon: '✱' },
    { id: 'delete',   label: 'Borrar la cuenta',      icon: '🗑' },
]
const activeTab = ref('perfil')

// Perfil
const profile = reactive({
    username:        user.value?.username || '',
    nombre:          user.value?.name?.split(' ')[0] || '',
    apellidos:       user.value?.name?.split(' ').slice(1).join(' ') || '',
    email:           user.value?.email   || '',
    currentPassword: '',
})
const profileLoading = ref(false)
const profileMsg     = ref('')

const saveProfile = async () => {
    if (!profile.currentPassword) return (profileMsg.value = '⚠️ Ingresa tu contraseña para confirmar')
    profileLoading.value = true
    profileMsg.value = ''
    await new Promise(r => setTimeout(r, 1000))
    updateUser({ name: `${profile.nombre} ${profile.apellidos}`.trim(), email: profile.email, username: profile.username })
    profileLoading.value = false
    profileMsg.value = '✅ Cuenta actualizada correctamente'
    profile.currentPassword = ''
}

// Contraseña
const pwForm    = reactive({ current: '', new: '', confirm: '' })
const pwLoading = ref(false)
const pwError   = ref('')
const pwSuccess = ref('')

const changePassword = async () => {
    pwError.value = pwSuccess.value = ''
    if (pwForm.new !== pwForm.confirm) return (pwError.value = 'Las contraseñas no coinciden')
    if (pwForm.new.length < 8)         return (pwError.value = 'Mínimo 8 caracteres')
    pwLoading.value = true
    await new Promise(r => setTimeout(r, 1200))
    pwLoading.value = false
    pwSuccess.value = '✅ Contraseña actualizada correctamente'
    Object.assign(pwForm, { current: '', new: '', confirm: '' })
}

// Borrar
const deleteConfirm = ref('')

const deleteAccount = async () => {
    if (!confirm('¿Seguro? Esta acción no se puede deshacer.')) return
    await new Promise(r => setTimeout(r, 800))
    logout()
    router.push('/')
}
</script>

<style scoped>
.cuenta-page    { min-height: 100vh; }
.cuenta-content { padding: 60px 0; background: #f8fafc; }

.cuenta-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    max-width: 1000px;
    margin: 0 auto;
}

/* Sidebar */
.cuenta-sidebar {
    width: 240px;
    flex-shrink: 0;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,.07);
    overflow: hidden;
}
.sidebar-profile {
    padding: 2rem 1rem 1.5rem;
    text-align: center;
    border-bottom: 1px solid #e2e8f0;
}
.profile-avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: #e2e8f0; margin: 0 auto 1rem;
    display: flex; align-items: center; justify-content: center;
}
.profile-name { font-weight: 700; color: #1a202c; margin: 0 0 4px; }
.profile-link { color: #65B3CA; font-size: .88rem; text-decoration: none; }
.profile-link:hover { text-decoration: underline; }

.sidebar-nav { padding: .5rem 0; }
.snav-item {
    width: 100%; display: flex; align-items: center; gap: 10px;
    padding: .85rem 1.2rem; border: none; background: none;
    text-align: left; font-size: .92rem; color: #4a5568;
    cursor: pointer; transition: background .15s;
}
.snav-item:hover  { background: #f8fafc; }
.snav-item.active { background: #f0f9ff; font-weight: 700; color: #1a202c; }
.snav-icon  { width: 20px; text-align: center; font-size: 1rem; }
.snav-arrow { margin-left: auto; color: #a0aec0; }
.snav-item.active .snav-arrow { color: #65B3CA; }

/* Main */
.cuenta-main {
    flex: 1;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,.07);
    padding: 2rem 2.5rem;
    min-height: 400px;
}

.section-head {
    display: flex; align-items: center; gap: 8px;
    font-size: 1.1rem; font-weight: 700; color: #1a202c;
    margin: 0 0 1.5rem; padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
}
.sh-icon { font-size: 1rem; }

.cuenta-form { display: flex; flex-direction: column; gap: 1.2rem; }
.cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.form-group       { display: flex; flex-direction: column; gap: 5px; }
.form-group label { font-size: .9rem; font-weight: 500; color: #374151; }
.req { color: #e53e3e; }

.form-input {
    padding: .75rem 1rem; border: 1px solid #d1d5db; border-radius: 8px;
    font-size: .95rem; background: white; font-family: inherit; box-sizing: border-box; width: 100%;
    transition: border-color .2s;
}
.form-input:focus { outline: none; border-color: #65B3CA; box-shadow: 0 0 0 3px rgba(101,179,202,.15); }

.btn-primary {
    padding: .85rem 1.5rem; background: #65B3CA; color: white;
    border: none; border-radius: 8px; font-size: .95rem; font-weight: 600;
    cursor: pointer; transition: all .2s; align-self: flex-start;
    display: flex; align-items: center; gap: .5rem;
}
.btn-primary:hover:not(:disabled) { background: #4a9ab5; }
.btn-primary:disabled { opacity: .6; cursor: not-allowed; }

.danger-desc { color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem; }
.btn-danger {
    padding: .85rem 1.5rem; background: #65B3CA; color: white;
    border: none; border-radius: 8px; font-size: .95rem; font-weight: 600;
    cursor: pointer; transition: all .2s; align-self: flex-start;
}
.btn-danger:hover:not(:disabled) { background: #e53e3e; }
.btn-danger:disabled { opacity: .4; cursor: not-allowed; }

.message         { padding: .85rem 1rem; border-radius: 8px; font-size: .9rem; font-weight: 500; }
.message.success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
.message.error   { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }

.spinner {
    display: inline-block; width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,.3); border-radius: 50%; border-top-color: white;
    animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 768px) {
    .cuenta-layout  { flex-direction: column; }
    .cuenta-sidebar { width: 100%; }
    .cf-row         { grid-template-columns: 1fr; }
    .cuenta-main    { padding: 1.5rem; }
}
</style>