document.addEventListener("DOMContentLoaded", function() {
    // La URL de tu feed de Wix
    const wixFeedUrl = 'https://www.mealmadrid.es/blog-feed.xml';
    
    // Usamos el servicio de Google Feed API (vía un proxy de confianza)
    const converterUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(wixFeedUrl)}&api_key=00000000000000000000000000000000`; 
    // Nota: He vuelto a rss2json pero con un truco para forzar la actualización

    const container = document.getElementById('blog-container');
    if (!container) return;

    console.log("Intentando conectar con el blog...");

    // Intentamos obtener los datos
    fetch(converterUrl)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'ok') {
                container.innerHTML = ''; // Limpiar mensaje de carga

                data.items.slice(0, 3).forEach(post => {
                    // Wix a veces cambia dónde guarda la imagen, probamos varias opciones
                    const imageUrl = post.enclosure?.link || post.thumbnail || 'https://via.placeholder.com/400x300?text=Meal+Madrid';

                    const cardHTML = `
                        <div class="blog-post-card">
                            <img src="${imageUrl}" alt="${post.title}" class="blog-post-img">
                            <div class="blog-post-info">
                                <h3>${post.title}</h3>
                                <a href="${post.link}" target="_blank" class="blog-link">Read more</a>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
                console.log("Blog cargado exitosamente.");
            } else {
                throw new Error(data.message);
            }
        })
        .catch(err => {
            console.error("Detalle del error:", err);
            // Si falla el anterior, intentamos un último recurso sin proxy
            fallbackDirectFetch(wixFeedUrl, container);
        });
});

// Función de respaldo en caso de que los proxies fallen
function fallbackDirectFetch(url, container) {
    console.log("Intentando carga directa de respaldo...");
    fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            if(items.length > 0) {
                container.innerHTML = '';
                for(let i=0; i<3; i++) {
                    const item = items[i];
                    if(!item) continue;
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    const img = item.querySelector("enclosure")?.getAttribute("url") || '';
                    
                    container.innerHTML += `
                        <div class="blog-post-card">
                            <img src="${img}" class="blog-post-img">
                            <div class="blog-post-info">
                                <h3>${title}</h3>
                                <a href="${link}" target="_blank" class="blog-link">Read more</a>
                            </div>
                        </div>`;
                }
            } else {
                container.innerHTML = '<p>Por favor, visita <a href="https://www.mealmadrid.es/blog">nuestro blog directamente</a>.</p>';
            }
        })
        .catch(() => {
            container.innerHTML = '<p>El contenido del blog está cargando en Wix. <a href="https://www.mealmadrid.es/blog" target="_blank">Haz clic aquí para verlo</a>.</p>';
        });
}