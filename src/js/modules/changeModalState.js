import checkNumInputs from './checkNumInputs';

const changeModalState = state => {
    const windowForm = document.querySelectorAll('.balcony_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    const bindAction = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? 'cold' : 'warm';
                            elem.forEach((box, j) => box.checked = i === j)
                        } else  {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });
    };

    checkNumInputs('#width');
    checkNumInputs('#height');

    bindAction('click', windowForm, 'form');
    bindAction('input', windowWidth, 'width');
    bindAction('input', windowHeight, 'height');
    bindAction('change', windowType, 'type');
    bindAction('change', windowProfile, 'profile');
};

export default changeModalState;