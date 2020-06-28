export default function leftPad(value, num){
  if (value.toString().length !== num && value.toString().length < num){
    while(value.toString().length !== num){
      value = "0" + value   
    }
  }
  return value
}