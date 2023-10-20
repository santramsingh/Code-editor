// Copy button functionality
document.getElementById('copy-button').addEventListener('click', () => {
    const codeElement = document.getElementById('code');
    const code = codeElement.innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
});

// Lock/Unlock button functionality
const lockButton = document.getElementById('lock-button');
lockButton.addEventListener('click', () => {
    const codeElement = document.getElementById('code');
    codeElement.contentEditable = !codeElement.isContentEditable;
    lockButton.classList.toggle('locked');
    lockButton.textContent = codeElement.isContentEditable ? 'Lock' : 'Unlock';
});

// Save button functionality
document.getElementById('save-button').addEventListener('click', () => {
    const code = document.getElementById('code').innerText;
    // You can implement code saving logic here (e.g., sending to a server).
    alert('Code saved.');
});