from rest_framework import serializers
from .models import *



class ProductUnderwearModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearModel
        fields = '__all__'