import Paymentsmodel from "../models/Paymentsmodel.js";

// Insert new route request into the database
export function createPayments(req, res) {
    const { Card_Number, Amount , Expiration_Month, Expiration_Year,CVN } = req.body;
    const newPaymentsmodel = new Paymentsmodel({
        Card_Number,
        Amount,
        Expiration_Month,
        Expiration_Year,
        CVN,
    });
    newPaymentsmodel
    .save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

// Update existing route request by ID
export function updatePayments(req, res) {
    const { id, Card_Number, Amount,Expiration_Month, Expiration_Year,CVN } = req.body;
    Paymentsmodel
        .updateOne(
            { _id: req.params.id },
            {
                $set: {
                    Card_Number, 
                    Amount,
                    Expiration_Month, 
                    Expiration_Year,
                    CVN
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

// export function updatePayments(req, res) {
//     const id = req.params.id;
//     const { Card_Number, Amount, Expiration_Month, Expiration_Year, CVN } = req.body;

//     Paymentsmodel.updateOne(
//         { _id: id },
//         {
//             $set: {
//                 Card_Number,
//                 Amount,
//                 Expiration_Month,
//                 Expiration_Year,
//                 CVN
//             },
//         }
//     )
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         res.status(500).json({ message: "Error updating payment" });
//     });
// }


// Delete existing route request by ID
export function deletePayments(req, res) {
    Paymentsmodel
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Route request" });
        });
}

// Get all route requests
export function getAllPayments(req, res) {
    Paymentsmodel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route requests" });
        });
}

// Get route request by ID
export function getPaymentsById(req, res) {
    Paymentsmodel
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
        });
}

