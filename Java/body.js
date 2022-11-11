var myImage = document.getElementById("mainImage");
    var myA = document.getElementById("mainA");

    var imageArray = [  
        "https://d32baadbbpueqt.cloudfront.net/Homepage/46ff1a05-2660-4fdc-83e4-fb5cfc36f102.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/e352ada8-9b87-43ff-a84a-6ed425b0d55c.gif",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/9f8fe6f9-3ebe-4d1b-9b15-d5e5e642868b.jpg"];

    var imageA = [
        "https://in.sugarcosmetics.com/collections/bling-it-on",
        "https://in.sugarcosmetics.com/collections/sculpt-to-perfection",
        "https://in.sugarcosmetics.com/products/sugar-prime-sublime-primer",
        "https://in.sugarcosmetics.com/products/vineetas-favourite-makeup-kit",
        "https://in.sugarcosmetics.com/products/sugar-eyes-eyes-baby-gel-eyeliner-esmeralda",
        "https://in.sugarcosmetics.com/products/ace-of-face-foundation-stick",
        "https://in.sugarcosmetics.com/products/wedding-makeup-kit"
    ]

    var imageIndex = 0;

    function changeImage() {
        myImage.setAttribute("src",imageArray[imageIndex]);
        myA.setAttribute("href",imageA[imageIndex])
        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }
    setInterval(changeImage,3000);

    //Cards
    var details = 
    [
        
            {
                href:"https://in.sugarcosmetics.com/products/matte-attack-transferproof-lipstick",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
                name:"Matte Attack Transferproof Lipstick",
                price:699
            },
            {
                href:"https://in.sugarcosmetics.com/products/mettle-priming-balm",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
                name:"Mettle Priming Balm",
                price:1099
            },
            {
                href:"https://in.sugarcosmetics.com/products/base-of-glory-pore-minimizing-primer",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
                name:"Base Of Glory Pore Minimizing Primer",
                price:799
            },
            {
                href:"https://in.sugarcosmetics.com/products/smudge-me-not-mini-liquid-lipstick-set-power-up-your-pout",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
                name:"Smudge Me Not Mini Liquid Lipstick Set",
                price:799
            }
        
    ]

    let items = JSON.parse(localStorage.getItem("cart"))||[];
    console.log(items)
   
    details.forEach(elm => {
        let atag =  document.createElement("a");
        atag.setAttribute("href",elm.href);

        let card = document.createElement("div");
        card.setAttribute("class",card);

        let img = document.createElement("img");
        img.setAttribute("src",elm.img);

        let name = document.createElement("p");
        name.innerText = elm.name;

        let price = document.createElement("h1");
        price.innerText = "₹" + elm.price;

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        btn.setAttribute("click",function() {
            let prodetails = {
                img: elm.img,
                name: elm.name,
                price: elm.price
            }
            items.push(prodetails);
            localStorage.setItem("cart",JSON.stringify(items));
        })
        atag.append(card);
        card.append(img,name,price,btn);
        document.querySelector(".card-contain").append(atag);

    });
    details.forEach(elm => {
        let atag =  document.createElement("a");
        atag.setAttribute("href",elm.href);

        let card = document.createElement("div");
        card.setAttribute("class",card);

        let img = document.createElement("img");
        img.setAttribute("src",elm.img);

        let name = document.createElement("p");
        name.innerText = elm.name;

        let price = document.createElement("h1");
        price.innerText = "₹" + elm.price;

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        btn.setAttribute("click",function() {
            let prodetails = {
                img: elm.img,
                name: elm.name,
                price: elm.price
            }
            items.push(prodetails);
            localStorage.setItem("cart",JSON.stringify(items));
        })
        atag.append(card);
        card.append(img,name,price,btn);
        document.querySelector(".card-contain1").append(atag);

    });