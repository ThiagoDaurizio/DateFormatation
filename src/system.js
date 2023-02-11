

const preview = document.querySelector('#preview')
const template = document.querySelector('#template-preview')
const selector = document.querySelector('#selector')

const clear = () => {
  preview.innerHTML = ''
}

const onchangeSelect = () => {
  clear()
}

const log = (comment, ...args) => {
  const templateClone = template.content.cloneNode(true)

  const commentElement = templateClone.querySelector('.comment')
  const codeElement = templateClone.querySelector('.code')

  commentElement.innerText = comment
  codeElement.innerText = args.join('\n')

  templateClone.appendChild(commentElement)
  templateClone.appendChild(codeElement)

  preview.appendChild(templateClone)
}

const setLocale = (event) => {
  clear()
  run(event.target.dataset.locale)
}

const localeBtn = document.querySelectorAll('.btn-locale')
if(localeBtn){
  localeBtn.forEach((element) => {
    element.addEventListener('click', setLocale)
  })
}
