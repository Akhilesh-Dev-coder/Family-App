// scripts/uploadFamilies.js
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "family-tree-app-df08f.firebasestorage.app"
});

const db = admin.firestore();

// Read your family data
const familyDataPath = path.join(__dirname, '..', 'data', 'familyData.json');
const familyData = JSON.parse(fs.readFileSync(familyDataPath, 'utf8'));

async function uploadFamilies() {
  const batch = db.batch();
  const familiesRef = db.collection('families');

  console.log(`Uploading ${familyData.length} family trees...`);

  for (const family of familyData) {
    const docRef = familiesRef.doc(family.id); // Use id as document ID
    batch.set(docRef, family);
    console.log(`✅ Prepared: ${family.name} (ID: ${family.id})`);
  }

  try {
    await batch.commit();
    console.log('🎉 All families uploaded successfully!');
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
}

uploadFamilies();