const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImg);

  workSection.addEventListener('click', e => {
    e.preventDefault();
    if (e.target && e.target.classList.contains('preview')) {
      debugger
      imgPopup.style.display = 'flex';
      const path = e.target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }

    if (e.target && e.target.matches('div.popup')) {
      debugger
      imgPopup.style.display = 'none';
    }
  });
};

export default images;