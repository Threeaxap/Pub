from .serializer import *
from .models import *
from rest_framework import viewsets, filters

class ProductBraUnitViewset(viewsets.ModelViewSet):
    queryset = ProductBraUnit.objects.all()
    serializer_class = ProductBraUnitSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = [
        'size__size',
        'cup_size__size'
    ]