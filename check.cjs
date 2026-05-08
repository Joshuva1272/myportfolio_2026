const https = require('https');

https.get('https://joshuva1272.github.io/myportfolio_2026/', (res) => {
  console.log('HTML Status:', res.statusCode);
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const jsMatch = data.match(/src="([^"]+\.js)"/);
    if (jsMatch) {
      const jsUrl = jsMatch[1].startsWith('http') ? jsMatch[1] : 'https://joshuva1272.github.io' + jsMatch[1];
      https.get(jsUrl, (jsRes) => console.log('JS Status:', jsRes.statusCode));
    }
    const cssMatch = data.match(/href="([^"]+\.css)"/);
    if (cssMatch) {
      const cssUrl = cssMatch[1].startsWith('http') ? cssMatch[1] : 'https://joshuva1272.github.io' + cssMatch[1];
      https.get(cssUrl, (cssRes) => console.log('CSS Status:', cssRes.statusCode));
    }
  });
});
