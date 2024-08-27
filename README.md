# 🤖 RoboTICs - Backend Project

This repository is part of a class project for the **Mobile Device Programming** course in the **Telecommunications Engineering Program** at **Unidades Tecnológicas de Santander (UTS)**. The goal of the project is to build the backend for a robotics academy called **RoboTICs**.

![Logo de RoboTICs](./RoboTICs_logo.webp)

## 🧑‍💻 Project Members

- Santiago López
- Franz Amaya
- Jhon Vásquez
- Cristopher Fernández

## 🚀 Project Status

Currently, this repository contains only the structure of the **database** required for the operation of the **RoboTICs** robotics academy.

## 📊 Database Structure

<details>
  <summary><strong><i>📋 Tables</i></strong></summary>
  
  **🧑‍🎓 Table: Students**
  
  - **Purpose**: Stores information about the students.
  - **Fields**:
    - `id`: Unique identifier for the student.
    - `name`: Student's name.
    - `email`: Unique email address of the student.
    - `enrollment_date`: Student's enrollment date.
  
  **📦 Table: Materials**
  
  - **Purpose**: Stores information about the available materials.
  - **Fields**:
    - `id`: Unique identifier for the material.
    - `name`: Material name.
    - `description`: Material description.
    - `quantity`: Available quantity of the material.
    - `location`: Material location.
  
  **📘 Table: Courses**
  
  - **Purpose**: Stores information about the offered courses.
  - **Fields**:
    - `id`: Unique identifier for the course.
    - `name`: Course name.
    - `description`: Course description.
    - `start_date`: Course start date.
    - `end_date`: Course end date.

*📝 Table: Enrollments*
  
  - *Purpose*: Records student enrollments in courses.
  - *Fields*:
    - id: Unique identifier for the enrollment.
    - student_id: Reference to the enrolled student.
    - course_id: Reference to the enrolled course.
    - enrollment_date: Enrollment date.
  
  *📊 Table: Inventory*
  
  - *Purpose*: Stores information about material inventory.
  - *Fields*:
    - id: Unique identifier for the inventory.
    - material_id: Reference to the material in inventory.
    - quantity: Current quantity in inventory.
    - last_updated: Date and time of the last update.
  
  *🧑‍🏫 Table: Instructors*
  
  - *Purpose*: Stores information about the instructors.
  - *Fields*:
    - id: Unique identifier for the instructor.
    - name: Instructor's name.
    - email: Unique email address of the instructor.
    - hire_date: Instructor's hire date.

</details>

![Logo de RoboTICs](./RoboTICs_MER.webp)

<details>
  <summary><strong><i>🧩 Relationships</i></strong></summary>
  
  - **Students** to **Enrollments**: A student can be enrolled in multiple courses (1:N).
  - **Courses** to **Enrollments**: A course can have multiple enrolled students (1:N).
  - **Materials** to **Inventory**: A material can be in multiple inventory records (1:N).
  - **Courses** to **Schedules**: A course can have multiple schedules (1:N).
  - **Instructors** to **Schedules**: An instructor can have multiple schedules (1:N).
  - **Classrooms** to **Schedules**: A classroom can have multiple schedules (1:N).
  - **Organizations** to **Service Requests**: An organization can make multiple service requests (1:N).
  - **Courses** to **Service Requests**: A course can be related to multiple service requests (1:N).
  - **Courses** to **Class Sessions**: A course can have multiple class sessions (1:N).
  - **Organizations** to **Class Sessions**: An organization can have multiple class sessions (1:N).
  - **Instructors** to **Class Sessions**: An instructor can have multiple class sessions (1:N).
  - **Classrooms** to **Class Sessions**: A classroom can have multiple class sessions (1:N).
  - **Class Sessions** to **Class Session Materials**: A class session can use multiple materials (1:N).
  - **Materials** to **Class Session Materials**: A material can be used in multiple class sessions (1:N).

</details>

## 📅 Next Steps

In future phases, we will begin to implement frameworks for the backend and integrate the database with the necessary services for the **RoboTICs** academy.
