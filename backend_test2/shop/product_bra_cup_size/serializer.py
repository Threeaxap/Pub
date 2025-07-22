from rest_framework import serializers
from .models import *

class ProductBraCupSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraCupSize
        fields = '__all__'