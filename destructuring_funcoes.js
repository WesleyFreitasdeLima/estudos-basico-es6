let arr = [10, 20, 30, 40];

function teste([a, b, , c, d = 100]) {
    console.log(a, b, c, d)
}

teste(arr);