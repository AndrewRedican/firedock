import Task from './task'
import { isNotType, throwError } from '../helpers/err'

function Suite ( name, firebaseDatabase, tasks ) {
    /**
     * Validate 'tasks' follows the following schema
     * name : name of task
     * & options with inputs and outputs min requirement
     */

    this.tasks = []
    let
        nodes = {},
        tasks = {}

    Object.keys(tasks).forEach( task => {
        this.tasks.push(task.name)
        const { node, run } = new Task() //Missing DB and params
        nodes[task.name] = node
        tasks[task,name] = run
    })

    this = {
        node : {
            name        : false,
            description : false,
            taskNames   : false,
            taskActives : false,
            taskLogs    : false,
            tasks       : nodes,
            settings    : false
        },
        ...tasks
    }

};

module = module.exports = Suite;