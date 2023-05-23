<?php
$toEmail = "evan.yang8701@gmail.com";
$mailHeaders = "From: " . $_POST["firstName"] . "<" . $_POST["email"] . ">\r\n";
if (mail($toEmail, $_POST["message"], $_POST["phoneNumber"], $mailHeaders)) {
  echo "<p class='success'>Contact Mail Sent.</p>";
} else {
  echo "<p class='Error'>Problem in Sending Mail.</p>";
}
?>