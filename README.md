# JSONtoCSV
Convert amounts from specified currency to USD using https://api.exchangerate.host
Expected CSV columns:

Item Name
Order ID
Order Date
Amount

Sample Orders Array: 

[

    {itemId: 1, orderId: 1, date: '2023-08-02'},

    {itemId: 2, orderId: 2, date: '2023-08-04'},

    {itemId: 2, orderId: 3, date: '2023-08-07'},

    {itemId: 3, orderId: 4, date: '2023-08-01'}
]

Sample Items Array:

[

    {itemId: 1, itemName: 'item1', amount: 10.99, currency: 'CAD'},

    {itemId: 2, itemName: 'item2', amount: 20.99, currency: 'EUR'},

    {itemId: 3, itemName: 'item3', amount: 30.99, currency: 'EUR'}
]
