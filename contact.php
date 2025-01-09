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
            echo json_encode(["status" => "success", "message" => "Danke, Ihre Nachricht wurde gesendet!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Entschuldigung, Ihre Nachricht konnte nicht gesendet werden."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Bitte füllen Sie alle Felder korrekt aus."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Ungültige Anfrage."]);
}
?>
