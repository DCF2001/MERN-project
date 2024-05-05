import routerequestsmodel from "../models/routerequestsmodel.js";

// Insert new route request into the database
export function createRouterequest(req, res) {
    const { Location_Details, Type_and_Amount_of_Waste, Preffered_Collection_Time, Special_instructions, Contact_information } = req.body;
    const newroute = new routerequestsmodel({
        Location_Details,
        Type_and_Amount_of_Waste,
        Preffered_Collection_Time,
        Special_instructions,
        Contact_information,
    });
    newroute
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating Route request" });
        });
}

// Update existing route request by ID
export function updateRouterequest(req, res) {
    const { id, Location_Details, Type_and_Amount_of_Waste, Preffered_Collection_Time, Special_instructions, Contact_information } = req.body;
    routerequestsmodel
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
export function deleteRouterequest(req, res) {
    routerequestsmodel
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Route request" });
        });
}

// Get all route requests
export function getAllRouterequests(req, res) {
    routerequestsmodel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route requests" });
        });
}

// Get route request by ID
export function getRouterequestById(req, res) {
    routerequestsmodel
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
        });
}
