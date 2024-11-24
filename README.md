# 🤖 RoboTICs - Backend Project

This repository is part of a class project for the **Mobile Device Programming** course in the **Telecommunications Engineering Program** at **Unidades Tecnológicas de Santander (UTS)**. The goal of the project is to build the backend for a robotics academy called **RoboTICs**.


## 🧑‍💻 Project Members

- Amaya Ríos Franz Hederich
- Fernández Suárez Cesar Cristopher
- Vasquez Lopez Jhon Sebastian

## 🖥️🎥📽️ Project Video 


Links YouTube 🎬 🎥 🔴 ▶ : 

Video explaining the Backend ⚙️📡💾: https://youtu.be/BIaqepDM_SM

Video explaining the Frontend 🎨💻✨: https://youtu.be/94oWN0yyUK0 

## 
![Logo de RoboTICs](./RoboTICs_logo.webp)

## Table of Contents
- [Project Members](#-project-members)
- [Project Status](#-project-status)
- [Database Structure](#-database-structure)
  - [Tables](#tables)
  - [Relationships](#relationships)
- [API Documentation](#api-documentation)
  - [Students Endpoints](#students-endpoints)
  - [Courses Endpoints](#courses-endpoints)
- [Setup and Installation](#setup-and-installation)
- [Running the Server](#running-the-server)
- [Next Steps](#-next-steps)

## 🚀 Project Status

Currently, this repository contains the structure of the **database** required for the operation of the **RoboTICs** robotics academy, as well as a basic API for accessing student and course information.

## 📊 Database Structure

![RoboTICs MER](./RoboTICs_MER.webp)

### 📋 Tables

<details>
  <summary><strong>Click to expand table details</strong></summary>

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

  **📝 Table: Enrollments**
  
  - **Purpose**: Records student enrollments in courses.
  - **Fields**:
    - `id`: Unique identifier for the enrollment.
    - `student_id`: Reference to the enrolled student.
    - `course_id`: Reference to the enrolled course.
    - `enrollment_date`: Enrollment date.
  
  **📊 Table: Inventory**
  
  - **Purpose**: Stores information about material inventory.
  - **Fields**:
    - `id`: Unique identifier for the inventory.
    - `material_id`: Reference to the material in inventory.
    - `quantity`: Current quantity in inventory.
    - `last_updated`: Date and time of the last update.
  
  **🧑‍🏫 Table: Instructors**
  
  - **Purpose**: Stores information about the instructors.
  - **Fields**:
    - `id`: Unique identifier for the instructor.
    - `name`: Instructor's name.
    - `email`: Unique email address of the instructor.
    - `hire_date`: Instructor's hire date.

  **🏫 Table: Classrooms**
  
  - **Purpose**: Stores information about the available classrooms.
  - **Fields**:
    - `id`: Unique identifier for the classroom.
    - `name`: Classroom name.
    - `capacity`: Classroom capacity.
    - `location`: Classroom location.
  
  **⏰ Table: Schedules**
  
  - **Purpose**: Stores the schedules for the courses.
  - **Fields**:
    - `id`: Unique identifier for the schedule.
    - `course_id`: Reference to the scheduled course.
    - `instructor_id`: Reference to the assigned instructor.
    - `classroom_id`: Reference to the assigned classroom.
    - `start_time`: Course start time.
    - `end_time`: Course end time.
  
  **🏢 Table: Organizations**
  
  - **Purpose**: Stores information about associated organizations.
  - **Fields**:
    - `id`: Unique identifier for the organization.
    - `name`: Organization name.
    - `contact_person`: Contact person.
    - `contact_email`: Unique contact email address.
    - `phone_number`: Contact phone number.

  **📑 Table: Service Requests**
  
  - **Purpose**: Records service requests from organizations.
  - **Fields**:
    - `id`: Unique identifier for the request.
    - `organization_id`: Reference to the requesting organization.
    - `course_id`: Reference to the requested course.
    - `request_date`: Request date.
    - `status`: Request status.
  
  **🕰️ Table: Class Sessions**
  
  - **Purpose**: Stores information about class sessions.
  - **Fields**:
    - `id`: Unique identifier for the class session.
    - `course_id`: Reference to the course of the session.
    - `organization_id`: Reference to the associated organization.
    - `instructor_id`: Reference to the session instructor.
    - `classroom_id`: Reference to the classroom used.
    - `session_date`: Session date.
    - `start_time`: Session start time.
    - `end_time`: Session end time.
    - `student_count`: Number of students present.
    - `materials_used`: Materials used in the session.
  
  **🛠️ Table: Class Session Materials**
  
  - **Purpose**: Records the materials used in each class session.
  - **Fields**:
    - `id`: Unique identifier for the record.
    - `class_session_id`: Reference to the class session.
    - `material_id`: Reference to the material used.
    - `quantity_used`: Quantity of material used.

</details>

### 🧩 Relationships

<details>
  <summary><strong>Click to expand relationship details</strong></summary>

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

## API Documentation

The RoboTICs API provides access to student and course information for the Robotics Academy.

### Students Endpoints

#### Get All Students
- **URL:** `/students`
- **Method:** `GET`
- **Description:** Returns a list of all students enrolled in the robotics academy.

<details>
  <summary><strong>Example Response</strong></summary>

```json
[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "enrollment_date": "2023-01-15"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "enrollment_date": "2023-02-20"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "enrollment_date": "2023-03-10"
  }
]
```

</details>

#### Get Student by ID
- **URL:** `/students/:id`
- **Method:** `GET`
- **Description:** Returns the details of a specific student by their ID.
- **URL Parameters:**
  - `id`: The ID of the student to retrieve

<details>
  <summary><strong>Example Response</strong></summary>

```json
{
  "id": 1,
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "enrollment_date": "2023-01-15"
}
```

</details>

<details>
  <summary><strong>Error Response</strong></summary>

```json
{
  "message": "Student not found"
}
```

</details>

### Courses Endpoints

#### Get All Courses
- **URL:** `/courses`
- **Method:** `GET`
- **Description:** Returns a list of all courses offered by the robotics academy.

<details>
  <summary><strong>Example Response</strong></summary>

```json
[
  {
    "id": 1,
    "name": "Introduction to Robotics",
    "description": "Learn the basics of robotics, including sensors, actuators, and basic programming.",
    "start_date": "2023-04-01",
    "end_date": "2023-06-30"
  },
  {
    "id": 2,
    "name": "Programming Autonomous Vehicles",
    "description": "Understand the principles behind programming self-driving cars and drones.",
    "start_date": "2023-05-01",
    "end_date": "2023-07-31"
  },
  {
    "id": 3,
    "name": "AI for Robotics",
    "description": "Learn how artificial intelligence is applied in robotics to enhance autonomy and decision-making.",
    "start_date": "2023-06-01",
    "end_date": "2023-08-31"
  }
]
```

</details>

#### Get Course by ID
- **URL:** `/courses/:id`
- **Method:** `GET`
- **Description:** Returns the details of a specific course by its ID.
- **URL Parameters:**
  - `id`: The ID of the course to retrieve

<details>
  <summary><strong>Example Response</strong></summary>

```json
{
  "id": 1,
  "name": "Introduction to Robotics",
  "description": "Learn the basics of robotics, including sensors, actuators, and basic programming.",
  "start_date": "2023-04-01",
  "end_date": "2023-06-30"
}
```

</details>

<details>
  <summary><strong>Error Response</strong></summary>

```json
{
  "message": "Course not found"
}
```

</details>

## Setup and Installation

1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.

## Running the Server

To start the server, run the following command in your terminal:

```
node index.js
```

The server will start running on `http://localhost:3000`.

## 📅 Next Steps

In future phases, we will:
1. Implement additional API endpoints for other database tables.
2. Integrate authentication and authorization mechanisms.

3. Develop a front-end interface for the RoboTICs academy.
