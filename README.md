# agamer-site

Agamer Universe website — https://agamer.space

Vite (static build to `dist/`) + a small Express server.

## Local
```
npm install
npm run dev      # dev server
npm run build    # build to dist/
npm start        # serve dist on PORT (default 80)
```

## Docker (port 80)
```
docker build -t agamer-site . && docker run -d --restart unless-stopped -p 80:80 agamer-site
```
