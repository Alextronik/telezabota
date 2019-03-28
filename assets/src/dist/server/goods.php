<?php
	header("Content-Type: text/html; charset=utf-8");
    mb_internal_encoding('UTF-8');
	$title = 'Консультация ЛОРа'/*$_POST['title']*/;
	$text = 'Добавлена в '/*$_POST['text']*/;
	$linktext = 'корзину'/*$_POST['linktext']*/;	
	$link = 'basket.html';
				
	$result['title'] = $title;
	$result['text'] = $text;
	$result['linktext'] = $linktext;
	$result['link'] = $link;
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>