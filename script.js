function calculateSign() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const resultDiv = document.getElementById('result');

    if (!day || !month) {
        alert("Por favor, preencha a data corretamente!");
        return;
    }

    let sign = "", knight = "", power = "", img = "";

    // Lógica com Operadores Lógicos
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        sign = "Áries"; knight = "Mu"; 
        power = "Mestre da telequinesia e da Muralha de Cristal.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgmTTEPVSS6UJXCUeu41A59Lh3sB6j4KxKg&s";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        sign = "Touro"; knight = "Aldebaran"; 
        power = "Força bruta avassaladora com o Grande Chifre.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAYZJmmIMhNSTCD7Nar9yqrTcC5bX4WpYug&s";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        sign = "Gêmeos"; knight = "Saga"; 
        power = "Poder de enviar oponentes para Outra Dimensão.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoUZlPO2VTfZJDP05tTCqJeHxMFVaGczRXw&s";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        sign = "Câncer"; knight = "Máscara da Morte"; 
        power = "Comanda as Ondas do Inferno.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-bF_A8zgJQsDA5N0Bo_tXUf-6zq17kGdWg&s";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        sign = "Leão"; knight = "Aiolia"; 
        power = "Relâmpago de Plasma na velocidade da luz.";
        img = "https://ovicio.com.br/wp-content/uploads/2023/05/20230502-ovicio-os-cavaleiros-do-zodiaco-aiolia-de-leao.jpg";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        sign = "Virgem"; knight = "Shaka"; 
        power = "O homem mais próximo de Deus. Tesouro do Céu.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbv5r2oSh_Ttldd9XWlhsdIh8JAvAF6lIDhQ&s";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        sign = "Libra"; knight = "Dohko"; 
        power = "Mestre das Armas de Libra e do Cólera dos 100 Dragões.";
        img = "https://i.pinimg.com/474x/0c/95/0c/0c950c0ec880ff4746200107ee22e8de.jpg";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        sign = "Escorpião"; knight = "Milo"; 
        power = "A Agulha Escarlate que fere mortalmente.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zV77Ttm3jZYSpcLjQoLrq1TOC3cctT0yMA&s";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        sign = "Sagitário"; knight = "Aiolos"; 
        power = "Dono da Flecha de Ouro e da vontade inabalável.";
        img = "https://i.pinimg.com/736x/b3/67/c1/b367c1d83f76e325fa2c2ed0fe7bef0a.jpg";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = "Capricórnio"; knight = "Shura"; 
        power = "A lendária espada sagrada Excalibur em seu braço.";
        img = "https://i.pinimg.com/474x/a1/bd/a7/a1bda7964364b99defa162cd48ae8814.jpg";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        sign = "Aquário"; knight = "Camus"; 
        power = "Execução Aurora e o Zero Absoluto.";
        img = "https://ovicio.com.br/wp-content/uploads/2023/05/20230508-camus-aquario-555x555.png";
    } else {
        sign = "Peixes"; knight = "Afrodite"; 
        power = "Rosas Piranhas e a beleza mortal.";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yLA3Q58Nk9qP_Rfhg6nYJiO8UeWdnHyIHQ&s";
    }

    // Saída Dinâmica
    resultDiv.innerHTML = `
        <h2 style="color:#facc15; font-family:'Cinzel'">${sign}</h2>
        <p><strong>Cavaleiro:</strong> ${knight}</p>
        <img src="${img}" class="knight-img">
        <p><em>"${power}"</em></p>
    `;
    resultDiv.style.display = "block";
}