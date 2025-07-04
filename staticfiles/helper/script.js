document.getElementById('question-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    localStorage.setItem('question', question);
    window.location.href = '/paywall/';
});

function handlePayment(type) {
    alert(`Selected ${type}. Please integrate a payment gateway (e.g., Stripe) here.`);
    const question = localStorage.getItem('question') || 'Sample question';
    fetch('/process/', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: `question=${encodeURIComponent(question)}`
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('response', data.response);
        window.location.href = '/';
    })
    .catch(error => console.error('Error:', error));
}

window.onload = () => {
    const responseDiv = document.getElementById('response');
    const storedResponse = localStorage.getItem('response');
    if (responseDiv && storedResponse) {
        responseDiv.textContent = storedResponse;
        responseDiv.classList.remove('hidden');
        localStorage.removeItem('response');
        localStorage.removeItem('question');
    }
};