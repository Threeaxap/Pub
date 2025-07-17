from rest_framework import serializers
from .models import *

class ProductGenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGender
        fields = '__all__'