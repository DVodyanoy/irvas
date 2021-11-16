import checkNumInputs from './checkNumInputs';

const forms = state => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    const clearInputs = () => {
        inputs.forEach(item => item.value = '');
    };

    const postData = async (url, data) => {
        const statusElement = document.querySelector('.status');
        try {
            statusElement.textContent = message.loading;
            await fetch(url, {
                method: 'POST',
                body: data
            });
            statusElement.textContent = message.success;
        } catch (err) {
            statusElement.textContent = message.failure;
            console.error(err);
        } finally {
            clearInputs();
            setTimeout(() => statusElement.remove(), 5000);
        }
    };

    forms.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            let formData = new FormData(item);
            const isLastForm = item.getAttribute('data_calc') === 'end';

            if (isLastForm) {
                formData = {...formData, ...state};
                document.querySelectorAll('[data-modal]')
                    .forEach(item => item.style.display = 'none');
            }

            postData('assets/server.php', formData);
        });
    });
};

export default forms;