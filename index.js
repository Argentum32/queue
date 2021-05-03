const queue = document.querySelector('.queue-area')
      form = document.querySelector('form')
      item = document.getElementById('input')
      deleteBtn = document.getElementById('delete-btn')
      myAge = 23

let itemsInQueue = JSON.parse(localStorage.getItem('items'))  || []

form.addEventListener('submit', e => addItem(e))
deleteBtn.addEventListener(('click'), e => deleteItem(e))

const markup = (item) => `<p class='item'>${item}</p>`

const renderItemsInQueue = () => queue.innerHTML = itemsInQueue.map(i => markup(i)).join('')
const renderQueue = () => itemsInQueue.length > 0 ? renderItemsInQueue() : queue.innerHTML = `<p>The queue is empty</p>`
renderQueue()

function addItem(e){
  e.preventDefault()
  if(itemsInQueue.length === myAge) alert('This is the maximum items in the queue. Please delete something') 
  else {
    itemsInQueue.push(item.value)
    renderItemsInQueue()
    item.value = ''
    localStorage.setItem('items', JSON.stringify(itemsInQueue))
  } 
}

function deleteItem(e){
  e.preventDefault()
  itemsInQueue.shift()
  renderQueue()
  localStorage.setItem('items', JSON.stringify(itemsInQueue))
}

