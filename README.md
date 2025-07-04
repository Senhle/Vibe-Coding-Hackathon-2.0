Homework Helper Django Project
Overview
This project is a Django web app with two main pages:

Home page: index.html — main user interface

Paywall page: paywall.html — page shown for restricted access
the  index.html is here:homework_helper\helper\templates\helper
How to Run
Make sure you have Python and Django installed.
If not, install Django with:

bash

pip install django
Open your terminal or command prompt and navigate to the root folder where manage.py is located.

Run migrations (if applicable):

bash

python manage.py migrate
Start the Django development server:

bash

python manage.py runserver
Open your browser and visit:

Home page: http://localhost:8000/

Paywall page: http://localhost:8000/paywall/
