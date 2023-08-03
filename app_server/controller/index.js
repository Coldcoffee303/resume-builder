

const indexPage = (req,res)=>{
    res.render('index', { title: 'Resume-builder' })
}

const aboutPage = (req,res)=>{
    res.send('<h2>this site is created by sharath</h2>')
}


module.exports = {indexPage, aboutPage}
