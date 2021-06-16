const generate_gallery = () =>{
    main = document.querySelector("main");
    let counter = 1;
    for (let i=0; i < 4; i++){
        col = document.createElement("div");
        col.id = i
        // main.appendChild(col);
        for (let i=0; i < 16; i++){
            img = document.createElement("img");
            // img.src = `https://source.unsplash.com/200x300?random=${i+1}/`;
            img.src = `https://picsum.photos/200/300?random=${counter}`;
            counter++;
            img.alt = "picture";
            img.className = "img" + i;
            col.appendChild(img);
        }
        main.appendChild(col);
    }
}

generate_gallery();
