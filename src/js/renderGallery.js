import { createFilmCard } from './createFilmCard';

// Defolt:разметка для Home.Для Library нужно у второго параметра isLib = true;

export function renderGallery({ data, elementRef, isLibrary = false }) {
	if (data?.length) {
    elementRef.innerHTML = data.map(filmData => createFilmCard(filmData, isLibrary)).join(' ');
    
		addHoverLabelEffect();
	} else {
		elementRef.innerHTML = '<p>List of films empty!</p>';
	}
}

export function addHoverLabelEffect() {
	const labelElRefs = document.querySelectorAll('.filmCard__label');
  const labelElArr = [];
  
	for (let i = 0; i < labelElRefs?.length; i++) {
		labelElArr.push(labelElRefs[i]);
	}

	const imgElRefs = document.querySelectorAll('.filmCard__img');
  const imgElArr = [];
  
	for (let i = 0; i < imgElRefs?.length; i++) {
		imgElArr.push(imgElRefs[i]);
	}

	if (labelElArr?.length) {
		for (let i = 0; i < labelElArr.length; i++) {
			labelElArr[i].addEventListener('mouseenter', e => {
        const imgEl = imgElArr.find(el => el.parentNode === e.target.parentNode);
        
				imgEl.classList.add('hover');
			});
			labelElArr[i].addEventListener('mouseleave', e => {
        const imgEl = imgElArr.find(el => el.parentNode === e.target.parentNode);
        
				imgEl.classList.remove('hover');
			});
		}
	}
}