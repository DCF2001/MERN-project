import Reportgeneratemodel from "../models/Reportgeneratemodel.js";

// Insert new route request into the database
export function createReportgenerate(req, res) {
    const { Location_Details, Type_and_Amount_of_Waste, Preffered_Collection_Time, Special_instructions, Contact_information } = req.body;
    const newReportgeneratemodel = new Reportgeneratemodel({
        Location_Details,
        Type_and_Amount_of_Waste,
        Preffered_Collection_Time,
        Special_instructions,
        Contact_information,
    });
    newReportgeneratemodel
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating Route request" });
        });
}

// Update existing route request by ID
export function updateReportgenerate(req, res) {
    const { id, Location_Details, Type_and_Amount_of_Waste, Preffered_Collection_Time, Special_instructions, Contact_information } = req.body;
   Reportgeneratemodel
        .updateOne(
            { _id: id },
            {
                $set: {
                    Location_Details,
                    Type_and_Amount_of_Waste,
                    Preffered_Collection_Time,
                    Special_instructions,
                    Contact_information,
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
