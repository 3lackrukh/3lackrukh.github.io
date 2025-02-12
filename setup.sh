#!/bin/bash

echo "🚀 Setting up development environment..."

# Check if running on Ubuntu
if ! grep -q "Ubuntu" /etc/os-release; then
    echo "❌ This script is designed for Ubuntu. Please adjust for your OS."
    exit 1
fi

# Update package lists
echo "📦 Updating package lists..."
sudo apt update

# Install build essentials if not present
if ! dpkg -l | grep -q build-essential; then
    echo "🔨 Installing build essentials..."
    sudo apt install -y build-essential
fi

# Install git if not present
if ! command -v git &> /dev/null; then
    echo "📥 Installing git..."
    sudo apt install -y git
fi

# Install bun if not present
if ! command -v bun &> /dev/null; then
    echo "🥟 Installing bun..."
    curl -fsSL https://bun.sh/install | bash
    # Source .bashrc to make bun available in current session
    source ~/.bashrc
fi

# Install project dependencies
echo "📚 Installing project dependencies..."
bun install
bun add three @react-three/fiber @react-three/drei react react-dom
bun add -d vite @vitejs/plugin-react @types/react @types/react-dom typescript @types/three

echo "✅ Setup complete! You can now run the development server with:"
echo "   bunx --bun vite"