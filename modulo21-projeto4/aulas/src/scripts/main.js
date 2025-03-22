document.addEventListener("DOMContentLoaded", function(e){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    const questions = document.querySelectorAll('[data-faq-question]')
    const header = document.querySelector('.header')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(e){
        const posicaoAtual = window.scrollY
        if(posicaoAtual > alturaHero){
            header.classList.remove('header--is-hidden');
        }else{
            header.classList.add('header--is-hidden');
        }
    })
    
    // Atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            removeBotaoAtivo()
            aba.classList.add('shows__list--is-active');
            buttons[i].classList.add('shows__tabs__button--is-active');
            })
    }
    
    // FAQ
    for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', abreOuFechaResposta);
    }   
        
        
})



function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode
    elementoPai.classList.toggle(classe)
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
        
    }
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
        
    }
}
