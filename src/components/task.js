import Action from './action'

function Task ( name, suiteName ) {

    this.actions = [
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

    let
        nodes = {},
        actions = {}
    
    this.actions.forEach( action => {
        const { node, run } = new Action(action,name,suiteName) // Missing DB
        nodes[action] = node
        actions[action] = run
    })
    
    this.node = {
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
        actions      : nodes,
        settings     : false,
        lastExecuted : false
    }
    this.run = actions
}

module = module.exports = Task;