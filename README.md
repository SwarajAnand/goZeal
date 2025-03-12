# Certificate Management App

## Overview
This project is a certificate management system built using React Typescript and Redux. It allows users to upload, view, download, and delete their certifications, along with details such as the certification name and issuer.

## Features
- **Upload Certificates**: Users can upload up to 5 certification files (PDF, JPG, JPEG).
- **Store Certification Details**: Each uploaded certificate includes the certification name, issuer, and file details.
- **View Uploaded Certificates**: Users can see their uploaded certificates along with relevant details.
- **Download Certificates**: Users can download any uploaded certificate.
- **Delete Certificates**: Users can remove any uploaded certificate.
- **Navigation**: Users can navigate between the upload and certificate list pages.
- **View Certificates in New Tab**: Users can open and view uploaded certificates in a new browser tab.

## Tech Stack
- **Frontend**: React, TypeScript, Redux, Tailwind CSS
- **State Management**: Redux Toolkit

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/SwarajAnand/goZeal.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
├── src
│   ├── assets
│   ├── Components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   ├── Interfaces
│   │   ├── Buttons.type.ts
│   │   ├── Input.type.ts
│   ├── Pages
│   │   ├── HomePage.tsx
│   │   ├── YourCertificates.tsx
│   ├── Store
│   │   ├── fileSlice.ts
│   │   ├── Store.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── public
│   ├── index.html
├── package.json
├── README.md
├── .gitignore
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json

```

## Usage
- **Uploading a Certificate**: Enter the certification name, issuer, and select a file. Click "Save Certification".
- **Viewing Certificates**: Click on "Your Certificates" to navigate to the certificates page.
- **Downloading Certificates**: Click the download icon next to any certificate.
- **Deleting Certificates**: Click the delete button next to any certificate to remove it.
- **Viewing Certificates in New Tab**: Click the "View" button next to any certificate to open it in a new tab.

## Future Enhancements
- Add backend storage using Firebase or MongoDB.
- Implement authentication for user-specific certificate storage.
- Enhance UI/UX with animations and better design.

## License
This project is open-source

## Author
Swaraj Anand  
Email - Swrjnnd@gmail.com

