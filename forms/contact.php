<?php
if(isset($_POST['name']) &&  isset($_POST['email'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $to = 'jaypatel19124@gmail.com';
  $subject = "New Subscriber";
  $body = '<html>
  <body>
  <h2>Feedback - example.com</h2>
  <hr>
  <p>Name<br>'.$name.'</p>
  <p>Email<br>'.$email.'</p>
  </body>
  </html>';

  $headers = "From: ".$name."<".$email.">\r\n";
  $headers .="Reply-To: ".$email."\r\n";
  $headers .= "MINE-Version:1.0\r\n";
  $headers .="Content type:text/html; charset=utf-8";

  $send = mail($to, $subject, $body, $headers);
   if($send){
     echo '<br>';
     echo 'Thank you:)';

   }else{
     echo 'error';
   }
}
?>