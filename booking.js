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
    let selectedDate = '';
    let selectedTimes = [];
    let batteriesCount = 0;
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
        selectedDate = '';
        selectedTimes = [];
        batteriesCount = 0;
        
        const dateInput = document.getElementById('book-date');
        if (dateInput) dateInput.value = '';
        
        const timeBtns = document.querySelectorAll('.timeslot-btn');
        timeBtns.forEach(btn => btn.classList.remove('selected'));
        
        if (driverName) driverName.value = '';
        if (driverPhone) driverPhone.value = '';
        
        const driverReqs = document.getElementById('book-driver-reqs');
        if (driverReqs) driverReqs.checked = false;
        
        const driverTerms = document.getElementById('book-driver-terms');
        if (driverTerms) driverTerms.checked = false;
        
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
            const dateInput = document.getElementById('book-date');
            if (!dateInput || !dateInput.value) {
                alert('Por favor, selecione uma data para o treino.');
                return false;
            }
            if (selectedTimes.length === 0) {
                alert('Por favor, selecione pelo menos um horário de bateria.');
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
            const driverReqs = document.getElementById('book-driver-reqs');
            if (driverReqs && !driverReqs.checked) {
                alert('Atenção: É obrigatório confirmar que atende aos requisitos físicos e de idade mínima para pilotagem.');
                return false;
            }
            if (!driverExp.value) {
                alert('Por favor, selecione seu nível de experiência nas pistas.');
                driverExp.focus();
                return false;
            }
            const driverTerms = document.getElementById('book-driver-terms');
            if (driverTerms && !driverTerms.checked) {
                alert('É obrigatório aceitar o Termo de Adesão e Responsabilidade para prosseguir com a reserva.');
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
                
                populateDates(card.dataset.circuit);
                
                setTimeout(() => {
                    if (currentStep === 1) showStep(2);
                }, 200);
            });
        });
    }
    
    function populateDates(circuit) {
        const dateSelect = document.getElementById('book-date');
        if (!dateSelect) return;
        
        dateSelect.innerHTML = '';
        
        const mockDatesInterlagos = [
            { value: '10/07/2026', label: '10 de Julho de 2026 (Sexta-feira)' },
            { value: '11/07/2026', label: '11 de Julho de 2026 (Sábado)' },
            { value: '12/07/2026', label: '12 de Julho de 2026 (Domingo)' }
        ];
        
        const mockDatesPiracicaba = [
            { value: '15/08/2026', label: '15 de Agosto de 2026 (Sábado)' },
            { value: '16/08/2026', label: '16 de Agosto de 2026 (Domingo)' }
        ];
        
        const dates = circuit === 'interlagos' ? mockDatesInterlagos : mockDatesPiracicaba;
        
        dates.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d.value;
            opt.textContent = d.label;
            dateSelect.appendChild(opt);
        });
        
        selectedDate = dates[0].value;
    }
    
    // 7. Step 2: Date and Timeslot Control
    function updateTotalAndSpecs() {
        batteriesCount = selectedTimes.length;
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        
        const countText = document.getElementById('book-selected-count');
        const totalText = document.getElementById('book-total-price');
        
        if (countText) {
            countText.textContent = batteriesCount.toString();
        }
        if (totalText) {
            totalText.textContent = `R$ ${totalVal.toLocaleString('pt-BR')},00`;
        }
    }
    
    // Bind time slots dynamically (since they are created in HTML string)
    // We'll delegate from modal
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('timeslot-btn')) {
                const btn = e.target;
                const time = btn.dataset.time;
                
                if (btn.classList.contains('selected')) {
                    btn.classList.remove('selected');
                    selectedTimes = selectedTimes.filter(t => t !== time);
                } else {
                    // Check limit
                    if (selectedCircuit.includes('Interlagos') && selectedTimes.length >= 4) {
                        alert('Em Interlagos, há um limite de até 4 sessões por piloto no mesmo dia.');
                        return;
                    }
                    btn.classList.add('selected');
                    selectedTimes.push(time);
                }
                updateTotalAndSpecs();
            }
            
            // Track Date selection
            const dateInput = document.getElementById('book-date');
            if (dateInput) {
                dateInput.addEventListener('change', () => {
                    selectedDate = dateInput.value;
                });
            }
        });
    }
    
    // 8. Step 4: Summary Preparation
    function populateSummary() {
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        const expLabel = driverExp ? driverExp.options[driverExp.selectedIndex].text : '';
        const dateInput = document.getElementById('book-date');
        const formattedDate = dateInput && dateInput.value ? dateInput.value : '-';
        
        const summaryHtmlCircuit = document.getElementById('book-sum-circuit');
        const summaryHtmlBatteries = document.getElementById('book-sum-batteries');
        
        if (summaryHtmlCircuit) summaryHtmlCircuit.textContent = `${selectedCircuit} - Data: ${formattedDate}`;
        if (summaryHtmlBatteries) summaryHtmlBatteries.textContent = `${batteriesCount} bateria(s) | Horários: ${selectedTimes.sort().join(', ')}`;
        
        if (summaryDriverName) summaryDriverName.textContent = driverName ? driverName.value.trim() : '-';
        if (summaryDriverPhone) summaryDriverPhone.textContent = driverPhone ? driverPhone.value.trim() : '-';
        if (summaryDriverExp) summaryDriverExp.textContent = expLabel;
        
        const summaryHtmlTotal = document.getElementById('book-sum-total');
        if (summaryHtmlTotal) summaryHtmlTotal.textContent = `R$ ${totalVal.toLocaleString('pt-BR')},00`;
    }
    
    function finalizeBooking() {
        const totalVal = batteriesCount * PRICE_PER_BATTERY;
        const expLabel = driverExp ? driverExp.options[driverExp.selectedIndex].text : '';
        const dateInput = document.getElementById('book-date');
        const formattedDate = dateInput && dateInput.value ? dateInput.value : '';
        
        const intro = '🏎️ *NOVO PEDIDO DE ALUGUEL - FÓRMULA 1600*';
        const details = 
            `Olá, equipe Old Monkey Racing!\n\n` +
            `Gostaria de solicitar a reserva de aluguel do Fórmula 1600 pelo próprio site:\n\n` +
            `*--- DADOS DA RESERVA ---*\n` +
            `📍 *Autódromo:* ${selectedCircuit}\n` +
            `📅 *Data do Treino:* ${formattedDate}\n` +
            `⏱️ *Horários Selecionados:* ${selectedTimes.sort().join(', ')}\n` +
            `🏁 *Baterias de Treino:* ${batteriesCount} (R$ ${PRICE_PER_BATTERY.toLocaleString('pt-BR')},00 cada)\n` +
            `💰 *Valor Total Calculado:* R$ ${totalVal.toLocaleString('pt-BR')},00\n\n` +
            `*--- DADOS DO PILOTO ---*\n` +
            `👤 *Nome Completo:* ${driverName ? driverName.value.trim() : ''}\n` +
            `📱 *WhatsApp:* ${driverPhone ? driverPhone.value.trim() : ''}\n` +
            `📏 *Requisitos Físicos:* Confirmado (Máx 1,90m, 120kg, 15+ anos)\n` +
            `📊 *Nível de Experiência:* ${expLabel}\n` +
            `✅ *Termo de Responsabilidade:* LIDO E ACEITO\n\n` +
            `Aguardando retorno para confirmar a disponibilidade no calendário e chave Pix para pagamento!`;
            
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
                
                <!-- PASSO 2: Data e Horários -->
                <div class="book-step-content" data-step="2">
                    <h3>Escolha a Data e os Horários</h3>
                    <p class="step-desc">Selecione a data pretendida e clique nas sessões de treino desejadas (em Interlagos há um limite de 4 treinos por piloto ao dia).</p>
                    
                    <div class="book-datetime-card">
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label for="book-date">Datas Disponíveis *</label>
                            <select id="book-date" required style="width: 100%; padding: 10px; background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 4px; appearance: auto;">
                                <!-- As opções serão preenchidas dinamicamente via JS -->
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Horários Disponíveis (Baterias) *</label>
                            <div class="book-timeslot-grid" id="book-timeslots" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;">
                                <button type="button" class="timeslot-btn" data-time="08:00">08:00 - Sessão 1</button>
                                <button type="button" class="timeslot-btn" data-time="10:30">10:30 - Sessão 2</button>
                                <button type="button" class="timeslot-btn" data-time="13:30">13:30 - Sessão 3</button>
                                <button type="button" class="timeslot-btn" data-time="16:00">16:00 - Sessão 4</button>
                            </div>
                            <p class="timeslot-info" style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px; margin-bottom: 0;">Clique nos horários para adicionar/remover da sua reserva.</p>
                        </div>
                        
                        <div class="book-pricing-display" style="margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 15px;">
                            <div class="price-row" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Baterias Selecionadas:</span>
                                <strong id="book-selected-count">0</strong>
                            </div>
                            <div class="price-row total-row" style="display: flex; justify-content: space-between; font-size: 1.2rem;">
                                <span>Valor Estimado:</span>
                                <strong id="book-total-price" class="text-gradient">R$ 0,00</strong>
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
                        
                        <div class="form-checkbox-group" style="margin-bottom: 15px;">
                            <input type="checkbox" id="book-driver-reqs">
                            <label for="book-driver-reqs">Confirmo atender aos requisitos: altura máx. 1,90m, peso máx. 120kg e idade mínima de 15 anos (com assinatura do responsável).</label>
                        </div>
                        
                        <!-- Termo de Adesão -->
                        <div class="liability-waiver-box" style="margin-top: 15px; background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: 4px; padding: 15px;">
                            <label style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 5px; display: block;">Termo de Adesão e Responsabilidade</label>
                            <div class="liability-text" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 15px;">
                                <p><strong>ASSUNÇÃO DE RISCOS</strong> - O automobilismo é um esporte de risco. A Old Monkey Racing isenta-se de responsabilidade sobre danos físicos ou de saúde. O locatário é responsável financeiramente por quebras ou danos ao carro gerados por sua falha de pilotagem. É obrigatório respeitar a equipe de pista, sujeito a exclusão sem reembolso.</p>
                            </div>
                            <div class="form-checkbox-group" style="margin: 0;">
                                <input type="checkbox" id="book-driver-terms">
                                <label for="book-driver-terms" style="color: var(--color-primary); font-weight: 600;">Li e concordo com o Termo de Responsabilidade.</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- PASSO 4: Resumo e Pagamento Simulado -->
                <div class="book-step-content" data-step="4">
                    <h3>Resumo da Sua Reserva</h3>
                    <p class="step-desc">Confira as informações da sua bateria e as instruções de fechamento.</p>
                    
                    <div class="book-summary-card">
                        <div class="sum-row">
                            <div class="sum-label"><i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--color-primary);"></i> <span>Circuito Escolhido:</span></div>
                            <strong id="book-sum-circuit">-</strong>
                        </div>
                        <div class="sum-row">
                            <div class="sum-label"><i class="fa-solid fa-flag-checkered" style="margin-right: 8px; color: var(--color-primary);"></i> <span>Sessões:</span></div>
                            <strong id="book-sum-batteries">-</strong>
                        </div>
                        <div class="sum-row">
                            <div class="sum-label"><i class="fa-solid fa-user" style="margin-right: 8px; color: var(--color-primary);"></i> <span>Piloto:</span></div>
                            <strong id="book-sum-driver-name">-</strong>
                        </div>
                        <div class="sum-row">
                            <div class="sum-label"><i class="fa-solid fa-phone" style="margin-right: 8px; color: var(--color-primary);"></i> <span>WhatsApp:</span></div>
                            <strong id="book-sum-driver-phone">-</strong>
                        </div>
                        <div class="sum-row">
                            <div class="sum-label"><i class="fa-solid fa-chart-line" style="margin-right: 8px; color: var(--color-primary);"></i> <span>Experiência:</span></div>
                            <strong id="book-sum-driver-exp">-</strong>
                        </div>
                        <div class="sum-row total" style="margin-top: 15px; border-top: 1px dashed var(--border-color); padding-top: 15px;">
                            <div class="sum-label"><i class="fa-solid fa-wallet" style="margin-right: 8px; color: var(--color-primary);"></i> <span>Valor Estimado:</span></div>
                            <strong id="book-sum-total" class="text-gradient">R$ 0,00</strong>
                        </div>
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
