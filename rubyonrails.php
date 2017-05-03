<?php
define("TO_EMAIL", "hello@shakuro.com");
define("SUBJECT", "Shakuro");

if (isset($_POST)) {
    require_once 'lib/php_mailer/PHPMailerAutoload.php';
    require_once 'lib/shakuro_mailer.php';

    $result = array();

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $company = trim($_POST['company']);
    $types = $_POST['type'];
    $types_formated = join(', ', $types);

    # Checking errors
    if (empty($email)) {
        $result['errors']['email'] = 'Email Address is empty';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $result['errors']['email'] = 'Email is not valid';
    }

    # Sending email
    if (!isset($result['errors'])) {
        $mail = new ShakuroMailer();

        $mail->setFrom($email);
        $mail->addReplyTo($email);
        $mail->addAddress(TO_EMAIL);
        $mail->Subject = SUBJECT;
        $mail->IsHTML(true);
        $mail->Body = "
          <table>
            <tr>
              <td>Name: </td>
              <td>{$name}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{$email}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>{$phone}</td>
            </tr>
            <tr>
              <td>Company: </td>
              <td>{$company}</td>
            </tr>
            <tr>
              <td>Types: </td>
              <td>{$types_formated}</td>
            </tr>
          </table>
        ";

        if ($mail->send()) {
            $result['message'] = "Thank you for your message";
        } else {
            $result['message'] = $mail->ErrorInfo;
        }
    }
    # Respond with json
    echo json_encode($types);
}
?>
