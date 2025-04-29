from django.urls import path
from .views import RegisterView, LoginView
from django.http import HttpResponse

def test_view(request):
    return HttpResponse("Test OK")

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('test/', test_view),
]