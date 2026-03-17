# TruthLens AI: Generative AI-Powered Deepfake Detection

TruthLens AI leverages Generative AI to detect deepfake videos and provide explainable, human-readable analysis to journalists, students, and everyday users. The platform combines computer vision, generative AI models, and automated reporting to make deepfake detection accessible and transparent.

## 🛠 The 3-Step Forensic Pipeline

### 1. DETECT : EfficientNet Computer Vision Model
- **Architecture**: EfficientNet-B0 (Lightweight CNN)
- **Role**: High-speed binary classification flagging fake vs. authentic media.
- **Analysis**: Processes frame-level facial features, micro-expressions, and temporal artifacts.
- **Why EfficientNet?**: Optimized for accuracy-to-latency tradeoff, allowing real-time inference during the hackathon.

### 2. EXPLAIN : Generative AI Analysis (Google Gemini Vision)
- **Provider**: Google Gemini 1.5 Pro Vision API
- **Role**: Transforms detection results into human-readable forensic explanations.
- **Artifact Detection**: Identifies facial inconsistencies (blinking, symmetry), temporal motion artifacts, and lip-sync mismatch.
- **Goal**: Provide "Transparent AI" (XAI) so users understand *why* a video was flagged.

### 3. REPORT : Automated Forensic Generation
- **Engine**: Structured LLM-Based Reporting
- **Output**: Professional, human-readable forensic reports in a React-based interactive dashboard.
- **Contents**: Executive summary, technical evidence logs, visual thermal mapping data, and journalistic recommendations.

## 🚀 Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Custom Glassmorphism Design System)
- **UI Components**: Radix UI, Lucide Icons
- **ML Architecture**: Hybrid (EfficientNet + Google Gemini Vision)
- **State Management**: TanStack Query (React Query)

## 🏁 Hackathon Ready

This repository contains a high-fidelity, interactive UI that simulates the full 3-step pipeline. The logic in `src/pages/Index.tsx` is structured to be easily connected to live Python/PyTorch backends or direct API calls to Google AI Studio.

---
*Fighting misinformation with transparency.*
