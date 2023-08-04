<?php
// login.php

// Verifique o envio do formulário de login
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifique as credenciais do usuário (substitua este exemplo com a autenticação real do banco de dados)
    $username = "usuario"; // Nome de usuário esperado
    $password = "senha123"; // Senha esperada

    if ($_POST["username"] === $username && $_POST["password"] === $password) {
        // Credenciais corretas, inicie a sessão
        session_start();

        // Defina as variáveis de sessão relevantes (você pode adicionar mais informações conforme necessário)
        $_SESSION["username"] = $username;
        $_SESSION["logged_in"] = true;

        // Redirecione para a página protegida
        header("Location: index.html");
        exit;
    } else {
        // Credenciais incorretas, exiba uma mensagem de erro
        echo "Nome de usuário ou senha incorretos!";
    }
}
?>

<?php
// No início da página protegida (index.html ou outras páginas restritas)
session_start();
if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true) {
    header("Location: login.php");
    exit;
}
?>
