# aiL - AI-Powered Multi-Modal Authentication Mobile App 🔐

![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![AI/ML](https://img.shields.io/badge/AI%2FML-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

aiL is a cutting-edge mobile application designed to offer secure and seamless user authentication using facial and voice recognition technologies. This project combines the power of artificial intelligence with modern mobile development to create a robust multi-modal authentication system.

## 🌟 Key Features

### 🔒 Multi-Modal Authentication
- **Dual-Factor Security**: Combines facial and voice recognition for enhanced security
- **Robust Verification**: Both authentication methods are required for successful login
- **Higher Accuracy**: Multi-modal approach ensures better identity verification

### ⚡ Real-Time AI Processing
- **Instant Processing**: Audio and image data processed in real-time
- **Advanced ML Models**: Utilizes cutting-edge machine learning algorithms
- **Immediate Feedback**: Users receive instant authentication results

### 📱 Intuitive User Interface
- **Sleek Design**: Modern and user-friendly interface
- **Smooth Navigation**: Guided registration and authentication flow
- **Accessible**: Easy-to-use design for all users

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** with **Expo** framework
- Cross-platform compatibility (iOS & Android)
- Real-time camera and microphone integration

### Backend
- **Flask** (Python web framework)
- Machine Learning model integration
- RESTful API architecture

### AI/ML Technologies
- Facial recognition algorithms
- Voice recognition and processing
- Real-time data analysis

## 📁 Project Structure

This project consists of two main repositories:

### 1. Mobile App (Frontend)
- **Repository**: [aiL Mobile App](https://github.com/ELMAALMIA/aiL.git)
- **Technology**: React Native + Expo
- **Features**: 
  - Camera integration for facial capture
  - Microphone integration for voice capture
  - Real-time UI feedback
  - Cross-platform compatibility

### 2. Backend & Web Frontend
- **Repository**: [Authentication App - Face & Voice](https://github.com/Amine-H-Filali/-Authentication-App-Face-Voice-.git)
- **Technology**: Flask + React
- **Features**:
  - ML model serving
  - Authentication API endpoints
  - Web-based management interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Mobile App Setup

1. **Clone the mobile app repository**
   ```bash
   git clone https://github.com/ELMAALMIA/aiL.git
   cd aiL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/emulator**
   - Scan QR code with Expo Go app
   - Press `a` for Android emulator
   - Press `i` for iOS simulator

### Backend Setup

1. **Clone the backend repository**
   ```bash
   git clone https://github.com/Amine-H-Filali/-Authentication-App-Face-Voice-.git
   cd Authentication-App-Face-Voice-
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the Flask server**
   ```bash
   python app.py
   ```

## 📱 Usage

### Registration Process
1. **Facial Registration**: Capture facial data using the front camera
2. **Voice Registration**: Record voice samples for training
3. **Profile Creation**: Complete user profile setup

### Authentication Process
1. **Facial Verification**: Present face to camera for recognition
2. **Voice Verification**: Speak the prompted phrase
3. **Access Granted**: Successful authentication grants app access

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
ML_MODEL_PATH=path/to/your/models
```

### API Endpoints
- `POST /api/register/face` - Register facial data
- `POST /api/register/voice` - Register voice data
- `POST /api/authenticate` - Authenticate user
- `GET /api/user/profile` - Get user profile

## 🧪 Testing

### Mobile App Testing
```bash
npm test
```

### Backend Testing
```bash
python -m pytest tests/
```

## 📊 Project Timeline
**Duration**: May 2024 - June 2024  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Team

- **Mobile Development**: [ELMAALMIA](https://github.com/ELMAALMIA)
- **Backend Development**: [Amine-H-Filali](https://github.com/Amine-H-Filali)

## 🔗 Links

- [Mobile App Repository](https://github.com/ELMAALMIA/aiL.git)
- [Backend Repository](https://github.com/Amine-H-Filali/-Authentication-App-Face-Voice-.git)

## 📧 Contact

For questions or support, please open an issue in the respective repository.

---

**Built with  using React Native, Expo, and Flask**