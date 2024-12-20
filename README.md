# TrashTrack

TrashTrack is a mobile application that helps in tracking trash trucks' routes, providing real-time notifications, and using GPS for accurate arrival times. The app uses React Native and integrates with Firebase for real-time notifications and data management, aiming to improve the efficiency of trash collection by informing users about the expected arrival time of trash trucks.

## Introduction

TrashTrack is designed to make trash collection more efficient and convenient by leveraging GPS tracking and real-time notifications. Users can track the location of the trash truck and receive updates on the estimated time of arrival. The system aims to save time and reduce waste of resources by optimizing the trash collection process.

## Features

- **Real-time Tracking**: Tracks the location of trash trucks using GPS, providing users with live data.
- **Notifications**: Sends notifications to users about the estimated arrival time of the trash truck.
- **User-friendly Interface**: The app provides an intuitive interface for users to see the current location and ETA of the trash truck.
- **Firebase Integration**: Real-time data synchronization and notification management with Firebase.

## How It Works

1. **GPS Tracking**: The app continuously tracks the trash truck’s location using GPS.
2. **User Notifications**: Once the trash truck is near the user's location, the app sends a notification with the estimated arrival time.
3. **Firebase Backend**: Firebase is used to handle real-time data synchronization and send push notifications to users based on their location.

## Technologies Used

- **React Native**: For building the cross-platform mobile application.
- **Firebase**: For real-time data management, notifications, and user authentication.
- **Arduino (optional)**: Integration for any future features involving sensor data collection or additional hardware integration (currently not used for bin level monitoring).

## Installation

### Prerequisites

- Node.js (for React Native development)
- npm or yarn (for managing dependencies)
- Firebase account (for setting up push notifications)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/TrashTrack/TrashTrack.git
   cd TrashTrack
# Contributing
## We welcome contributions to TrashTrack! Here are the steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -am 'Add feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.
