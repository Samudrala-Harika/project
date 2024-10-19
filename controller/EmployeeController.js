const Employee=require('../model/employee')

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone}=req.body
        const employee=new Employee({
            name,
            email,
            phone
        })
        await employee.save();
        res.status(201).json({message:"Employee data saved successfully"})

        await employee.deleteOne();
        res.status(201).json({message:"Employee data deleted successfully"})

        await employee.updateOne();
        res.status(201).json({message:"Employee data updated successfully"})

        await employee.find();
        res.status(201).json({message:"Employee data read successfully"})
    }
    catch(Error){
        console.log(Error);
    }
}
module.exports={createEmployee};