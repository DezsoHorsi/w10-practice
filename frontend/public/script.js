

console.log('loaded')


fetch(`http://127.0.0.1:9000/data`)

//ADATOK BEVITELE

const formComponent = () => `
  <form>
  <input type="text" name="name" placeholder="image name">
  <input type="file" name="file">
  <button>send</button> 
  </form>
`
//formon belül benn a button egy submit button lesz

const rootElement = document.querySelector('#root')

rootElement.insertAdjacentHTML('beforeend', formComponent())

const formElement= document.querySelector('form')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submit')

  const formData = new FormData()
  formData.append('name', document.querySelector("input[type='text']").value)
  formData.append('image', document.querySelector("input[type='file']").files[0])
  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if(res.status === 200) {
      console.log("success")
      return res.json() // return "pelda"
    } else {
      console.log("ERROR!!!")
    }
  })
  .then(resData => { // resData = "pelda"
    rootElement.insertAdjacentHTML('beforeend', `<img scr="public/${resData}.jpeg">`)
  })
  .catch(error => console.log(error))
})
