const tabs = (
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = 'block'
) => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach(item => item.style.display = 'none');
        tabs.forEach(item => item.classList.remove(activeClass));
    };

    const showTabContent = (index = 0) => {
        contents[index].style.display = display;
        tabs[index].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', ({ target }) => {
        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tabs.forEach((item, index) => {
                if (item === target || item === target.parentNode) {
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    })
};

export default tabs;