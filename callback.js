const login_user = (email, password, onSuccess, onError ) => {
    setTimeout(() => {
      const error = false

      if (error) 
      {
        return onError(new Error("Erro no login"))
      }
      else
      {
      console.log("user logged!")
      onSuccess({email: email})
      }
    },1500)
}

const getUserVideos = (email, onSuccess) => {
    setTimeout(() => {
      onSuccess(["video1", "video2", "video3"])
    },2000)
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
      callback({title: "titulo do video"})
    }, 2500)
}


// CALLBACK HELL
const user = login_user("samuel@gmail", "123456", 
(callback_user) => {
    console.log(callback_user)

    getUserVideos(callback_user.email, (callback_video) => {
      console.log(callback_video)
      
      getVideoDetails(callback_video[0], (callback_detail) => {
          console.log(callback_detail)
      })
    })
},
(callback) => {
  console.log({error: callback})
}
)