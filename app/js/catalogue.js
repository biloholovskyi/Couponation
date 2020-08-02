class Catalogue {
  show (e) {
    e.currentTarget.classList.toggle('show');
    e.currentTarget.parentElement.classList.toggle('show');
    if(e.currentTarget.classList.contains('show')) {
      this.showNext(e.currentTarget.parentElement);
    } else {
      this.hiddenNext(e.currentTarget.parentElement);
    }

  }

  showNext (target) {
    const next = target.nextElementSibling;
    if(next && next.classList.contains('hidden')) {
      next.classList.remove('hidden-no');
      this.showNext(next);
    }
  }

  hiddenNext (target) {
    const next = target.nextElementSibling;
    if(next && next.classList.contains('hidden')) {
      next.classList.add('hidden-no');
      this.hiddenNext(next);
    }
  }
}

export default Catalogue;