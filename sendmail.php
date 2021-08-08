<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('SU10393@studenti.polito.it', 'uffff');
    $mail->addAddress('tory20002000@mail.ru');
    $mail->Subject = 'YA NE EBU';

    $body = '<h1>You have an email</h1>';
    if(trim(!empty($_POST['firstName']))){
    $body.='<p><strong>First Name</strong> '.$_POST['firstName'].'</p>'
    }
    if(trim(!empty($_POST['secondName']))){
        $body.='<p><strong>First Name</strong> '.$_POST['secondName'].'</p>'
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email</strong> '.$_POST['email'].'</p>'
    }
    if(trim(!empty($_POST['subject']))){
        $body.='<p><strong>Subject</strong> '.$_POST['subject'].'</p>'
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message</strong> '.$_POST['message'].'</p>'
    }

    $mail->Body = $body;

    if(!$mail->send()) {
    $message = 'Error';
    }else{
    $message = "Completed";
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>