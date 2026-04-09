<template>
    <div class="terminos-page">
        <!-- HERO FULL WIDTH -->
        <Hero class = "terminos-hero"
            title="Términos y Condiciones" 
            subtitle="Política de privacidad de AR-SITE INTEGRADORES"
            image="/img/tyc.png" 
        />

        <!-- CONTENIDO LIMITADO POR EL CONTENEDOR GLOBAL -->
        <section class="terminos-content container">
            <h2>POLÍTICA DE PRIVACIDAD DE AR-SITE INTEGRADORES</h2>
            <p>
                Antes de utilizar el sitio web, te recomendamos leer cuidadosamente cada uno de los apartados de este
                comunicado. Al utilizar el sitio estarás confirmando automáticamente que entiendes y aceptas los
                términos y condiciones de uso. Si no estás de acuerdo con estos términos, deberías utilizar el sitio
                web. Arsite.com.mx se reserva el derecho de cambiar, modificar, eliminar o adecuar cualquier parte de
                estos términos y condiciones de uso en cualquier momento sin el consentimiento de los usuarios. Es tu
                deber como usuario revisar periódicamente las modificaciones en esta sección para estar al tanto de las
                actualizaciones. El uso continuo de nuestro portal implica aceptar estos cambios de manera automática.
            </p>

            <h3>USO DE Arsite.com.mx</h3>
            <p>
                El usuario de arsite.com.mx no deberá compartir información de su cuenta con ningún tercero y la
                generación de órdenes a una cuenta por medio de un usuario que no sea el titular deberá ser previamente
                autorizada por el titular de la cuenta. Para esto un agente de ventas de arsite.com.mx podrá contactar y
                aprobar o desaprobar dichas compras en el sitio.
            </p>
            <p>
                Todo el contenido presentado en el sitio es sólo para fines informativos. Las imágenes, diseños y
                fotografías presentadas en la página son de uso EXCLUSIVO de Arsite.com.mx. AR-Site Integradores se
                reserva el derecho de eliminar usuarios o negar el servicio a cuentas, empresas o personas físicas que
                se sorprendan haciendo uso de estas imágenes, diseños y fotografías.
            </p>

            <h3>Información que recopilamos</h3>
            <p>
                En AR-Site Integradores, recopilamos información personal de los usuarios de nuestro sitio web, como su
                nombre, dirección de correo electrónico, número de teléfono y dirección de facturación. También podemos
                recopilar información de navegación, como el tipo de navegador, el sistema operativo, la dirección IP y
                las páginas visitadas en nuestro sitio web.
            </p>

            <h3>Cómo utilizamos la información</h3>
            <p>
                La información personal que recopilamos se utiliza para los siguientes fines:
            </p>
            <ul>
                <li>Procesamiento de pedidos y pagos</li>
                <li>Comunicaciones con los usuarios, incluyendo el envío de boletines informativos y promociones</li>
                <li>Personalización de la experiencia del usuario en nuestro sitio web</li>
                <li>Mejora de nuestro sitio web y servicios</li>
            </ul>

            <h3>Cómo compartimos la información</h3>
            <p>
                Podemos compartir la información personal de los usuarios con terceros en las siguientes circunstancias:
            </p>
            <ul>
                <li>Con nuestros proveedores de servicios, como procesadores de pagos y proveedores de alojamiento de
                    sitios web, solo en la medida necesaria para proporcionar sus servicios.</li>
                <li>Con empresas afiliadas de AR-Site Integradores, siempre que dicha divulgación sea necesaria para
                    cumplir con los fines descritos en esta política de privacidad.</li>
                <li>Cuando se requiere por ley o en respuesta a una solicitud legal válida.</li>
            </ul>

            <h3>Cómo protegemos la información</h3>
            <p>
                En AR-Site Integradores, tomamos medidas de seguridad técnicas, físicas y administrativas para proteger
                la información personal de los usuarios contra la pérdida, el acceso no autorizado, la divulgación y la
                alteración. Algunas de estas medidas incluyen el uso de cifrado de datos, firewalls y controles de
                acceso.
            </p>

            <h3>Cookies y otras tecnologías de seguimiento</h3>
            <p>
                Podemos utilizar cookies y otras tecnologías de seguimiento para recopilar información sobre la
                navegación de los usuarios en nuestro sitio web y para personalizar su experiencia. Los usuarios pueden
                desactivar las cookies en su navegador, aunque esto puede limitar la funcionalidad del sitio web.
            </p>

            <h3>Derechos de los usuarios</h3>
            <p>
                Los usuarios tienen derecho a solicitar el acceso, la corrección o la eliminación de su información
                personal. También tienen derecho a oponerse al procesamiento de su información personal por razones
                legítimas. Para ejercer estos derechos, los usuarios pueden contactarnos a través de los datos de
                contacto proporcionados en este sitio web.
            </p>

            <h3>Cambios en esta política de privacidad</h3>
            <p>
                Podemos actualizar esta política de privacidad de vez en cuando para reflejar los cambios en nuestra
                forma de manejar la información personal de los usuarios. Se anima a los usuarios a revisar esta
                política de privacidad periódicamente para estar al tanto de cualquier cambio.
            </p>

            <p>
                Si tienes alguna pregunta o comentario sobre esta política de privacidad, no dudes en contactarnos a
                través de los datos de contacto proporcionados en nuestro sitio web.
            </p>

            <p class="legal-note">
                Esta política de privacidad se rige por las leyes de privacidad aplicables en México.
            </p>
        </section>
    </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
</script>

<style scoped>

:deep(.terminos-hero .overlay){
    /* Centrado perfecto */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: auto;
    max-width: 90%;
    padding: 1rem 4rem;

}

/* :deep(.terminos-hero) {
    background: rgba(57, 57, 57, 0.55);
    backdrop-filter: blur(8px);

    Sombra para dar profundidad 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    Borde sutil 
    border: 1px solid rgba(255, 255, 255, 0.2);
    
} */

:deep(.terminos-hero .overlay h1){
    font-size: 4rem;
    margin: 0 0 0.5rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.1;
}
.terminos-page {
    min-height: 100vh;
}

.terminos-content {
    padding: 60px 0;
    background: #ffffff;
    color: #333;
    line-height: 1.8;
}

.terminos-content h2 {
    font-size: 2rem;
    color: #65B3CA;
    margin: 0 0 1.5rem 0;
    font-weight: 700;
}

.terminos-content h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 0.5rem;
}

.terminos-content p {
    margin-bottom: 1.2rem;
    text-align: justify;
}

.terminos-content ul {
    margin: 1rem 0 1.5rem 2rem;
    list-style-type: disc;
}

.terminos-content li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.legal-note {
    margin-top: 2rem;
    font-style: italic;
    color: #555;
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding-top: 1.5rem;
}

@media (max-width: 768px) {
    .terminos-content {
        padding: 40px 0;
    }

    .terminos-content h2 {
        font-size: 1.8rem;
    }

    .terminos-content h3 {
        font-size: 1.3rem;
    }
}
</style>