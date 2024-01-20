Para visualizar o diagrama instale a extensão https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid

```mermaid
sequenceDiagram
    actor User
    participant api_gateway
    participant api_store
    participant db_api_store_pgsql
    participant RabbitMQ

    User  ->>+ api_gateway: Init Create Register Flow
    api_gateway     ->>+ RabbitMQ:     amqp: request
    api_store     ->>+ RabbitMQ:      amqp: response
    api_store      ->>+ db_api_store_pgsql: tls: request
    
```