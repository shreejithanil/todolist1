    const express=require("express");
    const body=require("body-parser");
    const date=require(__dirname+"/date.js")

    const ejs=require("ejs"); 
    const c=express();
    var firstlists=["get up at morning 8","exercise until 9 am","get a coffee"];
    var workitems=[];
    c.use(body.urlencoded({extended:true}));
    c.use(express.static("public"));
    c.set('view engine','ejs');
    c.get("/",function(req,res){
    
    
    	
    	var day =date.getdate ();
    	res.render("lists",{kindofday:day,firstlist:firstlists});
    	

    })
    c.get("/work", function(req,res){
        res.render("lists",{kindofday:"worklist",firstlist:workitems});
    })
    c.post("/",function(req,res){
        console.log(req.body)

        var firstlist1=req.body.first;
        if(req.body.list=="worklist"){
            workitems.push(firstlist1);
            res.redirect("/work");


        }else{
            firstlists.push(firstlist1);
            res.redirect("/");

        }

      
    	
    })
    c.get("/about",function(req,res){
        res.render("about")
    })
    c.post("/work",function(req,res){
        let work1=req.body.first;
        workitems.push(work1);
        res.redirect("/work");

    })
    const port =process.env.PORT;
    c.listen(port|| 8888,function(){
    	console.log("server started in port  " +port);

    }) 


