# Lab 7

Lab 7: Create a simple web page using React with Tailwind CSS to display Porsche 911 GT3 RS.

* *Date Created*: 04 NOV 2024
* *Last Modification Date*: 04 NOV 2024
* *Lab URL*: [Link](https://web.cs.dal.ca/~huyh/csci3172/lab5/)
* *GitLab URL*: [Link](https://git.cs.dal.ca/huyh/csci3172/-/tree/main/labs/lab5?ref_type=heads)
* *GitHub URL*: [Link](


## Authors

* [Huy Huynh](huy.huynh@dal.ca) - (Author)

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Tailwind CSS](https://tailwindcss.com/) - The styling used


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### index.html

*Lines 8 - 8*

```html
<script src="https://cdn.tailwindcss.com"></script> 

```

The code above was created by adapting the code in [Install Tailwind CSS](<script src="https://cdn.tailwindcss.com"></script>) as shown below: 

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


- <!---Why---> [Tailwind CSS](https://tailwindcss.com/)'s Code was used because I want to use Tailwind CSS for easier styling



### File Name: `script.js`

* Title: Determining Prime Numbers in JavaScript: Logic and Code Optimization
* URL: (https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad)
* Date Accessed: October 20th, 2024


*Lines 56 - 76*

```js
function isPrime(number) {
   if (number < 2) {
      return false;
   }

   if (number === 2 || number === 3) {
      return true;
   }

   if (number % 2 === 0 || number % 3 === 0) {
      return false;
   }

   for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
      return false;
      }
   }

   return true;
}
```

The code above was created by adapting the code in [Theodore John.S](https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad) as shown below: 

```js
function isPrimeOptimized(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2 || number === 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

// Usage
const number = 17;
console.log(`${number} is prime:`, isPrimeOptimized(number));
```

- <!---How---> The code in was implemented by Huy Huynh
- <!---Why---> Code was used because I want to know how to make a function that can check a prime number in JavaScript
- <!---How---> Code was modified by Huy Huynh


## Acknowledgments

* [Theodore John.S](https://medium.com/@stheodorejohn)