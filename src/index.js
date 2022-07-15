const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var serviceAccount = require("../secrets/ftu-barber-api-firebase-adminsdk-427uz-2d0b898c27.json");


initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

const db = getFirestore();

async function cadastro() {
    const docRef = db.collection('users').doc('alovelace');
    
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });
}
try{
    cadastro();
}catch(e){
    console.log(e);
}

