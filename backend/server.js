const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

// http://localhost:3000/api
app.get('/api', (req, res) => {
    res.json(
        [
            { userid: 'yw405', content: '안녕하세요', date: '2021-07-15' },
            { userid: 'yw405', content: '네 안녕하세요', date: '2021-07-15' },
            { userid: 'yw405', content: '반갑습니다요', date: '2021-07-15' },
            { userid: 'yw405', content: '저두요', date: '2021-07-15' },
            { userid: 'yw405', content: '사실전아니요', date: '2021-07-15' },
        ]
    )
})
app.listen(3000, () => {
    console.log('sever start port: 3000!!!')
})