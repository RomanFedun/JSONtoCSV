const ordersArray = [
    {itemId: 1, orderId: 1, date: '2023-08-02'},
    {itemId: 2, orderId: 2, date: '2023-08-04'},
    {itemId: 2, orderId: 3, date: '2023-08-07'},
    {itemId: 3, orderId: 4, date: '2023-08-01'}
];

const itemsArray = [
    {itemId: 1, itemName: 'item1', amount: 10.99, currency: 'CAD'},
    {itemId: 2, itemName: 'item2', amount: 20.99, currency: 'EUR'},
    {itemId: 3, itemName: 'item3', amount: 30.99, currency: 'EUR'}
];



const requestURL = 'https://api.exchangerate.host/latest?base=USD&symbols=EUR,CAD';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let response;

request.onload = () => {
    response = request.response;

    const mergeArrays =  (arr1 = [], arr2 = []) => {
        let res = [];
        res = arr1.map(obj => {
            const index = arr2.findIndex(el => el['itemId'] === obj['itemId']);
            const { amount, itemName, currency } = index !== -1 ? arr2[index] : {};

            return {
                'Order ID': obj.orderId,
                'Order Date': obj.date,
                'Item Name': itemName,
                'Amount': ((1/response.rates?.[currency]) * amount)
            };
        });
        return res;
    };

    const mergedArray = mergeArrays(ordersArray, itemsArray)



    const jsonKeys = Object.keys(mergedArray[0]);

    const headerData = jsonKeys.join(',');

    const rowData = mergedArray.map((item) => {
        return jsonKeys.map((key) => item[key]).join(',');
    });

    const json2CSV = `${headerData}\n${rowData.join('\n')}`;

    console.log(json2CSV);
}

