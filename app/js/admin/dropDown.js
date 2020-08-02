class AdminDrop {
  // graph
  toggle () {
    document.querySelector('.dashboard .admin__content .general__block .general__statistic p img').classList.toggle('show');
    document.querySelector('.dashboard .admin__content .general__block .general__statistic .hover-block').classList.toggle('show');
  }

  filterToggle (e) {
    if(e.target.classList.contains('hover-block') || e.target.closest('.hover-block')) {
      return
    }

    document.querySelectorAll('.type-select-js').forEach(select => {
      if(select !== e.currentTarget) {
        select.classList.remove('show');
      }
    })

    const current = e.currentTarget;
    current.classList.toggle('show');
  }
}

export default AdminDrop;