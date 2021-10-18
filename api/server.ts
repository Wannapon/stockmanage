import express from 'express';

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
    // res.send('Hello world');
    res.send(`
    <form action="/posts" method="post">
        <input type="submit" name="upvote" value="Upvote" />
    </form>
    `);
});

app.post('/posts', (req, res, next) => {
    console.log(req.body);
    res.send('get the post');
});

app.get('/params/:myparams', (req, res, next) => {
    console.log(req.query);
    res.send(`Hollo ${req.params.myparams} with query ${req.query.want}`);
});

app.listen(8080, () => {
    console.log('Server running on 8080 successfully.....');
});
