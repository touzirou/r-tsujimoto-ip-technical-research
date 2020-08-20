{
    window.addEventListener('load', function() {
        // タグを指定して、複数のエレメントを取得する
        const elements = document.getElementsByTagName('div');
        for (idx = 0 ; idx < elements.length ; idx++ ){
            console.log(elements[idx].id);
        }
        // テキストエリアのイベントチェック
        document.getElementById('text').addEventListener('change', function() {
            console.log("Changeしたね"); // フォーカスが離れた時に内容が変わっていれば発火
        });
        document.getElementById('text').addEventListener('input', function() {
            console.log("Inputしたね"); // 入力する度に発火
        });
        document.getElementById('btn').addEventListener('click', function() {
            document.getElementById('text').value = ''; // 何も発火しない
        });
    });
}