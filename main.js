document.addEventListener('DOMContentLoaded', function() {
    // Código para inicializar elementos e eventos após o DOM estar completamente carregado

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Criação e atualização do elemento <img> no botão, se necessário
    let imgElement = toggleButton.querySelector('img');
    if (!imgElement) {
        imgElement = document.createElement('img');
        toggleButton.appendChild(imgElement);
    }

    function updateButtonImage() {
        if (body.classList.contains('dark-mode')) {
            imgElement.src = 'assets/sun.png'; // Imagem para o modo claro
            imgElement.alt = 'Tema claro';
        } else {
            imgElement.src = 'assets/moon.png'; // Imagem para o modo escuro
            imgElement.alt = 'Tema escuro';
        }
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        updateButtonImage();
    });

    // Inicializa o botão com a imagem correta dependendo do tema atual
    updateButtonImage();

    // Ajusta a taxa de reprodução do vídeo, se existir
    var video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 0.8; // Ajusta a taxa de reprodução do vídeo
    }

    // Inicializa elementos parallax, se houver
    var elems = document.querySelectorAll('.parallax');
    if (elems.length > 0) {
        var instances = M.Parallax.init(elems);
    }

    // Adiciona evento de clique ao botão do GitHub
    const githubButton = document.getElementById('github');
    if (githubButton) {
        githubButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão de clicar no link

            const confirmed = confirm('Do you want to change the window?');

            if (confirmed) {
                window.location.href = githubButton.href;
            }
        });
    }
});
