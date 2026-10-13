import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const app = express();
const PORT = process.env.PORT || 80;

app.disable('x-powered-by');
app.use(express.static(dist, { maxAge: '1h' }));
app.get('*', (req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(PORT, '0.0.0.0', () => console.log(`agamer-site listening on port ${PORT}`));
