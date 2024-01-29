# homework-management-system

Tech Stack:
- Backend:
    - Laravel
- Frontend:
    - NextJS (14)
    - TypeScript
    - TailwindCSS
- Database:
    - PostgreSQL (Supabase)
 
## Running the project
### Frontend
1. `cd` into `/frontend`
2. run `npm install`
3. copy paste the `.env.example` file at the `/frontend` folder as `.env` file
4. run `npm run dev` (it will be available at port 3000)

### Backend
1. `cd` into `/backend`
2. copy paste the `.env.example` file at the `/backend` folder as `.env` file
3. create a new project at Supabase
4. copy the DATABASE_URL to the `.env` file
5. run `php artisan migrate`
6. run `php artisan seed`
7. run `php artisan serve` (it will be available at port 8000)

## Still Fixing...
- Docker compose will create the frontend and backend containers. Backend containers are not working atm...
