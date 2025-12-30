document.addEventListener("DOMContentLoaded", () => {
  const resume = document.querySelector('.resume');
  const resumeButton = document.querySelector('#get-builder');

  /*Кнопка приступим*/
  if (!resume || !resumeButton) return;
  // скрываем при загрузке
  resume.hidden = true;
  // показываем по клику
  resumeButton.addEventListener('click', () => {
    resume.hidden = false;
  });

  /*Активный элемент меню*/
  activeResumeItem();

  /*Фото*/
  addPhoto();

  function addPhoto() {
    const file = document.querySelector('#photoInput');
    if (!file) return;

    document.querySelectorAll('#photo-photo, #photo-sp').forEach(el => {
      el.addEventListener('click', () => {
        file.click();
      });

      file.addEventListener('change', () => {
        const image = file.files[0];
        if (!image) return;

        const imgUrl = URL.createObjectURL(image);

        const photoDiv = document.querySelector('#photo-photo');
        photoDiv.style.backgroundImage = `url(${imgUrl})`;
        photoDiv.style.backgroundSize = 'cover';
        photoDiv.style.backgroundPosition = 'center';
      });
    });
  }

  function activeResumeItem () {
    document.querySelectorAll('.resume-items button').forEach(btn => {
      btn.addEventListener('click', () => {
        document
          .querySelectorAll('.resume-items button')
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        itemVariant(btn);
      });
    })
  }

  function itemVariant(button) {
    if (!button) return;

    const target = button.dataset.target;
    if (!target) return;

    document
      .querySelectorAll('.item-content [data-section]')
      .forEach(section => {
        section.classList.toggle(
          'item-hidden',
          section.dataset.section !== target
        );
      });
  }

})
