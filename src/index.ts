import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
var serviceAccount = require("../secrets/ftu-barber-api-firebase-adminsdk-427uz-2d0b898c27.json");

type Doc = {
    id: string,
    data: any

}

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

async function cadastro() {
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc: Doc) => {
    console.log(doc.id, '=>', doc.data());
    });
}
try{
    console.log("LISTANDO!")
    cadastro();
}catch(e){
    console.log(e);
}

