window.addEventListener('DOMContentLoaded', () => {
  const lock = document.getElementById('lock')

  if (lock) {
    lock.addEventListener('input', function () {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
        this.checked = false
      }, 3000)
    })
  }
})
