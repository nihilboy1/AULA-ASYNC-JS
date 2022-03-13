
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

const displayUser = async () => {
  const user = await login_user_promise("samu", "123")
  const videos = await getUserVideos(user.email)
  const videoDetails = await getVideoDetails(videos[0])

  console.log(videoDetails)
}

displayUser()