<template>
    <div class="categoria-page">
        <Hero :title="categoria?.name || 'Categoría'" :subtitle="categoria?.description || 'Productos destacados'"
            :image="categoria?.image || '/img/default-categoria.jpg'" />

        <section class="categoria-content container">
            <h2 class="section-title">{{ categoria?.name }}</h2>
            <p class="section-subtitle">Descubre nuestros productos en esta categoría</p>

            <div class="productos-list">
                <div v-for="(product, index) in productosCategoria" :key="product.id" class="product-row"
                    :class="index % 2 === 0 ? 'row-left' : 'row-right'">
                    <div class="product-image">
                        <img :src="product.image" :alt="product.name" />
                    </div>
                    <div class="product-description">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.description }}</p>
                        <router-link :to="`/producto/${product.id}`" class="product-button">
                            Más información <span class="button-arrow">→</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div v-if="productosCategoria.length === 0" class="empty-message">
                <p>No hay productos disponibles en esta categoría aún.</p>
                <router-link to="/productos" class="back-button">← Volver a categorías</router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'

const route = useRoute()
const router = useRouter()
const categoriaSlug = route.params.categoria

// Datos de categorías (podrían venir de una API)
const categorias = [
    {
        slug: 'seguridad',
        name: 'Seguridad',
        description: 'Firewalls, UTM, protección perimetral y ciberseguridad empresarial.',
        image: '/img/categorias/seguridad.jpg'
    },
    {
        slug: 'movilidad',
        name: 'Movilidad',
        description: 'Soluciones WiFi, redes inalámbricas y gestión de dispositivos móviles.',
        image: '/img/categorias/movilidad.jpg'
    },
    // ... todas las demás categorías (igual que en Products.vue)
]

// Datos de productos (cada producto tiene categoriaSlug)
const productos = [
    {
        id: 1,
        name: 'FortiGate 60F',
        description: 'Firewall de nueva generación con protección avanzada y SD-WAN.',
        image: '/img/productos/fortigate-60f.jpg',
        categoriaSlug: 'seguridad'
    },
    {
        id: 2,
        name: 'Aruba Instant On AP22',
        description: 'Punto de acceso WiFi 6 para empresas y alta densidad.',
        image: '/img/productos/aruba-ap22.jpg',
        categoriaSlug: 'movilidad'
    },
    {
        id: 3,
        name: 'Cisco Catalyst 9300',
        description: 'Switch de acceso con stacking y seguridad integrada.',
        image: '/img/productos/cisco-9300.jpg',
        categoriaSlug: 'switches-routers'
    },
    {
        id: 4,
        name: 'Riverbed SteelHead',
        description: 'Acelerador WAN que optimiza aplicaciones y reduce latencia.',
        image: '/img/productos/riverbed.jpg',
        categoriaSlug: 'aceleracion-wan'
    },
    {
        id: 5,
        name: 'Dell PowerVault ME5',
        description: 'Almacenamiento SAN/NAS con alta disponibilidad y rendimiento.',
        image: '/img/productos/dell-powervault.jpg',
        categoriaSlug: 'almacenamiento'
    },
    {
        id: 6,
        name: 'Cambium Networks PTP 670',
        description: 'Radioenlace punto a punto de banda ancha para largas distancias.',
        image: '/img/productos/cambium-ptp670.jpg',
        categoriaSlug: 'radio-enlaces'
    },
    {
        id: 7,
        name: 'Grandstream UCM6302',
        description: 'Central telefónica IP para empresas con hasta 500 usuarios.',
        image: '/img/productos/grandstream-ucm.jpg',
        categoriaSlug: 'telefonia-ip'
    },
    {
        id: 8,
        name: 'HPE ProLiant DL380 Gen10',
        description: 'Servidor rack de alto rendimiento para cargas críticas.',
        image: '/img/productos/hpe-dl380.jpg',
        categoriaSlug: 'servidores'
    },
    {
        id: 9,
        name: 'Panduit Mini-Com',
        description: 'Sistema de cableado estructurado categoría 6A.',
        image: '/img/productos/panduit-cableado.jpg',
        categoriaSlug: 'cableado'
    },
    {
        id: 10,
        name: 'VMware vSphere 8',
        description: 'Plataforma de virtualización de servidores y gestión centralizada.',
        image: '/img/productos/vmware-vsphere.jpg',
        categoriaSlug: 'virtualizacion'
    },
    // Más productos...
]

const categoria = ref(null)
const productosCategoria = ref([])

onMounted(() => {
    categoria.value = categorias.find(c => c.slug === categoriaSlug)
    if (!categoria.value) {
        // Si la categoría no existe, redirigir a productos
        router.push('/productos')
        return
    }
    productosCategoria.value = productos.filter(p => p.categoriaSlug === categoriaSlug)
})
</script>

<style scoped>
.categoria-page {
    min-height: 100vh;
}

.categoria-content {
    padding: 80px 0;
    background: #ffffff;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #65B3CA;
    text-align: center;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    text-align: center;
    color: #4a5568;
    font-size: 1.2rem;
    margin-bottom: 3rem;
}

.productos-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.product-row {
    display: flex;
    align-items: center;
    gap: 3rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.product-row:nth-child(1) {
    animation-delay: 0.1s;
}

.product-row:nth-child(2) {
    animation-delay: 0.2s;
}

.product-row:nth-child(3) {
    animation-delay: 0.3s;
}

.product-row:nth-child(4) {
    animation-delay: 0.4s;
}

.product-row:nth-child(5) {
    animation-delay: 0.5s;
}

/* Alternancia: izquierda imagen, derecha texto */
.row-left .product-image {
    flex: 1;
    order: 1;
}

.row-left .product-description {
    flex: 1;
    order: 2;
}

/* Alternancia: derecha imagen, izquierda texto */
.row-right .product-image {
    flex: 1;
    order: 2;
}

.row-right .product-description {
    flex: 1;
    order: 1;
}

.product-image {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.product-image img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-row:hover .product-image img {
    transform: scale(1.02);
}

.product-description h3 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 1rem;
}

.product-description p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 1.5rem;
}

.product-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: #65B3CA;
    color: white;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.product-button:hover {
    background: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(101, 179, 202, 0.3);
    border-color: white;
}

.button-arrow {
    transition: transform 0.3s;
}

.product-button:hover .button-arrow {
    transform: translateX(5px);
}

.empty-message {
    text-align: center;
    padding: 3rem;
    background: #f8fafc;
    border-radius: 20px;
}

.empty-message p {
    margin-bottom: 1rem;
    color: #4a5568;
}

.back-button {
    display: inline-block;
    padding: 8px 20px;
    background: #65B3CA;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: background 0.3s;
}

.back-button:hover {
    background: #3b82f6;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .categoria-content {
        padding: 60px 0;
    }

    .product-row {
        flex-direction: column !important;
        gap: 1.5rem;
        text-align: center;
    }

    .row-left .product-description,
    .row-right .product-description,
    .row-left .product-image,
    .row-right .product-image {
        order: 0;
    }

    .product-description h3 {
        font-size: 1.6rem;
    }

    .product-description p {
        font-size: 1rem;
    }
}
</style>