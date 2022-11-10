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
                href:"https://in.sugarcosmetics.com/products/dream-cover-spf15-mattifying-compact",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",
                name:"Dream Cover SPF15 Mattifying Compact",
                price:499
            },
            {
                href:"https://in.sugarcosmetics.com/products/mettle-priming-balm",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
                name:"Mettle Priming Balm",
                price:1099
            },
            {
                href:"https://in.sugarcosmetics.com/products/all-set-to-go-banana-powder",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
                name:"All Set To Go Banana Powder",
                price:599
            },
            {
                href:"https://in.sugarcosmetics.com/products/rage-for-coverage-24hr-foundation",
                img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-rage-for-coverage-24hr-foundation-07-vanilla-latte-fair-golden-undertone-28391223263315.jpg?v=1623073552",
                name:"Rage For Coverage 24Hr Foundation",
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

        let price = document.createElement("p");
        price.innerText = "₹" + elm.price;

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        btn.setAttribute("click",function() {
            let prodetails = {
                img: img.value,
                name: name.value,
                price: price.value
            }
            items.push(prodetails);
            localStorage.setItem("cart",JSON.stringify(items));
        })
        atag.append(card);
        card.append(img,name,price,btn);
        document.querySelector(".card-contain").append(atag);

    });