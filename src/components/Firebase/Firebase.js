import * as firebase from "firebase";

// this is the config file you should replace with you own
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// this class contains all you need to access Firestore, do authentication
// you could also add more stuff like analytics or push notifications
class Firebase {
  constructor() {
    if (!firebase.apps.length && config.apiKey) {
      firebase.initializeApp(config);
      this.db = firebase.firestore();
      this.auth = firebase.auth();
    }
  }
  polls = () => this.db.collection("polls"); // decide if you want to gei an instance, or a stream for the polls;;
  poll = pollId => this.db.collection("polls").doc(pollId); // decide if you want to gei an instance, or a stream for the poll;
}

export default Firebase;
