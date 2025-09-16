document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado correctamente");

    const totalAvailable = document.getElementById("total-available");
    const saveTotal = document.getElementById("save-total");
    const resetAll = document.getElementById("reset-all");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const addProduct = document.getElementById("add-product");
    const productList = document.getElementById("product-list");
    const spent = document.getElementById("spent");
    const left = document.getElementById("left");

    let total = 0;
    let spentAmount = 0;

    saveTotal.addEventListener("click", () => {
        total = parseFloat(totalAvailable.value) || 0;
        updateSummary();
    });

    resetAll.addEventListener("click", () => {
        spentAmount = 0;
        productList.innerHTML = "";
        updateSummary();
    });

    addProduct.addEventListener("click", () => {
        const name = productName.value;
        const price = parseFloat(productPrice.value) || 0;

        if (name && price > 0) {
            const li = document.createElement("li");
            li.textContent = `${name} - $${price.toFixed(2)}`;
            productList.appendChild(li);
            spentAmount += price;
            updateSummary();
            productName.value = "";
            productPrice.value = "";
        }
    });

    function updateSummary() {
        spent.textContent = spentAmount.toFixed(2);
        left.textContent = (total - spentAmount).toFixed(2);
    }
});
