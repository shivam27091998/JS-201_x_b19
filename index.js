let product=JSON.parse(localStorage.getItem("data")) || [];
let form = document.querySelector("#product_form")
form.addEventListener("submit",myFunction)
function myFunction(event){
event.preventDefault();
let brand=form.product_brand.value;
let name=form.product_name.value;
let price=form.product_price.value;
let img=form.product_image.value;

let product_obj=new pro(brand,name,price,img);
product.push(product_obj);

localStorage.setItem("data",JSON.stringify(product_form));
window.location.reload();

}

function pro(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.img=i;
}