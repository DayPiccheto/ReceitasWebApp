function buscarReceitas() {
    const ingredientes = document.getElementById('ingredientes').value;
    if (!ingredientes) {
        alert('Por favor, insira os ingredientes.');
        return;
    }

    fetch(`https://api.edamam.com/search?q=${ingredientes}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`)
        .then(response => response.json())
        .then(data => {
            let html = '<h2>Resultados:</h2>';
            data.hits.forEach(hit => {
                html += `<p><strong>${hit.recipe.label}</strong><br><a href="${hit.recipe.url}" target="_blank">Veja a receita</a></p>`;
            });
            document.getElementById('resultados').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('resultados').innerHTML = 'Desculpe, algo deu errado. Tente novamente mais tarde.';
        });
}
