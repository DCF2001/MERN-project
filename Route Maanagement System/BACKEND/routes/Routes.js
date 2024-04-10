const router =require("express").Router();
let Route =require("../model/Route")

http://localhost:3000/Route/add


router.route("/add").post((req,res)=>{

    const number =req.body.number;
    const startLocation=req.body.startLocation;
    const endLocation=req.body.endLocation;
    const date=Date(req.body.Date);

    const newRoute = new Route({

        number,
        startLocation,
        endLocation,
        date,

    })

    newRoute.save().then(()=>{
        res.json("Route Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//http://localhost:3000/Route

router.route("/").get(async (req,res)=>{
    try{
        const route = await Route.find();
        const count = await Route.countDocuments();
    
        res.status(200).json({
            data : route,
            count : count
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

//http//localhost:3000/Route/update/87t6869g

router.route("/update/:id").patch(async (req,res)=>{
    let TransportId =req.params.id;
    const {number, startLocation, endLocation, date } =req.body;
    const updateRoute ={
        number,
        startLocation,
        endLocation,
        date
    }

    const update =await Route.findByIdAndUpdate(TransportId, updateRoute).then(()=>{
        res.status(200).send({status: "Route updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status :"Error with updating data"});
    })
})

//http//Localhost:3000/Route/delete/4t3ggfvfvdfd

router.route("/delete/:id").delete(async (req,res)=>{
    let TransportId = req.params.id;

    await Route.findByIdAndDelete(TransportId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user",error:err.message});

    })
})

router.route("/get/:id").get(async (req,res)=>{
    let userId =req.params.id;
    await Student.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", user:user})

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.me});
})
})

module.exports = router;

