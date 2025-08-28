from rest_framework import serializers
from .models import *
from underwear.product_underwear_gender.serializer import ProductUnderwearGenderSerializer


class ProductUnderwearModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearModel
        fields = ['id', 'name', 'price', 'desc', 'product_gender']