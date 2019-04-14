const get = (storage) => {
  let getLocalstorage = localStorage.getItem(storage) ? localStorage.getItem(storage) : []
  if(getLocalstorage.length > 0) {
    return JSON.parse(getLocalstorage)
  }
}
const set = (storage, value) => {
  localStorage.setItem(storage, value)
}
export default {
  get,
  set
}