exports.handler = async () => {
  const offsets = [0, 30, 60, 90, 120];
  try {
    const pages = await Promise.all(offsets.map(async offset => {
      const res = await fetch(`https://frontend-api-v3.pump.fun/coins?offset=${offset}&limit=30&sort=created_timestamp&order=DESC&includeNsfw=false`, {
        headers: { "User-Agent": "Mozilla/5.0" }
      });
      if (!res.ok) throw new Error("pump " + res.status);
      return res.json();
    }));
    const coins = pages.flat();
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
      body: JSON.stringify(coins)
    };
  } catch (err) {
    return { statusCode: 502, body: String(err.message || err) };
  }
};
