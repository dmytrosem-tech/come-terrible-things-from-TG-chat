// ------------------Прсто календарь в ипнут------------------------------->

const date = document.querySelector('#date')

date.addEventListener('input', e => {
  const str = e.target.value
  const date = new Date(str).toLocaleDateString('ru', { weekday: 'long' })
  console.log(date)
})

// ---------------Календарь с выносом дня недели в верстку----------------->
const date2 = document.querySelector('#date2')
const p2 = document.querySelector('.result')

date2.addEventListener('blur', e => {
  p2.textContent = new Date(e.target.value).toLocaleDateString('ru', { weekday: 'long' })
})
