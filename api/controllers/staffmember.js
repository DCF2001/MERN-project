import staffmember from "../models/staffmember.js";
import { errorHandler } from '../utils/error.js';


//insert new packageAddon into database if user have  package in privileges
export function createstaffmember(req, res) {

    const {mname,memail,mphone,mdate,maddress,mage,mgender,mrole,mnic,mwdays,msalary} = req.body;
    const newstaffmember = new staffmember({
        
     mname:mname,
     memail:memail,
     mphone:mphone,
     mdate:mdate,
     maddress:maddress,
     mage:mage,
     mgender:mgender,
     mrole:mrole,
     mnic:mnic,
     mwdays:mwdays,
     msalary:msalary,
        
    });
    newstaffmember
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // Send the actual error message instead of the customized one
            res.status(500).json({ message: err.message });
        });
}

//update existing packageAddon if user have  package in privileges by id
export function updatestaffmember(req, res) {

    const { id, mname, memail, mphone, mdate, maddress, mage, mgender, mrole, mnic, mwdays, msalary } = req.body;
    // Update user by id
    staffmember.updateOne(
        { _id: id },
        {
            $set: {
                mname:mname,
                memail:memail,
                mphone:mphone,
                mdate:mdate,
                maddress:maddress,
                mage:mage,
                mgender:mgender,
                mrole:mrole,
                mnic:mnic,
                mwdays:mwdays,
                msalary:msalary,
            },
        }
    )
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(500).json({ message: "Error updating user" });
    });

}


export async function deletestaffmember(req, res) {
    const staffMemberId = req.params.id;
   
    try {
      const deletedStaffMember = await staffmember.findByIdAndDelete(staffMemberId);
  
      if (!deletedStaffMember) {
        return res.status(404).json({ message: 'Staff member not found' });
      }
  
      res.status(200).json({ message: 'Staff member deleted successfully!' });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error deleting staff member' });
    }
  }
  





//get all packageAddons if user have  package in privileges
export function getAllstaffmember(req, res) {

    //get all packageAddons
    staffmember
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting staff member" });
        });
}

//get packageAddon by id if user have  package in privileges
export function getstaffmemberById(req, res) {

    //get packageAddon by id
    staffmember
        .findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting staff member" });
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
