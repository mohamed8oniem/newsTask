# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to improve caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the entire project files into the container
COPY . .

# Expose the Vite default port (5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
