import createtaskmodel from "../models/createtaskmodel.js";

//insert new packageAddon into database if user have  package in privileges
export function createTask(req, res) {

    const { Name, Property_Type, Service, Other_Services} = req.body;
    const newtask = new createtaskmodel({
        
        Name: Name,
	    Property_Type: Property_Type,
	    Service:  Service,
	    Other_Services: Other_Services,
        
    });
    newtask
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating CreateTask" });
        });
}

//update existing packageAddon if user have  package in privileges by id
export function updateTask(req, res) {

    const { id, Name, Property_Type, Service, Other_Services } = req.body;
    //update packageAddon by id
    task
        .updateOne(
            { _id: id },
            {
                $set: {
                    
                    Name: Name,
	                Property_Type: Property_Type,
	                Service:  Service,
	                Other_Services: Other_Services,
        
                    
                },
            }
        )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating packageAddon" });
        });
}

//delete existing packageAddon if user have  package in privileges by id
export function deleteTask(req, res) {
    //delete packageAddon by id
    task
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting packageAddon" });
        });
}

//get all packageAddons if user have  package in privileges
export function getAllTask(req, res) {

    //get all packageAddons
    task
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting packageAddons" });
        });
}

//get packageAddon by id if user have  package in privileges
export function getTaskById(req, res) {

    //get packageAddon by id
    task
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting packageAddon" });
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
