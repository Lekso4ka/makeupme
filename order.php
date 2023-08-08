<?php
$to = "katena2488@mail.ru";
$subject = "MakeUpMe";
$message = "\n
			Имя: " . substr(htmlspecialchars(trim($_POST["ppl_name"])), 0) . "\n
            Телефон: " . substr(htmlspecialchars(trim($_POST["ppl_tel"])), 0) . "\n
            E-mail: " . substr(htmlspecialchars(trim($_POST["ppl_mail"])), 0) . "\n
            Комментарий: " . substr(htmlspecialchars(trim($_POST["ppl_msg"])), 0);
mail($to, $subject, $message);

$back = $_SERVER["HTTP_REFERER"];
echo "<html>
	  	<head>
			<meta http-equiv=\"Refresh\" content=\"0; URL=". $back ."\">
		</head>
	</html>";
exit;