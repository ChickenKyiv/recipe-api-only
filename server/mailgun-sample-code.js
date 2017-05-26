loopback.Email.send({
    to: "to@to.com",
    from: "fron@from.com",
    subject: "subject",
    text: "text message",
    html: "html <b>message</b>",
    attachments : [path.resolve('../client/images/an-image.jpg')],
    var : {
        myVar1 : 'a custom value'
    },
    headers : {
        "X-My-Header" : "My Custom header"
    }
})
.then(function(response){})
.catch(function(err){});