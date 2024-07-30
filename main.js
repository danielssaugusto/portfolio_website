document.addEventListener('DOMContentLoaded', function() {
    // Código para inicializar elementos e eventos após o DOM estar completamente carregado

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeStylesheet = document.getElementById('theme-stylesheet');

    function updateButtonImage() {
        const imgElement = toggleButton.querySelector('img');

        if (body.classList.contains('dark-mode')) {
            imgElement.src = 'assets/sun.png'; // Imagem para o modo claro
            imgElement.alt = 'Tema claro';
            themeStylesheet.href = 'stylesheet/dark.css';  
            localStorage.setItem('theme', 'dark');
        } else {
            imgElement.src = 'assets/moon.png'; // Imagem para o modo escuro
            imgElement.alt = 'Tema escuro';
            themeStylesheet.href = 'stylesheet/light.css'
            localStorage.setItem('theme', 'light')
        }
    }

    // Verifica o tema salvo no localStorage e aplica
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeStylesheet.href = 'stylesheet/dark.css';
    } else {
        body.classList.remove('dark-mode');
        themeStylesheet.href = 'stylesheet/light.css';
    }

    // Atualiza o botão com a imagem correta
    updateButtonImage();

    // Adiciona o evento de clique para alternar o tema
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        updateButtonImage();
    });

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
