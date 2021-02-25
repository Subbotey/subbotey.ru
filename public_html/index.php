<?php

error_reporting(E_ALL);

include_once 'datePars.php';

require_once __DIR__.'./src/SimpleXLSX.php';

if ($xlsx = SimpleXLSX::parse('data.xlsx')) {
    $header_values = $rows = [];
    foreach ($xlsx->rows() as $k => $r) {
        if ($k === 0) {
            $header_values = $r;
            continue;
        }
        $rows[] = array_combine($header_values, $r);
    }
}
echo "<pre>";
print_r($rows);
echo "</pre>";


$rows = array_map(function (&$tag) {
    return array(
        'level' => $tag['Уровень_структуры'],
        'name' => $tag['Название'],
        'fromDate' => $tag['Начало'],
        'toDate' => $tag['Окончание'],
        'leader' => $tag['Руководитель'],
        'parent' => $tag['Предшественники'],
        'percent' => $tag['Процент_завершения'],
        'cost' => $tag['Затраты'],
        'actualCost' => $tag['Фактические_затраты'],
        'url' => $tag['Адрес_гиперссылки']
    );
}, $rows);




// for ($i=0; $i < count($rows); $i++) {
//     if ($rows[$i]['Уровень_структуры'] == 1) {
//         $rows[$i]['Процент_завершения'] *= 100;
//         $rows[$i]['Длительность'] = trim($rows[$i]['Длительность']) ;
//         $rows[$i]['Длительность'] = trim($rows[$i]['Длительность'], "дней?") ;
//         $rows[$i]['Длительность'] = str_ireplace(",", ".", $rows[$i]['Длительность']);
//         $rows[$i]['Трудозатраты'] = str_ireplace(" ", "", $rows[$i]['Трудозатраты']);

//         $rows[$i]['Трудозатраты'] = trim($rows[$i]['Трудозатраты'], "ч");
//         $rows[$i]['Трудозатраты'] = str_ireplace(",", ".", $rows[$i]['Трудозатраты']);
//         $rows[$i]['Трудозатраты'] = (float)$rows[$i]['Трудозатраты'];
//         $rows[$i]['Фактические_трудозатраты'] = trim($rows[$i]['Фактические_трудозатраты'], "ч");
//         $rows[$i]['Фактические_трудозатраты'] = str_ireplace(",", ".", $rows[$i]['Фактические_трудозатраты']);
//         $rows[$i]['Фактические_трудозатраты'] = (float)$rows[$i]['Фактические_трудозатраты'];
//         $rows[$i]['Начало'] = datePars($rows[$i]['Начало']);
//         $rows[$i]['Окончание'] = datePars($rows[$i]['Окончание']);
//         $arr[] = $rows[$i];
//     }
// }


echo "<pre>";
var_export($rows);
echo "</pre>";

// echo "<pre>";
// print_r(json_encode($arr));
// echo "</pre>";
