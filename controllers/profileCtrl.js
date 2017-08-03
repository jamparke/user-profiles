module.exports = {

  getFriends: function (req, res) {
    var friendsArray = []
    req.session.currentUser.friends.forEach(function (friend) {
      profiles.forEach(function (profile) {
        if (friend === profile.name) {
          friendsArray.push(profile)
        }
      })
    })

    res.send({
      currentUser: req.session.currentUser,
      friends: friendsArray
    })
  }
}
