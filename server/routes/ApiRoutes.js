app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!', timestamp: new Date() });
});
