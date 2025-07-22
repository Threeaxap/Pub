from rest_framework import serializers
from .models import *

class ProductUnderwearImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearImage
        fields = '__all__'