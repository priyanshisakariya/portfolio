# ✈️ Flight Crew Management System

An enterprise-grade, full-stack aviation operations and crew scheduling platform. Built with **React.js + Vite** on the frontend and **Python 3.x + FastAPI + SQLAlchemy** on the backend, featuring real-time schedule conflict prevention, pilot and cabin crew rostering, flight availability tracking, and dedicated operations dashboards.

---

## 🌟 Key Features

### 1. 🛡️ Intelligent Flight Crew Conflict Engine
- **Automated Overlap Detection**: Prevents assigning the same cockpit or cabin crew member to flights whose departure, transit, or turnaround windows intersect.
- **Real-Time Pre-Validation**: Visual feedback indicates whether candidate crew members are cleared for flight duty before finalizing assignments.
- **Roster & Quota Safeguards**: Monitors minimum pilot (Captain), First Officer, and Cabin Crew operational requirements per aircraft sector.
- **Availability & Leave Verification**: Automatically checks if a crew member is marked *Inactive*, *Unavailable*, or *On Leave* on the scheduled flight date.

### 2. 🎛️ Operations Admin Control Portal
- **Operations Dashboard**: Real-time fleet metrics (Total Crew, Pilots, Cabin Crew, Total Flights, Pending Assignments, Active Hubs), with actionable alerts for unassigned flights.
- **Manage Crew**: Full lifecycle management of certified aviation personnel (Pilots, First Officers, Airhosts, Airhostesses, Flight Attendants). Search and filter by role, base airport hub, and status.
- **Manage Flights**: Schedule flight sectors across major hubs (Ahmedabad, Mumbai, Delhi, Bangalore, etc.), with route visuals, aircraft models, and crew capacity requirements.
- **Crew Availability**: Dedicated shift calendar tracking daily available duty hours and leave approvals.
- **Assign Crew**: Interactive 3-step assignment console with instant conflict analysis, capacity meters, and unassignment capabilities.
- **Flight Schedule**: Switch seamlessly between calendar timeline cards and tabular flight manifests.
- **Operational Reports**: Visual analytics of crew distribution by specialty, base hub allocation, and top active crew rankings.
- **System Settings**: Configurable turnaround buffers, rest interval minimums, and airline headquarters settings.

### 3. 👩‍✈️ Crew Personal Portal
- **Personalized Roster Dashboard**: Immediate *Next Flight* briefing card (route, departure countdown, reporting instructions), current monthly sector count, and duty status.
- **My Profile**: Certified aviation credentials, ATPL/CPL license details, base station hub, and editable emergency contact information.
- **My Assigned Flights**: Comprehensive list of flight sectors assigned to the crew member with interactive route visuals and crew manifests.
- **Duty Schedule**: Structured breakdown of pre-flight briefings (45 min prior), takeoff, landing, and turnaround rest cycles.
- **Availability Submission**: Self-service portal to submit shift availability or request medical/personal leave.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React.js 19 with Vite 8 |
| **Routing** | React Router DOM 7 |
| **Styling** | Vanilla CSS Design System (Deep Aviation Navy `#071A2B`, Aviation Blue `#1677FF`, Sky Blue `#38BDF8`, Aurora Cyan `#22D3EE`) |
| **Icons & Typography** | React Icons (Material Design & Ionicons), Google Fonts (Outfit & Plus Jakarta Sans) |
| **HTTP Client** | Axios with automatic JWT Bearer token injection and error interceptors |
| **Backend API** | Python 3.13 / FastAPI |
| **ORM & Database** | SQLAlchemy 2.0 with SQLite (ready for PostgreSQL/MySQL) |
| **Validation** | Pydantic v2 schemas and Email-Validator |
| **Security & Auth** | JWT (JSON Web Tokens) with PyJWT and Bcrypt password hashing |
| **API Docs** | Interactive OpenAPI / Swagger UI at `/docs` |

---

## 📁 Project Folder Structure

```text
Flight Crew Management System/
├── backend/
│   ├── app/
│   │   ├── models/             # SQLAlchemy ORM Models
│   │   │   ├── user.py         # User credentials & authentication
│   │   │   ├── crew.py         # Crew personnel details & licenses
│   │   │   ├── flight.py       # Flight sectors & required crew quotas
│   │   │   ├── availability.py # Daily shift windows & leave status
│   │   │   └── assignment.py   # Flight crew duty assignments
│   │   ├── schemas/            # Pydantic validation schemas
│   │   │   ├── auth.py
│   │   │   ├── crew.py
│   │   │   ├── flight.py
│   │   │   ├── availability.py
│   │   │   ├── assignment.py
│   │   │   └── dashboard.py
│   │   ├── routers/            # FastAPI REST endpoints
│   │   │   ├── auth.py         # Login, register, me
│   │   │   ├── crew.py         # Crew CRUD & filtering
│   │   │   ├── flights.py      # Flight CRUD & status
│   │   │   ├── availability.py # Availability management
│   │   │   ├── assignments.py  # Conflict detection & assignment
│   │   │   └── dashboard.py    # Analytics & reports
│   │   ├── services/           # Core Aviation Business Logic
│   │   │   └── conflict_service.py # Flight time overlap & capacity checking
│   │   ├── utils/
│   │   │   └── security.py     # Bcrypt & JWT helper routines
│   │   ├── config.py           # Configuration & environment loader
│   │   ├── database.py         # SQLAlchemy engine & session factory
│   │   ├── seed.py             # Automatic realistic test data seed
│   │   └── main.py             # FastAPI entry point & CORS
│   ├── .env.example            # Environment variables template
│   └── requirements.txt        # Backend Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable aviation UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── DashboardCard.jsx
│   │   │   ├── FlightRouteVisual.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ConfirmDialog.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── layouts/
│   │   │   ├── AdminLayout.jsx
│   │   │   └── CrewLayout.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx       # Aviation split login with 1-click demo accounts
│   │   │   ├── NotFound.jsx    # 404 flight route error page
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── ManageCrew.jsx
│   │   │   │   ├── ManageFlights.jsx
│   │   │   │   ├── CrewAvailability.jsx
│   │   │   │   ├── AssignCrew.jsx
│   │   │   │   ├── FlightSchedule.jsx
│   │   │   │   ├── Reports.jsx
│   │   │   │   └── Settings.jsx
│   │   │   └── crew/
│   │   │       ├── CrewDashboard.jsx
│   │   │       ├── MyProfile.jsx
│   │   │       ├── MyFlights.jsx
│   │   │       ├── DutySchedule.jsx
│   │   │       └── CrewAvailabilityPage.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx # JWT state & global toast system
│   │   ├── services/
│   │   │   └── api.js          # Centralized Axios API service
│   │   ├── index.css           # Master Aviation Design System
│   │   ├── App.jsx             # React Router routing configuration
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── test_e2e.py                 # Comprehensive 13-step automated test suite
└── README.md
```

---

## 🔑 Default Login Credentials

The application automatically seeds realistic accounts on first startup. You can also use the **1-Click Demo Buttons** on the `/login` screen:

### 👑 Operations Administrator
- **Email:** `admin@flightcrew.com`
- **Password:** `Admin@123`
- **Role:** Administrator / Operations Controller

### ✈️ Cabin Crew (Airhostess)
- **Email:** `priya@flightcrew.com`
- **Password:** `Crew@123`
- **Name:** Priya Singh (Crew ID: `C007`, Base: `AMD`)

### 👨‍✈️ Cockpit Commander (Pilot)
- **Email:** `rajesh@flightcrew.com`
- **Password:** `Crew@123`
- **Name:** Capt. Rajesh Sharma (Crew ID: `C001`, Base: `AMD`)

### 🛫 First Officer (Co-Pilot)
- **Email:** `rohan@flightcrew.com`
- **Password:** `Crew@123`
- **Name:** FO Rohan Mehra (Crew ID: `C004`, Base: `AMD`)

---

## 🚀 How to Run Locally

### Prerequisites
- Python 3.10+
- Node.js 18+ and npm

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install required packages
pip install -r requirements.txt

# Start the FastAPI server (auto-seeds database on first launch)
python -m uvicorn app.main:app --reload --port 8000
```

The API and interactive Swagger documentation will be available at:
- **API URL:** `http://127.0.0.1:8000`
- **Swagger Documentation:** `http://127.0.0.1:8000/docs`
- **ReDoc Documentation:** `http://127.0.0.1:8000/redoc`

### 2. Frontend Setup

In a new terminal window:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Open your browser at `http://127.0.0.1:5173`.

---

## 🧪 Automated Testing

A complete automated test suite (`test_e2e.py`) verifies all 13 core operational workflows:

```bash
python test_e2e.py
```

### Verified Scenarios:
1. Root health check & API OpenAPI endpoint
2. React frontend server delivery
3. Admin authentication & JWT token generation
4. Admin analytics calculation
5. Pilot crew member registration
6. Flight scheduling across airport sectors
7. Shift availability configuration
8. Pre-validation candidate checking
9. Crew assignment to flight
10. **Strict schedule overlap conflict detection & rejection (HTTP 409)**
11. Crew member authentication
12. Personalized crew dashboard & next flight briefing
13. Operational report generation

---

## 🎨 Design System Highlights

- **Deep Aviation Navy (`#071A2B`) & Midnight Blue (`#0D2A43`)**: Foundation for all navigational sidebars and header overlays.
- **Aviation Blue (`#1677FF`) & Sky Blue (`#38BDF8`)**: Primary action buttons, active navigation markers, and flight route indicators.
- **Flight Route Visualizer**: Dynamic visual representation of flight corridors: `AMD ────── ✈ ────── BOM` with scheduled departure and arrival timestamps.
- **Pulsing Status Dots**: Live visual heartbeat indicating on-time operations and active duty personnel.
- **Zero Bootstrap**: Custom Vanilla CSS components engineered specifically for aviation command centers.

---

## 📄 License
MIT License. Built for Airline Operations & Flight Crew Dispatch.

