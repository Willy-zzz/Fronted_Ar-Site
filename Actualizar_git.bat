@echo off
cls
echo ===============================
echo    SUBIENDO CAMBIOS A GITHUB
echo ===============================

:: Pedir mensaje de commit
set /p MSG="Escribe un mensaje para el commit: "

:: Agregar cambios
git add .

:: Verificar si hay algo que commitear
git diff --cached --quiet
if %errorlevel%==0 (
    echo Xx No hay cambios nuevos para subir xX.
    pause
    exit /b
)

:: Hacer commit y push
git commit -m "%MSG%"
git push -u origin main

echo.
echo v_Cambios subidos correctamente_v.
pause
