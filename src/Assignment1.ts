{
  function formatString(input: string, toUpper?: boolean): string {
    return toUpper ?? true ? input.toUpperCase() : input.toLowerCase();
  }
  const result1 = formatString("hello", true);
  const result2 = formatString("hello", false);
  const result3 = formatString("hello");

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: String; rating: number }[] {
    const newRating = items.filter((item) => item.rating >= 4);
    return newRating;
  }
  const newItemResults = filterByRating(books);
  console.log(newItemResults);

  function concatenateArrays<T>(...arrays: T[][]) {
    const mergeArray: T[] = [];
    for (const arr of arrays) {
      for (const item of arr) {
        mergeArray.push(item);
      }
    }
    return mergeArray;
  }
  const concatArray = concatenateArrays(["a", "b", "c"], ["d"]);
  console.log(concatArray);

  class Vehicle {
    private _make: string;
    private _year: number;
    constructor(make: string, year: number) {
      this._make = make;
      this._year = year;
    }
    getInfo() {
      console.log(`make ${this._make} , year ${this._year}`);
    }
  }
  class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this._model = model;
    }
    getModel() {
      console.log(`Model :${this._model}`);
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  function processValue(value: string | number): number {
    if (typeof value == "string") {
      return value.length;
    } else if (typeof value == "number") {
      return value * 2;
    }
    throw new Error("Invalid input type");
  };
  const processResult = processValue(10);
  console.log(processResult);

  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    let maxProduct = products[0];
    for (const product of products) {
      if (product.price > maxProduct.price) {
        maxProduct = product;
      }
    }
    return maxProduct;
  };
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  const maxProductPrice = getMostExpensiveProduct(products);
  console.log(maxProductPrice);
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  return day === Day.Sunday || day === Day.Saturday ? "Weekend" : "Weekday";
}
const getDay = getDayType(Day.Monday);
console.log(getDay);

 async function squareAsync(params: number): Promise<number> {
   return new Promise<number>((resolve, reject) => {
     setTimeout(() => {
       if (params < 0) {
         reject(new Error("Negative number is not allowed"));
       } else {
         resolve(params * params);
       }
     }, 1000);
   });
 }

  squareAsync(3)
    .then((resultPromise) => console.log(resultPromise))
    .catch((error) => console.error("Error", error.message));

