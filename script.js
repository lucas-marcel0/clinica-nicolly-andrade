// Configuração customizada do Tailwind (caso não use o arquivo CSS puro)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                rosabebê: '#FDF2F8',
                rosaprincipal: '#FBCFE8',
                rosaforte: '#F472B6',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Poppins', 'sans-serif'],
            }
        }
    }
}

// Log para confirmar que o sistema está rodando
console.log("Dra. Nicolly Andrade - Site carregado com sucesso!");