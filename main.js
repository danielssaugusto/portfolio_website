document.addEventListener('DOMContentLoaded', function() {
    // Código para inicializar elementos e eventos após o DOM estar completamente carregado

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });

    var video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 0.8; // Ajusta a taxa de reprodução do vídeo, se existir
    }

    // Inicializa elementos parallax, se houver
    var elems = document.querySelectorAll('.parallax');
    if (elems.length > 0) {
        var instances = M.Parallax.init(elems);
    }

    // Adiciona evento de clique ao botão do GitHub
    const githubButton = document.getElementById('github');

    githubButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de clicar no link

        const confirmed = confirm('Do you want to change the window?');
        
        if (confirmed) {
            // Se o usuário confirmou, redireciona para o GitHub
            window.location.href = githubButton.href;
        } else {
            // Se o usuário cancelou, não faz nada
            // Ou você pode adicionar lógica adicional aqui, se necessário
        }
    });
});
