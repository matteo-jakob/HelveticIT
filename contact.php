<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validierung
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "contact@helveticit.ch"; // Ihre E-Mail-Adresse
        $subject = "Neue Nachricht von $name";
        $body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";
        $headers = "From: $email";

        // E-Mail senden
        if (mail($to, $subject, $body, $headers)) {
            echo "Danke, Ihre Nachricht wurde gesendet!";
        } else {
            echo "Entschuldigung, Ihre Nachricht konnte nicht gesendet werden.";
        }
    } else {
        echo "Bitte füllen Sie alle Felder korrekt aus.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>