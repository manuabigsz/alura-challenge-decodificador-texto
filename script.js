// Seleção dos elementos do DOM
const input1 = document.querySelector('#txt-area1');
const input2 = document.querySelector('#txt-area2');
const message = document.getElementById("msg");

const button1 = document.querySelector('.btn-1');
button1.addEventListener('click', encrypt);

const button2 = document.querySelector('.btn-2');
button2.addEventListener('click', decrypt);

// Limpa a mensagem de erro inicial
document.getElementById('none').innerHTML = '';

// Foca no input1 ao carregar a página
input1.focus();

// Função para criptografar o texto
function encrypt() {
    if (input1.value.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
        input1.focus();
    } else {
        clearErrorMessage();
        document.querySelector('img.icone').style.display = 'none';

        let text = input1.value;
        text = text.replace(/e/igm, 'enter');
        text = text.replace(/i/igm, 'imes');
        text = text.replace(/a/igm, 'ai');
        text = text.replace(/o/igm, 'ober');
        text = text.replace(/u/igm, 'ufat');

        input2.textContent = text;

        showCopyButton();
    }
}

// Função para descriptografar o texto
function decrypt() {
    if (input1.value.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
        input1.focus();
    } else {
        clearErrorMessage();
        document.querySelector('img.icone').style.display = 'none';

        let text = input1.value;
        text = text.replace(/enter/igm, 'e');
        text = text.replace(/imes/igm, 'i');
        text = text.replace(/ai/igm, 'a');
        text = text.replace(/ober/igm, 'o');
        text = text.replace(/ufat/igm, 'u');

        input2.textContent = text;

        showCopyButton();
    }
}

// Função para copiar o texto da textarea2
function copy() {
    input2.select();
    document.execCommand('copy');
    message.textContent = "O texto copiado já está na área de transferência!";
    input1.value = "";
}

// Função auxiliar para mostrar mensagem de erro
function showMessage(msg) {
    document.getElementById('none').innerHTML = `<h2>${msg}</h2>`;
}

// Função auxiliar para limpar mensagem de erro
function clearErrorMessage() {
    document.getElementById('none').innerHTML = '';
}

// Função auxiliar para mostrar botão de copiar
function showCopyButton() {
    document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
}
