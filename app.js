// 1. Mensaje de control para saber que el archivo cargó
console.log("✅ El archivo app.js ha sido cargado correctamente.");

// 2. Verificar si el navegador es compatible con Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // 3. Intentar registrar el archivo sw.js
        // IMPORTANTE: Asegúrate de que el archivo se llame exactamente sw.js
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log("🚀 Service Worker registrado con éxito!");
                console.log("Scope (Alcance):", registration.scope);
            })
            .catch(error => {
                console.error("❌ Error al registrar el Service Worker:", error);
            });
    });
} else {
    console.warn("⚠️ Este navegador no soporta Service Workers (PWA no disponible).");
}