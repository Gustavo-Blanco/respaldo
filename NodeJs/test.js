objeto = {
  value:1,
  next : {}
}

const addLinkedList = (objeto,n) => {
  if (n==0){
    objeto.next = {value:(objeto.value)+1,next:null}
  }else{
    objeto.next = addLinkedList({value:(objeto.value)+1},n-1);
  }
  return objeto;
}
// console.log(objecto);
console.log(addLinkedList(objeto,4));