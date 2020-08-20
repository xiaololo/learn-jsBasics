const obj1={
    a:10,
    b:20,
    sum(){
      return this.a+this.b  
    }
}

const obj2 = new Object({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})
// const obj2 =new Object(obj1) //obj1===obj2
const obj3 = Object.create({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})