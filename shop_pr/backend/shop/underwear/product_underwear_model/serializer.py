from rest_framework import serializers
from .models import *
from underwear.product_underwear_gender.serializer import ProductUnderwearGenderSerializer


class ProductUnderwearModelSerializer(serializers.ModelSerializer):
    product_gender = ProductUnderwearGenderSerializer(source='gender', read_only=True)

    class Meta:
        model = ProductUnderwearModel
        fields = '__all__'