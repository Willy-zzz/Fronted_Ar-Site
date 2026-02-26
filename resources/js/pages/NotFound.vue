<template>
    <div class="not-found-page">
        <!-- Hero con clase personalizada para estilos únicos -->
        <Hero class="notfound-hero" title="404" subtitle="Página no encontrada" image="/img/404-bg.png" />

        <!-- Contenido adicional -->
        <section class="not-found-content">
            <div class="container">
                <div class="message-box">
                    <svg class="not-found-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h2>¡Ups! Página no encontrada</h2>
                    <p>La página que estás buscando no existe o ha sido movida.</p>
                    <router-link to="/" class="home-link">Volver al inicio</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
</script>

<style scoped>
.not-found-page {
    min-height: 100vh;
}

/* ===== ESTILOS PERSONALIZADOS PARA EL HERO ===== */
/* Afectan solo al hero con clase .notfound-hero */
:deep(.notfound-hero .overlay) {
    /* Centrado perfecto */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: auto;
    max-width: 90%;
    padding: 1rem 4rem;

    /* Fondo semitransparente con difuminado */
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
    border-radius: 30px;

    /* Sombra para dar profundidad */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    /* Borde sutil */
    border: 1px solid rgba(255, 255, 255, 0.2);
}

:deep(.notfound-hero .overlay h1) {
    font-size: 8rem;
    margin: 0 0 0.5rem;
    color: #e53e3e;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.1;
}

:deep(.notfound-hero .overlay p) {
    font-size: 2.5rem;
    margin: 0;
    color: #fbbf24;;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 300;
    letter-spacing: 1px;
}

/* ===== ESTILOS DEL CONTENIDO INFERIOR ===== */
.not-found-content {
    padding: 60px 20px;
    background: #f8fafc;
    text-align: center;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.message-box {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.not-found-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    color: #65B3CA;
    animation: pulse 2s infinite;
}

.message-box h2 {
    font-size: 2.5rem;
    color: #1a202c;
    margin-bottom: 15px;
}

.message-box p {
    font-size: 1.2rem;
    color: #4a5568;
    margin-bottom: 30px;
    line-height: 1.6;
}

.home-link {
    display: inline-block;
    padding: 12px 30px;
    background: linear-gradient(135deg, #65B3CA 0%, #3b82f6 100%);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: transform 0.3s, box-shadow 0.3s;
}

.home-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(101, 179, 202, 0.4);
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1078px) {
    :deep(.notfound-hero .overlay) {
        padding: 1.5rem 2rem;
        border-radius: 20px;
        max-width: 95%;
    }

    :deep(.notfound-hero .overlay h1) {
        font-size: 5rem;
    }

    :deep(.notfound-hero .overlay p) {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    :deep(.notfound-hero .overlay h1) {
        font-size: 4rem;
    }

    :deep(.notfound-hero .overlay p) {
        font-size: 1.5rem;
    }

    .message-box {
        padding: 30px 20px;
    }

    .message-box h2 {
        font-size: 2rem;
    }

    .not-found-icon {
        width: 60px;
        height: 60px;
    }
}
</style>