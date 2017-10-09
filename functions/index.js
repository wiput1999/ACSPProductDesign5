const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.result = functions.https.onRequest((request, response) => {
//     var votesRef = db.collection('votes');
//     var queryRef = votesRef.where('vote', '==', 1);


//     queryRef.onSnapshot(
//         querySnapshot => {
//             let count = querySnapshot.docs.length
//             console.log(`Received query snapshot of size ${querySnapshot.size}`);
//             return response.status(200).send(`Completed with ${count} result(s).`);
//           }, err => {
//             console.log(`Encountered error: ${err}`);
//             return response.status(500).send('Error getting documents', err);            
//           }
//         );
// });
