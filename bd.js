<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDg781SXa6Ey-oChaHQg6w_OpzjA9grsDI",
    authDomain: "ozinks-68c42.firebaseapp.com",
    projectId: "ozinks-68c42",
    storageBucket: "ozinks-68c42.appspot.com",
    messagingSenderId: "702986555944",
    appId: "1:702986555944:web:bdd567f9be73f1dc7bdb1d",
    measurementId: "G-48G2235YYC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  <!-- Importar o SDK do Firebase -->
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>

// Fazer o login com e-mail e senha
const email = "usuario@example.com";
const password = "senha123";

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Login bem-sucedido, o usuário está armazenado em userCredential.user
    const user = userCredential.user;
    console.log("Usuário logado:", user);
  })
  .catch((error) => {
    // Tratar erros de login, como credenciais incorretas
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erro ao fazer login:", errorCode, errorMessage);
  });
