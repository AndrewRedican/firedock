import { isNotType, throwError } from '../helpers/err'

function Control (actionName='',taskName='',suiteName='',type='native',description) {
    const validations = [
        { name : 'actionName',  param : actionName },
        { name : 'taskName',    param : taskName   },
        { name : 'suiteName',   param : suiteName  },
        { name : 'type',        param : type       }
    ]
    validations.forEach( validation => {
        isNotType(validation.name,validation.param,'string')
        if(validation.param==='') throwError('control',validation.name,'expected to be a non-empty string')
    })
    if(description){
        isNotType('description',description,'string')
        if(description==='') throwError('control',description,'expected to be a non-empty string')  
    }
    this.template = {
        name                      : name,
        type                      : type,
        path                      : `system/process/${suiteName}/tasks/${taskName}`,
        ownPath                   : `${path}/triggers/${actionName}`,
        description               : description||`${actionName} ${taskName}`,
        enabled                   : true,
        active                    : false,
        activity                  : false,
        logs                      : false,
        options                   : false,
        lastExecuted              : false,
        lastCompleted             : false,
        consecutiveExecutionCount : false
    }
    this.functions = function(){
        return true
    }
}

module = module.exports = Control