document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Subscription form validation
    const subscriptionBtn = document.querySelector('.subscription-btn');
    subscriptionBtn.addEventListener('click', function() {
        const emailInput = document.querySelector('.subscription-input input[type="text"]');
        const email = emailInput.value.trim();

        if (!email) {
            alert('Por favor, insira um endereço de email.');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        alert(`Email enviado: ${email}`);
    });
});

const demoBttn=document.querySelector('.btn.top a');
const demoBttn2=document.querySelector('.btn.intro-2 a');
const introBttn=document.querySelector('.btn.intro-1 a');
const missionBttn=document.querySelector('.btn-mission a');
const visionBttn=document.querySelector('.btn-vision a');
const valuesBttn=document.querySelector('.btn-values a');
const sendBttn=document.querySelector('#submit-btn');
const subscriptionBttn=document.querySelector('input.subscription-btn')
btn_array=[demoBttn, demoBttn2, introBttn, sendBttn, subscriptionBttn]
mvv_array=[missionBttn, visionBttn, valuesBttn]

btn_array.forEach(elem => {
    elem.addEventListener('mouseover', function() {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
        if (elem==introBttn || elem==sendBttn || elem==subscriptionBttn) {
            elem.style.transition='all 0.5s';
            elem.style.color='white';
            elem.style.background='#045E66';
            elem.style.border='2px solid #045E66';
        }
});

elem.addEventListener('mouseout', function() {
    elem.style.transition='all 0.5s';
    elem.style.color='black';
    elem.style.background='none';

    if (elem==introBttn || elem==sendBttn || elem==subscriptionBttn) {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
        elem.style.border='2px solid #07A3B2';
    }

});
});

missionBttn.addEventListener('click', function() {
    missionBttn.style.background='#07A3B2';
    missionBttn.style.color='white';
    visionBttn.style.background='none';
    visionBttn.style.color='black'
    valuesBttn.style.background='none';
    valuesBttn.style.color='black'
});

valuesBttn.addEventListener('click', function() {
    valuesBttn.style.background='#07A3B2';
    valuesBttn.style.color='white';
    visionBttn.style.background='none';
    visionBttn.style.color='black'
    missionBttn.style.color='black'
    missionBttn.style.background='none';
});

visionBttn.addEventListener('click', function() {
    visionBttn.style.background='#07A3B2';
    visionBttn.style.color='white';
    valuesBttn.style.background='none';
    valuesBttn.style.color='black'
    missionBttn.style.color='black'
    missionBttn.style.background='none';
});


function ativarMissao() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='flex'
    visao.style.display='none'
    valores.style.display='none'
    active.style.opacity='100%'
}

function ativarVisao() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='none'
    visao.style.display='flex'
    valores.style.display='none'
    active.style.opacity='100%'

}

function ativarValores() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='none'
    visao.style.display='none'
    valores.style.display='flex'
    active.style.opacity='100%'
}

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !sobrenome || !email || !celular || assunto === 'ASSUNTO*' || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    alert(`Dados enviados:\nNome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nCelular: ${celular}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
});
