document.addEventListener("DOMContentLoaded", function() {
    // Ahora llamamos a la ruta interna que creamos en Netlify
    const feedUrl = '/blog-wix-feed'; 
    const container = document.getElementById('blog-container');

    if (!container) return;

    fetch(feedUrl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            
            if (items.length > 0) {
                container.innerHTML = ''; // Limpiar mensajes
                
                // Tomamos los 3 primeros
                const posts = Array.from(items).slice(0, 3);

                posts.forEach(item => {
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    const enclosure = item.querySelector("enclosure");
                    const img = enclosure ? enclosure.getAttribute("url") : 'https://via.placeholder.com/400x300';

                    const cardHTML = `
                        <div class="blog-post-card">
                            <img src="${img}" alt="${title}" class="blog-post-img">
                            <div class="blog-post-info">
                                <h3>${title}</h3>
                                <a href="${link}" target="_blank" class="blog-link">Read more</a>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
            }
        })
        .catch(err => {
            console.error("Error definitivo:", err);
            container.innerHTML = '<p>Error al cargar el blog. <a href="https://www.mealmadrid.es/blog" target="_blank">Ver en Wix</a></p>';
        });
});