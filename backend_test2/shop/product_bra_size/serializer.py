from rest_framework import serializers
from .models import *

class ProductBraSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraSize
        fields = '__all__'