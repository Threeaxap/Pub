from rest_framework import serializers
from .models import *

class ProductUnderwearSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearSize
        fields = '__all__'