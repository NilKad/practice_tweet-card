
const getFollowers = () => {

  try {
    if (localStorage.key('tweetUser')) {
      const data = JSON.parse(localStorage.getItem('tweetUser'))
      if (data) {
        return data;
      }
    }
    localStorage.setItem('tweetUser', JSON.stringify([]))
    return []
  } catch (error) {
    console.log(error.message)
  }

}

const setFollowers = (user) => {
  try {
    return localStorage.setItem('tweetUser', JSON.stringify(user))
  } catch (error) {
    console.log(error.message)
  }
}
export { getFollowers, setFollowers }