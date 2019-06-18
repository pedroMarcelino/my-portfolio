<?php
    $to = "pedro.marcelinodv@gmail.com"; 
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $menssagem = $_POST['menssagem'];
    $menssagem = ("Nome: " . $nome . "\n" . "Email: " . $email . "\n\n" . $menssagem);

    $menssagem = str_replace("\n.", "\n..", $menssagem);

    if(mail($to, $assunto, $menssagem)){
        $response = array('success'=> true);
        echo json_encode($response);
    }else{
        $response = array('success'=> false);
        echo json_encode($response);
    }
?>