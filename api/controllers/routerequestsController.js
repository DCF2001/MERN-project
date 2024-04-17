import routerequestsmodel from "../models/routerequestsmodel.js";

//insert new packageAddon into database if user have  package in privileges
export function createRouterequest(req, res) {

    const { Location_Details ,Type_and_Amount_of_Waste,Preffered_Collection_Time,Special_instructions,Contact_information} = req.body;
    const newroute = new routerequestsmodel({
        
       Location_Details: Location_Details , 
        Type_and_Amount_of_Waste: Type_and_Amount_of_Waste, 
       Preffered_Collection_Time: Preffered_Collection_Time,
        Special_instructions: Special_instructions,
        Contact_information: Contact_information,
        
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

//update existing packageAddon if user have  package in privileges by id
export function updateRouterequest(req, res) {

    const { id, Location_Details ,Type_and_Amount_of_Waste,Preffered_Collection_Time,Special_instructions,Contact_information } = req.body;
    //update packageAddon by id
    route
        .updateOne(
            { _id: id },
            {
                $set: {
                    
                    Location_Details: Location_Details , 
                    Type_and_Amount_of_Waste: Type_and_Amount_of_Waste, 
                    Preffered_Collection_Time: Preffered_Collection_Time,
                    Special_instructions: Special_instructions,
                    Contact_information: Contact_information,
        
                    
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

//delete existing packageAddon if user have  package in privileges by id
export function deleteRouterequest(req, res) {
    //delete packageAddon by id
    route
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting Route request" });
        });
}

//get all packageAddons if user have  package in privileges
export function getAllRouterequests(req, res) {

    //get all packageAddons
    route
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
        });
}

//get packageAddon by id if user have  package in privileges
export function getRouterequestById(req, res) {

    //get packageAddon by id
    route
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting Route request" });
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
