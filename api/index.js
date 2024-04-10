import express from 'express';

const app = express();

const PORT = 5004; // Change the port number to 5000 or any other available port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!!`);
});
