import StaffSalary from "../models/staffsalary.js";

// Insert new staff salary into database
export function createstaffsalary(req, res) {
    const { syear, smonth, sweek, samount, sstatus } = req.body;
    const newStaffSalary = new StaffSalary({
        syear: syear,
        smonth: smonth,
        sweek: sweek,
        samount: samount,
        sstatus: sstatus
        
    });
    newStaffSalary.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating staff salary" });
        });
}

// Update existing staff salary by id
export function updatestaffsalary(req, res) {
    const { syear, smonth, sweek, samount, sstatus } = req.body;
    const id = req.params.id; // Assuming you get the id from the request parameters
    StaffSalary.updateOne(
        { _id: id },
        {
            $set: {
                syear: syear,
                smonth: smonth,
                sweek: sweek,
                samount: samount,
                sstatus: sstatus
            },
        }
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating staff salary" });
        });
}

// Delete existing staff salary by id
export function deletestaffsalary(req, res) {
    const id = req.params.id; // Assuming you get the id from the request parameters
    StaffSalary.deleteOne({ _id: id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting staff salary" });
        });
}

// Get all staff salaries
export function getAllstaffsalary(req, res) {
    StaffSalary.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting staff salaries" });
        });
}

// Get staff salary by id
export function getstaffsalarytById(req, res) {
    const id = req.params.id; // Assuming you get the id from the request parameters
    StaffSalary.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error getting staff salary" });
        });
}
