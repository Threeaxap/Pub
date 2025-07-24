from rest_framework import serializers
from .models import *



class ProductBraModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraModel
        fields = '__all__'