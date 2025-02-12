document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.querySelector(".btn-primary");
    
    calcularBtn.addEventListener("click", function () {
        // Pegando os valores dos campos de entrada
        let cargaHoraria = document.querySelector("#carga-horaria").nextElementSibling.value;
        let entrada1 = document.querySelector("#ent1").nextElementSibling.value;
        let saida1 = document.querySelector("#sai1").nextElementSibling.value;
        let entrada2 = document.querySelector("#ent2").nextElementSibling.value;
        let saida2Field = document.querySelector(".retorno-sai2");

        // Convertendo os valores para minutos
        function horaParaMinutos(hora) {
            let partes = hora.split(":");
            return parseInt(partes[0]) * 60 + parseInt(partes[1]);
        }

        function minutosParaHora(minutos) {
            let horas = Math.floor(minutos / 60);
            let mins = minutos % 60;
            return `${horas.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
        }

        if (cargaHoraria && entrada1 && saida1 && entrada2) {
            let cargaMinutos = horaParaMinutos(cargaHoraria);
            let entrada1Min = horaParaMinutos(entrada1);
            let saida1Min = horaParaMinutos(saida1);
            let entrada2Min = horaParaMinutos(entrada2);

            // Aplicando a fórmula
            let saida2Min = cargaMinutos + entrada1Min - saida1Min + entrada2Min;

            // Convertendo para formato HH:MM
            let saida2Hora = minutosParaHora(saida2Min);

            // Exibindo o resultado na interface
            saida2Field.textContent = saida2Hora;
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });
});
