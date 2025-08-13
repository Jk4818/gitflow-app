const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/healthz', (_, res) => res.json({ ok: true }));
app.get('/api/hello', (_, res) => res.json({ message: 'hello from api' }));
app.listen(port, () => console.log(`api listening on ${port}`));
