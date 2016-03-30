({

    createExpense: function(component, expense, recordt) {
        //Save the expense and update the view
        this.upsertExpense(component, expense,recordt, function(response) {
            var state = response.getState();
            var expenses = component.get("v.expenseToAdd");
            var errorMessage = " ";

            if (state === "SUCCESS") {
                var responseFromApex = response.getReturnValue();
                if(responseFromApex.indexOf("LERROR") != -1)
                {
                    responseFromApex = responseFromApex.replace("LERROR", "");
                    errorMessage += responseFromApex;
                    alert(errorMessage);
                    console.log(errorMessage);
                }
				else
                {
                    expenses.Id = responseFromApex;
                }
            } else if (state === "ERROR") {
                
                var expenses = component.get("v.expenseToAdd");
                component.set("v.expenseToAdd", expenses);
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        errorMessage += errors[0].message;
                    }
                    else if(errors[0] && errors[0].fieldErrors)
                    {
                        var obj = errors[0].fieldErrors;
                        for (var p in obj) {
                            if( obj.hasOwnProperty(p) ) {
                              	var fieldName = p;
                                fieldName = fieldName.replace("__c", "");
                                fieldName = fieldName.replace("_", " ");
                                errorMessage += fieldName + " " + obj[p][0].message + " (" + expenses[p] + ")" + "\n";
                            } 
                        }                                      
                    }
                } else { 
                    errorMessage = "Error";
                }
                alert(errorMessage);
                console.log(errorMessage);
            }
            component.set("v.expenseToAdd", expenses);
        });
    },

    
    /**
    * @author juan.mora
    * @date 11/23/2015
    * @description Call the Apex Controller to actually save the Expense
    */
    upsertExpense : function(component, expense, recordt, callback) {
      var action = component.get("c.saveExpense");
        
      action.setParams({ 
          "expense": expense,
          "recordt": recordt
      });
      if (callback) {
          action.setCallback(this, callback);
      }
      $A.enqueueAction(action);
    },
    

})
