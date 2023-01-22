const main = document.querySelector("#main");
const items = [
    {
        img : `https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/h/m-st1-combraided-original-imaghc56wmubhszk.jpeg?q=70`,    
        title : "Casual Shirt",
        des : "Perfect dresses for bot jents and ladis",
        price : "$ 10",
    },
    {
        img : `https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/h/m-st1-combraided-original-imaghc56wmubhszk.jpeg?q=70`,    
        title : "Casual Shirt",
        des : "Perfect dresses for bot jents and ladis",
        price : "$ 40",
    },
    {
        img : `https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/h/m-st1-combraided-original-imaghc56wmubhszk.jpeg?q=70`,    
        title : "Casual Shirt",
        des : "Perfect dresses for bot jents and ladis",
        price : "$ 30",
    },
    {
        img : `https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/h/m-st1-combraided-original-imaghc56wmubhszk.jpeg?q=70`,    
        title : "Casual Shirt",
        des : "Perfect dresses for both jents and ladis",
        price : "$ 20",
    }
];

items.forEach((x)=>{
    console.log(x);
main.innerHTML =`
<div class="main">
    <div class="item">
        <img  src="  https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/h/m-st1-combraided-original-imaghc56wmubhszk.jpeg?q=70 ">
        <div class="detels">
            <h3>${x.title}</h3>
            <p>${x.des}</p>
            <div class="order">
                <strong>$ 10</strong>
                <div class="incri">
                    <span>-</span>
                    <span>12</span>
                    <span>+</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

});