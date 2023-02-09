const names = ['abul', 'kabul', 'ebul', 'cabul', 'abul', 'ebul', 'gabul'];


function removeDuplicate(names) {

    const uniqe = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqe.includes(name) === false)

            uniqe.push(name);
    }

    return uniqe
}


const uniqeName = removeDuplicate(names);
console.log(uniqeName);