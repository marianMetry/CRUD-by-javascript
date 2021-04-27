var productNameInput = document.getElementById("productNameInput");   //da el input kolo 3ala ba3do
var productPriceInput = document.getElementById("productPriceInput");    //da el input kolo 3ala ba3do
var productCategoryInput = document.getElementById("productCategoryInput");    //da el input kolo 3ala ba3do
var productDescInput = document.getElementById("productDescInput");   //da el input kolo 3ala ba3dob

var productContainer ;
if(localStorage.getItem('myProduct')==null)   //awel mara yfta7
{
    productContainer=[];
}
else{
    productContainer = JSON.parse( localStorage.getItem('myProduct'));  //leh data in local storage
    displayProduct();

}


function addProduct() {
    var products =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescInput.value
    }
    productContainer.push(products);

// to store in data base
    localStorage.setItem("myProduct" ,JSON.stringify(productContainer) );
// we use (JSON.stringify) to convert the array to string ...we make it as the  (setitem) must the key and value must be string

    clr();
    displayProduct();
    console.log(productContainer);
}

function displayProduct() {
    var cartona = "";
    for (var i = 0; i < productContainer.length; i++) {
        cartona += `<tr>
      <td>${i}</td>
      <td>${productContainer[i].name}</td>
      <td>${productContainer[i].price}</td>
      <td>${productContainer[i].category}</td>
      <td>${productContainer[i].description}</td>
      <td> <button onclick=" changeForUpdate(${i})" class=" btn btn-outline-warning"> update </button> </td>
      <td> <button onclick=" deleteProduct(${i})" class=" btn btn-outline-danger"> delete </button> </td>
      </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}


function clr() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";

}


function deleteProduct(productIndex)
{
    productContainer.splice(productIndex,1);
    //katbna el sater da tany 3alshan ytkhazen in local storage ay update ye7sal
    localStorage.setItem("myProduct" ,JSON.stringify(productContainer) );
    displayProduct();

}

function searchProduct(searchTerm)
{
    var cartona='';

    for( var i =0 ; i<productContainer.length ; i++)
    {
        if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
        {
            
            cartona += `<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td> <button onclick=" changeForUpdate(${i})" class=" btn btn-outline-warning"> update </button> </td>
            <td> <button onclick=" deleteProduct(${i})" class=" btn btn-outline-danger"> delete </button> </td>
            </tr>`;
          
        }
        else 
        {
           console.log ('m4 mawgood');

        }
    }
    document.getElementById("tableBody").innerHTML=cartona;

}

// searchProduct("to");


function changeForUpdate(productIndex)
{
    productNameInput.value=productContainer[productIndex].name;
    productPriceInput.value=productContainer[productIndex].price;
    productCategoryInput.value=productContainer[productIndex].category;
    productDescInput.value=productContainer[productIndex].description;
}
