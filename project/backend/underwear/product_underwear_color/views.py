from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearColorViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearColor.objects.all()
    serializer_class = ProductUnderwearColorSerializer