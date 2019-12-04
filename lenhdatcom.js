

const tokenD = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwOi8vbHVuY2hhcHA0LmRldi5pbyIsInN1YmplY3QiOiI3YTc3OGUwMC1jZmIwLTExZTktYjI1Ni1lNzBlZmUyNmE5ODgiLCJhdWRpZW5jZSI6Inh1YW5kdWMiLCJpYXQiOjE1NzUzNDMwNTQsImV4cCI6MTU3NzkzNTA1NH0.qeDFMq3lRd4cgZpFpiq5EGBFSJziUz-yimSshk1uIXg"


const getMenu = fetch("https://portal.acexis.com/graphqllunch", {
  "credentials": "omit",
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9", "content-type": "application/json",
    "currentsite": "52be5550-be4f-11e9-aa89-2b0626c97f03",
    "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin",
    "token": tokenD
  },
  "referrer": "https://portal.acexis.com/lun/order",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"operationName\":\"menuPublishBySite\",\"variables\":{\"siteId\":\"52be5550-be4f-11e9-aa89-2b0626c97f03\"},\"query\":\"query menuPublishBySite($siteId: String!) {\\n  menuPublishBySite(siteId: $siteId) {\\n    _id\\n    name\\n    isActive\\n    isLocked\\n    isPublished\\n    dishes {\\n      _id\\n      name\\n      count\\n      orderCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
  "method": "POST", 
  "mode": "cors"
})

const resultGetMenu = {
  data: {
    menuPublishBySite: {
      dishes: [
        {
          count: 15,
          name: "Canh chua cá lóc",
          orderCount: 4,
          __typename: "DishInfo",
          _id: "66a07b10-1666-11ea-9545-9ff408c0ec7e"
        }
      ]
    }
  }
}


let oder = fetch("https://portal.acexis.com/graphqllunch", { "credentials": "omit", "headers": { "accept": "*/*", "accept-language": "en-US,en;q=0.9", "content-type": "application/json", "currentsite": "52be5550-be4f-11e9-aa89-2b0626c97f03", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwOi8vbHVuY2hhcHA0LmRldi5pbyIsInN1YmplY3QiOiI3YTc3OGUwMC1jZmIwLTExZTktYjI1Ni1lNzBlZmUyNmE5ODgiLCJhdWRpZW5jZSI6Inh1YW5kdWMiLCJpYXQiOjE1NzUzNDMwNTQsImV4cCI6MTU3NzkzNTA1NH0.qeDFMq3lRd4cgZpFpiq5EGBFSJziUz-yimSshk1uIXg" }, "referrer": "https://portal.acexis.com/lun/order", "referrerPolicy": "no-referrer-when-downgrade", "body": "{\"operationName\":\"orderDishC\",\"variables\":{\"input\":{\"menuId\":\"5b3f45d2-1666-11ea-9545-9ff408c0ec7e\",\"dishId\":\"66a16571-1666-11ea-9545-9ff408c0ec7e\",\"order\":true}},\"query\":\"mutation orderDishC($input: CreateOrderInputC!) {\\n  orderDishC(input: $input)\\n}\\n\"}", "method": "POST", "mode": "cors" })



const checkShouldOder = fetch("https://portal.acexis.com/graphqllunch", { "credentials": "omit", "headers": { "accept": "*/*", "accept-language": "en-US,en;q=0.9", "content-type": "application/json", "currentsite": "52be5550-be4f-11e9-aa89-2b0626c97f03", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwOi8vbHVuY2hhcHA0LmRldi5pbyIsInN1YmplY3QiOiI3YTc3OGUwMC1jZmIwLTExZTktYjI1Ni1lNzBlZmUyNmE5ODgiLCJhdWRpZW5jZSI6Inh1YW5kdWMiLCJpYXQiOjE1NzUzNDMwNTQsImV4cCI6MTU3NzkzNTA1NH0.qeDFMq3lRd4cgZpFpiq5EGBFSJziUz-yimSshk1uIXg" }, "referrer": "https://portal.acexis.com/lun/order", "referrerPolicy": "no-referrer-when-downgrade", "body": "{\"operationName\":\"ordersByUser\",\"variables\":{\"menuId\":\"5b3f45d2-1666-11ea-9545-9ff408c0ec7e\"},\"query\":\"query ordersByUser($menuId: String!) {\\n  ordersByUser(menuId: $menuId) {\\n    _id\\n    menuId\\n    dishId\\n    count\\n    note\\n    isConfirmed\\n    __typename\\n  }\\n}\\n\"}", "method": "POST", "mode": "cors" })
const resultCheckShouldOder = {
  data:
  {
    ordersByUser: [
      {
        count: 1,
        dishId: "66a16571-1666-11ea-9545-9ff408c0ec7e",
        isConfirmed: false,
        menuId: "5b3f45d2-1666-11ea-9545-9ff408c0ec7e",
        note: "",
        __typename: "Order",
        _id: "310bcc70-166b-11ea-9545-9ff408c0ec7e",
      }
    ]
  }
}
