const cardItems = [{
        val: 1,
        color: "#6F98A8",
    },
    {
        val: 2,
        color: "#2B8EAD",
    },
    {
        val: 3,
        color: "#2F454E",
    },
    {
        val: 4,
        color: "#2B8EAD",
    },
    {
        val: 5,
        color: "#2F454E",
    },
    {
        val: 6,
        color: "#BFBFBF",
    },
    {
        val: 7,
        color: "#BFBFBF",
    },
    {
        val: 8,
        color: "#6F98A8",
    },
    {
        val: 9,
        color: "#2F454E",
    },
];

function bindData(card) {
    let items = card ? card : cardItems;
    var shuffle = document.getElementById("shuffle");
    shuffle.innerHTML = '<div class="boxed-item-wrapper">' +
        items.map(function(card) {
            return `<div class='boxed-item' style=background-color:${card.color};border-color:${card.color}> ${card.val}</div>`;
        }).join('') + '</div><div class="text-center"><code>Shuffle and sort by Baskar Govindasamy</code></div>';
}

function shuffle() {
    const shuffledItem = cardItems.slice();
    for (let i = shuffledItem.length - 1; i > 0; i--) {
        const randomize = Math.floor(Math.random() * (i + 1));
        [shuffledItem[i], shuffledItem[randomize]] = [shuffledItem[randomize], shuffledItem[i]];
    }
    this.bindData(shuffledItem);
}

function sort() {
    var card = cardItems.sort(function(a, b) { return a - b });
    this.bindData(card);
}