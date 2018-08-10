import Control from './control';

function Task( taskName, suiteName ) {

    this.controllers = [
        'start',
        'cancel',
        'stop',
        'pause',
        'continue',
        'revert',
        'expire',
        'schedule',
        'unschedule'
    ]
    const controllersApi = ((controllers) => {
        let intializedControllers = {}
        controllers.forEach( controlName => {
            intializedControllers[controlName] = Control(controlName,taskName,suiteName)
        })
        return intializedControllers
    })(controllers)






    this.template = {
        name         : false,
        type         : false,
        description  : false,
        enabled      : false,
        status       : false,
        activity     : false,
        logs         : false,
        inputs       : false,
        outputs      : false,
        triggers     : false,
        controllers  : ((controllers,controllersApi) => {
            const templates = {}
            controllers.forEach( controlName => {
                templates[controlName] = controllersApi[controlName].template
            })
            return templates
        })(controllers,controllersApi),
        settings     : false,
        lastExecuted : false
    }
    this.functions = function(){
        return true
    }
}

module = module.exports = task;