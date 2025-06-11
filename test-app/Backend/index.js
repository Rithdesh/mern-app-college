// write the code for a simple express server that serves a static file from the public directory
const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files from the 'public' directory   

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});