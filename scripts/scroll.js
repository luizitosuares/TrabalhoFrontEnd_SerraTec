function scrollToContainer() {
    const container = document.querySelector('footer');
    container.scrollIntoView({
      behavior: 'smooth',
      duration: 10
    });
  }