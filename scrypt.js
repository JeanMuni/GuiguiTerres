/* ==========================================================================
   Lógica e Interatividade — Projeto Prêmio Guigui Terres
   Escola Estadual D. Pedro II (Ensino Integral) - Janiópolis/PR
   ========================================================================== */

// Contador inicial simulado para o abaixo-assinado
let totalAssinaturas = 148;

/**
 * Função para tratar o envio do formulário de Abaixo-Assinado
 * @param {Event} event 
 */
function handleSignature(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const roleSelect = document.getElementById('role');
    const successMsg = document.getElementById('successMessage');
    const counterElement = document.getElementById('counter');

    // Validação básica do campo nome
    if (nameInput && nameInput.value.trim() !== "") {
        // Incrementa o contador de assinaturas
        totalAssinaturas++;
        
        // Atualiza o texto do contador na página
        if (counterElement) {
            counterElement.innerText = totalAssinaturas;
        }

        // Reseta o formulário
        document.getElementById('signatureForm').reset();

        // Exibe a mensagem de sucesso
        if (successMsg) {
            successMsg.classList.remove('hidden');

            // Esconde a mensagem após 4 segundos
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 4000);
        }
    }
}

/**
 * Função para tratar o envio do formulário de Relato de Pontos Críticos
 * @param {Event} event 
 */
function handleReport(event) {
    event.preventDefault();

    const reportForm = document.getElementById('reportForm');
    const reportMsg = document.getElementById('reportSuccess');

    if (reportForm) {
        // Reseta os campos preenchidos
        reportForm.reset();

        // Exibe a mensagem de confirmação
        if (reportMsg) {
            reportMsg.classList.remove('hidden');

            // Esconde a mensagem após 4 segundos
            setTimeout(() => {
                reportMsg.classList.add('hidden');
            }, 4000);
        }
    }
}

/**
 * Rolagem suave (Smooth Scroll) para links internos de navegação
 */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});