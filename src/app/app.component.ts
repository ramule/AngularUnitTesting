import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_unitTesting_demo';

  ngOnInit(): void {
    this.addNumbers(1,2);
    this.amstrongNumber(407);
    this.abc();
  }

  addNumbers(num1: number, num2: number) {
    return num1+num2;
  }

  abc() {
    let arrayOfLetters = ['a','b','c','d','e','f'];
    let arr = [
      {
        "name": "ravi"
      }
    ];

    let obj1 = {
      "name": "Ravi",
      "address": {
        "state": "Mah",
        "city": "mumbai"
      }
    }

    // let obj2 = obj1;

    // obj1.address.city = "Del";
    // console.log('obj1 after shallow copy', obj1);
    // console.log('obj2 after shallow copy', obj2);

    let obj2 = JSON.parse(JSON.stringify(obj1));

    obj1.address.city = "Del";
    console.log('obj1 after deep copy', obj1);
    console.log('obj2 after deep copy', obj2);

    // console.log(obj1);
    // const anotherArrayOfLetters = JSON.parse(JSON.stringify(arrayOfLetters));
    // arrayOfLetters = [];
    // console.log(anotherArrayOfLetters);

    // arr = [];
    // console.log(arr);
  }


  amstrongNumber(num: any) {
    let sum = 0;
    let temp = num;
    while(temp > 0) {
      let remainder = temp % 10;
      sum = sum + (remainder * remainder * remainder);
      temp = Math.trunc(temp/10);
    }
    console.log(sum);

    if(sum == num) {
      console.log('It is an armstrong number');
    }
    else {
      console.log('It is not an armstrong number');
    }
  }
}
