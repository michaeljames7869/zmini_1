sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
		"zmini_1/model/formatter",
			"sap/ui/model/Filter"
], function(Controller, JSONModel, formatter, Filter) {
	"use strict";

	return Controller.extend("zmini_1.controller.minione", {
		
		// _data : {
		// 	"date" : new Date(),
		// 		"time" : new Date()
		// },

		// onInit : function (evt) {
		// 	var oModel = new JSONModel(this._data);
		// 	this.getView().setModel(oModel);
		// },
		
			formatter : formatter,
		onInit : function(){
			debugger
			
			var oModel = new sap.ui.model.json.JSONModel();
		
		// loading the data to the model
		
		oModel.loadData("model/Products.json");
		console.log(oModel);
			
			
		//	 set the model as a global
		
		this.getView().setModel(oModel, "products");
	

			
		},
		
			onItemSelected : function(event, source ){
			
			var oSource = event.getSource();
			var onItemSelected = oSource.getBindingContext("products");
			var oSpath = onItemSelected.getPath();
			var oFormId = this.getView().byId("myproductss");
				var oFormId1 = this.getView().byId("myproducts");
			oFormId.bindElement({
				path: oSpath, model: "products"
			});
			oFormId1.bindElement({
				path: oSpath, model: "products"
			});
			},
			
				onSearch: function(event) {

			// build filter array
			var aFilter = [];
			var sQuery = event.getSource().getValue();
			
			if(sQuery && sQuery.length > 0) {
				var filter = new Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilter.push(filter);	
					// update list binding
			var list = this.byId("id_pro");
			var binding = list.getBinding("items");
			binding.filter(aFilter, "Application");
				
				
			}
				}

	});
});