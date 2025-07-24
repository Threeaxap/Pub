from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraColorViewset(viewsets.ModelViewSet):
    queryset = ProductBraColor.objects.all()
    serializer_class = ProductBraColorSerializer