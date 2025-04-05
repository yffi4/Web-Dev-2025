from django.urls import path

from api.views import company_list, company_detail, vacancies_list_by_company, vacancies_list, vacancies_detail, \
    top_ten_vacancies

urlpatterns = [
    path('company/', company_list, name='company_list'),
    path('company/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies', vacancies_list_by_company, name='vacancies_list_by_company'),
    path('vacancies/', vacancies_list, name='vacancies_list'),
    path('vacancies/<int:id>/', vacancies_detail, name='vacancies_detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top_ten_vacancies'),
]