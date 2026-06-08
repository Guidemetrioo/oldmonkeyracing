/**
 * Old Monkey Racing - Sports Car Rental Interactive Booking Wizard (Formula 1600)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Modal Insertion
    createBookingModal();
    
    // 2. DOM Selectors
    const modal = document.getElementById('booking-wizard-modal');
    const closeBtn = document.getElementById('book-close-btn');
    const triggerBtns = document.querySelectorAll('.btn-book-trigger');
    
    const steps = document.querySelectorAll('.book-step-content');
    const stepIndicators = document.querySelectorAll('.book-step-indicator');
    const btnPrev = document.getElementById('book-btn-prev');
    const btnNext = document.getElementById('book-btn-next');
    
    // Form Inputs
    const circuitCards = document.querySelectorAll('.book-circuit-card');
    const batteryInput = document.getElementById('book-batteries');
    const batteryDecrease = document.getElementById('book-btn-battery-minus');
    const batteryIncrease = document.getElementById('book-btn-battery-plus');
    const pricePerBatteryText = document.getElementById('book-price-per-battery');
    const totalPriceText = document.getElementById('book-total-price');
    
    const driverName = document.getElementById('book-driver-name');
    const driverPhone = document.getElementById('book-driver-phone');
    const driverCnh = document.getElementById('book-driver-cnh');
    const driverExp = document.getElementById('book-driver-exp');
    
    // Summary Fields
    const summaryCircuit = document.getElementById('book-sum-circuit');
    const summaryBatteries = document.getElementById('book-sum-batteries');
    const summaryDriverName = document.getElementById('book-sum-driver-name');
    const summaryDriverPhone = document.getElementById('book-sum-driver-phone');
    const summaryDriverExp = document.getElementById('book-sum-driver-exp');
    const summaryTotalText = document.getElementById('book-sum-total');
    
    // State Variables
    let currentStep = 1;
    let selectedCircuit = '';
    let batteriesCount = 1;
    const PRICE_PER_BATTERY = 3000; // R$ 3.000,00 por bateria/sessão
    
    // 3. Bind Trigger Buttons to Open Modal
    if (triggerBtns) {
        triggerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openWizard();
            });
        });
    }
    
    // 4. Modal Open/Close Controls
    function openWizard() {
        if (!modal) return;
        currentStep = 1;
        selectedCircuit = '';
        batteriesCount = 1;
        
        // Reset selections
        circuitCards.forEach(c => c.classList.remove('selected'));
        if (batteryInput) batteryInput.value = 1;
        if (driverName) driverName.value = '';
        if (driverPhone) driverPhone.value = '';
        if (driverCnh) driverCnh.checked = false;
        if (driverExp) driverExp.selectedIndex = 0;
        
        updateTotalAndSpecs();
        showStep(1);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock parent page scroll
    }
    
    function closeWizard() {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; // Unlock parent page scroll
        }
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWizard);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeWizard();
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeWizard();
    });
    
    // 5. Multi-step Navigation Logic
    function showStep(stepNum) {
        currentStep = stepNum;
        
        // Hide all steps, show target step
        steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === stepNum) {
                step.classList.add('active');
            }
        });
        
        // Update Step Indicators
        stepIndicators.forEach(indicator => {
            indicator.classList.remove('active', 'completed');
            const indStep = parseInt(indicator.dataset.step);
            if (indStep === stepNum) {
                indicator.classList.add('active');
            } else if (indStep < stepNum) {
                indicator.classList.add('completed');
            }
        });
        
        // Update Footer Buttons
        if (stepNum === 1) {
            btnPrev.style.display = 'none';
            btnNext.textContent = 'Avançar';
        } else if (stepNum === 4) {
            btnPrev.style.display = 'inline-flex';
            btnNext.textContent = 'Confirmar Reserva (WhatsApp)';
            btnNext.classList.add('btn-confirm-booking');
            populateSummary();
        } else {
            btnPrev.style.display = 'inline-flex';
            btnNext.textContent = 'Avançar';
            btnNext.classList.remove('btn-confirm-booking');
        }
    }
    
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentStep > 1) showStep(currentStep - 1);
        });
    }
    
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < 4) {
                    showStep(currentStep + 1);
                } else {
                    finalizeBooking();
                }
            }
        });
    }
    
    // Validate current step inputs
    function validateStep(stepNum) {
        if (stepNum === 1) {
            if (!selectedCircuit) {
                alert('Por favor, selecione um autódromo para prosseguir.');
                return false;
            }
            return true;
        }
        
        if (stepNum === 2) {
            const count = parseInt(batteryInput.value);
            if (isNaN(count) || count < 1) {
                alert('A quantidade mínima é de 1 bateria de treino.');
                return false;
            }
            return true;
        }
        
        if (stepNum === 3) {
            if (!driverName.value.trim()) {
                alert('Por favor, digite o seu nome completo.');
                driverName.focus();
                return false;
            }
            if (!driverPhone.value.trim()) {
                alert('Por favor, informe seu telefone com WhatsApp para contato.');
                driverPhone.focus();
                return false;
            }
            if (!driverCnh.checked) {
                alert('Atenção: É obrigatório possuir CNH ativa na categoria B para a pilotagem do monoposto F1600 nos autódromos.');
                return false;
            }
            if (!driverExp.value) {
                alert('Por favor, selecione seu nível de experiência nas pistas.');
                driverExp.focus();
                return false;
            }
            return true;
        }
        
        return true;
    }
    
    // 6. Step 1: Circuit Card Selection
    if (circuitCards) {
        circuitCards.forEach(card => {
            card.addEventListener('click', () => {
                circuitCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedCircuit = card.dataset.circuit === 'interlagos' ? 'Autódromo de Interlagos (SP)' : 'Autódromo de Piracicaba (ECPA)';
                setTimeout(() => {
                    if (currentStep === 1) showStep(2);
                }, 200);
            });
        });
    }
    
    // 7. Step 2: Batteries Counter Control
    function updateTotalAndSpecs() {
        if (batteryInput) {
            batteriesCount = parseInt(batteryInput.value) || 1;
            if (batteriesCount < 1) {
                batteriesCount = 1;
                batteryInput.value = 1;
            }
        }
        
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        
        if (pricePerBatteryText) {
            pricePerBatteryText.textContent = `R$ ${PRICE_PER_BATTERY.toLocaleString('pt-BR')},00`;
        }
        if (totalPriceText) {
            totalPriceText.textContent = `R$ ${totalVal.toLocaleString('pt-BR')},00`;
        }
    }
    
    if (batteryDecrease) {
        batteryDecrease.addEventListener('click', () => {
            let val = parseInt(batteryInput.value) || 1;
            if (val > 1) {
                batteryInput.value = val - 1;
                updateTotalAndSpecs();
            }
        });
    }
    
    if (batteryIncrease) {
        batteryIncrease.addEventListener('click', () => {
            let val = parseInt(batteryInput.value) || 1;
            batteryInput.value = val + 1;
            updateTotalAndSpecs();
        });
    }
    
    if (batteryInput) {
        batteryInput.addEventListener('change', updateTotalAndSpecs);
    }
    
    // 8. Step 4: Summary Preparation
    function populateSummary() {
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        const expLabel = driverExp.options[driverExp.selectedIndex].text;
        
        if (summaryCircuit) summaryCircuit.textContent = selectedCircuit;
        if (summaryBatteries) summaryBatteries.textContent = `${batteriesCount} bateria(s) de treino (Fórmula 1600)`;
        if (summaryDriverName) summaryDriverName.textContent = driverName.value.trim();
        if (summaryDriverPhone) summaryDriverPhone.textContent = driverPhone.value.trim();
        if (summaryDriverExp) summaryDriverExp.textContent = expLabel;
        if (summaryTotalText) summaryTotalText.textContent = `R$ ${totalVal.toLocaleString('pt-BR')},00`;
    }
    
    // 9. Finalize and Redirect to WhatsApp
    function finalizeBooking() {
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        const expLabel = driverExp.options[driverExp.selectedIndex].text;
        
        const intro = '🏎️ *NOVO PEDIDO DE ALUGUEL - FÓRMULA 1600*';
        const details = 
            `Olá, equipe Old Monkey Racing!\n\n` +
            `Gostaria de solicitar a reserva de aluguel do Fórmula 1600 pelo próprio site:\n\n` +
            `*--- DADOS DA RESERVA ---*\n` +
            `📍 *Autódromo:* ${selectedCircuit}\n` +
            `🏁 *Baterias de Treino:* ${batteriesCount} (R$ ${PRICE_PER_BATTERY.toLocaleString('pt-BR')},00 cada)\n` +
            `💰 *Valor Total Calculado:* R$ ${totalVal.toLocaleString('pt-BR')},00\n\n` +
            `*--- DADOS DO PILOTO ---*\n` +
            `👤 *Nome Completo:* ${driverName.value.trim()}\n` +
            `📱 *WhatsApp:* ${driverPhone.value.trim()}\n` +
            `🪪 *CNH Categoria B:* Sim (Ativa/Regularizada)\n` +
            `📊 *Nível de Experiência:* ${expLabel}\n\n` +
            `Aguardando retorno para confirmar a data de pista disponível no calendário e chave Pix para pagamento!`;
            
        const whatsappUrl = `https://wa.me/5511984014296?text=${encodeURIComponent(details)}`;
        
        // Simulating modal close on redirect
        closeWizard();
        window.open(whatsappUrl, '_blank');
    }
});

// 10. Dynamic Creation function
function createBookingModal() {
    if (document.getElementById('booking-wizard-modal')) return;
    
    const modalHtml = `
    <div id="booking-wizard-modal" class="book-modal-overlay">
        <div class="book-modal-container">
            <button class="book-modal-close" id="book-close-btn" aria-label="Fechar">&times;</button>
            
            <!-- Wizard Header -->
            <div class="book-modal-header text-center">
                <h2>Aluguel de Fórmula 1600</h2>
                <p>Reserve sua bateria de corrida na equipe campeã</p>
            </div>
            
            <!-- Steps Progress Tracker -->
            <div class="book-steps-tracker">
                <div class="book-step-indicator active" data-step="1">
                    <span class="step-num">1</span>
                    <span class="step-lbl">Circuito</span>
                </div>
                <div class="book-step-line"></div>
                <div class="book-step-indicator" data-step="2">
                    <span class="step-num">2</span>
                    <span class="step-lbl">Baterias</span>
                </div>
                <div class="book-step-line"></div>
                <div class="book-step-indicator" data-step="3">
                    <span class="step-num">3</span>
                    <span class="step-lbl">Piloto</span>
                </div>
                <div class="book-step-line"></div>
                <div class="book-step-indicator" data-step="4">
                    <span class="step-num">4</span>
                    <span class="step-lbl">Resumo</span>
                </div>
            </div>
            
            <!-- Wizard Body Forms -->
            <div class="book-modal-body">
                
                <!-- PASSO 1: Escolha do Circuito -->
                <div class="book-step-content active" data-step="1">
                    <h3>Em qual circuito você quer pilotar?</h3>
                    <p class="step-desc">Selecione o autódromo desejado para o seu treino de monoposto:</p>
                    <div class="book-circuits-select-grid">
                        <div class="book-circuit-card" data-circuit="interlagos">
                            <span class="tag">Fórmula 1</span>
                            <h4>Interlagos</h4>
                            <span class="city">São Paulo / SP</span>
                            <p>O templo da velocidade. Curvas rápidas, subida dos boxes e a adrenalina de um circuito oficial de F1. (4.309m)</p>
                        </div>
                        <div class="book-circuit-card" data-circuit="piracicaba">
                            <span class="tag">Técnico</span>
                            <h4>Piracicaba (ECPA)</h4>
                            <span class="city">Piracicaba / SP</span>
                            <p>Circuito técnico ideal para treinamento inicial, acerto de chassi e lapidação de traçado. (2.100m)</p>
                        </div>
                    </div>
                </div>
                
                <!-- PASSO 2: Baterias e Preço -->
                <div class="book-step-content" data-step="2">
                    <h3>Quantas baterias de treino você quer agendar?</h3>
                    <p class="step-desc">Cada bateria corresponde a uma sessão de pista completa com suporte técnico de boxes e análise de telemetria.</p>
                    
                    <div class="book-counter-card">
                        <span class="counter-label">Selecione as Baterias</span>
                        <div class="book-counter-wrapper">
                            <button id="book-btn-battery-minus" type="button" aria-label="Diminuir">-</button>
                            <input id="book-batteries" type="number" value="1" min="1" readonly>
                            <button id="book-btn-battery-plus" type="button" aria-label="Aumentar">+</button>
                        </div>
                        <div class="book-pricing-display">
                            <div class="price-row">
                                <span>Preço por Bateria:</span>
                                <strong id="book-price-per-battery">R$ 3.000,00</strong>
                            </div>
                            <div class="price-row total-row">
                                <span>Valor Estimado:</span>
                                <strong id="book-total-price" class="text-gradient">R$ 3.000,00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- PASSO 3: Dados Cadastrais -->
                <div class="book-step-content" data-step="3">
                    <h3>Informações de Segurança e Cadastro</h3>
                    <p class="step-desc">Precisamos desses dados para verificação de elegibilidade física e preparação dos equipamentos de box.</p>
                    
                    <div class="book-form">
                        <div class="form-group">
                            <label for="book-driver-name">Nome Completo do Piloto *</label>
                            <input type="text" id="book-driver-name" placeholder="Digite seu nome completo">
                        </div>
                        <div class="form-group">
                            <label for="book-driver-phone">WhatsApp para Contato *</label>
                            <input type="tel" id="book-driver-phone" placeholder="(11) 99999-9999">
                        </div>
                        
                        <div class="form-group-row">
                            <div class="form-group">
                                <label for="book-driver-exp">Experiência em Pistas *</label>
                                <select id="book-driver-exp">
                                    <option value="" disabled selected>Selecione seu nível...</option>
                                    <option value="iniciante">Iniciante Absoluto (Sem experiência prévia)</option>
                                    <option value="trackday">Piloto de Track Day / Carro de Rua</option>
                                    <option value="kart">Piloto de Karting (Base)</option>
                                    <option value="competidor">Já compito em outras categorias oficiais</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-checkbox-group">
                            <input type="checkbox" id="book-driver-cnh">
                            <label for="book-driver-cnh">Declaro possuir Carteira de Habilitação (CNH Categoria B) ativa e regularizada.</label>
                        </div>
                    </div>
                </div>
                
                <!-- PASSO 4: Resumo e Pagamento Simulado -->
                <div class="book-step-content" data-step="4">
                    <h3>Resumo da Sua Reserva</h3>
                    <p class="step-desc">Confira as informações da sua bateria e as instruções de fechamento.</p>
                    
                    <div class="book-summary-card">
                        <div class="sum-row">📍 <span>Circuito Escolhido:</span> <strong id="book-sum-circuit">-</strong></div>
                        <div class="sum-row">🏁 <span>Sessões:</span> <strong id="book-sum-batteries">-</strong></div>
                        <div class="sum-row">👤 <span>Piloto:</span> <strong id="book-sum-driver-name">-</strong></div>
                        <div class="sum-row">📱 <span>WhatsApp:</span> <strong id="book-sum-driver-phone">-</strong></div>
                        <div class="sum-row">📊 <span>Experiência:</span> <strong id="book-sum-driver-exp">-</strong></div>
                        <div class="sum-row total">💰 <span>Valor Estimado:</span> <strong id="book-sum-total" class="text-gradient">R$ 0,00</strong></div>
                    </div>
                    
                    <div class="book-checkout-sim-box text-center">
                        <span class="check-badge">PIX SIMULADO</span>
                        <p>Para garantia e agendamento da data, realize o pagamento via Pix corporativo:</p>
                        <div class="pix-key-wrapper">
                            <strong>Chave Pix CNPJ:</strong> <span>12.345.678/0001-90</span>
                        </div>
                        <p class="check-disclaimer">Após clicar em confirmar, você será redirecionado para enviar o comprovante e os dados diretamente no WhatsApp da Old Monkey Racing para agendar a sua data definitiva.</p>
                    </div>
                </div>
                
            </div>
            
            <!-- Wizard Footer Buttons -->
            <div class="book-modal-footer">
                <button class="btn btn-secondary" id="book-btn-prev" style="display: none;">Voltar</button>
                <button class="btn btn-primary" id="book-btn-next">Avançar</button>
            </div>
        </div>
    </div>
    `;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml.trim();
    document.body.appendChild(wrapper.firstChild);
}
