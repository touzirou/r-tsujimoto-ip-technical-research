{
    const analysis_rect = function () {
        console.clear();
        const rect = document.getElementById('sample').getBoundingClientRect();
        const displayRatio = 0.8; // 80%
        console.log('top[' + rect.top + '] bottom[' + rect.bottom + ']');
        console.log('要素のサイズ[' + (rect.bottom - rect.top) + ' OKライン[' + ((rect.bottom - rect.top) * displayRatio) + ']');
        console.log('画面の高さ[' + window.innerHeight + '] OKライン[' + (window.innerHeight * displayRatio) + ']');
        if (rect.top < 0 && window.innerHeight < rect.bottom) {
            console.log('表示されている領域 : FULLSIZE');
        } else if (rect.top < 0) {
            console.log('表示されている領域 : ' + rect.bottom);
        } else if (window.innerHeight < rect.bottom) {
            console.log('表示されている領域 : ' + (window.innerHeight - rect.top));
        } 

        // 要素が画面上に 80% 以上表示されていれば計測対象（可読性重視で実装）
        if (window.innerHeight < rect.top || 0 > rect.bottom) {
            console.log('非表示状態');
            return;
        }
        if (0 <= rect.top && window.innerHeight >= rect.bottom) {
            console.log('要素全てが画面上に収まっている');
            return;
        } 
        const targetElementSize = (rect.bottom - rect.top) * displayRatio; // 計測対象とする要素サイズ
        const targetDisplaySize = window.innerHeight * displayRatio;       // 計測対象とする画面サイズ
        if (rect.top < 0) {
            console.log('上部が見切れている状態');
            const elementDisplaySize = rect.bottom; // 要素が画面上に表示されているサイズ
            if (targetElementSize <= elementDisplaySize) {
                console.log('画面上に要素が指定サイズ以上表示されている')
                return;
            }
            if (targetDisplaySize <= elementDisplaySize) {
                console.log('画面上に指定領域以上表示されている');
                return;
            }
        }
        if (window.innerHeight < rect.bottom) {
            console.log('下部が見切れている状態');
            const elementDisplaySize = window.innerHeight - rect.top; // 要素が画面上に表示されているサイズ
            if (targetElementSize <= elementDisplaySize) {
                console.log('画面上に要素が指定サイズ以上表示されている')
                return;
            } 
            if (targetDisplaySize <= elementDisplaySize) {
                console.log('画面上に指定領域以上表示されている');
                return;
            }
        }
        console.log('計測対象外')
    };
    setInterval(analysis_rect, 1000);
}