// uploadFamily.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // ← You'll download this
const familyData = require('./family-data.json'); // ← Your exported JSON

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id-default-rtdb.firebaseio.com' // Optional
});

const db = admin.firestore();

async function uploadFamily() {
  const batch = db.batch();
  const familyRef = db.collection('families').doc('kraman_family');

  console.log('Uploading K. Raman family to Firestore...');

  for (const member of familyData) {
    const memberRef = familyRef.collection('members').doc(member.id);
    batch.set(memberRef, member);
    console.log(`✅ Added: ${member.name}`);
  }

  try {
    await batch.commit();
    console.log('🎉 Successfully uploaded all family members!');
  } catch (error) {
    console.error('❌ Error uploading data:', error);
  }
}

uploadFamily();