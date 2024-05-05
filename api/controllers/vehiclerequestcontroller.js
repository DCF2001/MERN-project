import vehiclerequestmodel from "../models/vehiclerequestmodel.js";

//insert new packageAddon into database if user have  package in privileges
export function createvehicelrequest(req, res) {

    const { First_Name, Last_Name, Type_of_Requested_Service, Frequency_of_Service,Preferred_Collection_days, Type_and_Amount_of_Waste, Special_Instructions_or_Requests, Property_type } = req.body;
    const newvehiclerequestmodel = new vehiclerequestmodel({
        
        First_Name : First_Name ,
        Last_Name : Last_Name,
        Type_of_Requested_Service : Type_of_Requested_Service ,
        Frequency_of_Service : Frequency_of_Service,
        Preferred_Collection_days : Preferred_Collection_days,  
        Type_and_Amount_of_Waste : Type_and_Amount_of_Waste,
        Special_Instructions_or_Requests : Special_Instructions_or_Requests ,
        Property_type  : Property_type ,
        
    });
    newvehiclerequestmodel
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error("Error creating Vehicle request:", err); // Log the actual error for debugging
            res.status(500).json({ error: err.message });
        });
}

//update existing packageAddon if user have  package in privileges by id
export function updatevehicelrequest(req, res) {
    let id = req.params.id;

    const {First_Name, Last_Name, Type_of_Requested_Service, Frequency_of_Service,Preferred_Collection_days, Type_and_Amount_of_Waste, Special_Instructions_or_Requests, Property_type } = req.body;
    //update packageAddon by id
    vehiclerequestmodel
        .updateOne(
            { _id: id },
            {
                $set: {
                    
                    First_Name : First_Name ,
                    Last_Name : Last_Name,
                    Type_of_Requested_Service : Type_of_Requested_Service ,
                    Frequency_of_Service : Frequency_of_Service,
                    Preferred_Collection_days : Preferred_Collection_days,  
                    Type_and_Amount_of_Waste : Type_and_Amount_of_Waste,
                    Special_Instructions_or_Requests : Special_Instructions_or_Requests ,
                    Property_type : Property_type, 
        
                    
                },
            }
        )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating Vehicle request" });
        });
}

//delete existing packageAddon if user have  package in privileges by id
export function deletevehicelrequest(req, res) {
    //delete packageAddon by id
    vehiclerequestmodel
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Vehicle request" });
        });
}

//get all packageAddons if user have  package in privileges
export function getAllvehicelrequests(req, res) {

    //get all packageAddons
    vehiclerequestmodel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Vehicle request" });
        });
}

//get packageAddon by id if user have  package in privileges
export function getvehicelrequestById(req, res) {

    //get packageAddon by id
    vehiclerequestmodel
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Vehicle request" });
        });
}

// //get packageAddon by packageId
// export function getPackageAddonByPackageId(req, res) {
//     //get packageAddon by packageId
//     PackageAddon
//     .find({ packageId: req.params.id })
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         res.status(500).json({ message: "Error getting packageAddon" });
//     });
// }
