# Use the official .NET runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the official .NET SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "Backend.csproj"
RUN dotnet build "Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
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
