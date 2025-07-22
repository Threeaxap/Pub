from rest_framework import serializers
from .models import *

class ProductUnderwearColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearColor
        fields = '__all__'