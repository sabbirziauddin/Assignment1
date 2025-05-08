# Assignment1
# practice-typescript

```markdown
In TypeScript programming, both `interface` and `type` are used frequently. An `interface` is designed to define the shape of an object or a class structure. On the other hand, `type` is a more general alias that can describe any kind of type. We can use the `extends` keyword in an `interface`, but in `type`, extending is not possible. However, we can use intersections in `type` to combine multiple types. We can use literal/primitive types in `type`, which is not possible in `interface`. Additionally, `type` supports conditional types, mapped types, tuples, and primitive aliases.
```

## Example of interface

```typescript
interface Person {
    name: string;
    age: number;
}
interface Employee extends Person {
    employeeId: number;
}
const employee: Employee = {
    name: "Sabbir Ziauddin",
    age: 30,
    employeeId: 12345
};
console.log(employee);

// Example of type
type Person = {
    name: string;
    age: number;
};
type Employee = Person & {
    employeeId: number;
};
const employee: Employee = {
    name: "Anas Ziauddin",
    age: 3,
    employeeId: 15
};
console.log(employee);
console.log("Employee details:", employee);

//  #Explain the difference between any, unknown, and never types in TypeScript
The `any` type in TypeScript is a type that can represent any value.This can be useful in certain situations, but it also means you lose the benefits of TypeScript's type system. It is not making any sense to use `any`type. The `unknown` type is a safer alternative to `any`. It represents any value but requires you to perform some type checking before using it which is called type narrowing. This means you can still use the value, but you need to ensure that it is of the expected type first. The `never` type represents a value that never occurs. It is used in functions that throw an error or have infinite loops. It indicates that a function will not return a value.Never type is always used in the function that will never return a value.

example of `any` type:
```typescript
let value: any;
value = 5; // number
value = "Hello"; // string

example of `unknown` type:
```typescript
let value: unknown;
value = 5; // number
value = "Hello"; // string
if (typeof value === "string") {
    console.log(value.toUpperCase()); // This is safe because we checked the type
} else {
    console.log("Value is not a string");
}
example of `never` type:
```typescript           
function throwError(message: string): never {
    throw new Error(message);
}
