function removeDuplicates() {
    let arr = document.getElementById('dup-array').value.split(',').map(Number);
    
    if (arr.length === 0) {
        document.getElementById('dup-result').innerText = 'Array is empty';
        document.getElementById('dup-length').innerText = '0';
        return;
    }
    
    let i = 0;  
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];  
        }
    }
    
    let newArr = arr.slice(0, i + 1);  
    document.getElementById('dup-result').innerText = newArr.join(', ');
    document.getElementById('dup-length').innerText = newArr.length;
}