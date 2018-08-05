<?php
	// var_dump($_POST);

		if (!empty($_POST['name']) && !empty($_POST['phone'])){
			if (isset($_POST['name'])) {
				if (!empty($_POST['name'])){
			$name = strip_tags($_POST['name']);
			$nameFieldset = "Имя пославшего: ";
			}
		}
		 
		
		if (isset($_POST['form'])) {
			if (!empty($_POST['form'])){
				$form = strip_tags($_POST['form']);
				$formFieldset = "Отправлено с формы: ";
			}
		}
		
		 
		if (isset($_POST['phone'])) {
			if (!empty($_POST['phone'])){
			$phone = strip_tags($_POST['phone']);
			$phoneFieldset = "Телефон: ";
			}
		}
		// if (isset($_POST['theme'])) {
		// 	if (!empty($_POST['theme'])){
		// 	$theme = strip_tags($_POST['theme']);
		// 	$themeFieldset = "Тема: ";
		// 	}
		// }
		$token = "658248118:AAFfzvgBLzB78Z5Rp5uzrgEBX5xKElhGr1Y";
		$chat_id = "-1001344651789";
		
		$arr = array(
			$nameFieldset => $name,
			$phoneFieldset => $phone,
			// $themeFieldset => $theme,
			$formFieldset => $form
		);
		
		foreach($arr as $key => $value) {
			$txt .= "<b>".$key."</b> ".$value."%0A";
		};
		$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
		if ($sendToTelegram) {
			
			echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
				return true;
		} else {
			echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
		}
		} else {
			echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
		}
		
?>