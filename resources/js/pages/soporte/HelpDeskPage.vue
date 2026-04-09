<template>
    <div class="helpdesk-page">
        <Hero title="Panel de Soporte" subtitle="Gestiona tus tickets y solicitudes" />

        <section class="helpdesk-section container">
            <div class="helpdesk">
                <!-- Barra de tabs azul -->
                <div class="hd-tabbar">
                    <button v-for="tab in tabs" :key="tab.id"
                        :class="['hd-tab', { active: activeTab === tab.id }]"
                        @click="activeTab = tab.id">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- ── DASHBOARD ── -->
                <div v-if="activeTab === 'dashboard'" class="hd-body">
                    <div class="hd-sidebar">
                        <p class="sidebar-title">Dashboard Links</p>
                        <ul class="sidebar-links">
                            <li @click="activeTab = 'submit'">
                                <span class="slink-icon green">✎</span> Submit Ticket
                            </li>
                            <li @click="activeTab = 'tickets'">
                                <span class="slink-icon orange">⊟</span> My Tickets
                            </li>
                            <li @click="activeTab = 'status'">
                                <span class="slink-icon blue">∿</span> Ticket Status
                            </li>
                        </ul>
                    </div>

                    <div class="hd-main">
                        <!-- Bienvenida -->
                        <div class="welcome-row">
                            <div class="avatar-circle">
                                <svg viewBox="0 0 24 24" fill="#aaa" width="40" height="40">
                                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                                </svg>
                            </div>
                            <div>
                                <h2 class="welcome-name">Welcome back, {{ user?.name || user?.username }}!</h2>
                                <p class="welcome-sub">
                                    You have
                                    <strong>{{ mockTickets.filter(t => t.status === 'open').length === 0 ? 'No open ticket' : mockTickets.filter(t => t.status === 'open').length + ' open tickets' }}</strong>
                                </p>
                            </div>
                        </div>

                        <!-- Cards -->
                        <div class="dash-cards">
                            <div class="dash-card">
                                <p class="dc-title">Have an issue?</p>
                                <p class="dc-desc">Our support team is here to help. Create a new ticket to get started.</p>
                                <button class="dc-btn" @click="activeTab = 'submit'">+ Create New Ticket</button>
                            </div>
                            <div class="dash-card stats-card">
                                <p class="dc-title">Your Ticket Stats</p>
                                <div class="stat-row">
                                    <span class="stat-icon blue-icon">ℹ</span>
                                    <span class="stat-name">Open Tickets</span>
                                    <span class="stat-badge blue-badge">{{ mockTickets.filter(t => t.status === 'open').length }}</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-icon gray-icon">✓</span>
                                    <span class="stat-name">Closed Tickets</span>
                                    <span class="stat-badge gray-badge">{{ mockTickets.filter(t => t.status === 'resolved').length }}</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-icon green-icon">✦</span>
                                    <span class="stat-name">Answered Tickets</span>
                                    <span class="stat-badge green-badge">{{ mockTickets.filter(t => t.status === 'answered').length }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Ticket Statistics -->
                        <div class="ticket-stats-section">
                            <p class="ts-title">Ticket Statistics</p>
                            <div class="ts-bars">
                                <div class="ts-bar-item">
                                    <span>Abiertos</span>
                                    <div class="ts-bar-track">
                                        <div class="ts-bar-fill open" :style="{ width: pct('open') }"></div>
                                    </div>
                                    <span class="ts-count">{{ mockTickets.filter(t => t.status === 'open').length }}</span>
                                </div>
                                <div class="ts-bar-item">
                                    <span>Resueltos</span>
                                    <div class="ts-bar-track">
                                        <div class="ts-bar-fill resolved" :style="{ width: pct('resolved') }"></div>
                                    </div>
                                    <span class="ts-count">{{ mockTickets.filter(t => t.status === 'resolved').length }}</span>
                                </div>
                                <div class="ts-bar-item">
                                    <span>En espera</span>
                                    <div class="ts-bar-track">
                                        <div class="ts-bar-fill pending" :style="{ width: pct('pending') }"></div>
                                    </div>
                                    <span class="ts-count">{{ mockTickets.filter(t => t.status === 'pending').length }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ── SUBMIT TICKET ── -->
                <div v-if="activeTab === 'submit'" class="hd-body hd-body--single">
                    <div class="hd-main hd-main--full">
                        <form @submit.prevent="submitTicket" class="ticket-form">
                            <div class="tf-grid">
                                <div class="form-group">
                                    <label>Email <span class="req">*</span></label>
                                    <input v-model="ticket.email" type="email" class="form-input"
                                        placeholder="tu@correo.com" required />
                                </div>
                                <div class="form-group">
                                    <label>Nombre Completo <span class="req">*</span></label>
                                    <input v-model="ticket.nombre" class="form-input"
                                        :placeholder="user?.name || 'Tu nombre'" required />
                                </div>
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input v-model="ticket.telefono" class="form-input" placeholder="+52 999 000 0000" />
                                </div>
                                <div class="form-group">
                                    <label>Departamento</label>
                                    <select v-model="ticket.departamento" class="form-input">
                                        <option value="">Select Departamento</option>
                                        <option>Soporte técnico</option>
                                        <option>Facturación</option>
                                        <option>Ventas</option>
                                        <option>General</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Prioridad <span class="req">*</span></label>
                                    <select v-model="ticket.prioridad" class="form-input">
                                        <option value="baja">Baja</option>
                                        <option value="media">Media</option>
                                        <option value="alta">Alta</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Asunto <span class="req">*</span></label>
                                <input v-model="ticket.subject" class="form-input"
                                    placeholder="Breve descripción del problema" required />
                            </div>
                            <div class="form-group">
                                <label>Descripción <span class="req">*</span></label>
                                <textarea v-model="ticket.description" class="form-input form-textarea"
                                    placeholder="Describe tu problema con detalle..." required></textarea>
                            </div>

                            <!-- ========== ARCHIVOS ADJUNTOS ========== -->
                            <div class="form-group">
                                <label>Archivos adjuntos</label>
                                <div class="file-upload-area">
                                    <input type="file" ref="fileInput" multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.zip"
                                        @change="handleFileSelect" style="display: none" />
                                    <button type="button" class="file-upload-btn" @click="$refs.fileInput.click()">
                                        📎 Seleccionar archivos
                                    </button>
                                    <span class="file-limits">
                                        Máx. 3072 KB por archivo · Extensiones: jpg, jpeg, png, pdf, doc, docx, zip
                                    </span>
                                </div>

                                <!-- Lista de archivos seleccionados con previsualización -->
                                <div v-if="attachedFiles.length" class="file-list">
                                    <div v-for="(file, index) in attachedFiles" :key="index" class="file-item">
                                        <div class="file-preview">
                                            <img v-if="file.type.startsWith('image/')" :src="file.previewUrl" class="preview-image" />
                                            <div v-else class="file-icon">📄</div>
                                        </div>
                                        <div class="file-info">
                                            <span class="file-name">{{ file.name }}</span>
                                            <span class="file-size">{{ (file.size / 1024).toFixed(1) }} KB</span>
                                        </div>
                                        <button type="button" class="remove-file" @click="removeFile(index)">✖</button>
                                    </div>
                                </div>
                            </div>
                            <!-- ========== FIN ARCHIVOS ADJUNTOS ========== -->

                            <button type="submit" class="login-button" :disabled="ticketLoading">
                                <span v-if="ticketLoading"><span class="spinner"></span> Enviando...</span>
                                <span v-else>Enviar ticket</span>
                            </button>
                            <div v-if="ticketSuccess" class="message success" style="margin-top:1rem">
                                ✅ Ticket enviado correctamente. Te contactaremos pronto.
                            </div>
                        </form>
                    </div>
                </div>

                <!-- ── MY TICKETS ── -->
                <div v-if="activeTab === 'tickets'" class="hd-body hd-body--single">
                    <div class="hd-main hd-main--full">
                        <!-- Filtros donut-style -->
                        <div class="mt-filters">
                            <div v-for="f in ticketFilters" :key="f.status"
                                :class="['mt-filter-card', { active: ticketFilter === f.status }, f.color]"
                                @click="ticketFilter = f.status">
                                <div class="donut-ring" :class="f.color">
                                    <span class="donut-num">{{ f.count }}</span>
                                </div>
                                <span class="filter-label" :class="f.color">{{ f.label }}</span>
                            </div>
                        </div>

                        <!-- Buscador -->
                        <div class="mt-search-bar">
                            <input v-model="ticketSearch" class="mt-search-input"
                                placeholder="Ticket ID Or Email Or Asunto" />
                            <button class="mt-btn-show" @click="ticketSearch = ''">Show All</button>
                            <button class="mt-btn-search">Search</button>
                            <button class="mt-btn-reset" @click="ticketSearch = ''">Reset</button>
                        </div>

                        <!-- Tabla -->
                        <div class="mt-table-header">
                            <span>All Tickets</span>
                            <div class="mt-table-right">
                                <input class="mt-status-input" placeholder="Status" readonly />
                                <button class="mt-sort-btn">⇅</button>
                            </div>
                        </div>

                        <div class="mt-table">
                            <div class="mt-table-head">
                                <span>#</span>
                                <span>Asunto</span>
                                <span>Fecha</span>
                                <span>Estado</span>
                            </div>
                            <div v-for="t in filteredTickets" :key="t.id" class="mt-table-row">
                                <span class="ticket-id">#{{ t.id }}</span>
                                <span class="ticket-subject">{{ t.subject }}</span>
                                <span class="ticket-date">{{ t.date }}</span>
                                <span :class="['ticket-status', t.status]">{{ statusLabel[t.status] }}</span>
                            </div>
                            <div v-if="filteredTickets.length === 0" class="mt-empty">
                                No hay tickets que mostrar.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { user, isLoggedIn } = useAuth()

// Si no está logueado, redirigir al login (por si el guardia de ruta falla)
if (!isLoggedIn) {
    router.push('/soporte/login')
}

// ── Help Desk ──────────────────────────────────
const activeTab = ref('dashboard')
const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'submit',    label: 'Submit Ticket' },
    { id: 'tickets',   label: 'My Tickets' },
]

// Tickets mock (simulando datos del backend)
const mockTickets = ref([
    { id: '0023', subject: 'Error al cargar módulo',   date: '01/04/2026', status: 'open'     },
    { id: '0019', subject: 'Consulta de factura',      date: '20/03/2026', status: 'resolved' },
    { id: '0015', subject: 'Acceso denegado en panel', date: '10/03/2026', status: 'pending'  },
    { id: '0011', subject: 'Respuesta de soporte',     date: '05/03/2026', status: 'answered' },
])

const statusLabel = {
    open: 'Abierto', resolved: 'Resuelto',
    pending: 'En espera', answered: 'Respondido'
}

const pct = (status) => {
    const total = mockTickets.value.length
    if (!total) return '0%'
    return (mockTickets.value.filter(t => t.status === status).length / total * 100).toFixed(0) + '%'
}

// Submit ticket
const ticket = reactive({
    email: '', nombre: '', telefono: '',
    departamento: '', prioridad: 'baja',
    subject: '', description: ''
})
const ticketLoading = ref(false)
const ticketSuccess = ref(false)

// ========== ARCHIVOS ADJUNTOS ==========
const attachedFiles = ref([])
const fileInput = ref(null)

const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)
    const maxSize = 3072 * 1024 // 3072 KB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 
                          'application/msword', 
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                          'application/zip', 'application/x-zip-compressed']

    for (const file of files) {
        // Validar tipo
        if (!allowedTypes.includes(file.type)) {
            alert(`Tipo no permitido: ${file.name}. Solo se permiten imágenes, PDF, DOC, DOCX, ZIP.`)
            continue
        }
        // Validar tamaño
        if (file.size > maxSize) {
            alert(`Archivo demasiado grande: ${file.name}. Máximo 3072 KB.`)
            continue
        }
        // Crear URL de vista previa (solo para imágenes)
        const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null
        attachedFiles.value.push({ ...file, previewUrl })
    }
    // Limpiar el input para permitir seleccionar los mismos archivos de nuevo si se eliminan
    if (fileInput.value) fileInput.value.value = ''
}

const removeFile = (index) => {
    const file = attachedFiles.value[index]
    if (file.previewUrl) URL.revokeObjectURL(file.previewUrl) // liberar memoria
    attachedFiles.value.splice(index, 1)
}
// ========== FIN ARCHIVOS ADJUNTOS ==========

onMounted(() => {
    // Cargar datos del usuario autenticado en el formulario
    ticket.email  = user.value?.email  || ''
    ticket.nombre = user.value?.name   || ''
})

const submitTicket = async () => {
    ticketLoading.value = true
    ticketSuccess.value = false
    // Simular envío a API (incluyendo archivos)
    await new Promise(r => setTimeout(r, 1200))
    
    // Aquí enviarías los datos del ticket + attachedFiles a tu API
    console.log('Ticket enviado:', ticket)
    console.log('Archivos adjuntos:', attachedFiles.value.map(f => f.name))
    
    mockTickets.value.unshift({
        id: String(parseInt(mockTickets.value[0]?.id || '0000') + 1).padStart(4, '0'),
        subject: ticket.subject,
        date: new Date().toLocaleDateString('es-MX'),
        status: 'open'
    })
    ticketLoading.value = false
    ticketSuccess.value = true
    
    // Limpiar formulario y archivos
    Object.assign(ticket, { subject: '', description: '', telefono: '', departamento: '' })
    // Liberar URLs de los archivos
    attachedFiles.value.forEach(f => { if (f.previewUrl) URL.revokeObjectURL(f.previewUrl) })
    attachedFiles.value = []
}

// My tickets filter
const ticketFilter = ref('all')
const ticketSearch = ref('')

const ticketFilters = computed(() => [
    { status: 'open',     label: 'Open',        color: 'green',  count: mockTickets.value.filter(t => t.status === 'open').length },
    { status: 'resolved', label: 'Closed',      color: 'red',    count: mockTickets.value.filter(t => t.status === 'resolved').length },
    { status: 'answered', label: 'Answered',    color: 'orange', count: mockTickets.value.filter(t => t.status === 'answered').length },
    { status: 'all',      label: 'All Tickets', color: 'blue',   count: mockTickets.value.length },
])

const filteredTickets = computed(() => {
    let list = ticketFilter.value === 'all'
        ? mockTickets.value
        : mockTickets.value.filter(t => t.status === ticketFilter.value)
    if (ticketSearch.value.trim()) {
        const q = ticketSearch.value.toLowerCase()
        list = list.filter(t =>
            t.id.includes(q) || t.subject.toLowerCase().includes(q)
        )
    }
    return list
})
</script>

<style scoped>
/* Estilos base de la página */
.helpdesk-page {
    min-height: 100vh;
}
.helpdesk-section {
    padding: 60px 0;
    background: #f8fafc;
}
.helpdesk {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

/* Barra de tabs azul */
.hd-tabbar {
    background: #3730d4;
    border-radius: 14px 14px 0 0;
    display: flex;
    gap: 6px;
    padding: 12px 16px;
}
.hd-tab {
    padding: .55rem 1.4rem;
    border: 2px solid rgba(255,255,255,.5);
    border-radius: 8px;
    background: transparent;
    color: white;
    font-size: .95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s;
}
.hd-tab:hover  { background: rgba(255,255,255,.15); }
.hd-tab.active { background: white; color: #3730d4; font-weight: 700; border-color: white; }

/* Body con sidebar */
.hd-body {
    background: white;
    border-radius: 0 0 14px 14px;
    box-shadow: 0 8px 30px rgba(0,0,0,.08);
    display: flex;
    min-height: 480px;
}
.hd-body--single { display: block; }

/* Sidebar */
.hd-sidebar {
    width: 220px;
    flex-shrink: 0;
    border-right: 1px solid #e2e8f0;
    padding: 1.5rem 1rem;
}
.sidebar-title {
    font-weight: 700;
    color: #1a202c;
    font-size: .95rem;
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    border-bottom: 2px solid #e2e8f0;
}
.sidebar-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
.sidebar-links li {
    display: flex; align-items: center; gap: 10px;
    padding: .65rem .75rem; border-radius: 8px;
    cursor: pointer; color: #4a5568; font-size: .9rem;
    transition: background .15s;
}
.sidebar-links li:hover { background: #f0f9ff; color: #65B3CA; }
.slink-icon { font-size: 1rem; font-weight: 700; }
.slink-icon.green  { color: #38a169; }
.slink-icon.orange { color: #dd6b20; }
.slink-icon.blue   { color: #3b82f6; }

/* Main */
.hd-main { flex: 1; padding: 2rem; }
.hd-main--full { padding: 2rem; }

/* Welcome */
.welcome-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.avatar-circle {
    width: 60px; height: 60px; border-radius: 50%;
    background: #e2e8f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.welcome-name { font-size: 1.4rem; font-weight: 700; color: #1a202c; margin: 0 0 4px; }
.welcome-sub  { color: #718096; margin: 0; font-size: .95rem; }

/* Dashboard cards */
.dash-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.dash-card  {
    border: 1px solid #e2e8f0; border-radius: 12px;
    padding: 1.25rem; display: flex; flex-direction: column; gap: .6rem;
}
.dc-title { font-weight: 700; color: #1a202c; font-size: 1rem; margin: 0; }
.dc-desc  { color: #718096; font-size: .88rem; margin: 0; line-height: 1.5; }
.dc-btn   {
    margin-top: auto; padding: .75rem 1rem;
    background: #3730d4; color: white; border: none; border-radius: 10px;
    font-weight: 600; cursor: pointer; transition: background .2s;
}
.dc-btn:hover { background: #2d27b0; }

/* Stat rows */
.stat-row   { display: flex; align-items: center; gap: 10px; padding: .35rem 0; }
.stat-icon  {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .85rem; font-weight: 700; flex-shrink: 0;
}
.blue-icon  { background: #dbeafe; color: #1d4ed8; }
.gray-icon  { background: #f3f4f6; color: #6b7280; }
.green-icon { background: #d1fae5; color: #065f46; }
.stat-name  { flex: 1; color: #4a5568; font-size: .9rem; }
.stat-badge { padding: 2px 10px; border-radius: 8px; font-weight: 700; font-size: .9rem; }
.blue-badge  { background: #dbeafe; color: #1d4ed8; }
.gray-badge  { background: #f3f4f6; color: #6b7280; }
.green-badge { background: #d1fae5; color: #065f46; }

/* Ticket statistics bars */
.ticket-stats-section { border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; }
.ts-title    { font-weight: 700; color: #1a202c; margin: 0 0 1rem; }
.ts-bars     { display: flex; flex-direction: column; gap: .75rem; }
.ts-bar-item { display: flex; align-items: center; gap: 10px; font-size: .88rem; color: #4a5568; }
.ts-bar-item > span:first-child { width: 70px; flex-shrink: 0; }
.ts-bar-track { flex: 1; height: 8px; background: #e2e8f0; border-radius: 99px; overflow: hidden; }
.ts-bar-fill  { height: 100%; border-radius: 99px; transition: width .6s ease; }
.ts-bar-fill.open     { background: #3b82f6; }
.ts-bar-fill.resolved { background: #10b981; }
.ts-bar-fill.pending  { background: #f59e0b; }
.ts-count { width: 20px; text-align: right; font-weight: 600; }

/* ========== ESTILOS PARA EL FORMULARIO SUBMIT TICKET ========== */
.form-group {
    margin-bottom: 1rem;
}
.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2d3748;
    font-size: 0.95rem;
}
.req {
    color: #e53e3e;
}
.form-input {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    background: #f8fafc;
    transition: all 0.3s;
    font-family: inherit;
    box-sizing: border-box;
}
.form-input:focus {
    outline: none;
    border-color: #65B3CA;
    background: white;
    box-shadow: 0 0 0 3px rgba(101, 179, 202, 0.2);
}
.form-textarea {
    min-height: 130px;
    resize: vertical;
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
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
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
    display: inline-block;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
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

/* ========== ESTILOS PARA ARCHIVOS ADJUNTOS ========== */
.file-upload-area {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
}
.file-upload-btn {
    background: #e2e8f0;
    border: none;
    border-radius: 10px;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}
.file-upload-btn:hover {
    background: #cbd5e0;
}
.file-limits {
    font-size: 0.8rem;
    color: #718096;
}
.file-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
}
.file-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0.5rem;
}
.file-preview {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
    background: #edf2f7;
    display: flex;
    align-items: center;
    justify-content: center;
}
.preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.file-icon {
    font-size: 1.8rem;
}
.file-info {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.file-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: #2d3748;
}
.file-size {
    font-size: 0.75rem;
    color: #718096;
}
.remove-file {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #e53e3e;
    padding: 0 0.5rem;
}
.remove-file:hover {
    color: #c53030;
}
/* ========== FIN ESTILOS ARCHIVOS ADJUNTOS ========== */

/* Submit ticket layout */
.tf-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.5rem;
}
.ticket-form {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

/* My Tickets */
.mt-filters {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
}
.mt-filter-card {
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem 0.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
.mt-filter-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.mt-filter-card.active.green  { border-color: #38a169; }
.mt-filter-card.active.red    { border-color: #e53e3e; }
.mt-filter-card.active.orange { border-color: #dd6b20; }
.mt-filter-card.active.blue   { border-color: #3730d4; }

.donut-ring {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 8px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.donut-ring.green  { border-color: #9ae6b4; }
.donut-ring.red    { border-color: #feb2b2; }
.donut-ring.orange { border-color: #fbd38d; }
.donut-ring.blue   { border-color: #bfdbfe; }
.donut-num {
    font-size: 1.3rem;
    font-weight: 800;
    color: #4a5568;
}

.filter-label {
    font-size: 0.82rem;
    font-weight: 600;
}
.filter-label.green  { color: #38a169; }
.filter-label.red    { color: #e53e3e; }
.filter-label.orange { color: #dd6b20; }
.filter-label.blue   { color: #3730d4; }

/* Search bar */
.mt-search-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}
.mt-search-input {
    flex: 1;
    min-width: 200px;
    padding: 0.7rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: inherit;
}
.mt-search-input:focus {
    outline: none;
    border-color: #65B3CA;
}
.mt-btn-show, .mt-btn-reset {
    padding: 0.7rem 1.1rem;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: white;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
}
.mt-btn-show:hover, .mt-btn-reset:hover {
    background: #f0f9ff;
}
.mt-btn-search {
    padding: 0.7rem 1.3rem;
    background: #3730d4;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
}
.mt-btn-search:hover {
    background: #2d27b0;
}

/* Table */
.mt-table-header {
    background: #1a202c;
    color: white;
    padding: 0.75rem 1.2rem;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}
.mt-table-right {
    display: flex;
    gap: 8px;
    align-items: center;
}
.mt-status-input {
    padding: 0.35rem 0.8rem;
    border-radius: 6px;
    border: none;
    font-size: 0.85rem;
    background: white;
    color: #4a5568;
    width: 90px;
}
.mt-sort-btn {
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
}
.mt-table-head, .mt-table-row {
    display: grid;
    grid-template-columns: 70px 1fr 110px 100px;
    gap: 1rem;
    padding: 0.75rem 1.2rem;
    align-items: center;
}
.mt-table-head {
    background: #f8fafc;
    font-weight: 600;
    color: #4a5568;
    font-size: 0.85rem;
    border-bottom: 1px solid #e2e8f0;
}
.mt-table-row {
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.9rem;
}
.mt-table-row:last-child {
    border-bottom: none;
}
.mt-table-row:hover {
    background: #fafafa;
}
.mt-empty {
    padding: 2rem;
    text-align: center;
    color: #718096;
}

.ticket-id {
    font-weight: 700;
    color: #65B3CA;
}
.ticket-subject {
    color: #2d3748;
}
.ticket-date {
    color: #718096;
    font-size: 0.85rem;
}
.ticket-status {
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 600;
    text-align: center;
}
.ticket-status.open     { background: #dbeafe; color: #1d4ed8; }
.ticket-status.resolved { background: #f3f4f6; color: #6b7280; }
.ticket-status.pending  { background: #fef3c7; color: #92400e; }
.ticket-status.answered { background: #d1fae5; color: #065f46; }

/* Responsive */
@media (max-width: 768px) {
    .hd-sidebar  { display: none; }
    .dash-cards  { grid-template-columns: 1fr; }
    .tf-grid     { grid-template-columns: 1fr; }
    .mt-filters  { grid-template-columns: repeat(2, 1fr); }
    .mt-table-head, .mt-table-row {
        grid-template-columns: 60px 1fr 90px;
    }
    .mt-table-head span:nth-child(3),
    .mt-table-row  span:nth-child(3) {
        display: none;
    }
}
@media (max-width: 480px) {
    .helpdesk-section { padding: 30px 0; }
    .hd-tabbar {
        border-radius: 10px 10px 0 0;
        padding: 8px;
    }
    .hd-tab {
        padding: 0.45rem 0.9rem;
        font-size: 0.85rem;
    }
    .mt-filters {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>