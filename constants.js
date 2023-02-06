
const { faker } = require('@faker-js/faker')

const generatePI = () => [{
    key: "cpi",
    value: faker.datatype.float({
        min: 0,
        max: 1,
        precision: 0.01
    })
}, {
    key: "cf",
    value: faker.datatype.number({
        min: 50000,
        max: 1000000
    })
}, {
    key: "mau",
    value: faker.datatype.float({
        min: 0,
        max: 1,
        precision: 0.01
    })
}, {
    key: "roic",
    value: faker.datatype.float({
        min: 5,
        max: 25,
        precision: 0.01
    })
}]


const companies = {
    "95b5a067-808a-44a9-a490-b4ef8a045f61": "Volkswagen",
    "728ae3b7-89dd-41eb-9608-4fc20c839d4c": "Mercedes",
    "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc": "Apple",
    "8727cc61-8c4b-4285-8853-2db808392c04": "Google",
    "e90a7bc7-47fa-49af-bfa1-391fe7768b56": "Meta",
    "b6472c52-732a-4fd2-a463-ae604c0a2c79": "Microsoft",
    "ed4fc91d-8ac8-4882-a9e9-071a88423ca5": "Walmart",
    "c144e397-bef9-4aa1-aef4-842f4da44f9c": "Ebay",
    "24ca0568-d946-4c14-a0d7-eb81295b7a9e": "D-Mart",
    "296247ef-c553-4704-ad67-0878c87ff729": "HDFC",
    "c1634e16-17c8-42f6-8513-b8c50a4f230c": "Axis",
    "e245b12c-5b3b-4a83-a4ad-391974b34a37": "IDFC"
}

const sectors = {
    "Automobile": [{
        companyId: "95b5a067-808a-44a9-a490-b4ef8a045f61",
        performanceIndex: generatePI(),
    },
    {
        companyId: "9232234as-808a-44a9-a490-b4ef8a045f61",
        performanceIndex: generatePI(),
    },
    {
        companyId: "728ae3b7-89dd-41eb-9608-4fc20c839d4c",
        performanceIndex: generatePI(),
    }],
    "Retail": [{
        companyId: "c144e397-bef9-4aa1-aef4-842f4da44f9c",
        performanceIndex: generatePI(),
    },
    {
        companyId: "24ca0568-d946-4c14-a0d7-eb81295b7a9e",
        performanceIndex: generatePI(),
    },
    {
        companyId: "6ccd0813-186f-4294-a745-ec41a1faa3dee",
        performanceIndex: generatePI(),
    },
    {
        companyId: "ed4fc91d-8ac8-4882-a9e9-071a88423ca5",
        performanceIndex: generatePI(),
    }, {
        companyId: "98d8ee22-e4da-4782-8dcd-52509c986930",
        performanceIndex: generatePI(),
    }],
    "Banking": [{
        companyId: "296247ef-c553-4704-ad67-0878c87ff729",
        performanceIndex: generatePI(),
    },
    {
        companyId: "aef1cc38-48e0-40aa-b1e3-6bc5b04df02c",
        performanceIndex: generatePI(),
    },
    {
        companyId: "c1634e16-17c8-42f6-8513-b8c50a4f230c",
        performanceIndex: generatePI(),
    },
    {
        companyId: "e245b12c-5b3b-4a83-a4ad-391974b34a37",
        performanceIndex: generatePI(),
    },
    {
        companyId: "27b89585-ea3f-43d7-b1e6-a34a5012e28c",
        performanceIndex: generatePI(),
    }],
    "Software": [{
        companyId: "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
        performanceIndex: generatePI(),
    },
    {
        companyId: "8727cc61-8c4b-4285-8853-2db808392c04",
        performanceIndex: generatePI(),
    },
    {
        companyId: "e90a7bc7-47fa-49af-bfa1-391fe7768b56",
        performanceIndex: generatePI(),
    },
    {
        companyId: "b6472c52-732a-4fd2-a463-ae604c0a2c79",
        performanceIndex: generatePI(),
    }]
}

module.exports = { companies, sectors };