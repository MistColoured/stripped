
function writeNewPost(username, title) {
  var postData = {
    author: username,
    title: title,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;
  console.log(newPostKey)

  var updates = {};
  updates['/posters/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

writeNewPost('Mike', 'AllenRules')