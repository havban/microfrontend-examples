function submit () {
  if (!isDataValid()) {
    alert('please complete data')
    return
  }
  alert('data submitted: ' + JSON.stringify(getData()))
}

function getData () {
  return {
    name: window['input-name'].value,
    age: window['input-age'].value,
    phone: window['input-phone'].value
  }
}

function isDataValid () {
  const data = getData()
  for (i in data) {
    if (!data[i]) return
  }
  return true
}
