import Reportgeneratemodel from "../models/Reportgeneratemodel.js";

// Insert new route request into the database
export function createReportgenerate(req, res) {
    const { Date, Income_Amount , Amount_of_Expenditure, Special_Note } = req.body;
    const newReportgeneratemodel = new Reportgeneratemodel({
        Date,
        Income_Amount, 
        Amount_of_Expenditure,
        Special_Note,
    });
    newReportgeneratemodel
        .save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating Route request" });
        });
} 

// Update existing route request by ID
export function updateReportgenerate(req, res) {
    const { Date, Income_Amount,Amount_of_Expenditure, Special_Note } = req.body;
   Reportgeneratemodel
        .updateOne(
            { _id: req.params.id },
            {
                $set: {
                    Date,
                    Income_Amount,
                    Amount_of_Expenditure,
                    Special_Note,
                },
            }
        )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating Route request" });
        });
}

// Delete existing route request by ID
export function deleteReportgenerate(req, res) {
    Reportgeneratemodel
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Route request" });
        });
}

// Get all route requests
export function getAllReportgenerate(req, res) {
    Reportgeneratemodel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route requests" });
        });
}

// Get route request by ID
export function getReportgenerateById(req, res) {
    Reportgeneratemodel
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
        });
}