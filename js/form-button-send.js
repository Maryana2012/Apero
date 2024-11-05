const closeForm = document.querySelector('.backdrop');
document.querySelectorAll('.question__form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Форма відправлена!');
                console.log('ok');
                this.reset(); // Очищуємо форму
                if(closeForm){
                    closeForm.classList.add('is-hidden')
                }
            } else {
                alert('Сталася помилка.');
            }
        }).catch(error => {
            alert('Сталася помилка: ' + error.message);
        });
    });
});
