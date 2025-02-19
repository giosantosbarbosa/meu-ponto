document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.querySelector(".btn-calcular");

    calcularBtn.addEventListener("click", function () {
        // Pegando os valores dos campos de entrada
        let horaDevida = document.querySelector("#carga-horaria input");
        let entrada1Input = document.querySelector("#entrada1 input");
        let saida1Input = document.querySelector("#saida1 input");
        let entrada2Input = document.querySelector("#entrada2 input");
        let saida2Field = document.querySelector(".retorno-sai2");

        // Pegando qual carga horária foi selecionada
        let cargaHoraria = document.querySelector("#hora1").checked ? "08:48" : "08:00";

        // Convertendo os valores para minutos
        function horaParaMinutos(hora) {
            if (!hora) return 0;
            let partes = hora.split(":");
            return parseInt(partes[0]) * 60 + parseInt(partes[1]);
        }

        function minutosParaHora(minutos) {
            let horas = Math.floor(minutos / 60);
            let mins = minutos % 60;
            return `${horas.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
        }

        // Validando se os campos foram preenchidos
        if (!entrada1Input.value || !saida1Input.value || !entrada2Input.value) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        let cargaMinutos = horaParaMinutos(cargaHoraria);
        let entrada1Min = horaParaMinutos(entrada1Input.value);
        let saida1Min = horaParaMinutos(saida1Input.value);
        let entrada2Min = horaParaMinutos(entrada2Input.value);
        let horaDevidaMin = horaParaMinutos(horaDevida.value);

        // Aplicando a fórmula
        let saida2Min = horaDevidaMin + entrada2Min + (cargaMinutos - (saida1Min - entrada1Min));

        // Convertendo para formato HH:MM
        let saida2Hora = minutosParaHora(saida2Min);

        // Exibindo o resultado na interface
        saida2Field.textContent = `Horário de saída: ${saida2Hora}`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Obtém o nome do arquivo da URL
    let currentPath = window.location.pathname.split("/").pop() || "index.html";
    console.log("Página detectada:", currentPath);

    // Mapeia os IDs dos links
    const pages = {
        "index.html": "inicio",
        "calculadora.html": "calculadora",
        "sobre.html": "sobre"
    };

    // Verifica se a página está no mapeamento
    if (pages[currentPath]) {
        let activeItem = document.getElementById(pages[currentPath]);
        
        if (activeItem) {
            console.log("Elemento encontrado:", activeItem);
            activeItem.parentElement.classList.add("active");
        } else {
            console.error("Elemento não encontrado para a página:", currentPath);
        }
    } else {
        console.warn("Página não está no mapeamento:", currentPath);
    }
});
