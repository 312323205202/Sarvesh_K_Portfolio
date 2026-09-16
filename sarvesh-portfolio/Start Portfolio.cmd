@echo off
title Sarvesh Portfolio - dev server
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on this PC. Install it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)
if not exist "node_modules\.bin\next.cmd" (
  if exist node_modules (
    echo Removing an incomplete node_modules from an earlier interrupted install...
    rmdir /s /q node_modules
  )
  echo Installing dependencies - about a minute...
  call npm install --no-audit --no-fund
  if errorlevel 1 ( echo npm install failed. & pause & exit /b 1 )
)
echo.
echo Starting dev server at http://localhost:3000 ...
start "" /b cmd /c "timeout /t 8 /nobreak >nul && start http://localhost:3000"
call npm run dev
pause
