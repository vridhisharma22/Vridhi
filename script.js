const menu = [
    { id: 101, title: "Classic Glazed", price: 99, pic: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500" },
    { id: 102, title: "Choco Frosted", price: 129, pic: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
    { id: 103, title: "Strawberry Sprinkle", price: 119, pic: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500" },
    { id: 104, title: "Hazelnut Iced Coffee", price: 189, pic: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500" },
    { id: 105, title: "Blueberry Muffin", price: 149, pic: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" },
    { id: 106, title: "Vanilla Latte", price: 219, pic: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" }
];

let cart = [];

function loadMenu() {
    const wall = document.getElementById('flavor-grid');
    menu.forEach(item => {
        const pod = document.createElement('div');
        pod.className = 'item-card';
        pod.innerHTML = `
            <img src="${item.pic}" alt="donut">
            <h3>${item.title}</h3>
            <p>₹${item.price}</p>
            <button class="order-btn" onclick="grab('${item.id}')">ADD TO BOX</button>
        `;
        wall.appendChild(pod);
    });
}

function grab(id) {
    const choice = menu.find(m => m.id == id);
    cart.push({ ...choice, uid: Math.random() });
    refreshUI();
}

function drop(uid) {
    cart = cart.filter(c => c.uid !== uid);
    refreshUI();
}

function refreshUI() {
    document.getElementById('basket-qty').innerText = cart.length;
    const list = document.getElementById('basket-items');
    
    list.innerHTML = cart.map(c => `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <span>🍩 ${c.title}</span>
            <span>₹${c.price} <small onclick="drop(${c.uid})" style="color:red; cursor:pointer; margin-left:8px;">✕</small></span>
        </div>
    `).join('');
    
    const sub = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('sub-total').innerText = `₹${sub}`;
    document.getElementById('grand-total').innerText = `₹${sub}`;
}

function viewBasket() {
    const modal = document.getElementById('basket-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function finishOrder() {
    if (cart.length === 0) return alert("Your box is empty!");
    alert("Order Placed! Your donuts are on the way! 🍩☕");
    cart = [];
    refreshUI();
    viewBasket();
}

loadMenu();