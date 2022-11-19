let body = document.querySelector('body')
let navigation = document.querySelector('.responsive-navigation')
let menubtn = document.querySelector('.responsive-navigation-menubtn')

function openResponsiveNavigation() {
  navigation.classList.add("open")
  body.style.overflowY = 'hidden'
  menubtn.setAttribute("aria-selected", true)
}

function closeResponsiveNavigation() {
  navigation.classList.remove("open")
  body.style.overflowY = 'auto'
  menubtn.setAttribute("aria-selected", false)
}

function handleResponsiveButtonClick() {
  if(navigation.classList.contains("open"))
    closeResponsiveNavigation()
  else
    openResponsiveNavigation()
}


document.querySelectorAll('.responsive-link').forEach(el => {
  el.addEventListener('click', closeResponsiveNavigation)
})
