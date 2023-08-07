


const login = (req,res)=>{
    const {name,email} = req.body
    console.log(`welcome mr.${name}`)
    res.redirect('/')
}

const getlogin = (req,res)=>{
    res.send(`
        <form method="POST">
            <input name="name" />
            <input name="email" />
            <button type="submit" value="submit" >Submit</button>
        </form>`
    )
}


module.exports = {login, getlogin}