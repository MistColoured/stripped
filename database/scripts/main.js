
function writeNewPost(username, title) {
  var postData = {
    author: username,
    title: title,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().push().key;
  console.log(newPostKey)

  var updates = {};
  updates['/dates/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

writeNewPost('Mike', 'AllenRules!!asdsdatittys!!!!!!asdft')