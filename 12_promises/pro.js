//api call to github server and get the user info figures

const GITHUB_API = "https://api.github.com/users/yogeshsharma152004"

//fetch will return the promise

const user = fetch(GITHUB_API)

console.log(user);

user.then(function (data){
  console.log(data)
})