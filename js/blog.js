document.addEventListener("DOMContentLoaded", function() {
    // 1. Usamos la ruta que configuramos en el archivo _redirects de Netlify
    const feedUrl = '/blog-wix-feed'; 
    const container = document.getElementById('blog-container');

    if (!container) return;

    fetch(feedUrl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            
            if (items.length > 0) {
                container.innerHTML = ''; // Limpiamos el mensaje de "cargando"
                
                // Tomamos solo los 3 posts más recientes
                const posts = Array.from(items).slice(0, 3);

                posts.forEach(item => {
                    // Extraemos los datos necesarios del XML de Wix
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    const enclosure = item.querySelector("enclosure");
                    const img = enclosure ? enclosure.getAttribute("url") : 'https://via.placeholder.com/400x300';
                    
                    // EXTRAEMOS EL TEXTO DEL BLOG (La descripción)
                    // Usamos un pequeño truco para limpiar etiquetas HTML que vienen de Wix
                    const rawDescription = item.querySelector("description").textContent;
                    const cleanDescription = rawDescription.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 180);

                    // Creamos la estructura HTML para el diseño horizontal
                    const cardHTML = `
                        <div class="blog-post-card">
                            <div class="blog-card-image">
                                <img src="${img}" alt="${title}">
                            </div>
                            <div class="blog-post-info">
                                <div class="blog-meta">GUSTAVO GRECCO • 1 Min de lectura</div>
                                <h3>${title}</h3>
                                <p class="blog-description">${cleanDescription}...</p>
                                <div class="blog-footer">
                                    <a href="${link}" target="_blank" class="blog-link">Read more</a>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
            }
        })
        .catch(err => {
            console.error("Error al obtener el contenido:", err);
            container.innerHTML = '<p>Visita <a href="https://www.mealmadrid.es/blog" target="_blank">nuestro blog</a> para ver las últimas recetas.</p>';
        });
});