// add menu
const rootPath = '/page-reload/'
const menuItems = [
  {
    url: rootPath,
    label: 'Home'
  },
  {
    url: `${rootPath}module1/`,
    label: 'Module 1'
  },
  {
    url: `${rootPath}module2/`,
    label: 'Module 2'
  }
]

function addMenu () {
  const el = document.querySelector('nav')
  const menuList = menuItems.map(i => `<a href="${i.url}">${i.label}</a>`)
  el.innerHTML = menuList.join(' | ')
}

addMenu()
