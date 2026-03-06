document.addEventListener("DOMContentLoaded", function() {
    const wixFeedUrl = 'https://www.mealmadrid.es/blog-feed.xml';
    const converterUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(wixFeedUrl)}`;
    const container = document.getElementById('blog-container');

    fetch(converterUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                container.innerHTML = ''; // Borra cualquier mensaje previo

                // Mostramos solo los últimos 3 posts
                data.items.slice(0, 3).forEach(post => {
                    // Extraer imagen del enclosure de Wix
                    const imageUrl = post.enclosure && post.enclosure.link ? post.enclosure.link : '';

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
            }
        })
        .catch(err => console.error("Error cargando el blog:", err));
});