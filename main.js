const data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
    const container = document.getElementById('container');

    data.map(number => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = number;
        
        if (number > 50) {
            item.classList.add('green-background');
        } else {
            item.classList.add('red-background');
        }

        container.appendChild(item);
    });