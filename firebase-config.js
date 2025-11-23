// firebase-config.js
// Reemplaza estos valores con los de tu proyecto Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCli7O5_4S9XmkAIkXe0kJ2OUT4oEOdXZY",
  authDomain: "rainloud-41b6b.firebaseapp.com",
  databaseURL: "https://rainloud-41b6b-default-rtdb.firebaseio.com",
  projectId: "rainloud-41b6b",
  storageBucket: "rainloud-41b6b.firebasestorage.app",
  messagingSenderId: "68176910642",
  appId: "1:68176910642:web:2a84043fc965acee609f2b"
};

// PASOS PARA OBTENER TU CONFIGURACIÓN:
// 1. Ve a https://console.firebase.google.com/
// 2. Crea un nuevo proyecto (o selecciona uno existente)
// 3. Ve a "Configuración del proyecto" (ícono de engranaje)
// 4. Desplázate hasta "Tus apps" y haz clic en el ícono web (</>)
// 5. Registra tu app y copia la configuración
// 6. Pega los valores aquí arriba

// IMPORTANTE: También debes habilitar:
// - Realtime Database (en la consola de Firebase)
// - Storage (para las imágenes)
// - Reglas de seguridad básicas

// Reglas recomendadas para Realtime Database:
/*
{
  "rules": {
    "products": {
      ".read": true,
      ".write": true
    },
    "sellers": {
      ".read": true,
      ".write": true
    }
  }
}
*/

// Reglas recomendadas para Storage:
/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.resource.size < 5 * 1024 * 1024;
    }
  }
}
*/