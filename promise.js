
const login_user_promise = (email, password) => {
    return new Promise((resolve, reject) => {
      const error = false

      if (error) {
        reject(new Error("Erro no Login!"))
      }
      else {
        console.log("Usuário logado!")
        resolve({email})
      }
    })
}


const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Videos selecionado")
      resolve(["video1", "video2", "video3"])
    },2000)
  })
  
}

const getVideoDetails = (video) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Detalhes obtidos")
      resolve({title: "titulo do video"})
    }, 2500)
  })
 
}


login_user_promise("samuel", "1234")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetails(videos[0])
  .then((detalhes) => {
    console.log(detalhes)
  })
  .catch((error) => console.log({error: error})))




  
// PROMISE.ALL
const yt = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("posts from youtube")
  },2500)
})

const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("posts from facebook")
  },5000)
})


Promise.all([yt, fb]).then((retorno) => {
  console.log(retorno)
})

