


const login = (req,res)=>{
    const form = req.body
    res.send(form.name,form.email)
}


module.exports = {login}