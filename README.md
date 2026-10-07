🚗 Car Rental Management System

📌 Project Overview

The Car Rental Management System is a web-based project designed to make the process of renting and managing vehicles easier, faster, and more organized.

The system is designed for a car rental company where different users have different responsibilities. There are four main types of users:

1. 👨‍💼 Admin
2. 👤 Customer
3. 👨‍✈️ Driver
4. 🔧 Worker

Each user has a different role, responsibility, and set of activities in the system.

The project will be developed in two main phases:

- Phase 1 — Frontend Development
- Phase 2 — Backend Development

The frontend will initially be developed using simple HTML so that the structure and functionality of the website can be clearly understood before connecting it to the backend and database.

---

🎯 Project Objectives

The main objectives of this project are:

- To create a simple and organized car rental system.
- To allow customers to browse and rent available cars.
- To allow administrators to manage the complete system.
- To manage drivers and their assigned trips.
- To manage workers and vehicle maintenance tasks.
- To keep customer, vehicle, booking, and staff information organized.
- To reduce manual work in car rental management.
- To provide different dashboards according to user roles.
- To develop the project step-by-step using frontend and backend technologies.

---

👥 User Roles

The system has four different users. Each user has a unique purpose and responsibility.

---

👨‍💼 1. Admin

Role

The Admin is the main controller of the system.

The admin manages the overall car rental business and has access to important system information.

Main Responsibilities

- Manage customers.
- Manage drivers.
- Manage workers.
- Add new cars.
- Update car information.
- Remove cars.
- Check car availability.
- Manage customer bookings.
- Approve or reject bookings.
- Assign drivers to trips.
- Assign workers to vehicle-related tasks.
- Monitor rental activities.
- View payments and reports.
- Manage system information.

Admin Pages

- Admin Registration
- Admin Dashboard
- Manage Users
- Manage Cars
- Manage Bookings
- Assign Driver
- Assign Worker
- Reports

---

👤 2. Customer

Role

The Customer is the person who rents a car from the company.

Customers can view available vehicles and make rental bookings.

Main Responsibilities

- Create a customer account.
- Login to the system.
- View available cars.
- Check car details.
- Check rental price.
- Select rental dates.
- Book a car.
- View booking status.
- View previous bookings.
- View payment information.
- Cancel eligible bookings.
- Submit reviews or feedback.

Customer Pages

- Customer Registration
- Customer Dashboard
- Available Cars
- Car Details
- Book a Car
- My Bookings
- Payment Information
- Reviews and Feedback

---

👨‍✈️ 3. Driver

Role

The Driver is responsible for driving the rental vehicle and completing assigned trips safely.

The driver does not manage the entire rental system. Instead, the driver mainly handles transportation-related activities.

Main Responsibilities

- Create a driver account.
- Provide driving license information.
- Login to the system.
- View assigned trips.
- View customer information related to assigned trips.
- View pickup and destination information.
- Accept or acknowledge assigned trips.
- Update trip status.
- Mark trips as completed.
- Report delays or problems.
- Report accidents or other incidents.
- View previous trips.

Driver Pages

- Driver Registration
- Driver Dashboard
- Assigned Trips
- Trip Details
- Trip Status
- Trip History
- Driver Reports

---

🔧 4. Worker

Role

The Worker is responsible for vehicle preparation, inspection, cleaning, and maintenance-related activities.

The worker's main responsibility is the condition of the vehicle, not driving the customer.

Main Responsibilities

- Create a worker account.
- Login to the system.
- View assigned vehicle tasks.
- Inspect vehicles.
- Check vehicle condition.
- Clean vehicles.
- Report vehicle damage.
- Report maintenance problems.
- Update maintenance status.
- Mark vehicles as ready for rental.
- Maintain vehicle inspection records.

Worker Pages

- Worker Registration
- Worker Dashboard
- Assigned Tasks
- Vehicle Inspection
- Maintenance Report
- Vehicle Status

---

🔄 Difference Between the Four Users

User| Main Responsibility
👨‍💼 Admin| Controls and manages the complete system
👤 Customer| Rents and books vehicles
👨‍✈️ Driver| Drives and completes assigned trips
🔧 Worker| Inspects, cleans, and maintains vehicles

Simple Example

A customer wants to rent a car.

Customer → Selects a car and makes a booking.

Admin → Checks and manages the booking and assigns a driver if required.

Worker → Checks and prepares the vehicle before the rental.

Driver → Takes the vehicle and completes the customer's trip.

This creates a clear connection between all four users while keeping their responsibilities separate.

---

🖥️ Common Pages

Some pages are available to all users.

🏠 Home Page

The home page introduces the car rental company and provides navigation to important sections.

It will contain:

- Company name
- Welcome message
- Available cars
- Services
- About the company
- Contact information
- Login link
- Registration links

🔐 Login Page

There will be one common login page for all four users.

Users will provide:

- Email/Username
- Password
- User Role

The backend will later verify the login information and direct the user to the correct dashboard.

---

📝 Registration Pages

Each user will have a separate registration page because every user requires different information.

Admin Registration

Basic administrator information.

Customer Registration

Customer information such as:

- Name
- Email
- Phone
- Address
- Password

Driver Registration

Driver information such as:

- Name
- Email
- Phone
- Address
- Driving License Number
- License Expiry Date
- Driving Experience
- Password

Worker Registration

Worker information such as:

- Name
- Email
- Phone
- Address
- Employee ID
- Department
- Skills
- Password

---

🚘 Car Management

The system will maintain information about rental vehicles.

Each car may contain:

- Car ID
- Car Name
- Brand
- Model
- Car Type
- Registration Number
- Number of Seats
- Rental Price
- Availability Status
- Maintenance Status

Example car types:

- Sedan
- SUV
- MPV
- Van

---

📅 Booking System

Customers will be able to book available cars.

A booking may contain:

- Booking ID
- Customer ID
- Car ID
- Pickup Date
- Return Date
- Pickup Location
- Total Rental Cost
- Booking Status

Possible booking statuses:

- Pending
- Approved
- Rejected
- Active
- Completed
- Cancelled

---

👨‍✈️ Driver Management

The admin can manage drivers and assign them to suitable trips.

Driver information may include:

- Driver ID
- Name
- Phone
- Driving License
- License Expiry
- Experience
- Availability
- Assigned Trip

---

🔧 Worker & Maintenance Management

Workers will handle vehicle-related tasks.

The system can store:

- Worker ID
- Vehicle ID
- Task ID
- Inspection Date
- Vehicle Condition
- Maintenance Details
- Damage Report
- Task Status

Possible task statuses:

- Assigned
- In Progress
- Completed

---

💰 Payment Management

The system will later include payment-related information.

Payment information may include:

- Payment ID
- Booking ID
- Customer ID
- Amount
- Payment Date
- Payment Method
- Payment Status

Possible payment methods:

- Cash
- Card
- Online Payment

---

⭐ Review and Feedback

Customers can provide feedback after completing a rental.

A review may contain:

- Review ID
- Customer ID
- Booking ID
- Rating
- Comment
- Review Date

---

🏗️ Project Development Phases

Phase 1 — Frontend

The first phase focuses only on the website interface and page structure.

Technology

HTML

The frontend will use simple HTML elements such as:

- Headings
- Paragraphs
- Links
- Tables
- Forms
- Input fields
- Buttons
- Lists

The initial frontend will intentionally remain simple and easy to understand.

Frontend Pages

- Home
- Login
- Available Cars
- About
- Contact
- Admin Registration
- Customer Registration
- Driver Registration
- Worker Registration
- Admin Dashboard
- Customer Dashboard
- Driver Dashboard
- Worker Dashboard
- Booking Pages
- Car Management Pages
- Driver Pages
- Worker Pages

---

⚙️ Phase 2 — Backend

After completing and testing the frontend, the backend will be developed.

The backend will provide actual functionality such as:

- User registration
- User authentication
- Role-based access
- Database storage
- Car management
- Booking management
- Driver assignment
- Worker assignment
- Vehicle maintenance records
- Payment records
- Reports

The frontend forms will eventually be connected to the backend.

---

🗄️ Planned Database

The backend will require a database to store system information.

Possible tables include:

Users
Customers
Drivers
Workers
Cars
Bookings
Payments
Trips
Maintenance
Reviews

The exact database structure will be finalized during the backend development phase.

---

📁 Project Structure

The frontend will be organized into separate folders according to user roles.

Car-Rental-System/
│
├── index.html
├── login.html
├── cars.html
├── about.html
├── contact.html
│
├── admin/
│   ├── admin-register.html
│   ├── admin-dashboard.html
│   ├── manage-users.html
│   ├── manage-cars.html
│   └── manage-bookings.html
│
├── customer/
│   ├── customer-register.html
│   ├── customer-dashboard.html
│   ├── book-car.html
│   └── my-bookings.html
│
├── driver/
│   ├── driver-register.html
│   ├── driver-dashboard.html
│   ├── assigned-trips.html
│   └── trip-history.html
│
└── worker/
    ├── worker-register.html
    ├── worker-dashboard.html
    ├── assigned-tasks.html
    └── vehicle-inspection.html

---

👨‍💻 Team Collaboration

This project is being developed as a group project using GitHub.

GitHub will be used for:

- Storing project files
- Sharing code between group members
- Tracking changes
- Working on different features
- Managing different branches
- Combining completed work
- Maintaining project history

Each group member can work on a separate part of the project and later merge the completed work into the main branch.

---

🌿 GitHub Workflow

A simple workflow will be followed:

main
 │
 ├── member-1
 │
 └── member-2

Each member can:

1. Create or use their own branch.
2. Work on assigned HTML pages.
3. Save the changes.
4. Commit the changes.
5. Push the branch to GitHub.
6. Create a Pull Request.
7. Review the changes.
8. Merge the completed work into "main".

---

🎯 Final Goal

The final goal is to create a complete Car Rental Management System where:

                 CAR RENTAL SYSTEM
                         │
        ┌────────────────┼────────────────┐
        │                │                │
      Admin           Customer          Staff
                                         │
                              ┌──────────┴──────────┐
                              │                     │
                           Driver                 Worker

The system will allow the four users to perform their own specific duties while working together as part of the same car rental business.

The project will start with a simple HTML frontend and will later be connected to a backend and database to create a functional car rental management system.

---

🚀 Current Project Status

Phase 1 — Frontend

Status: 🔄 In Progress

Currently working on:

- Home page
- Login page
- User registration pages
- User dashboards
- Car pages
- Booking pages
- Driver pages
- Worker pages

Phase 2 — Backend

Status: ⏳ Planned

Backend development will begin after the frontend structure is completed and tested.

---

📌 Project Summary

Project Name: Car Rental Management System

Project Type: Web-Based Management System

Users:

- Admin
- Customer
- Driver
- Worker

Development Approach:

1. Frontend
2. Backend
3. Database Integration
4. Testing

Current Technology:

- HTML

Future Technology:

- Backend technology
- Database
- Server-side authentication

---

👥 Team Project

This is a collaborative academic project developed using GitHub for source-code management and teamwork.

«Easy Car Rental — Your Journey, Our Responsibility 🚗»
