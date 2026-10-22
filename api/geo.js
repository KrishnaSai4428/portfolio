module.exports = function handler(req, res) {
  var d = function (v) { try { return decodeURIComponent(v || ''); } catch (e) { return v || ''; } };
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    country: d(req.headers['x-vercel-ip-country']),
    region: d(req.headers['x-vercel-ip-country-region']),
    city: d(req.headers['x-vercel-ip-city'])
  });
};
