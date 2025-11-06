<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'insights.blackridgeresearch.org';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'raj@insights.blackridgeresearch.org';
    $mail->Password   = 'EMAIL@12';
    $mail->SMTPSecure = 'ssl'; // or 'tls'
    $mail->Port       = 465;

    $mail->setFrom('info@blackridgeresearch.com', 'Blackridge Research & Consulting');
    $mail->addAddress('nausher.khan12@gmail.com');

    $mail->Subject = 'SMTP Test';
    $mail->Body    = 'This is a test email via PHPMailer SMTP.';

    $mail->send();
    echo "Message sent successfully!";
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}
