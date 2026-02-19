

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log("todo fine")
            })
            .catch(error => {
                console.error("todo mal: ", error);
            });
    });
} else {
    console.warn("Todo mas o menos");
}