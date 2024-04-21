import usermodel from "../models/staffrequestmodel.js";

//insert new packageAddon into database if user have  package in privileges
export function createstaffreqests(req, res) {

    const {staffsize, workarea, reqdate, cnumber, reqstatus} = req.body;
    const newstaffreqests = new staffrequestmodel({
        
        staffsize: staffsize,
        workarea : workarea,
        reqdate : reqdate,
        cnumber : cnumber,
        reqstatus : reqstatus
        
    });
    newstaffreqests
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating staff member" });
        });
}

//update existing packageAddon if user have  package in privileges by id
export function updatestaffreqests(req, res) {

    const { staffsize, workarea, reqdate, cnumber, reqstatus } = req.body;
    // Update user by id
    staffreqests.updateOne(
        { _id: id },
        {
            $set: {
               staffsize,
               workarea,
               reqdate,
               cnumber,
               reqstatus

            },
        }
    )
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(500).json({ message: "Error updating request" });
    });

}

//delete existing packageAddon if user have  package in privileges by id
export function deletestaffreqests(req, res) {
    //delete packageAddon by id
    staffreqests
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting request" });
        });
}

//get all packageAddons if user have  package in privileges
export function getAllstaffreqests(req, res) {

    //get all packageAddons
    staffreqests
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting staff member" });
        });
}

//get packageAddon by id if user have  package in privileges
export function getstaffreqestsById(req, res) {

    //get packageAddon by id
    staffreqests
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting request" });
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
