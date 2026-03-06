document.addEventListener("DOMContentLoaded", function() {
    const wixFeedUrl = 'https://www.mealmadrid.es/blog-feed.xml';
    // Usamos allorigins para saltar el bloqueo de seguridad (CORS) sin procesar el feed
    const converterUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(wixFeedUrl)}`;
    const container = document.getElementById('blog-container');

    if (!container) return;

    fetch(converterUrl)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Error en la red');
        })
        .then(data => {
            // El contenido XML viene dentro de data.contents
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            if (items.length > 0) {
                container.innerHTML = ''; // Limpiamos el contenedor

                // Convertimos la lista de items en un array y tomamos los primeros 3
                const posts = Array.from(items).slice(0, 3);

                posts.forEach(post => {
                    const title = post.querySelector("title").textContent;
                    const link = post.querySelector("link").textContent;
                    
                    // Buscamos la imagen en la etiqueta <enclosure>
                    const enclosure = post.querySelector("enclosure");
                    const imageUrl = enclosure ? enclosure.getAttribute("url") : 'https://via.placeholder.com/400x300?text=Meal+Madrid';

                    const cardHTML = `
                        <div class="blog-post-card">
                            <img src="${imageUrl}" alt="${title}" class="blog-post-img">
                            <div class="blog-post-info">
                                <h3>${title}</h3>
                                <a href="${link}" target="_blank" class="blog-link">Read more</a>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
            } else {
                container.innerHTML = '<p>No se encontraron publicaciones recientes.</p>';
            }
        })
        .catch(err => {
            console.error("Error cargando el blog:", err);
            container.innerHTML = '<p>Error al conectar con el blog.</p>';
        });
});