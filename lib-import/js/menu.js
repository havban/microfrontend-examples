// add menu
const rootPath = '/'
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

export function getHtml () {
  const menuList = menuItems.map(i => `<a href="${i.url}">${i.label}</a>`)
  return menuList.join(' | ')
}
