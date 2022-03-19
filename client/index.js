if ('serviceWorker' in navigator) {
    console.log('service worker works');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceWorker.js')
            .then(reg => console.log('service worker registered'))
            .catch(err => console.log('Error: ${err}'))
    })//setting up the service worker
}
