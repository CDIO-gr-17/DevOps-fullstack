# # Base image
# FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# # Set working directory
# WORKDIR /app

# # Copy the project files
# COPY Backend/Backend.csproj Backend/
# COPY Backend.Tests/Backend.Tests.csproj Backend.Tests/

# # Restore dependencies
# RUN dotnet restore Backend/Backend.csproj
# RUN dotnet restore Backend.Tests/Backend.Tests.csproj

# # Copy the source files
# COPY . .

# # Build the application
# RUN dotnet build Backend/Backend.csproj --no-restore

# # Run tests
# RUN dotnet test Backend.Tests/Backend.Tests.csproj --no-restore --verbosity normal

# # Build and publish the backend
# RUN dotnet publish Backend/Backend.csproj -c Release -o /app/out

# # Runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
# WORKDIR /app
# COPY --from=build /app/out .

# ENTRYPOINT ["dotnet", "Backend.dll"]





# Use the official .NET SDK to build, test, and publish the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .

# Restore dependencies
RUN dotnet restore "Backend.csproj"

# Build the app
RUN dotnet build "Backend.csproj" -c Release -o /app/build

# Run tests (you can remove this step if you prefer to run tests separately)
RUN dotnet test "Backend.Tests/Backend.Tests.csproj" --no-restore --verbosity normal

# Publish the app
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

# Use the SDK image for the final stage to support running tests
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS final
WORKDIR /app
EXPOSE 80

# Copy the published app from the build stage
COPY --from=build /app/publish .

# Entry point for the application
ENTRYPOINT ["dotnet", "Backend.dll"]



##ANOTHER VERSION

# ### **2. Docker Configuration**

# **Dockerfile for Backend (backend/Dockerfile):**

# ```dockerfile
# # Use the official .NET SDK image to build the application
# FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# WORKDIR /app

# # Copy the project file and restore dependencies
# COPY Backend/*.csproj ./Backend/
# RUN dotnet restore Backend/Backend.csproj

# # Copy the rest of the application code and build the application
# COPY Backend/. ./Backend/
# WORKDIR /app/Backend
# RUN dotnet build -c Release -o /app/build

# # Publish the application
# RUN dotnet publish -c Release -o /app/publish

# # Use the official .NET runtime image to run the application
# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# WORKDIR /app
# COPY --from=build /app/publish .

# # Expose port 8080 and start the application
# EXPOSE 8080
# ENTRYPOINT ["dotnet", "Backend.dll"]
