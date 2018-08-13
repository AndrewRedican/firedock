import { isNotType, throwError } from '../helpers/err'

function Action (name='',taskName='',suiteName='',type='native',description) {
    const validations = [
        { name : 'name',  param : name },
        { name : 'taskName',    param : taskName   },
        { name : 'suiteName',   param : suiteName  },
        { name : 'type',        param : type       }
    ]
    validations.forEach( validation => {
        isNotType(validation.name,validation.param,'string')
        if(validation.param==='') throwError('action',validation.name,'expected to be a non-empty string')
    })
    if(description){
        isNotType('description',description,'string')
        if(description==='') throwError('action',description,'expected to be a non-empty string')  
    }
    this.node = {
        name                      : name,
        type                      : type,
        path                      : `system/process/${suiteName}/tasks/${taskName}`,
        ownPath                   : `${this.node.path}/triggers/${name}`,
        description               : description||`${name} ${taskName}`,
        enabled                   : true,
        active                    : false,
        activity                  : false,
        logs                      : false,
        lastExecuted              : false,
        lastCompleted             : false,
        consecutiveExecutionCount : false,
        timeout                   : 5000
    }
    this.run = () => {
        switch(name){
            case 'start' :
                return new Promise((resolve, reject) => {
                    /**
                     * If conditions fail, return error
                     */
                    /**
                     * 1. update status to in progress
                     * 2. DB.ref.write to specific  path with an onWrite event listener
                     * 3. update status to complete
                     * 
                     * if any set fails, return error
                     */
                    /**
                     * return success/fail status
                     */
                })
            break
            case 'cancel' :

            break
            case 'stop' :

            break
            case 'pause' :

            break
            case 'continue' :

            break
            case 'revert' :

            break
            case 'expire' :

            break
            case 'schedule' :

            break
            case 'unschedule' :

            break
        }

    }
}

module = module.exports = Action