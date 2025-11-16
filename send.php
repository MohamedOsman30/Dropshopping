<?php

$to = "moohamedahmedd30@gmail.com"; // الإيميل الذي سيستقبل البيانات

$name  = $_POST["name"];
$email = $_POST["email"];

$subject = "New Lead From Landing Page";

$message  = "New Lead Details:\n";
$message .= "Name: $name\n";
$message .= "Email: $email\n";
$message .= "Time: " . date("Y-m-d H:i:s") . "\n";

$headers  = "From: noreply@yourdomain.com\r\n";
$headers .= "Reply-To: $email\r\n";

if(mail($to, $subject, $message, $headers)) {
    echo "<h2 style='font-family:Arial;text-align:center;margin-top:50px;'>شكراً لك! تم استلام الطلب بنجاح ✔</h2>";
} else {
    echo "<h2 style='font-family:Arial;color:red;text-align:center;margin-top:50px;'>حدث خطأ أثناء الإرسال ✖</h2>";
}
?>
