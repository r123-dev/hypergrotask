const {Schema,model}=require('mongoose');

const contactSchema=new Schema({

    stockId:{type:String,required:true},
    name:{type:String,required:true},
    open:{type:String,required:true},
    high:{type:String,required:true},
    low:{type:String,required:true},
    close:{type:String,required:true},
    isFavorite:{type:Boolean,required:true},
});


const Contact =new model('Contact',contactSchema);
module.exports=Contact;
