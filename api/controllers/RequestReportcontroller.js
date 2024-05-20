import RequestReportmodel from "../models/RequestReportmodel.js";

// Insert new route request into the database
export function createRequestReport(req, res) {
    const { Date, Decision , Amount, Note} = req.body;
    const newRequestReportmodel = new RequestReportmodel({
        Date,
        Decision , 
        Amount,
        Note,
    });
    newRequestReportmodel
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating Route request" });
        });
}

// Update existing route request by ID
export function updateRequestReport(req, res) {
    const { id, Date, Decision,Amount, Note } = req.body;
    RequestReportmodel
        .updateOne(
            { _id: id },
            {
                $set: {
                    Date,
                    Decision,
                    Amount,
                    Note,
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
export function deleteRequestReport(req, res) {
    RequestReportmodel
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Route request" });
        });
}

// Get all route requests
export function getAllRequestReport(req, res) {
    RequestReportmodel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route requests" });
        });
}

// Get route request by ID
export function getRequestReportById(req, res) {
    RequestReportmodel
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
        });
}
