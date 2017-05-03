<?php
define("TO_EMAIL", "business@shakuro.com");
define("SUBJECT", "Shakuro");

if (isset($_POST)) {
    require_once 'lib/php_mailer/PHPMailerAutoload.php';
    require_once 'lib/shakuro_mailer.php';

    $result = array();

    $email   = trim($_POST['email']);
    $message = trim($_POST['message']);

    # Checking errors
    if (empty($email)) {
        $result['errors']['email'] = 'Email Address is empty';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $result['errors']['email'] = 'Email is not valid';
    }
    if (empty($message)) {
        $result['errors']['message'] = 'Message is empty';
    }

    # Sending email
    if (!isset($result['errors'])) {
        $mail = new ShakuroMailer();

        $mail->setFrom($email);
        $mail->addReplyTo($email);
        $mail->addAddress(TO_EMAIL);
        $mail->Subject = SUBJECT;
        $mail->Body = $message;

        if ($mail->send()) {
            $result['message'] = "Thank you for your message";
        } else {
            $result['message'] = $mail->ErrorInfo;
        }
    }

    # Respond with json
    echo json_encode($result);
}
?>
