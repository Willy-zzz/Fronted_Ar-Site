<template>
    <div class="producto-detalle-page">
        <Hero :title="producto?.nombre || 'Cargando...'" :subtitle="producto?.categoria || ''"
            :image="'/img/mapRedesHero.jpg'" />

        <section class="producto-content container">
            <div class="producto-grid">
                <div class="producto-imagen">
                    <img :src="producto?.imagen" :alt="producto?.nombre" />
                </div>
                <div class="producto-info">
                    <h1>{{ producto?.nombre }}</h1>
                    <p class="descripcion">{{ producto?.descripcionLarga }}</p>
                    <ul v-if="producto?.caracteristicas" class="caracteristicas">
                        <li v-for="(item, index) in producto.caracteristicas" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                    <router-link to="/productos" class="back-button">
                        ← Volver a productos
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Hero from '@/components/Hero.vue'

const route = useRoute()
const producto = ref(null)

// Datos de ejemplo (luego vendrán de una API o archivo)
const productosData = [
    {
        id: 1,
        nombre: 'Seguridad',
        categoria: 'Soluciones de red',
        imagen: '/img/fortigate.jpeg',
        descripcionLarga: 'Alto rendimiento para cargas críticas...',
        caracteristicas: ['Redundancia', 'Escalabilidad', 'Alta disponibilidad'],
        heroImage: '/img/hero-seguridad.jpg'
    },
    {
        id: 2,
        nombre: 'Firewall de Nueva Generación',
        categoria: 'Soluciones de red',
        imagen: '/img/fortigate.jpeg',
        descripcionLarga: 'Protección perimetral avanzada con inspección profunda de paquetes.',
        caracteristicas: ['Inspección profunda', 'Alta velocidad', 'Integración con SIEM'],

        heroImage: '/img/hero-seguridad.jpg'
    },
    // ... resto de productos
]

onMounted(() => {
    const id = parseInt(route.params.id)
    producto.value = productosData.find(p => p.id === id)
})
</script>

<style scoped>
.producto-content {
    padding: 60px 0;
}

.producto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
}

.producto-imagen img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.producto-info h1 {
    font-size: 2.5rem;
    color: #65B3CA;
    margin-bottom: 20px;
}

.descripcion {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 30px;
}

.caracteristicas {
    list-style: none;
    padding: 0;
    margin-bottom: 40px;
}

.caracteristicas li {
    padding: 8px 0 8px 25px;
    background: url("data:image/svg+xml,%3Csvg...") left center no-repeat;
    /* ícono de check */
}

.back-button {
    display: inline-block;
    padding: 12px 25px;
    background: #65B3CA;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
}

@media (max-width: 768px) {
    .producto-grid {
        grid-template-columns: 1fr;
    }
}
</style>