'use strict'

const router = require('express').Router();
const fs = require('fs');

let contactsArr = []

router.post('/addContact', (req, res) => {
  contactsArr = req.body
  fs.writeFile('contacts.json', JSON.stringify(contactsArr), (err)=> {
    res.send(contactsArr)
  })
})
router.get('/', (req, res) => {
  fs.readFile('contacts.json', (err, data) => {
    contactsArr = JSON.parse(data)
    console.log('contactsArr', contactsArr)

    res.send(contactsArr);
  })
})

router.delete('/delete/:index', (req, res) => {
 var index = req.params.index
 contactsArr.splice(index,1);
 fs.writeFile('contacts.json', JSON.stringify(contactsArr), (err)=> {
  res.send(contactsArr)
})
})






module.exports = router