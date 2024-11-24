const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.get("/",(req,res)=>{
    res.json({"message":"Home Page Done"})
})

// Handle 404 for any other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
