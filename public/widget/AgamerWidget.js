// Agamer (AGAMER) price widget for Scriptable — TON blockchain
// Data: GeckoTerminal (all pools: STON.fi, DeDust) + DexScreener fallback
const TOKEN = "EQA5qN_40wF_i8ZPfX5YD-ypK-PagNSbvSrrtqYDZ45pbIKs";
const LOGO_B64 = "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"; // embedded coin logo (96x96 JPEG)
const GT = "https://api.geckoterminal.com/api/v2/networks/ton";
const BG = Color.black();
const GREEN = new Color("#2ee59d"), RED = new Color("#ff5c7a"), GREY = new Color("#9aa3c7");

// ---- Resilient HTTP: sequential, per-host throttle, retry/backoff on 429/5xx, last-good cache per URL ----
const FM = (typeof FileManager !== "undefined") ? FileManager.local() : null;
const CDIR = FM ? FM.joinPath(FM.cacheDirectory(), "agamer-cache") : null;
if (FM && !FM.fileExists(CDIR)) FM.createDirectory(CDIR, true);
const ckey = u => { let h = 0; for (let i = 0; i < u.length; i++) h = (h * 31 + u.charCodeAt(i)) | 0; return FM.joinPath(CDIR, "c" + (h >>> 0) + ".json"); };
const cacheGet = u => { try { if (!FM) return null; const p = ckey(u); if (!FM.fileExists(p)) return null; return JSON.parse(FM.readString(p)); } catch (e) { return null; } };
const cachePut = (u, body) => { try { if (FM) FM.writeString(ckey(u), JSON.stringify({ t: Date.now(), body })); } catch (e) {} };
const wait = ms => new Promise(r => (typeof Timer !== "undefined") ? Timer.schedule(ms, false, r) : setTimeout(r, ms));
const LAST = {}, DEAD = {}; let STALE = 0;
const GAP = h => /tonapi/.test(h) ? 1100 : /geckoterminal/.test(h) ? 2100 : 300;
async function once(url) {
  const host = url.split("/")[2], w = (LAST[host] || 0) + GAP(host) - Date.now(); if (w > 0) await wait(w); LAST[host] = Date.now();
  if (globalThis.FAULT && Math.random() < globalThis.FAULT) { const e = new Error("HTTP 429"); e.code = 429; throw e; }
  const r = new Request(url); r.headers = { Accept: "application/json" }; r.timeoutInterval = 30;
  const txt = await r.loadString(); const code = (r.response && r.response.statusCode) || 200;
  if (code === 429 || code >= 500) { const e = new Error("HTTP " + code); e.code = code; throw e; }
  if (code >= 400) { const e = new Error("HTTP " + code); e.code = code; e.fatal = true; throw e; }
  return JSON.parse(txt);
}
// maxAge (ms): return a cached response younger than that without a request
async function j(url, maxAge = 0) {
  const c = cacheGet(url); if (maxAge && c && Date.now() - c.t < maxAge) return c.body;
  const host = url.split("/")[2]; let err;
  for (let k = 0; k < 3 && !DEAD[host]; k++) {
    try { const b = await once(url); cachePut(url, b); return b; }
    catch (e) { err = e; if (e.fatal) break; await wait(1200 * 2 ** k); }
  }
  if (err && !err.fatal) DEAD[host] = true;
  if (c) { STALE++; return c.body; }
  throw err || new Error("request failed");
}
const TONAPI = "https://tonapi.io/v2";
// All 5 active pools (2 STON.fi + 3 DeDust). Reserves are read directly from STON.fi API / on-chain (tonapi).
const POOLS = [
  { dex: "STON.fi v2", pair: "AGAMER/TON",  addr: "EQBOXwObmjO8T7BQrER2joTiLn0hhM022Pov1KgqgSY0w257", kind: "ston", q: "TON" },
  { dex: "STON.fi v2", pair: "AGAMER/USDT", addr: "EQBQ760LlO0ItI4bIGEtMK7XIxI1WSe4ebKz6WN2um4AraNs", kind: "ston", q: "USDT" },
  { dex: "DeDust v2",  pair: "AGAMER/USDT", addr: "EQCmquQDquG55G6Hwsky8DRF-MZQFGxpmhA70PzdSocYmoKF", kind: "dd2", q: "USDT" },
  { dex: "DeDust v2",  pair: "AGAMER/TON",  addr: "EQDY9AtOHm-n4egTGJ0uAGgRiCPHfvySaGi-A2lV8l6ukYvv", kind: "dd2", q: "TON" },
  { dex: "DeDust",     pair: "AGAMER/TON",  addr: "EQAWUKKbNZJyRehL_80W9lqLDm3sOLObGzpzwdxX5nrXe39f", kind: "dd1", q: "TON" },
];
const RAW_TOKEN = "0:39a8dff8d3017f8bc64f7d7e580feca92be3da80d49bbd2aebb6a603678e696c";

async function reserves(p) { // returns [agamer, quote] in whole units
  if (p.kind === "ston") {
    const d = (await j(`https://api.ston.fi/v1/pools/${p.addr}`)).pool;
    const a0 = d.token0_address === TOKEN;
    const ra = +(a0 ? d.reserve0 : d.reserve1), rq = +(a0 ? d.reserve1 : d.reserve0);
    return [ra / 1e9, rq / (p.q === "USDT" ? 1e6 : 1e9), +d.volume_24h_usd || 0];
  }
  if (p.kind === "dd1") {
    const d = (await j(`${TONAPI}/blockchain/accounts/${p.addr}/methods/get_reserves`)).decoded;
    return [+d.reserve1 / 1e9, +d.reserve0 / 1e9, null];
  }
  const jb = (await j(`${TONAPI}/accounts/${p.addr}/jettons`)).balances;
  const ag = jb.find(b => b.jetton.address === RAW_TOKEN);
  let q;
  if (p.q === "TON") q = (await j(`${TONAPI}/accounts/${p.addr}`)).balance / 1e9 - 0.3; // minus storage reserve
  else { const u = jb.find(b => /USD/.test(b.jetton.symbol)); q = +u.balance / 10 ** u.jetton.decimals; }
  return [+ag.balance / 1e9, q, null];
}

// ---- Recent trades (GeckoTerminal primary, tonapi events fallback/history) ----
const POOL_RAW = {
  "EQCmquQDquG55G6Hwsky8DRF-MZQFGxpmhA70PzdSocYmoKF": "0:a6aae403aae1b9e46e87c2c932f03445f8c650146c699a103bd0fcdd4a87189a",
  "EQDY9AtOHm-n4egTGJ0uAGgRiCPHfvySaGi-A2lV8l6ukYvv": "0:d8f40b4e1e6fa7e1e813189d2e0068118823c77efc926868be036955f25eae91",
};
const DEXN = { stonfi: "STON.fi", dedust: "DeDust" };
// v2.6: sum ALL ok JettonSwap legs touching AGAMER (aggregators split one swap across pools/DEXes)
function parseEvent(e, p, tonUsd) {
  let ag = 0, q = 0; // net flow from the trader's view: ag>0 = trader received AGAMER
  if (e.aborted) return null; // v2.5: failed swaps (action status "failed") are not trades
  const ok = a => (a.status || "ok") === "ok";
  const sws = e.actions.filter(a => a.type === "JettonSwap");
  if (sws.length && sws.some(a => !ok(a))) return null;
  const legs = [];
  if (sws.length) {
    for (const sw of sws) {
      const s = sw.JettonSwap, inA = s.jetton_master_in && s.jetton_master_in.address === RAW_TOKEN, outA = s.jetton_master_out && s.jetton_master_out.address === RAW_TOKEN;
      if (!inA && !outA) continue;
      const qOther = outA ? s.jetton_master_in : s.jetton_master_out; // null = TON
      const qd = qOther ? 10 ** (qOther.decimals != null ? qOther.decimals : (p.q === "USDT" ? 6 : 9)) : 1e9;
      let la, lq;
      if (outA) { la = +s.amount_out / 1e9; lq = -(s.ton_in != null ? s.ton_in / 1e9 : +s.amount_in / qd); }
      else { la = -(+s.amount_in / 1e9); lq = s.ton_out != null ? s.ton_out / 1e9 : +s.amount_out / qd; }
      legs.push({ ag: la, q: lq, dex: DEXN[s.dex] || p.dex });
    }
    if (!legs.length) return null;
    const sg = Math.sign(legs[0].ag); if (legs.some(l => Math.sign(l.ag) !== sg)) return null; // buy+sell in one trace = arbitrage
    legs.forEach(l => { ag += l.ag; q += l.q; });
  } else {
    const raw = POOL_RAW[p.addr]; if (!raw) return null;
    for (const a of e.actions) {
      if (!ok(a)) continue;
      if (a.type === "JettonTransfer") {
        const t = a.JettonTransfer, isAg = t.jetton.address === RAW_TOKEN, isQ = /USD/.test(t.jetton.symbol);
        const amt = +t.amount / 10 ** t.jetton.decimals;
        const toPool = t.recipient && t.recipient.address === raw, fromPool = t.sender && t.sender.address === raw;
        if (isAg) ag += fromPool ? amt : toPool ? -amt : 0;
        if (isQ && p.q === "USDT") q += fromPool ? amt : toPool ? -amt : 0;
      } else if (a.type === "TonTransfer" && p.q === "TON") {
        const t = a.TonTransfer, amt = t.amount / 1e9;
        q += t.sender.address === raw ? amt : t.recipient.address === raw ? -amt : 0;
      }
    }
    if (!ag || !q || Math.sign(ag) === Math.sign(q)) return null;
    legs.push({ ag, q, dex: p.dex });
  }
  const qa = Math.abs(q);
  return { hash: e.event_id, time: e.timestamp * 1000, kind: ag > 0 ? "buy" : "sell", agamer: Math.abs(ag), quote: qa, qsym: p.q,
           usd: qa * (p.q === "TON" ? tonUsd : 1), dex: dexLabel(legs, p.dex), pair: p.pair, pool: p.addr,
           legs: legs.map(l => ({ ag: Math.abs(l.ag), q: Math.abs(l.q), dex: l.dex })) };
}
function dexLabel(legs, def) { const s = [...new Set(legs.map(l => l.dex))].sort(); return s.length > 1 ? s.join(" + ") : def; }
const near = (a, b, r = 0.005) => Math.abs(a - b) <= Math.max(0.01, r * Math.max(a, b));
// merge legs of the same event seen from another pool (each pool's /events shows only its own leg)
function mergeLegs(t, n, tonUsd) {
  let added = false;
  for (const l of n.legs) if (!t.legs.some(o => near(o.ag, l.ag, 0.0001))) { t.legs.push(l); added = true; }
  if (!added) return;
  t.agamer = t.legs.reduce((s, l) => s + l.ag, 0); t.quote = t.legs.reduce((s, l) => s + l.q, 0);
  t.usd = t.quote * (t.qsym === "TON" ? tonUsd : 1); t.dex = dexLabel(t.legs, t.dex);
}
async function fetchTrades(tonUsd, withGT = true) {
  const all = {}, gts = [], okPool = {};
  for (const p of POOLS) {
    if (withGT) try { // GeckoTerminal: last 24h, exact USD at trade time
      (await j(`${GT}/pools/${p.addr}/trades`, 120000)).data.forEach(x => {
        const a = x.attributes, buy = a.kind === "buy";
        gts.push({ hash: a.tx_hash, time: Date.parse(a.block_timestamp), kind: a.kind,
          agamer: +(buy ? a.to_token_amount : a.from_token_amount), quote: +(buy ? a.from_token_amount : a.to_token_amount), qsym: p.q,
          usd: +a.volume_in_usd, dex: p.dex, pair: p.pair, pool: p.addr, src: "gt" });
      });
    } catch (e) {}
    const st0 = STALE;
    try { // tonapi: on-chain events; the same event_id appears under every pool it touched
      (await j(`${TONAPI}/accounts/${p.addr}/events?limit=40`, 60000)).events.forEach(e => {
        const t = parseEvent(e, p, tonUsd); if (!t) return; t.src = "tonapi";
        if (all[e.event_id]) mergeLegs(all[e.event_id], t, tonUsd); else all[e.event_id] = t;
      }); okPool[p.addr] = STALE === st0;
    } catch (e) {}
  }
  // GT lists aggregator legs under separate tx hashes. tonapi already has every leg of an event (merged above), so GT rows
  // are used only for pools whose tonapi request failed, and even then dropped if they match a tonapi leg or total.
  const ton = Object.values(all), seenGt = {};
  for (const g of gts) {
    if (seenGt[g.hash] || okPool[g.pool]) continue; seenGt[g.hash] = 1;
    const same = ton.filter(o => o.kind === g.kind && Math.abs(o.time - g.time) < 180000);
    if (same.some(o => near(o.agamer, g.agamer) || o.legs.some(l => near(l.ag, g.agamer)))) continue;
    all[g.hash] = g;
  }
  return Object.values(all).sort((a, b) => b.time - a.time).slice(0, 30);
}

async function fetchData() {
  const rates = (await j(`${TONAPI}/rates?tokens=ton,${TOKEN}&currencies=usd`)).rates;
  const tonUsd = rates.TON.prices.USD;
  let gt = {}; // aggregator only as fallback / for volume & chart
  try { (await j(`${GT}/tokens/${TOKEN}/pools?page=1`, 300000)).data.forEach(x => gt[x.attributes.address] = x.attributes); } catch (e) {}
  const pools = [];
  for (const p of POOLS) {
    try {
      const [ra, rq, sv] = await reserves(p);
      if (!(ra > 0) || !(rq > 0)) continue; // empty pool (e.g. liquidity withdrawn)
      const qUsd = p.q === "TON" ? tonUsd : 1;
      const usd = rq / ra * qUsd, liq = 2 * rq * qUsd;
      const g = gt[p.addr];
      pools.push({ ...p, name: p.pair, usd, liq, vol: sv != null ? sv : (g ? +(g.volume_usd.h24 || 0) : 0), ch: g ? +(g.price_change_percentage.h24 || 0) : 0, src: "direct" });
    } catch (e) {
      const g = gt[p.addr]; if (g) pools.push({ ...p, name: p.pair, usd: +g.base_token_price_usd, liq: +g.reserve_in_usd, vol: +(g.volume_usd.h24 || 0), ch: +(g.price_change_percentage.h24 || 0), src: "gecko" });
    }
  }
  if (!pools.length) throw new Error("no pool data");
  pools.sort((a, b) => b.liq - a.liq);
  const liq = pools.reduce((s, p) => s + p.liq, 0), vol = pools.reduce((s, p) => s + p.vol, 0);
  const price = pools.reduce((s, p) => s + p.usd * p.liq, 0) / liq;
  const priceTon = price / tonUsd;
  let ch = parseFloat(String(rates[TOKEN] ? rates[TOKEN].diff_24h.USD : "0").replace("\u2212", "-").replace("+", ""));
  if (isNaN(ch)) ch = 0;
  try { // 24h change from hourly candles of POOLS[0] (same as Android); candle must be within 2h of "24h ago", else keep tonapi diff_24h
    const oh = (await j(`${GT}/pools/${POOLS[0].addr}/ohlcv/hour?aggregate=1&limit=100&currency=usd`, 600000)).data.attributes.ohlcv_list;
    const target = Math.floor(Date.now() / 1000) - 86400; let ref = -1, best = Infinity;
    for (const c of oh) { const dt = Math.abs(c[0] - target); if (dt < best) { best = dt; ref = +c[1]; } }
    if (ref > 0 && best <= 7200 && price > 0) ch = (price / ref - 1) * 100;
  } catch (e) {}
  ch = Math.max(ch, -99.99);
  let supply = 0, holders = null;
  try { const t = await j(`${TONAPI}/jettons/${TOKEN}`, 3600000); supply = +t.total_supply / 1e9; holders = t.holders_count; } catch (e) {}
  const fdv = supply * price;
  const main = pools[0];
  // Chart period: 24h = 1h candles, 7d = 4h candles, 30d = 1d candles; gaps filled with flat candles at previous close
  const PER = { "24h": ["hour", 1, 24], "7d": ["hour", 4, 42], "30d": ["day", 1, 30] }[PERIOD];
  let candles = [];
  try {
    const o = (await j(`${GT}/pools/${POOLS[0].addr}/ohlcv/${PER[0]}?aggregate=${PER[1]}&limit=100&currency=usd`, 600000)).data.attributes.ohlcv_list
      .map(c => ({ t: c[0], o: +c[1], h: +c[2], l: +c[3], c: +c[4], v: +c[5] })).sort((x, y) => x.t - y.t);
    const step = (PER[0] === "day" ? 86400 : 3600) * PER[1], end = Math.floor(Date.now() / 1000 / step) * step, start = end - (PER[2] - 1) * step;
    const by = {}; o.forEach(c => by[c.t] = c);
    let prev = o.filter(c => c.t < start).pop(); let last = prev ? prev.c : (o.length ? o[0].o : price);
    for (let t = start; t <= end; t += step) {
      const c = by[t]; if (c) { candles.push(c); last = c.c; } else candles.push({ t, o: last, h: last, l: last, c: last, v: 0 });
    }
  } catch (e) {}
  if (!candles.length) candles = [{ t: 0, o: price, h: price, l: price, c: price, v: 0 }];
  TONUSD = tonUsd;
  return { price, priceTon, tonUsd, ch, liq, vol, fdv, mc: fdv, supply, holders, pools, candles, main };
}

const f$ = v => v == null ? "—" : v >= 1e6 ? "$" + (v / 1e6).toFixed(2) + "M" : v >= 1e3 ? "$" + (v / 1e3).toFixed(1) + "K" : "$" + v.toFixed(v < 1 ? 5 : 2);
let TONUSD = 0;
const gram = v => { if (v == null || !TONUSD) return ""; const g = v / TONUSD; return " · " + (g >= 1000 ? Math.round(g).toLocaleString("en-US") : g >= 1 ? g.toFixed(2) : g.toFixed(5)) + " Gram"; };
const fg = v => f$(v) + gram(v);
const fp = v => (v >= 0 ? "▲ +" : "▼ ") + v.toFixed(2) + "%";

// v2.4 chart (same look as Android ChartRenderer / the price bot): grid, $ + Gram left axis, local-time x labels,
// current price dashed line + tag; candles = 1pt wicks, 65% bodies, min body; line = monotone curve, gradient-ish fill, H/L.
function chart(cs, w, h, up = true, price = 0) {
  const d = new DrawContext(); d.size = new Size(w, h); d.opaque = false; d.respectScreenScale = true;
  const CG = new Color("#22c55e"), CR = new Color("#ef4444"), col = up ? CG : CR, colHex = up ? "#22c55e" : "#ef4444";
  const n = cs.length; if (!n) return d.getImage();
  const labels = h >= 70 && w >= 160, line = STYLE === "line", hist = STYLE === "hist";
  const T = labels ? 9 : 3, B = labels ? h - 13 : h - 3, L = labels ? 60 : 2, R = w - 4;
  let mn, mx;
  if (hist) { mn = 0; mx = Math.max(...cs.map(c => c.v || 0)) || 1; mx *= 1.08; }
  else {
    const lo = cs.map(c => line ? c.c : c.l), hi = cs.map(c => line ? c.c : c.h);
    if (price > 0) { lo.push(price); hi.push(price); }
    mn = Math.min(...lo); mx = Math.max(...hi); let r = mx - mn; if (!(r > 0)) r = Math.abs(mx) * 0.02 || 1e-9;
    const k = line ? 0.08 : 0.06; mn -= r * k; mx += r * k;
  }
  const Y = v => T + (mx - v) / (mx - mn) * (B - T), X = i => L + (i + 1) / (n + 1) * (R - L);
  const text = (s, x, y, size, color, align, bold = false) => { // align: "r" | "c" | "l"; y = top of text box
    d.setFont(bold ? Font.boldSystemFont(size) : Font.systemFont(size)); d.setTextColor(color);
    if (align === "r") d.setTextAlignedRight(); else if (align === "c") d.setTextAlignedCenter(); else d.setTextAlignedLeft();
    const bw = 90, rx = align === "r" ? x - bw : align === "c" ? x - bw / 2 : x; d.drawTextInRect(s, new Rect(rx, y, bw, size * 1.3));
  };
  const money = v => v >= 1e6 ? "$" + (v / 1e6).toFixed(2) + "M" : v >= 1e3 ? "$" + (v / 1e3).toFixed(1) + "K" : "$" + v.toFixed(0);
  // grid + left axis labels
  const gridC = new Color("#1f1f1f"), rows = h >= 110 ? 4 : 2;
  for (let k = 0; k <= rows; k++) {
    const v = mn + (mx - mn) * k / rows, y = Y(v); d.setFillColor(gridC); d.fillRect(new Rect(L, y - 0.3, R - L, 0.6));
    if (labels) {
      text(hist ? money(v) : "$" + v.toFixed(5), L - 4, y - 10, 7.5, new Color("#aaaaaa"), "r");
      if (TONUSD) text(hist ? money(v / TONUSD).slice(1) + " Gram" : (v / TONUSD).toFixed(5) + " Gram", L - 4, y + 0.5, 6.5, new Color("#6e6e6e"), "r");
    }
  }
  const tdf = new DateFormatter(); tdf.dateFormat = PERIOD === "24h" ? "HH:mm" : "dd.MM";
  for (let i = 0; i < n; i += Math.max(1, Math.floor(n / 6))) {
    const x = X(i); d.setFillColor(gridC); d.fillRect(new Rect(x - 0.3, T, 0.6, B - T));
    if (labels && cs[i].t) text(tdf.string(new Date(cs[i].t * 1000)), x, B + 2, 7.5, new Color("#aaaaaa"), "c");
  }
  d.setStrokeColor(new Color("#333333")); d.setLineWidth(0.7); d.strokeRect(new Rect(L, T, R - L, B - T));
  const tag = (y, v) => { const s = "$" + v.toFixed(5), tw = s.length * 4.6 + 6; d.setFillColor(col); d.fillRect(new Rect(R - tw, y - 5.5, tw, 11)); text(s, R - tw / 2, y - 5, 7.5, Color.white(), "c", true); };
  const slot = (R - L) / (n + 1), bw = Math.max(1.5, slot * 0.65);
  if (hist) {
    cs.forEach((c, i) => { const top = Math.min(Y(c.v || 0), B - 1.2); d.setFillColor(c.c >= c.o ? CG : CR); d.fillRect(new Rect(X(i) - bw / 2, top, bw, B - top)); });
    return d.getImage();
  }
  if (line) {
    const pts = cs.map((c, i) => new Point(X(i), Y(c.c)));
    // monotone cubic (Fritsch-Carlson) -> bezier control points
    const dl = [], m = new Array(n).fill(0);
    for (let i = 0; i < n - 1; i++) dl.push((pts[i + 1].y - pts[i].y) / (pts[i + 1].x - pts[i].x));
    if (n > 1) { m[0] = dl[0]; m[n - 1] = dl[n - 2]; }
    for (let i = 1; i < n - 1; i++) m[i] = dl[i - 1] * dl[i] <= 0 ? 0 : (dl[i - 1] + dl[i]) / 2;
    for (let i = 0; i < n - 1; i++) { if (dl[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; } const a = m[i] / dl[i], b = m[i + 1] / dl[i], hh = Math.hypot(a, b); if (hh > 3) { m[i] = 3 * a / hh * dl[i]; m[i + 1] = 3 * b / hh * dl[i]; } }
    const curve = (shift) => { // shift 0 = the line; >0 moves the curve toward the bottom (for gradient bands)
      const P = (x, y) => new Point(x, y + shift * (B - y)); const p = new Path(); p.move(P(pts[0].x, pts[0].y));
      for (let i = 0; i < n - 1; i++) { const hx = pts[i + 1].x - pts[i].x;
        p.addCurve(P(pts[i + 1].x, pts[i + 1].y), P(pts[i].x + hx / 3, pts[i].y + m[i] * hx / 3), P(pts[i + 1].x - hx / 3, pts[i + 1].y - m[i + 1] * hx / 3)); }
      return p; };
    for (const f of [1, 0.75, 0.5, 0.25]) { // stacked translucent bands approximate a vertical gradient (DrawContext has none)
      const band = curve(0); band.addLine(new Point(pts[n - 1].x, pts[n - 1].y + f * (B - pts[n - 1].y)));
      for (let i = n - 1; i >= 0; i--) band.addLine(new Point(pts[i].x, pts[i].y + f * (B - pts[i].y)));
      band.closeSubpath(); d.addPath(band); d.setFillColor(new Color(colHex, 0.07)); d.fillPath();
    }
    d.addPath(curve(0)); d.setStrokeColor(col); d.setLineWidth(1.8); d.strokePath();
    if (labels && n > 1) {
      let hi = 0, lo = 0; pts.forEach((p, i) => { if (p.y < pts[hi].y) hi = i; if (p.y > pts[lo].y) lo = i; });
      [[hi, "H", -8], [lo, "L", 8]].forEach(([i, lab, dy]) => {
        const p = pts[i]; d.setFillColor(Color.white()); d.fillEllipse(new Rect(p.x - 1.8, p.y - 1.8, 3.6, 3.6));
        const s = lab + " $" + cs[i].c.toFixed(5), tw = s.length * 4.2, xc = Math.min(Math.max(p.x, L + tw / 2 + 2), R - tw / 2 - 2);
        text(s, xc, p.y + dy - 5, 7.5, Color.white(), "c");
      });
    }
    const lp = pts[n - 1]; d.setFillColor(new Color(colHex, 0.27)); d.fillEllipse(new Rect(lp.x - 4.5, lp.y - 4.5, 9, 9));
    d.setFillColor(col); d.fillEllipse(new Rect(lp.x - 2.5, lp.y - 2.5, 5, 5));
    if (labels) tag(lp.y - 12, cs[n - 1].c);
    return d.getImage();
  }
  const minB = Math.max(1.6, 0.004 * (B - T));
  cs.forEach((c, i) => {
    const x = X(i); d.setFillColor(c.c >= c.o ? CG : CR);
    d.fillRect(new Rect(x - 0.5, Y(c.h), 1, Math.max(1, Y(c.l) - Y(c.h))));
    const y1 = Y(Math.max(c.o, c.c)), bh = Math.max(minB, Y(Math.min(c.o, c.c)) - y1);
    d.fillRect(new Rect(x - bw / 2, y1, bw, bh));
  });
  if (price > 0) {
    const py = Y(price); d.setFillColor(new Color(colHex, 0.55));
    for (let x = L; x < R; x += 4) d.fillRect(new Rect(x, py - 0.35, Math.min(2, R - x), 0.7));
    if (labels) tag(py, price);
  }
  return d.getImage();
}

function txt(st, s, size, color = Color.white(), bold = false) {
  const t = st.addText(s); t.font = bold ? Font.boldSystemFont(size) : Font.systemFont(size); t.textColor = color; t.lineLimit = 1; t.minimumScaleFactor = 0.6; return t;
}

const I18N = {
  en: { tPools: "Pools", tTrades: "Recent trades", buy: "Buy", sell: "Sell", price: "Price", open: "Tap a trade to open it in Tonviewer", pools: n => `${n} pools • TON`, poolsS: n => `${n} pools`, vol: "Volume 24h", liq: "Liquidity", liqS: "Liq.", fdv: "FDV", holders: "Holders", upd: "updated", err: "No data: " },
  ru: { tPools: "Пулы", tTrades: "Последние сделки", buy: "Покупка", sell: "Продажа", price: "Цена", open: "Нажми на сделку, чтобы открыть её в Tonviewer", pools: n => `${n} пулов • TON`, poolsS: n => `${n} пул.`, vol: "Объём 24ч", liq: "Ликвидность", liqS: "Лик.", fdv: "FDV", holders: "Холдеры", upd: "обновлено", err: "Нет данных: " },
  fa: { tPools: "استخرها", tTrades: "معاملات اخیر", buy: "خرید", sell: "فروش", price: "قیمت", open: "برای مشاهده در Tonviewer روی معامله بزنید", pools: n => `${n} استخر • TON`, poolsS: n => `${n} استخر`, vol: "حجم ۲۴س", liq: "نقدینگی", liqS: "نقدینگی", fdv: "ارزش کل", holders: "دارندگان", upd: "به‌روزرسانی", err: "داده‌ای نیست: " },
};
// Widget Parameter: "lang,period,style" e.g. "ru,7d" (price line, default) / "ru,7d,candles" / "en,24h,hist" / "fa,30d"
const QP = (typeof args !== "undefined" && args.queryParameters) || {};
const PARAMS = (((typeof args !== "undefined" && args.widgetParameter) || "") + "").toLowerCase().split(/[,; ]+/).filter(Boolean);
const LANG = (QP.lang || PARAMS.find(p => ["en", "ru", "fa"].includes(p)) || "en");
const PERIOD = (QP.period || PARAMS.find(p => ["24h", "7d", "30d"].includes(p)) || "7d");
const STYLE = (QP.style || PARAMS.find(p => ["line", "candles", "hist"].includes(p)) || "line"); // default: v1.0 price line
const T = I18N[LANG] || I18N.en, RTL = LANG === "fa";
// RTL helper: in Persian, items in a horizontal row are laid out right-to-left
function row(parent, items) { const st = parent.addStack(); st.centerAlignContent(); (RTL ? items.slice().reverse() : items).forEach(f => f(st)); return st; }
const sp = n => st => n == null ? st.addSpacer() : st.addSpacer(n);
function line(w, s, size, color, bold) { const st = w.addStack(); if (RTL) st.addSpacer(); const t = txt(st, s, size, color, bold); if (!RTL) st.addSpacer(); return t; }

async function build(fam) {
  const w = new ListWidget(); w.backgroundColor = BG;
  w.setPadding(12, 12, 12, 12); w.refreshAfterDate = new Date(Date.now() + 15 * 60 * 1000);
  w.url = `scriptable:///run/${encodeURIComponent(Script.name())}?lang=${LANG}&period=${PERIOD}&style=${STYLE}`;
  let d; try { d = await fetchData(); } catch (e) { line(w, "AGAMER", 14, Color.white(), true); line(w, T.err + e, 10, RED); return w; }
  let logo = null; try { logo = Image.fromData(Data.fromBase64String(LOGO_B64)); } catch (e) {}
  const up = d.ch >= 0;
  row(w, [
    st => { if (logo) { const i = st.addImage(logo); i.imageSize = new Size(22, 22); i.cornerRadius = 11; } }, sp(6),
    st => txt(st, "AGAMER", 14, Color.white(), true), sp(),
    st => { if (fam !== "small") txt(st, T.pools(d.pools.length), 10, GREY); },
  ]);
  w.addSpacer(4);
  let trades = []; if (fam !== "small") { try { trades = await fetchTrades(d.tonUsd, false); } catch (e) {} }
  if (fam === "medium") { // price + change + TON on one row to free space for trades
    row(w, [st => txt(st, "$" + d.price.toFixed(5), 18, Color.white(), true), sp(6), st => txt(st, fp(d.ch), 11, up ? GREEN : RED, true), sp(6),
      st => txt(st, d.priceTon.toFixed(5) + " Gram", 10, GREY), sp()]);
  } else {
    line(w, "$" + d.price.toFixed(5), fam === "large" ? 22 : 18, Color.white(), true);
    row(w, [st => txt(st, fp(d.ch), 12, up ? GREEN : RED, true), sp(6), st => { if (d.priceTon) txt(st, d.priceTon.toFixed(5) + " Gram", 11, GREY); }, sp()]);
  }
  w.addSpacer(4);
  const cw = fam === "small" ? 130 : 300, chh = fam === "large" ? 120 : fam === "medium" ? 22 : 30; // v2.4: large chart 56 -> 120pt
  const n = fam === "small" ? Math.min(18, d.candles.length) : fam === "medium" ? 30 : 42;
  const ci = w.addImage(chart(d.candles.slice(-n), cw, chh, d.ch >= 0, d.price)); ci.imageSize = new Size(cw, chh);
  w.addSpacer(4);
  if (fam === "small") line(w, T.liqS + " " + fg(d.liq) + " • " + T.poolsS(d.pools.length), 9, GREY);
  else {
    const col = (l, v) => st => { const c = st.addStack(); c.layoutVertically(); line(c, l, 9, GREY); line(c, v, 11, Color.white(), true); };
    const cols = [col(T.vol, fg(d.vol)), sp(), col(T.liq, fg(d.liq)), sp(), col(T.fdv, fg(d.fdv))];
    if (d.holders) cols.push(sp(), col(T.holders, String(d.holders)));
    row(w, cols);
  }
  const tdf = new DateFormatter(); tdf.dateFormat = "dd.MM HH:mm";
  const trow = t => { const buy = t.kind === "buy";
    row(w, [st => txt(st, (buy ? "▲ " + T.buy : "▼ " + T.sell), 9, buy ? GREEN : RED, true), sp(4), st => txt(st, t.agamer.toFixed(1) + " AGAMER", 9, Color.white()), sp(),
      st => txt(st, "$" + t.usd.toFixed(2) + gram(t.usd), 9, Color.white(), true), sp(4), st => txt(st, tdf.string(new Date(t.time)) + " · " + t.dex, 8, GREY)]); };
  if (fam === "medium") { w.addSpacer(3); trades.slice(0, 2).forEach(trow); }
  if (fam === "large") {
    w.addSpacer(4); line(w, T.tTrades, 9, GREY, true); trades.slice(0, 4).forEach(trow); // v2.4: 5 -> 4 rows to make room for the taller chart
    w.addSpacer(4); line(w, T.tPools, 9, GREY, true);
    d.pools.slice(0, 3).forEach(p => row(w, [st => txt(st, p.dex + " · " + p.pair, 9, GREY), sp(), st => txt(st, "$" + p.usd.toFixed(5) + "  " + fg(p.liq), 9, Color.white())]));
  }
  w.addSpacer();
  if (fam !== "large") return w;
  const df = new DateFormatter(); df.dateFormat = "HH:mm"; line(w, T.upd + " " + df.string(new Date()) + (STALE ? " • cache" : ""), 8, GREY);
  return w;
}

async function showTable() {
  const d = await fetchData(); const trades = await fetchTrades(d.tonUsd);
  const tb = new UITable(); tb.showSeparators = true;
  const BK = new Color("#000000"), HD = new Color("#111318");
  const al = (c) => { if (RTL) c.rightAligned(); return c; };
  const add = (cells, h, bg, onSel) => { const r = new UITableRow(); r.backgroundColor = bg || BK; r.height = h || 44;
    (RTL ? cells.slice().reverse() : cells).forEach(c => r.addCell(c)); if (onSel) { r.onSelect = onSel; r.dismissOnSelect = false; } tb.addRow(r); };
  const tc = (t, sub, color, w, bold) => { const c = UITableCell.text(t, sub || ""); c.titleColor = color || Color.white(); c.subtitleColor = GREY;
    c.titleFont = bold ? Font.boldSystemFont(15) : Font.systemFont(14); c.subtitleFont = Font.systemFont(11); if (w) c.widthWeight = w; return al(c); };
  add([tc("AGAMER  $" + d.price.toFixed(5), d.priceTon.toFixed(5) + " Gram • " + fp(d.ch), d.ch >= 0 ? GREEN : RED, 1, true)], 60);
  add([tc(T.vol, fg(d.vol), null, 1), tc(T.liq, fg(d.liq), null, 1), tc(T.fdv, fg(d.fdv), null, 1), tc(T.holders, String(d.holders), null, 1)], 50);
  add([tc(T.tPools + " (" + d.pools.length + ")", "", GREY, 1, true)], 36, HD);
  d.pools.forEach(p => add([tc(p.dex, p.pair, null, 4), tc("$" + p.usd.toFixed(5) + gram(p.usd), T.price, null, 3), tc(fg(p.liq), T.liq, null, 3), tc(fg(p.vol), T.vol, null, 3)], 50, BK,
    () => Safari.open("https://tonviewer.com/" + p.addr)));
  add([tc(T.tTrades + " (" + trades.length + ")", T.open, GREY, 1, true)], 44, HD);
  const df = new DateFormatter(); df.dateFormat = "dd.MM HH:mm";
  trades.forEach(t => {
    const buy = t.kind === "buy";
    add([tc(buy ? T.buy : T.sell, df.string(new Date(t.time)), buy ? GREEN : RED, 3, true),
         tc(t.agamer.toFixed(2) + " AGAMER", t.quote.toFixed(t.qsym === "TON" ? 3 : 2) + " " + (t.qsym === "TON" ? "Gram" : t.qsym), null, 5),
         tc("$" + t.usd.toFixed(2) + gram(t.usd), t.dex + " " + t.pair, null, 5)], 52, BK, () => Safari.open("https://tonviewer.com/transaction/" + t.hash));
  });
  await tb.present(false);
}

if (!config.runsInWidget) { await showTable(); Script.complete(); }
else {
const fam = config.widgetFamily || "medium";
const widget = await build(fam);
if (config.runsInWidget) Script.setWidget(widget);
Script.complete();
}
