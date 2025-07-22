from rest_framework import serializers
from .models import *

class ProductUnderwearGenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearGender
        fields = '__all__'