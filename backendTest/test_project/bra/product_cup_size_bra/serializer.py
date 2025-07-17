from rest_framework import serializers
from .models import *

class ProductCupSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCupSize
        fields = '__all__'