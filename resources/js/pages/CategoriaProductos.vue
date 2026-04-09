<template>
    <div class="categoria-page">
        <Hero :title="categoria?.name || 'Categoría'" :subtitle="categoria?.description || 'Productos destacados'"/>
        <!-- :image="categoria?.image || '/img/categoriaProducto/default.jpg'"  -->

        <section class="categoria-content container">
            <h2 class="section-title">{{ categoria?.name }}</h2>
            <p class="section-subtitle">Conoce las marcas líderes en esta categoría</p>

            <div class="marcas-list">
                <div v-for="(marca, index) in marcasCategoria" :key="marca.id" class="marca-row"
                    :class="index % 2 === 0 ? 'row-left' : 'row-right'">
                    <div class="marca-image">
                        <img :src="marca.image" :alt="marca.name" />
                    </div>
                    <div class="marca-description">
                        <h3>{{ marca.name }}</h3>
                        <p>{{ marca.description }}</p>
                        <!-- Botón solo si existe externalUrl -->
                        <a v-if="marca.externalUrl" :href="marca.externalUrl" target="_blank" rel="noopener noreferrer"
                            class="marca-button">
                            Conocer más <span class="button-arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="marcasCategoria.length === 0" class="empty-message">
                <p>No hay marcas disponibles en esta categoría aún.</p>
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
    {
        slug: 'switches-routers',
        name: 'Switches y Routers',
        description: 'Equipos de capa 2/3, routing avanzado y conmutación de alto rendimiento.',
        image: '/img/categorias/switches.jpg'
    },
    {
        slug: 'aceleracion-wan',
        name: 'Aceleración WAN',
        description: 'Optimización de enlaces, compresión y aceleración de aplicaciones.',
        image: '/img/categorias/wan.jpg'
    },
    {
        slug: 'almacenamiento',
        name: 'Almacenamiento y recuperación de datos',
        description: 'NAS, SAN, backup y soluciones de continuidad de negocio.',
        image: '/img/categorias/almacenamiento.jpg'
    },
    {
        slug: 'radio-enlaces',
        name: 'Radio enlaces',
        description: 'Enlaces punto a punto, punto multipunto y redes inalámbricas de largo alcance.',
        image: '/img/categorias/radio.jpg'
    },
    {
        slug: 'telefonia-ip',
        name: 'Telefonía IP',
        description: 'Centrales IP, telefonía unificada y comunicaciones empresariales.',
        image: '/img/categorias/telefonia.jpg'
    },
    {
        slug: 'servidores',
        name: 'Servidores',
        description: 'Servidores físicos, blade, rack y soluciones de virtualización.',
        image: '/img/categorias/servidores.jpg'
    },
    {
        slug: 'cableado',
        name: 'Cable estructurado',
        description: 'Sistemas de cableado estructurado, fibra óptica, categoría 6/7.',
        image: '/img/categorias/cableado.jpg'
    },
    {
        slug: 'virtualizacion',
        name: 'Virtualización',
        description: 'Hypervisores, infraestructura definida por software y nube privada.',
        image: '/img/categorias/virtualizacion.jpg'
    }
]

// Datos de marcas (cada marca tiene categoría, imagen, descripción y URL externa)
const marcas = [
    /* Seguridad */
    {
        id: 1,
        name: 'Fortinet',
        description: 'Es el proveedor mundial en dispositivos de seguridad de red y líder en gestión unificada de amenazas (UTM). Sus productos y servicios ofrecen una gran protección integrada y de alto rendimiento contra las dinámicas amenazas de seguridad. Sus más de 360.000 clientes en todo el mundo están compuestos por empresas, proveedores de servicios, gobierno y organizaciones de todo tipo.',
        image: '/img/productos/fortigate.png',
        categoriaSlug: 'seguridad',
        externalUrl: 'https://www.fortinet.com/'
    },
    {
        id: 2,
        name: 'Infoblox',
        description: 'Infoblox brinda servicios de seguridad y redes centrales avanzados, informados por el contexto de la red del usuario, para permitir experiencias de redes de siguiente nivel para equipos de TI y usuarios en todas partes. Nuestra plataforma BloxOne™ también sentó las bases para una arquitectura de administración moderna y nativa de la nube que acelera, automatiza y protege a la fuerza laboral moderna actual.',
        image: '/img/productos/infoblox.png',
        categoriaSlug: 'seguridad',
        externalUrl: 'https://www.infoblox.com/'
    },
    {
        id: 3,
        name: 'G Data',
        description: 'Es una innovadora multinacional con una dilatada experiencia en el desarrollo de soluciones de seguridad informática. Está especializada en protección online y ha sido pionera en el desarrollo de programas antimalware. Fue fundada en 1985 (es la empresa de seguridad más veterana del mundo)',
        image: '/img/productos/gdata.png',
        categoriaSlug: 'seguridad',
        externalUrl: 'https://www.gdatasoftware.com/'
    },
    /* Movilidad */
    {
        id: 4,
        name: 'Aruba Instant Activate',
        description: 'Aruba Activate es un servicio basado en la nube que ayuda a aprovisionar sus dispositivos Aruba y mantener su inventario. Activate automatiza el proceso de aprovisionamiento, lo que permite que un solo técnico de TI implemente dispositivos de manera fácil y rápida. a lo largo de una empresa distribuida. Una vez que un dispositivo está en su inventario, puede asociarse automática o manualmente a una carpeta y una regla de aprovisionamiento. Un técnico remoto solo necesita conecte el dispositivo a Internet. Todo este proceso lleva menos de diez minutos y requiere sin intervención humana, lo que permite un verdadero aprovisionamiento sin intervención',
        image: '/img/productos/aruba-activate.png',
        categoriaSlug: 'movilidad',
        externalUrl: 'https://www.arubanetworks.com/'
    },
    {
        id: 5,
        name: 'ClearPass On Boarding',
        description: 'permite automatizar el establecimiento de una conectividad segura a través de cualquier dispositivo móvil manteniendo los perfiles de seguridad de una empresa sin necesidad de intervención del departamento de TI y con independencia de que el dispositivo usado pertenezca al usuario o a la empresa.',
        image: '/img/productos/mgmt-central1.png',
        categoriaSlug: 'movilidad',
        externalUrl: ''
    },
    {
        id: 6,
        name: 'ClearPass Guest Access',
        description: 'Es una solución de gestión de visitantes escalable y fácil de usar que ofrece flujos de trabajo de acceso de invitados automatizados y seguros para visitantes, contratistas, socios, compradores y fanáticos en redes inalámbricas y cableadas utilizando cualquier tipo de dispositivo móvil. Las opciones de autorregistro y participación del patrocinador garantizan que las credenciales y los privilegios de acceso preautorizados se apliquen a los huéspedes a corto y largo plazo, sin imponer una gran carga a TI, recepcionistas y personal.',
        image: '/img/productos/clearpass-guest.png',
        categoriaSlug: 'movilidad',
        externalUrl: ''
    },
    /* Switches y Routers */
    {
        id: 7,
        name: 'Brocade',
        description: 'Brocade ofrece una familia completa de Switches y routers Ethernet de alta confiabilidad, escalables y siempre disponibles para empresas, centros de datos y redes de proveedores de servicios. Los Switches son la base para la conectividad de alto rendimiento en el almacenamiento, IP y entornos de red ethernet están diseñados para una amplia gama de ambientes que permite un bajo TCO y rápido ROI. Los routers permiten tener redes altamente disponibles y seguras desde Edge hasta el Core.',
        image: '/img/productos/brocade.png',
        categoriaSlug: 'switches-routers',
        externalUrl: 'https://www.brocade.com/'
    },
    {
        id: 8,
        name: 'Aruba Networks',
        description: 'Aruba Networks cuenta con una solución que ofrece a las empresas una red inteligente los switches aruba proporcionan alto rendimiento para la movilidad e IoT, cuentan con la última tecnología en seguridad red para garantizar que los datos de la empresa estén totalmente a salvo. Los administradores IT pueden gestionar la red de la empresa de manera sencilla, ya sea un gran campus o una sucursal remota de pequeñas dimensiones. La gestión se realiza o bien desde la nube o desde el sitio.',
        image: '/img/productos/switches-aruba-1.png',
        categoriaSlug: 'switches-routers',
        externalUrl: 'https://www.arubanetworks.com/'
    },
    {
        id: 9,
        name: 'Dell Networking',
        description: 'Los switches y routers Dell ofrece una gama amplia de productos para ofrecer redes más simples de acceso  a costos bajos, proporcionan un rendimiento de velocidad de línea, una escalabilidad rentable y una sólida conmutación en la capa 2 (L2) y enrutamiento en la capa 3 (L3) basados en una arquitectura revolucionaria que combina un hardware totalmente distribuido y un software modular, los garantizando un rendimiento predecible de la aplicación, un incremento en la disponibilidad de la red y costes operativos reducidos.',
        image: '/img/productos/dell.avif',
        categoriaSlug: 'switches-routers',
        externalUrl: 'https://www.dell.com/es-es/shop/hardware-y-dispositivos-de-redes/sc/networking-products'
    },
    {
        id: 10,
        name: 'Cisco',
        description: 'Cisco ofrece un completo portafolio de soluciones de switching para redes empresariales, centros de datos y empresas en crecimiento. Estas soluciones están optimizadas para una amplia gama de sectores que incluye proveedores de servicios, servicios financieros y el sector público. Cisco es el fabricante de routers con mayor fama y reputación y es el que marca la diferencia en este field. Mercado IT El router Cisco te va a proporcionar conectividad a nivel de red o de nivel tres en el modelo OSI (Open Sytem Interconnection)  Ya que su principal función es el envío de paquetes de datos de una red a otra, es decir, la de interconectar subredes entre sí.',
        image: '/img/productos/cisco.jpg',
        categoriaSlug: 'switches-routers',
        externalUrl: 'https://www.cisco.com/'
    },
    {
        id: 11,
        name: 'Panduit',
        description: 'Sistema de cableado estructurado categoría 6A. Infraestructura de red, cableado estructurado y soluciones para centros de datos.',
        image: '/img/productos/panduit-cableado.jpg',
        categoriaSlug: 'cableado',
        externalUrl: 'https://www.panduit.com/'
    },
    {
        id: 12,
        name: 'VMware',
        description: 'Plataforma de virtualización de servidores y gestión centralizada. Virtualización, infraestructura cloud, redes definidas por software y plataformas para centros de datos.',
        image: '/img/productos/vmware-vsphere.jpg',
        categoriaSlug: 'virtualizacion',
        externalUrl: 'https://www.vmware.com/'
    }
]

const categoria = ref(null)
const marcasCategoria = ref([])

onMounted(() => {
    categoria.value = categorias.find(c => c.slug === categoriaSlug)
    if (!categoria.value) {
        router.push('/productos')
        return
    }
    marcasCategoria.value = marcas.filter(m => m.categoriaSlug === categoriaSlug)
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

.marcas-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.marca-row {
    display: flex;
    align-items: center;
    gap: 3rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.marca-row:nth-child(1) {
    animation-delay: 0.1s;
}

.marca-row:nth-child(2) {
    animation-delay: 0.2s;
}

.marca-row:nth-child(3) {
    animation-delay: 0.3s;
}

.marca-row:nth-child(4) {
    animation-delay: 0.4s;
}

.marca-row:nth-child(5) {
    animation-delay: 0.5s;
}

.marca-row:nth-child(6) {
    animation-delay: 0.6s;
}

.marca-row:nth-child(7) {
    animation-delay: 0.7s;
}

.marca-row:nth-child(8) {
    animation-delay: 0.8s;
}

.marca-row:nth-child(9) {
    animation-delay: 0.9s;
}

.marca-row:nth-child(10) {
    animation-delay: 1s;
}

.row-left .marca-image {
    flex: 1;
    order: 1;
}

.row-left .marca-description {
    flex: 1;
    order: 2;
}

.row-right .marca-image {
    flex: 1;
    order: 2;
}

.row-right .marca-description {
    flex: 1;
    order: 1;
}

.marca-image {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.marca-image img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s;
}

.marca-row:hover .marca-image img {
    transform: scale(1.02);
}

.marca-description h3 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 1rem;
}

.marca-description p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 1.5rem;
}

.marca-button {
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

.marca-button:hover {
    background: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(101, 179, 202, 0.3);
    border-color: white;
}

.button-arrow {
    transition: transform 0.3s;
}

.marca-button:hover .button-arrow {
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

    .marca-row {
        flex-direction: column !important;
        gap: 1.5rem;
        text-align: center;
    }

    .row-left .marca-description,
    .row-right .marca-description,
    .row-left .marca-image,
    .row-right .marca-image {
        order: 0;
    }

    .marca-description h3 {
        font-size: 1.6rem;
    }

    .marca-description p {
        font-size: 1rem;
    }
}
</style>