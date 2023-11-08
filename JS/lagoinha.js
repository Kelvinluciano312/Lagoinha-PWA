app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/HTML/lagoinha.html'));
});
