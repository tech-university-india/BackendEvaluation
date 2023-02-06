const express = require('express')
const app = express()
const cors = require('cors')
const sleep = require('sleep-promise')
const { faker } = require('@faker-js/faker')
const { companies, sectors } = require('./constants');

const port = 4000;
app.use(cors())

app.get('/company/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: 'CMP_INC_INPUT' });
  }

  if (!companies[id]) {
    return res.status(404).send({ error: 'CMP_NOT_FOUND' });
  }

  console.log('Got req for: ', id);

  await sleep(faker.datatype.number({ min: 1, max: 3 }) * 500);
  console.log('Sent res for: ', id);
  res.send({
    id,
    name: companies[id],
    description: faker.lorem.paragraph(),
    ceo: faker.name.findName(),
    tags: Array.from({
      length: faker.datatype.number({
        min: 5,
        max: 10
      })
    }).map(_ => faker.company.bsAdjective()),
  });
})

app.get('/sector', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send({ error: 'SEC_INC_INPUT' });
  }

  if (!sectors[name]) {
    return res.status(404).send({ error: 'SEC_NOT_FOUND' });
  }

  console.log('Got req for: ', name);

  await sleep(faker.datatype.number({ min: 2, max: 4 }) * 500);
  console.log('Sent res for: ', name);
  res.send(sectors[name]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})