import Firebase from './firebase';

class Auth {
  login(email, password) {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      return res;
    })
  }
  
  logout() {
    return Firebase.auth().signOut()
    .then(() => {
      return true;
    })
  }

  reauthenticate(currentPassword) {
    const user = Firebase.auth().currentUser;
    const cred = Firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateAndRetrieveDataWithCredential(cred);
  }
}

export default new Auth();