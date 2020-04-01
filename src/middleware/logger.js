
export const logger = ({getState,action})=>{
  return next=>action=>{
    console.log('Dispatching action '+ JSON.stringify(action))

    const returnValue = next(action)

    console.log('After the dispatch ==='+ JSON.stringify(getState()))

    return returnValue
  }
}
