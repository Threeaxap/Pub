from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearGenderViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearGender.objects.all()
    serializer_class = ProductUnderwearGenderSerializer