const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../front-end'))); // Serve static files from front-end directory

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Read existing data from db.json
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }

        const jsonData = JSON.parse(data);
        jsonData.push(formData); // Add new form data

        // Write updated data back to db.json
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to data file');
            }
            res.status(200).send('Form submitted successfully');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
