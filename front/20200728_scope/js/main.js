{
    function SampleItem() {
        this.sample1 = "123";
        if (true) {
            // thisをつければ、if文を抜けた後でもアクセスできる
            this.sample2 = "abc";
        }
        var sample3 = 'zzz';
    };

    var test = function() {
        const item = new SampleItem();
        console.log(item.sample1);
        console.log(item.sample2);
        if (true) {
            // thisをつけなかったら、undefined
            const omake = "xyz";
        }
        console.log(omake);
    };
}