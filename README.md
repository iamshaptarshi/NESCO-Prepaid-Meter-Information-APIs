# NESCO Meter Data API

A Node.js + Express MVC backend that extracts NESCO prepaid meter information from the NESCO Customer Portal using Axios and Cheerio, then exposes the data through REST APIs.

## Features

- Fetch customer meter information
- Fetch current balance
- Fetch meter details
- Fetch recharge history
- Download recharge history PDF
- Download certificate PDF
- MVC Architecture
- REST API
- JSON Responses
- CORS Enabled

---

## Technology Stack

- Node.js
- Express.js
- Axios
- Cheerio
- CORS

---

## Project Structure

```text
nesco-api/
│
├── server.js
│
├── routes/
│   └── meterRoutes.js
│
├── controllers/
│   └── meterController.js
│
├── services/
│   └── nescoService.js
│
├── parsers/
│   └── meterParser.js
│
├── config/
│   └── constants.js
│
├── .env
│
├── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
[git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/iamshaptarshi/NESCO-Prepaid-Meter-Information-APIs.git)
```

### Enter Project Directory

```bash
cd NESCO-Prepaid-Meter-Information-APIs
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the root directory.

```env
PORT=5000
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm start
```

---

## API Base URL

Local Development

```text
http://localhost:5000/api
```

Production

```text
https://your-domain.com/api
```

---

# API Endpoints

| Method | Endpoint                                | Description                   |
| ------ | --------------------------------------- | ----------------------------- |
| GET    | /api/health                             | Health Check                  |
| GET    | /api/meter/:custNo                      | Get Meter Information         |
| GET    | /api/meter/:custNo/recharge-history/pdf | Download Recharge History PDF |
| GET    | /api/meter/:custNo/certificate/pdf      | Download Certificate PDF      |

---

## Health Check

### Request

```http
GET /api/health
```

### Response

```json
{
  "success": true,
  "service": "NESCO API"
}
```

---

## Get Meter Information

### Request

```http
GET /api/meter/33900435
```

### Response

```json
{
  "success": true,
  "customer": {
    "name": "XXXX",
    "address": "MIRERCHAK GHORAMARA - 6100 BOALIA RAJSHAHI",
    "mobile": "+880194*****87",
    "office": "Rajshahi S&D1",
    "consumerNo": "33900435",
    "meterNo": "20410021308",
    "tariff": "LT-A",
    "meterType": "Single-Phase Meter",
    "meterStatus": "Install With Active",
    "installDate": "22/08/2024 17:05:25",
    "minimumRecharge": "235.2",
    "balance": "235.2"
  },

  "rechargeHistory": [],

  "endpoints": {
    "rechargeHistoryPdf": "/api/meter/33900436/recharge-history/pdf",
    "certificatePdf": "/api/meter/33900435/certificate/pdf"
  }
}
```

---

## Download Recharge History PDF

### Request

```http
GET /api/meter/33900436/recharge-history/pdf
```

### Response

```text
application/pdf
```

---

## Download Certificate PDF

### Request

```http
GET /api/meter/33900435/certificate/pdf
```

### Response

```text
application/pdf
```

---

# Example JavaScript Usage

```javascript
const response = await fetch("http://localhost:5000/api/meter/33900436");

const data = await response.json();

console.log(data);
```

---

# Example Axios Usage

```javascript
import axios from "axios";

const response = await axios.get("http://localhost:5000/api/meter/33900436");

console.log(response.data);
```

---

# Available Customer Fields

| Field           |
| --------------- |
| name            |
| fatherOrHusband |
| address         |
| mobile          |
| office          |
| feeder          |
| consumerNo      |
| meterNo         |
| sanctionedLoad  |
| tariff          |
| meterType       |
| meterStatus     |
| installDate     |
| minimumRecharge |
| balance         |

---

# Available Recharge History Fields

| Field             |
| ----------------- |
| orderId           |
| tokenNo           |
| seqNo             |
| meterRent         |
| demandCharge      |
| vat               |
| pfcCharge         |
| subsidy           |
| electricityAmount |
| rechargeAmount    |
| energyUnit        |
| method            |
| rechargeDate      |
| debtAmount        |
| paidAmount        |
| meterNo           |
| customerNo        |
| customerName      |
| tariff            |
| organization      |

---

# Deployment

## Render

Build Command

```bash
npm install
```

Start Command

```bash
npm start
```

---

# Notes

- Data is collected from the NESCO Customer Portal.
- This project does not use any official NESCO API.
- Data is extracted using Axios and Cheerio.
- Balance updates depend on NESCO portal data availability.

---

## Author

Md. Shaptarshi

Information and Communication Engineering Student

Bangladesh
