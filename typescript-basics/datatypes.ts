//Array dtypes
let numList: Array<number>;

numList = [1,3,4,6,8,9,7];

let result = numList.filter((num)=> num>2);
//Enum dtypes
const enum Color{
    RED,
    GREEN,
    BLUE
}

let c:Color = Color.GREEN;

//Tuples
let swapNumb:[number,number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapNumb = swapNumbers(10,20)

//Boolen
let isValid:boolean;

isValid = true

//Any
let department:any;

//Advice - try to avoid any - it is not able to get the error
department = "CEEN";
department = 10;

//classes
class Employee {
    // # => private keyowrd by default the other variables are public
    #id:number;
    protected name:string;
    address:string;

    //using getters and setters
    get employeeId():number{
        return this.#id;
    }

    set employeeId(id:number){
        this.#id = id;
    }

    //declaring static functions
    static getEmployeesCount():number{
        return 50;
    }

    constructor(id:number,name:string,address:string){
        this.#id = id;
        this.name = name;
        this.address = address
    }

    getNameWithAddr(): string {
        return `${this.name} lives at ${this.address}`;
    }
}

let denis = new Employee(1,"Denis","Nakuru Njoro")
denis.employeeId = 100;

let addr = denis.getNameWithAddr()

//Inhreitance
class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address)
    }

    override getNameWithAddr(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

//Interfaces
interface IUser{
    name:string;
    age?:number;
    id:number;
    email:string;
}

interface Employe extends IUser{
    salary:number;
}

let newEmployee: Employe = {name:"Toppa",age:23,id:1,email:"",salary:50000};

//incase you want to use the interface in other files
export interface Login{
    login():IUser;
}

let {name:userName,email:userEmail} :IUser = {name:"Toppa",id:1,email:""}

let [user1,user2,...restUsers]:IUser[] = [{name:"Zaddy",id:4,email:""},
                     {name:"Eunice",id:3,email:""},
                     {name:"Eunice1",id:5,email:""},
                     {name:"Eunice3",id:6,email:""}]

console.log(user1)
console.log(restUsers)

