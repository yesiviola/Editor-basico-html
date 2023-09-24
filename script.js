const runButton = document.getElementById('runButton');
const codeTextarea = document.getElementById('code');
const outputDiv = document.getElementById('output');

runButton.addEventListener('click', () => {
    const code = codeTextarea.value;
    try {
        eval(code);
    } catch (error) {
        outputDiv.innerHTML = `<div class="error">${error}</div>`;
    }
});
outputDiv.innerHTML = '';




runButton.addEventListener('click', () => {
    const code = codeTextarea.value;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    outputDiv.innerHTML = '';
    outputDiv.appendChild(tempDiv);
});
