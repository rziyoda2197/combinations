function kombinatsiyalar(n, k) {
    let kombinatsiyalar = [];
    let kombinatsiya = [];

    for (let i = 1; i <= n; i++) {
        kombinatsiya.push(i);
        if (kombinatsiya.length === k) {
            kombinatsiyalar.push([...kombinatsiya]);
            kombinatsiya.pop();
        }
    }

    return kombinatsiyalar;
}

console.log(kombinatsiyalar(5, 3));
```

```javascript
function kombinatsiyalar(n, k) {
    let kombinatsiyalar = [];
    let kombinatsiya = [];

    for (let i = 1; i <= n; i++) {
        kombinatsiya.push(i);
        if (kombinatsiya.length === k) {
            kombinatsiyalar.push([...kombinatsiya]);
            kombinatsiya.pop();
        }
    }

    return kombinatsiyalar;
}

console.log(kombinatsiyalar(5, 3));
