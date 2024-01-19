var duvidas = document.querySelectorAll(".duvida");

duvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        // Fecha todas as outras divs
        duvidas.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
                outraDuvida.classList.remove('ativa');
            }
        });

        duvida.classList.toggle('ativa');
    });
});

