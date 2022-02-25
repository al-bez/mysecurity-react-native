const parseMobileNumber = (phoneNumber, append961 = true) => {
  // trim
  const trimmedNumber = String(phoneNumber).trim()
  // remove artifacts
  const straightNumber = trimmedNumber.replace(/[^0-9]/g, '')
  // remove initial zeros
  const noFillerNumber = straightNumber.replace(/^0*/, '')
  // does the number have 961 at the beginning?
  const has961 = noFillerNumber.match(/^961/)
  // add 961 at the beginning if there isnt one
  const fullNumber = (append961 && !has961 ? '961' : '') + noFillerNumber

  return fullNumber
}

export default {
  parseMobileNumber
}
