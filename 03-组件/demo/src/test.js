class Person {
    constructor(props){
        this.props = props
    }
}

class Studend extends Person{
    constructor(props){
        super(props);
    }
}

let stu = new Studend({name:'six',age:18});
console.log(stu.props)