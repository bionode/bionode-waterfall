'use strict'

/**
 * Produce operation parameters give the current task state.
 *
 * @param props {Object}
 */
const createOperationProps = (taskState) => {
  const operationProps = {
    input: taskState.resolvedInput,
    output: taskState.resolvedOutput
  }
  return Object.assign({}, taskState, { operationProps })
}

/**
 * Create operation. Takes taskState.operationProps
 */
const createOperation = (taskState, operationCreator) => {
  const operationProps = createOperationProps(taskState)

  const operation = operationCreator(operationProps)

  return {
    operation,
    operationString: JSON.stringify(operation)
  }
}

module.exports = createOperation
