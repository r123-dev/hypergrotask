const express=require("express");
const router=express.Router();

const {top10,byname,pricehistory,addstock,favstock,deletestock}=require("../controller/controller");

router.route("/top10").get(top10);
router.route('/byname/:name').get(byname);
router.route('/pricehistory/:stockId').get(pricehistory);
router.route('/addstock').post(addstock)
router.route('/favstock').get(favstock)
router.route('/deletestock/:stockId').delete(deletestock);


module.exports=router;