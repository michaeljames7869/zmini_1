sap.ui.define([], function() {
	"use strict";

	return {
		
		status : function(oStatus){
			
			
			if(oStatus === "Product Delivered"){
				
				return "Success";
			}else if (oStatus === "Product Shipped"){
				
				return "Error";
			}else if(oStatus === "Place order"){
				
				return "Warning";
			}
			
		return oStatus; 
			
			
		}
		
		
		
		
		
		
	};
});