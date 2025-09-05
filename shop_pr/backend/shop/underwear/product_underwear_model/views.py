from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearModelViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearModel.objects.all()
    serializer_class = ProductUnderwearModelSerializer