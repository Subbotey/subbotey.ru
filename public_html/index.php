<?php

include_once 'datePars.php';

require_once __DIR__.'./src/SimpleXLSX.php';

if ($xlsx = SimpleXLSX::parse('kartochka.xlsx')) {
    $header_values = $rows = [];
    foreach ($xlsx->rows() as $k => $r) {
        if ($k === 0) {
            $header_values = $r;
            continue;
        }
        $rows[] = array_combine($header_values, $r);
    }
}

// $unix_time = filemtime('kartochka.xlsx');

// echo date('d.m.Y', $unix_time);
echo "<pre>";
print_r($rows);
echo "</pre>";

// !

// $rows = array_map(function (&$tag) {
//     return array(
//         'level' => $tag['Уровень_структуры'],
//         'name' => $tag['Название'],
//         'fromDate' => $tag['Начало'],
//         'toDate' => $tag['Окончание'],
//         'leader' => $tag['Руководитель'],
//         'parent' => $tag['Предшественники'],
//         'percent' => $tag['Процент_завершения'],
//         'cost' => $tag['Затраты'],
//         'actualCost' => $tag['Фактические_затраты'],
//         'url' => $tag['Адрес_гиперссылки']
//     );
// }, $rows);

// $sortArr = [];
// $levelOne = [];
// $levelTwo = [];

// for ($i=0; $i < count($rows); $i++) {
//     if ($rows[$i]['level'] !== '0') {
//         $rows[$i]['percent'] = (float)$rows[$i]['percent'];
//         $rows[$i]['percent'] = round($rows[$i]['percent'], 2);
//         $rows[$i]['percent'] *= 100;
//         $rows[$i]['cost'] = (float)$rows[$i]['cost'];
//         $rows[$i]['cost'] = round($rows[$i]['cost'], 2);
//         $rows[$i]['actualCost'] = (float)$rows[$i]['actualCost'];
//         $rows[$i]['actualCost'] = round($rows[$i]['actualCost'], 2);
//         $rows[$i]['fromDate'] = datePars($rows[$i]['fromDate']);
//         $rows[$i]['toDate'] = datePars($rows[$i]['toDate']);
//         array_push($sortArr, $rows[$i]);
//     }
// }

// for ($i=0; $i < count($sortArr); $i++) {
//     if ($sortArr[$i]['level'] == '1') {
//         array_push($levelOne, $sortArr[$i]);
//     }
// }

// for ($i=0; $i < count($sortArr); $i++) {
//     if ($sortArr[$i]['level'] == '2') {
//         array_push($levelTwo, $sortArr[$i]);
//     }
// }

// unset($rows);
// unset($sortArr);
// !

echo "<pre>";
print_r(json_encode($levelOne));
echo "</pre>";

// $rows[$i]['Длительность'] = trim($rows[$i]['Длительность']) ;
// $rows[$i]['Длительность'] = trim($rows[$i]['Длительность'], "дней?") ;
// $rows[$i]['Длительность'] = str_ireplace(",", ".", $rows[$i]['Длительность']);
