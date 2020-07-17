<?php

// 連想配列をstring型に変換する
$testAry = ['x' => 'abc', 'y' => 'def', 'z' => 'ghi'];

// print_rの第二引数に true を指定すると、返り値がstringになる
// @see https://www.php.net/manual/ja/function.print-r.php
$testStr = print_r($testAry, true);
echo $testStr;