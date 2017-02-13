function Equals(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
  if (passFunction===result){return true}else{return answer}
}

function NotEquals(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
  if (passFunction!==result){return true}else{return answer}
}
