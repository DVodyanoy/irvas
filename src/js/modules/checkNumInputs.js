const checkNumInputs = selector => {
    const numInput = document.querySelectorAll(selector);

    numInput.forEach(item => {
        item.addEventListener('input', () =>
            item.value = item.value.replace(/[A-Za-zА-Яа-я]/, ''));
    });
};

export default checkNumInputs;