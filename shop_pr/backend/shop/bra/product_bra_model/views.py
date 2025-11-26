from .serializer import *
from .models import *
from rest_framework import viewsets, filters

class ProductBraModelViewset(viewsets.ModelViewSet):
    queryset = ProductBraModel.objects.all()
    serializer_class = ProductBraModelSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'price']
