
//Las acciones son funciones que retornan un objeto con las modicaciones a hacer en el store
//lo unico que necesitan es un tipo
export const saveToken = (token)=>{
  return {
    type: 'SET_TOKEN',
    token: token
  }
}
export const clearToken = ()=>{
  return {
    type: 'CLEAR_TOKEN'
  }
}

export const setUser = (user)=>{
  return {
    type: 'LOGGED_IN',
    user
  }
}
export const clearUser = ()=>{
  return {
    type: 'SIGN_OUT'
  }
}

export const setAlbums = (albums)=>{
  return {
    type: 'SET_ALBUMS',
    albums
  }
}
export const clearAlbums = ()=>{
  return {
    type: 'CLEAR_ALBUMS'
  }
}

export const setAlbum = (album)=>{
  return {
    type: 'SET_ALBUM',
    album
  }
}
export const clearAlbum = ()=>{
  return {
    type: 'CLEAR_ALBUM'
  }
}

export const setPhotos = (photos)=>{
  return {
    type: 'SET_PHOTOS',
    photos
  }
}
export const clearPhotos = ()=>{
  return {
    type: 'CLEAR_PHOTOS'
  }
}
