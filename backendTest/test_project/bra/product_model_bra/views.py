from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductModelBraViewset(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductModelSerializer