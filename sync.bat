@echo off
cd "C:\Users\KIIT\WebstormProjects\ngo"

:: Set the branch name you're working on
set BRANCH_NAME=maestro

:: Checkout the branch
git checkout %BRANCH_NAME%

:: Stage all changes
git add .

:: Commit changes with timestamp
set TIME_STAMP=%date% %time%
git commit -m "Auto-sync on %TIME_STAMP%" >nul 2>&1

:: Check if remote branch exists
git ls-remote --exit-code origin %BRANCH_NAME%
if %errorlevel% neq 0 (
    echo Remote branch does not exist. Creating it...
    git push --set-upstream origin %BRANCH_NAME%
) else (
    git pull origin %BRANCH_NAME% --no-edit
    if %errorlevel% neq 0 (
        echo Merge conflict detected. Resolve it manually.
        pause
        exit /b
    )
)

:: Push to GitHub
git push origin %BRANCH_NAME%

echo Sync complete!
pause
