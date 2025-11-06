# 📦 Inventory Management System (IMS)

A modern, cloud-native **Microservices-based Inventory Management System** built with Spring Boot, React, and deployed on Kubernetes. This system provides comprehensive inventory management capabilities including product management, supplier tracking, stock monitoring, and order processing.

![Microservices Architecture](https://img.shields.io/badge/Architecture-Microservices-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.5-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-orange)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

---

## 🎯 Features

- ✅ **Product Management** - Create, update, delete, and view products with categories and pricing
- ✅ **Supplier Management** - Manage supplier information and contact details
- ✅ **Stock Management** - Track inventory levels, locations, and stock movements
- ✅ **Order Processing** - Place orders with automatic stock deduction
- ✅ **Service Discovery** - Eureka-based service registration and discovery
- ✅ **API Gateway** - Centralized API routing and load balancing
- ✅ **Monitoring** - Prometheus metrics collection and Grafana dashboards
- ✅ **High Availability** - Multiple replicas for fault tolerance
- ✅ **Containerized** - Fully containerized with Docker
- ✅ **Kubernetes Ready** - Complete K8s manifests for production deployment

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                       │
│                    http://localhost:3001                      │
└───────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway (8081)                      │
│              Spring Cloud Gateway + Load Balancer            │
└─────┬──────┬──────┬──────┬──────┬───────────────────────────┘
      │      │      │      │      │
      ▼      ▼      ▼      ▼      ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Product │ │Supplier│ │ Stock  │ │ Order  │ │ Eureka │
│ (8082) │ │ (8083) │ │ (8084) │ │ (8085) │ │ (8761) │
└───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘
    │          │          │          │          │
    └──────────┴──────────┴──────────┴──────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   MySQL (3306)  │
                    │  (Per Service)  │
                    └─────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              Monitoring Stack                               │
│  ┌──────────────┐              ┌──────────────┐            │
│  │  Prometheus  │──────────────▶│   Grafana   │            │
│  │   (9090)     │              │   (3000)    │            │
│  └──────────────┘              └──────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

### Microservices

| Service | Port | Description | Database |
|---------|------|-------------|----------|
| **Eureka** | 8761 | Service Discovery Server | - |
| **API Gateway** | 8081 | Centralized API Routing | - |
| **Product** | 8082 | Product Management | `product_db` |
| **Supplier** | 8083 | Supplier Management | `supplier_db` |
| **Stock** | 8084 | Inventory Management | `stock_db` |
| **Order** | 8085 | Order Processing | `order_db` |
| **Prometheus** | 9090 | Metrics Collection | - |
| **Grafana** | 3000 | Monitoring Dashboards | - |
| **Frontend** | 80/3001 | React Web Application | - |

---

## 🛠️ Tech Stack

### Backend
- **Java** 24
- **Spring Boot** 3.5.5
- **Spring Cloud** 2025.0.0
  - Spring Cloud Gateway (API Gateway)
  - Netflix Eureka (Service Discovery)
  - OpenFeign (Service-to-Service Communication)
- **Spring Data JPA** (Database Access)
- **MySQL** 8 (Database)
- **Maven** (Build Tool)
- **Actuator** (Health Checks & Metrics)
- **Micrometer Prometheus** (Metrics Export)

### Frontend
- **React** 19.1.1
- **Bootstrap** 5.3.8
- **React Router** 6.30.1
- **Axios** 1.11.0
- **Nginx** (Production Server)

### DevOps & Infrastructure
- **Docker** (Containerization)
- **Docker Compose** (Local Orchestration)
- **Kubernetes** (Container Orchestration)
- **Prometheus** (Metrics Collection)
- **Grafana** (Monitoring & Visualization)

---

## 📁 Project Structure

```
cc-ec/
│
├── Backend/                          # Backend Microservices
│   ├── eureka/                      # Service Discovery Server
│   ├── apigateway/                  # API Gateway Service
│   ├── product/                     # Product Management Service
│   ├── supplier/                     # Supplier Management Service
│   ├── stock/                       # Stock Management Service
│   ├── order/                       # Order Processing Service
│   ├── prometheus/                   # Prometheus Configuration
│   └── docker-compose.yml           # Docker Compose Configuration
│
├── Frontend/                         # Frontend Application
│   └── ims/                         # React Application
│       ├── src/
│       │   ├── components/         # React Components
│       │   ├── product/            # Product Management UI
│       │   ├── supplier/           # Supplier Management UI
│       │   ├── stock/              # Stock Management UI
│       │   └── order/              # Order Management UI
│       ├── public/                 # Static Files
│       └── package.json            # Dependencies
│
└── k8s/                             # Kubernetes Manifests
    ├── namespace.yaml               # Kubernetes Namespace
    ├── mysql-statefulset.yaml      # MySQL Database
    ├── eureka-deployment.yaml      # Eureka Service
    ├── apigateway-deployment.yaml  # API Gateway
    ├── product-deployment.yaml     # Product Service
    ├── supplier-deployment.yaml    # Supplier Service
    ├── stock-deployment.yaml        # Stock Service
    ├── order-deployment.yaml       # Order Service
    ├── prometheus-deployment.yaml  # Prometheus
    ├── grafana-deployment.yaml     # Grafana
    ├── frontend-deployment.yaml    # Frontend
    ├── ingress.yaml                # Ingress Configuration
    └── deploy.ps1                   # Deployment Script
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java** 24 or higher
- **Maven** 3.9+
- **Node.js** 18+ and npm
- **Docker** 20.10+
- **Docker Compose** 2.0+
- **kubectl** (for Kubernetes deployment)
- **Kubernetes Cluster** (Docker Desktop, minikube, or cloud cluster)
- **MySQL** 8 (optional, if not using Docker)

---

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended for Development)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cc-ec
   ```

2. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

3. **Start all services**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:3001
   - API Gateway: http://localhost:8081
   - Eureka Dashboard: http://localhost:8761
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000

### Option 2: Kubernetes Deployment

1. **Ensure Kubernetes is running**
   ```bash
   kubectl cluster-info
   ```

2. **Navigate to k8s directory**
   ```bash
   cd k8s
   ```

3. **Deploy using automated script (Windows)**
   ```powershell
   .\deploy.ps1
   ```

   **Or deploy manually:**
   ```bash
   # Create namespace
   kubectl apply -f namespace.yaml
   
   # Deploy MySQL
   kubectl apply -f mysql-statefulset.yaml
   
   # Wait for MySQL (30-60 seconds)
   kubectl wait --for=condition=ready pod -l app=mysql -n ims --timeout=120s
   
   # Deploy Eureka
   kubectl apply -f eureka-deployment.yaml
   
   # Deploy Microservices
   kubectl apply -f product-deployment.yaml
   kubectl apply -f supplier-deployment.yaml
   kubectl apply -f stock-deployment.yaml
   kubectl apply -f order-deployment.yaml
   
   # Deploy API Gateway
   kubectl apply -f apigateway-deployment.yaml
   
   # Deploy Monitoring & Frontend
   kubectl apply -f prometheus-deployment.yaml
   kubectl apply -f grafana-deployment.yaml
   kubectl apply -f frontend-deployment.yaml
   ```

4. **Access services via port-forwarding**
   ```bash
   # Eureka
   kubectl port-forward svc/eureka 8761:8761 -n ims
   
   # API Gateway
   kubectl port-forward svc/apigateway 8081:8081 -n ims
   
   # Frontend
   kubectl port-forward svc/frontend 3001:80 -n ims
   
   # Prometheus
   kubectl port-forward svc/prometheus 9090:9090 -n ims
   
   # Grafana
   kubectl port-forward svc/grafana 3000:3000 -n ims
   ```

---

## 🔌 API Endpoints

All API endpoints are accessible through the API Gateway at `http://localhost:8081`

### Product Service
```
GET    /api/products           # Get all products
GET    /api/products/{id}      # Get product by ID
POST   /api/products           # Create new product
PUT    /api/products/{id}      # Update product
DELETE /api/products/{id}      # Delete product
```

### Supplier Service
```
GET    /api/suppliers          # Get all suppliers
GET    /api/suppliers/{id}     # Get supplier by ID
POST   /api/suppliers          # Create new supplier
PUT    /api/suppliers/{id}     # Update supplier
DELETE /api/suppliers/{id}     # Delete supplier
```

### Stock Service
```
GET    /api/stocks             # Get all stocks
GET    /api/stocks/{id}        # Get stock by ID
GET    /api/stocks/product/{productId}  # Get stock by product ID
POST   /api/stocks             # Create new stock entry
PUT    /api/stocks/{id}        # Update stock
DELETE /api/stocks/{id}        # Delete stock
POST   /api/stocks/increase    # Increase stock quantity
POST   /api/stocks/decrease    # Decrease stock quantity
```

### Order Service
```
GET    /api/orders             # Get all orders
GET    /api/orders/{id}        # Get order by ID
POST   /api/orders             # Place new order (auto-decreases stock)
PUT    /api/orders/{id}        # Update order
DELETE /api/orders/{id}        # Delete order
```

---

## 🌐 Service URLs

### Development (Docker Compose)
| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3001 | React Application |
| API Gateway | http://localhost:8081 | Main API Entry Point |
| Eureka | http://localhost:8761 | Service Discovery Dashboard |
| Prometheus | http://localhost:9090 | Metrics Collection |
| Grafana | http://localhost:3000 | Monitoring Dashboards |

### Kubernetes (via Port-Forwarding)
| Service | Internal URL | External Access |
|---------|--------------|------------------|
| Frontend | `http://frontend.ims.svc.cluster.local:80` | Port-forward: 3001 |
| API Gateway | `http://apigateway.ims.svc.cluster.local:8081` | Port-forward: 8081 |
| Eureka | `http://eureka.ims.svc.cluster.local:8761` | Port-forward: 8761 |
| Prometheus | `http://prometheus.ims.svc.cluster.local:9090` | Port-forward: 9090 |
| Grafana | `http://grafana.ims.svc.cluster.local:3000` | Port-forward: 3000 |

---

## 🐳 Docker Images

All images are available on Docker Hub:

```bash
# Pull images
docker pull vp553/msa-ims:backend-eureka
docker pull vp553/msa-ims:backend-apigateway
docker pull vp553/msa-ims:backend-product
docker pull vp553/msa-ims:backend-supplier
docker pull vp553/msa-ims:backend-stock
docker pull vp553/msa-ims:backend-order
docker pull vp553/msa-ims:ims-frontend
docker pull vp553/msa-ims:prometheus
docker pull vp553/msa-ims:grafana
docker pull vp553/msa-ims:mysql
```

---

## 🔍 Monitoring & Observability

### Prometheus Metrics
- All Spring Boot services expose metrics at `/actuator/prometheus`
- Prometheus scrapes metrics every 15 seconds
- Access Prometheus UI: http://localhost:9090

### Grafana Dashboards
- Default credentials: `admin/admin`
- Access Grafana UI: http://localhost:3000
- Configure Prometheus as data source: `http://prometheus.ims.svc.cluster.local:9090`

### Health Checks
- All services expose health endpoints at `/actuator/health`
- Kubernetes liveness and readiness probes configured

---

## 🧪 Testing

### Backend Testing
```bash
# Run tests for a specific service
cd Backend/product
mvn test

# Run all tests
cd Backend
mvn test
```

### Frontend Testing
```bash
cd Frontend/ims
npm test
```

### API Testing
```bash
# Test Product API
curl http://localhost:8081/api/products

# Create a product
curl -X POST http://localhost:8081/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","category":"Electronics","price":99.99,"description":"Test description"}'
```

---

## 🛠️ Development

### Running Services Locally

1. **Start MySQL**
   ```bash
   docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:8
   ```

2. **Start Eureka**
   ```bash
   cd Backend/eureka
   mvn spring-boot:run
   ```

3. **Start Microservices** (in separate terminals)
   ```bash
   cd Backend/product
   mvn spring-boot:run
   ```

4. **Start Frontend**
   ```bash
   cd Frontend/ims
   npm start
   ```

### Building Docker Images

```bash
# Build individual service
cd Backend/product
docker build -t product-service:latest .

# Build frontend
cd Frontend/ims
docker build -t ims-frontend:latest .
```

---

## 📊 Database Schema

Each microservice has its own database:

- **product_db** - Products table
- **supplier_db** - Suppliers table
- **stock_db** - Stock table
- **order_db** - Orders table

Tables are auto-created by Hibernate on first startup.

---

## 🔐 Configuration

### Environment Variables

Key environment variables for services:

- `SPRING_DATASOURCE_URL` - Database connection URL
- `EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE` - Eureka server URL
- `SERVER_PORT` - Service port
- `SPRING_APPLICATION_NAME` - Service name

### Application Properties

Each service has its own `application.properties` file with:
- Database configuration
- Eureka client configuration
- Actuator endpoints configuration
- Prometheus metrics configuration

---

## 🚨 Troubleshooting

### Common Issues

**Services not starting:**
```bash
# Check logs
docker-compose logs <service-name>
# Or for Kubernetes
kubectl logs <pod-name> -n ims
```

**MySQL connection errors:**
- Wait 30-60 seconds for MySQL to initialize
- Verify MySQL is running: `docker ps | grep mysql`

**Services not registering with Eureka:**
- Check Eureka URL in application.properties
- Verify Eureka is accessible: http://localhost:8761

**Port conflicts:**
- Change ports in `docker-compose.yml` or Kubernetes manifests
- Check if ports are in use: `netstat -an | grep <port>`

---

## 📝 API Documentation

### Example API Calls

**Create Product:**
```bash
curl -X POST http://localhost:8081/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "category": "Electronics",
    "price": 999.99,
    "description": "High-performance laptop"
  }'
```

**Place Order:**
```bash
curl -X POST http://localhost:8081/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "productId": 1,
    "quantity": 5
  }'
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the amazing frontend library
- Kubernetes community for container orchestration
- All open-source contributors

---

## 📚 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://react.dev/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Microservices Patterns](https://microservices.io/patterns/)

---

## 📈 Project Status

✅ **Completed Features:**
- Product Management
- Supplier Management
- Stock Management
- Order Processing
- Service Discovery
- API Gateway
- Monitoring & Metrics
- Docker Containerization
- Kubernetes Deployment

🚧 **Future Enhancements:**
- Authentication & Authorization
- API Rate Limiting
- Circuit Breaker Pattern
- Distributed Tracing
- Automated Testing
- CI/CD Pipeline

---

**⭐ If you find this project helpful, please give it a star!**

