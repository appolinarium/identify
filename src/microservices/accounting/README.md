# Authorization and acconting microservice
## POST
---
route:
`/`

headers: `Content-Type: application/json`

data: `{"clientPublicKey": "client GPG public key in pem format with deleted new line characters", "clientDigest": "SHA512 client private key digest"}`

---