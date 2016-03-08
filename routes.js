'use strict'

const router = require('express').Router();
const fs = require('fs');

let contactsArr = []

router.post('/addContact', (req, res) => {
  contactsArr.push(req.body)
  fs.writeFile('contacts.json', JSON.stringify(contactsArr), (err)=> {
    res.send(contactsArr)
  })
})
router.get('/', (req, res) => {
  fs.readFile('contacts.json', (err, data) => {
    contactsArr = JSON.parse(data)
    res.send(contactsArr);
  })
})
// router.put('/update', (req, res) => {
//   let person = booksArr[req.body.index];
//   person.money = +person.money + +req.body.amount
//   booksArr[req.body.index] = person
//   fs.writeFile('books.json', JSON.stringify(booksArr), (err)=> {
//     res.send(booksArr)
//   })
// })






module.exports = router