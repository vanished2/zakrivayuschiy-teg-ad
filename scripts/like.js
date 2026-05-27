document.addEventListener('DOMContentLoaded', function() {
  const page = document.querySelector('.page');
  const themeButtons = document.querySelectorAll('.theme-menu__button');
  const cardButtonGroups = document.querySelectorAll('.card__buttons');
  const footerSaveButton = document.querySelector('.footer__save-button');
  const dialog = document.querySelector('.dialog');
  const dialogForm = document.querySelector('.dialog__form');
  const dialogCloseButton = document.querySelector('.dialog__button');

  const setTheme = function(theme) {
    if (!page) {
      return;
    }

    page.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    page.classList.add('theme-' + theme);

    themeButtons.forEach(function(button) {
      const buttonTheme = button.textContent.trim().toLowerCase();
      const isActive = buttonTheme === theme;
      button.disabled = isActive;
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  themeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      setTheme(button.textContent.trim().toLowerCase());
    });
  });

  const activeThemeButton = Array.from(themeButtons).find(function(button) {
    return button.disabled;
  });

  if (activeThemeButton) {
    setTheme(activeThemeButton.textContent.trim().toLowerCase());
  }

  cardButtonGroups.forEach(function(buttons) {
    const iconButton = buttons.querySelector('.card__icon-button');
    const likeButton = buttons.querySelector('.card__like-button');
    const icon = buttons.querySelector('.like-icon');

    const toggleLike = function(event) {
      event.preventDefault();

      if (icon) {
        icon.classList.toggle('is-liked');
      }
    };

    if (iconButton) {
      iconButton.addEventListener('click', toggleLike);
    }

    if (likeButton) {
      likeButton.addEventListener('click', toggleLike);
    }
  });

  if (dialog) {
    const openDialog = function(event) {
      event.preventDefault();

      if (!dialog.open) {
        dialog.showModal();
      }
    };

    if (footerSaveButton) {
      footerSaveButton.addEventListener('click', openDialog);
    }

    if (dialogCloseButton) {
      dialogCloseButton.addEventListener('click', function(event) {
        event.preventDefault();
        dialog.close();
      });
    }

    if (dialogForm) {
      dialogForm.addEventListener('submit', function(event) {
        event.preventDefault();
        dialog.close();
      });
    }
  }
});
