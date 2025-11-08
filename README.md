# 📦 Inventory Management System (IMS)

A modern, cloud-native Microservices-based Inventory Management System (IMS) built with Spring Boot, React, and deployed on Kubernetes. Powered by Jenkins CI/CD for automated builds and deployments, and hosted on AWS EC2 for scalable, production-grade cloud infrastructure. This system delivers comprehensive inventory management with product management, supplier tracking, real-time stock monitoring, and automated order processing — all containerized, monitored, and highly available.

![Microservices Architecture](https://img.shields.io/badge/Architecture-Microservices-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.5-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-orange)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red)
![AWS](https://img.shields.io/badge/AWS-EC2-yellow)

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
- ✅ **CI/CD Pipeline** – Automated with Jenkins  
- ✅ **Cloud Deployment** – Hosted on AWS EC2 


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
- **Docker** & **Docker Compose** (Containerization)
- **Jenkins** (CI/CD Automation)
- **Kubernetes** (Orchestration)
- **AWS EC2** (Cloud Deployment)
- **Prometheus** & **Grafana** (Monitoring & Visualization)

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
│   └── Jenkinsfile                   # CI/CD Pipeline Configuration
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
## 🖼️ Project Screenshots

Here are some key visuals from the **Inventory Management System (IMS)** showcasing various components and deployments.

### 🧩 Microservices & Docker Setup
![msa_docker](https://github.com/user-attachments/assets/b9bfa03b-4165-485e-a31d-18e04b9719e6)

---

### ⚙️ Jenkins CI/CD Pipeline
![msa_jenkins](https://github.com/user-attachments/assets/c47e26aa-b094-446f-8fc8-98f3728168cc)

---

### ☸️ Kubernetes Deployment
![msa_k8s1](https://github.com/user-attachments/assets/871fe2fe-58bd-471d-a80c-2229e5dc32a7)
![msa_k8s2](https://github.com/user-attachments/assets/573c86bd-0531-4b67-afc7-aa8da081ee22)

---

### 📊 Monitoring Dashboard
<img width="1919" height="1020" alt="ec2_prometheus" src="https://github.com/user-attachments/assets/a61a02f7-9d7f-4123-bc06-4d7855d2505f" />
<img width="1919" height="1013" alt="ec2_grafana" src="https://github.com/user-attachments/assets/2e9a63c9-1cba-4339-bca6-4c1ed65bd664" />

---

### 🧭 Service Discovery & Cloud Deployment
<img width="1919" height="1006" alt="ec2_eureka" src="https://github.com/user-attachments/assets/ebee21fc-1e50-4fd9-965f-4df1ab70b15d" />
<img width="1903" height="949" alt="msa_ec2" src="https://github.com/user-attachments/assets/5e192e0e-4715-4d11-a038-3d29747defad" />

---

### 💻 Frontend View
![msa_frontend](https://github.com/user-attachments/assets/c0f476d9-a5ea-43e2-b369-7f54e04fc3c0)

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
## ⚙️ Jenkins CI/CD Pipeline

The project uses **Jenkins** to automate the build and deployment process for backend microservices.

### 🧩 Pipeline Highlights
- Triggered automatically on code changes (`Build Now`).  
- Builds all microservices using **Maven**.  
- Builds **Docker images** for each service.  
- Tags and pushes updated images to **Docker Hub**.  
- Cleans up local images to save space.  

📄 The **Jenkinsfile** (located in `Backend/`) defines stages:
```
Checkout → Build → Docker Build → Push to DockerHub → Cleanup
```

This ensures a fully automated CI/CD workflow from code commit to image deployment.

---

## ☁️ AWS EC2 Deployment

All services were deployed on an **AWS EC2 instance (Amazon Linux 2023)** for cloud hosting and testing.

### Steps:
1. Provision EC2 instance (t2.medium or higher).  
2. Install **Docker** and **Docker Compose**.  
3. Pull all images from **DockerHub**.  
4. Deploy using `docker-compose up -d`.  
5. Access services using EC2 public IP.  

### Example:
```
Frontend:   http://<ec2-public-ip>:3001
Eureka:     http://<ec2-public-ip>:8761
API Gateway: http://<ec2-public-ip>:8081
Grafana:    http://<ec2-public-ip>:3000
```

This provides full microservices deployment on a **cloud-hosted environment** with **Prometheus-Grafana monitoring** and **Eureka registry** integration.

---

## 📊 Database Schema

Each microservice has its own database:

- **product_db** - Products table
- **supplier_db** - Suppliers table
- **stock_db** - Stock table
- **order_db** - Orders table

Tables are auto-created by Hibernate on first startup.

---
## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**⭐ If you find this project helpful, please give it a star!**

