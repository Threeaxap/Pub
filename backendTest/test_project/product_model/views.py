from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductModelViewset(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductModelSerializer