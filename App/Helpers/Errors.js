const parseFirstError = (errors = []) => {
  let errorText = ''
  const errorIndices = Object.keys(errors)
  const errorsLength = errorIndices.length
  if (errorsLength) {
    // if errors exists
    const errorIndex = errorIndices[0]
    errorText = errors[errorIndex][0]
  }
  return errorText
}

export default {
  parseFirstError
}
