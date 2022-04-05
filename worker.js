self.addEventListener("push", function(e){
    var option = {
        body: "This nottification was generated from a push",
        icon: "imges/example.png",
        vibrate: [100, 50, 100],
        data:  {
            dataOfArrival: Date.now(),
            primaryKey:"2"
        },
        actions:[
            {
                action: 'explore',
                title:'explore this new world',
                icon:'images/checkmark.png'
            },
            { action: 'close', icon:'images/xmark.png'}
        ]};
        e.waitUntil(self.registration.showNotification('hello world!', options) );

});
