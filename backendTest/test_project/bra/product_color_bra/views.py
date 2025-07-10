from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductColorViewset(viewsets.ModelViewSet):
    queryset = ProductColor.objects.all()
    serializer_class = ProductColorSerializer