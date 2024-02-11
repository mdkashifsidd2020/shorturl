const URL = require("../models/schema");
const shortid = require("shortid");
//controllers


const allusers = async(req,res)=>{
    try{
        const allurls= await URL.find({})
    res.render("home",{
        allurl:allurls
    })
    }catch(error){
        console.log("all urls",error)
    }
}

const GeneratenewshortURL = async(req,res)=>{
    const body = req.body;
    try{
        const ShortId = shortid();
    await URL.create({
        ShortID:ShortId,
        RedirectURL:body.url,
        VisitedHistory:[],
    })
    res.redirect("/")
    }
    
    catch (error) {
        console.error("Error while generation:", error);
        res.status(500).send("Internal Server Error");
    }
}

const redirecttoOriginalPage =async(req,res)=>{
    const ShortID=req.params.shortid;
    // console.log(shortId)
    try{
        const entry = await URL.findOneAndUpdate({ShortID},{
            $push:{
                VisitedHistory:{
                    timestamp:Date.now()
                }
            }
        })
        
        if (!entry) {
            return res.status(404).send("Short URL not found");
        }
        const address = entry.RedirectURL;
        res.redirect(address)
    }

    catch (error) {
        console.error("Error while redirection:", error);
        res.status(500).send("Internal Server Error");
    }
}

const Analytics=async(req,res)=>{
    try{
        const ShortID=req.params.shortid;
    const result = await URL.findOne({ShortID})
    res.json({
        Totalclick:result.VisitedHistory.length,
        analytics:result.VisitedHistory
    })
    }catch(error){
        console.error("Error while analytics:", error);
        res.status(500).send("Internal Server Error");
    }
}

const all = async(req,res)=>{
    const allurls1= await URL.find({})
    res.render("analy",{
        all1:allurls1
    })
}




const api=async(req,res)=>{
    const all=await URL.find({})
    res.json(all)
}

//exporting

module.exports ={
    GeneratenewshortURL,redirecttoOriginalPage,Analytics,allusers,api,all,
}