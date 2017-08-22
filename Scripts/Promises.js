function getNumber(bEven) {
    return new Promise(function (fulfill, reject) {
        window.setTimeout(
            function () {
                var i = Math.round((Math.random() * 100), 0);
                if ((i % 2 != 0 && bEven) || (i % 2 == 0 && !bEven)) {
                    reject(i);
                }
                else {
                    fulfill(i);
                }
            }, 2000);
    });
}

var prom = getNumber(true);

prom.then
    (
    function (i) { console.log("promise fulfilled with i=" + i) }
    )
    .catch
    (
    function (i) { console.log("promise rejected with i=" + i) }
    );