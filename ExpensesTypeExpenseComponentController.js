({

    createExpense : function(component, event, helper) {
        var newExpense = component.get("v.expenseToAdd");
        var rType = component.get("v.recordType");
        helper.createExpense(component, newExpense, rType);
	},
	viewRecord : function (component, event, helper) {
        var expense = component.get("v.expenseToAdd");

        if(expense.Id)
        {
            var expenseId = expense.Id;
			var device = $A.get("$Browser.formFactor");
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": expenseId,
                "slideDevName": "detail"
            });
            expense = {};
            component.set("v.expenseToAdd", expense);
            navEvt.fire();
        }
	},

    /**
    * @author juan.mora
    * @date 11/23/2015
    * @description Return to the Expense Type Selection
    */
    cancel : function(component, event, helper) {
        var evenRTN = component.getEvent("expenseRecordTypeName");
		evenRTN.setParams({
            recordTypeName: ""
       }).fire();
        
	},
    
    /**
    * @author juan.mora
    * @date 11/23/2015
    * @description Initialize placeholerd and default values
    */
	refresh : function(component, event, helper) {
    var action = cmp.get('c.ViewRecord');
    action.setCallback(cmp,
        function(response) {
            var state = response.getState();
            if (state === 'SUCCESS'){
                $A.get('e.force:refreshView').fire();
            } else {
                $A.get('e.force:refreshView').fire();
            }
        }
    );
    $A.enqueueAction(action);
}
    
})
