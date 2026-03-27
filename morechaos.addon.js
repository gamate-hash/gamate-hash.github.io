setInterval(() => {
    const num = Math.floor(Math.random() * 201); // 0–200

    if (num === 200|num === 100) {
        const randomIndex = Math.floor(Math.random() * sounds.length);
        const audio = new Audio(sounds[randomIndex]);
        console.log("Lucky Number:", num);
        audio.play();
        console.log("Played random sound:", sounds[randomIndex]);
    } else {
        console.log("Number:", num);
    }
}, 75);