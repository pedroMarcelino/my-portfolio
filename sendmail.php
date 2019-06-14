<?php
    $to = "pedro.marcelinodv@gmail.com"; 
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $menssagem = $_POST['menssagem'];
    $menssagem = str_replace("\n.", "\n..", $menssagem);

    $headers = 'De:' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $assunto, $menssagem, $headers)){
        $response = array('success'=> true);
        echo json_encode($response);
    }else{
        $response = array('success'=> false);
        echo json_encode($response);
    }
?>