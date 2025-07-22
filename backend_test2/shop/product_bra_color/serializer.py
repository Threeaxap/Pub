from rest_framework import serializers
from .models import *

class ProductBraColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraColor
        fields = '__all__'