// Exercise 1 Section
for (i = 0; i <= 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
    i + 1;
}

// Exercise 2 Section
console.log('Exercise Two');
let divisibleByThree;
let divisibleByFive;

for (i = 0; i <= 100; i++)
{
    divisibleByThree = i % 3;
    divisibleByFive = i % 5;

    if (divisibleByThree == 0 && divisibleByFive == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (divisibleByThree == 0)
    {
        console.log('FIZZ');
    }
    else if (divisibleByFive == 0)
    {
        console.log('BUZZ');
    }
}

// Exercise 3
console.log('Exercise Three')
let j = 0;

do 
{
    if (j % 2 != 0)
    {
        console.log(j);
    }

    if (j % 3 == 0 && j % 5 == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (j % 3 == 0)
    {
        console.log('FIZZ');
    }
    else if (j % 5 == 0)
    {
        console.log('BUZZ');
    }

    j++; 

} while (j <= 100)

// Exercise 4
console.log('Exercise Four');

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (i = 0; i <= n; i++)
{
    if (i == value)
    {
        console.log("Found Value!");
        break;
    }
    else if (value > n)
    {
        console.log("Did not find value");
        break;
    }
}

//Exercise Five
console.log('Exercise Five');

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100); 

let fizCheck;
let buzzCheck;

for (i = start; i <= end; i++)
    {
        fizCheck = i % fizzDivisor;
        buzCheck = i % buzzDivisor;
    
        if (fizCheck == 0 && buzCheck == 0)
        {
            console.log('FIZZBUZZ');
        }
        else if (fizCheck == 0)
        {
            console.log('FIZZ');
        }
        else if (buzCheck == 0)
        {
            console.log('BUZZ');
        }
    }