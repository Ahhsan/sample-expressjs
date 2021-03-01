const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => res.send('Default app running'));

app.get('/check', (request, response) => {
    response.json({ Status: 'yesss' });
    console.log('yesss');
})

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))